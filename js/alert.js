import { isEscape } from './utilits.js';

const templateError = document.querySelector('#error').content;
const templateSuccess = document.querySelector('#success').content;
const body = document.body;

export const closeAlert = (modal) => {
  modal.remove();
};

export const onEscapePress = (evt) => {
  if (isEscape(evt)) {
    const modal = document.querySelector('.success') || document.querySelector('.error');
    // console.log(modal);
    modal.remove();
  }
};

export const showAlert = (isSuccess = true) => {
  let modal;
  let Button;

  if (isSuccess) {
    const Modal = templateSuccess.cloneNode(true);
    body.append(Modal);
    modal = document.querySelector('.success');
    Button = modal.querySelector('.success__button');
  } else {
    const Modal = templateError.cloneNode(true);
    body.append(Modal);
    modal = document.querySelector('.error');
    Button = modal.querySelector('.error__button');
  }

  Button.addEventListener('click', () => {
    closeAlert(modal);
  });

  const checkSpaceAndDelete = (evt) => {
    if (evt.target.parentNode !== modal) {
      modal.remove();
    }
  };

  document.addEventListener('click', (evt) => {
    checkSpaceAndDelete(evt);
  }, { once: true });

  document.addEventListener('keydown', (evt) => {
    onEscapePress(evt);
  }, { once: true });
};
