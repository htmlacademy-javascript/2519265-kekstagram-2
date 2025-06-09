import { isEscape } from './utilits.js';

const templateSuccess = document.querySelector('#success').content.querySelector('.success');
const templateDownloadError = document.querySelector('#data-error').content;
const templateError = document.querySelector('#error').content.querySelector('.error');
const body = document.body;

const templates = {
  success: templateSuccess,
  error: templateError
};

const downloadError = () => {
  const downloadErrorContainer = templateDownloadError.cloneNode(true);
  body.append(downloadErrorContainer);
};

export const showAlertDownloadError = (err) => {
  downloadError(err);
  setTimeout(() => {
    document.querySelector('.data-error').remove();
  }, 5000);
};

export const showAlert = (isSuccess = true) => {
  const current = isSuccess ? 'success' : 'error';

  const modal = templates[current].cloneNode(true);
  const button = modal.querySelector(`.${current}__button`);
  body.append(modal);

  const checkSpaceAndDelete = (evt) => {
    if (evt.target.parentNode !== modal) {
      modal.remove();
      document.removeEventListener('keydown', onDocumentKeydown);
    }
  };

  button.addEventListener('click', () => {
    modal.remove();
    document.removeEventListener('keydown', onDocumentKeydown);
  });

  document.addEventListener('click', (evt) => {
    checkSpaceAndDelete(evt);
  }, { once: true });

  function onDocumentKeydown(evt) {
    if (isEscape(evt)) {
      modal.remove();
    }
    document.removeEventListener('keydown', onDocumentKeydown);
  }

  document.addEventListener('keydown', onDocumentKeydown);
};


