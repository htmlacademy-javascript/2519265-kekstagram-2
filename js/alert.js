import { isEscape } from './utilits.js';

const templateError = document.querySelector('#error').content;
const templateSuccess = document.querySelector('#success').content;
const templateDownloadError = document.querySelector('#data-error').content;
const body = document.body;

export const showAlert = (isSuccess = true) => {
  if (isSuccess) {
    const Modal = templateSuccess.cloneNode(true);
    body.append(Modal);
    const modal = document.querySelector('.success');
    const button = modal.querySelector('.success__button');

    const checkSpaceAndDelete = (evt) => {
      if (evt.target.parentNode !== modal) {
        modal.remove();
      }
    };

    button.addEventListener('click', () => {
      modal.remove();;
    });

    document.addEventListener('click', (evt) => {
      checkSpaceAndDelete(evt);
    }, { once: true });

    document.addEventListener('keydown', (evt) => {
      if (isEscape(evt)) {
        modal.remove();
      }
    }, { once: true });
  } else {
    showAlertDownloadError();
  }



};

const downloadError = (err) => {
  const downloadErrorContainer = templateDownloadError.cloneNode(true);
  console.log(err)
  body.append(downloadErrorContainer);
}

export const showAlertDownloadError = (err) => {
  downloadError(err);
  setTimeout(() => {
    document.querySelector('.data-error').remove();
  }, 5000)
};
