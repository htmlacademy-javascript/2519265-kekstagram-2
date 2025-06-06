import { isValid, resetValidation } from './validate.js';
import { isEscape } from './utilits.js';
import { showAlert } from './alert.js';
import { reset as resetScale } from './scalePicture.js';
import { sendData } from './api.js';
import './createEffectsForPhoto.js';
import { removeClasses } from './createEffectsForPhoto.js';
import './uploadPhoto.js';

const body = document.body;
const form = document.querySelector('.img-upload__form');
const modal = form.querySelector('.img-upload__overlay');
const uploadFile = form.querySelector('#upload-file');
const closeModalButton = form.querySelector('.img-upload__cancel');
const description = form.querySelector('.text__description');
const hashtagsElem = form.querySelector('.text__hashtags');
const submitButton = form.querySelector('#upload-submit');

const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Сохраняю...'
};

const shownModal = (isShown = true) => {
  if (isShown) {
    modal.classList.remove('hidden');
    body.classList.add('modal-open');
  } else {
    modal.classList.add('hidden');
    body.classList.remove('modal-open');
  }
};
const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

export const closeModal = () => {
  shownModal(false);
  form.reset();
  resetValidation();
  resetScale();
  removeClasses();
};

const onEscapePress = (evt) => {
  if ((document.activeElement === description) || (document.activeElement === hashtagsElem)) {
    return evt;
  }
  if (isEscape(evt)) {
    closeModal();
    document.removeEventListener('keydown', onEscapePress);
  }
};

const openModal = () => {
  shownModal();
  document.addEventListener('keydown', (evt) => {
    onEscapePress(evt);
  }, { once: true });
};

uploadFile.addEventListener('change', () => {
  openModal();
});

closeModalButton.addEventListener('click', () => {
  closeModal();
});

export const setUserFormSubmit = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if (isValid()) {
      blockSubmitButton();
      sendData(new FormData(evt.target))
        .then(() => {
          closeModal();
          showAlert();
        })
        .catch(() => {
          showAlert(false);
        })
        .finally(unblockSubmitButton);
    }
  });
};
