import { isValid, resetValidation } from './validate.js';
import { isEscape } from './utilits.js';

const body = document.body;
const form = document.querySelector('.img-upload__form');
const modal = form.querySelector('.img-upload__overlay');
const uploadFile = form.querySelector('#upload-file');
const closeModalButton = form.querySelector('.img-upload__cancel');
const description = form.querySelector('.text__description');
const hashtagsElem = form.querySelector('.text__hashtags');

const shownModal = (isShown = true) => {
  if (isShown) {
    modal.classList.remove('hidden');
    body.classList.add('modal-open');
  } else {
    modal.classList.add('hidden');
    body.classList.remove('modal-open');
  }
};

const closeModal = () => {
  shownModal(false);
  form.reset();
  resetValidation();
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
  document.addEventListener('keydown', (evt) => onEscapePress(evt));
};

uploadFile.addEventListener('change', () => {
  openModal();
});

closeModalButton.addEventListener('click', () => {
  closeModal();
});

form.addEventListener('submit', (evt) => {
  if (!isValid()) {
    evt.preventDefault();
  }
});

