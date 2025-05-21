import {isValid} from './validate.js';
import { isEscape } from './utilits.js';

const body = document.body;
const form = document.querySelector('.img-upload__form');
const modal = form.querySelector('.img-upload__overlay');
const uploadFile = form.querySelector('#upload-file');
const closeModalButton = form.querySelector('.img-upload__cancel');
const description = form.querySelector('.text__description');
const hashtagsElem = form.querySelector('.text__hashtags');
const currentPhotoForUpload = form.querySelector('.img-upload__input').value;

const shownModal = (isShown = true) => {
  if(isShown) {
    modal.classList.remove('hidden');
    body.classList.add('modal-open');
    document.addEventListener('keydown', (evt) => onEscapePress(evt));
  } else {
    modal.classList.add('hidden');
    body.classList.remove('modal-open');
    form.reset();
    currentPhotoForUpload = '';
  }
};

const onEscapePress = (evt) => {
  if((document.activeElement === description) || (document.activeElement === hashtagsElem)) {
    return evt;
    }
  if(isEscape(evt)) {
	  shownModal(false);
	  document.removeEventListener('keydown', onEscapePress);
  }
};

uploadFile.addEventListener('change', () => {
  shownModal();
});

closeModalButton.addEventListener('click', () => {
  shownModal(false);
});

form.addEventListener('submit', (evt) => {
  if(!isValid()) {
    evt.preventDefault();
  }
});
