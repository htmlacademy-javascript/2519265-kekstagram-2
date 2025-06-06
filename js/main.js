import { renderCards } from './createPictures.js';
import { setUserFormSubmit } from './form.js';
import { showAlertDownloadError } from './alert.js';
import { getData } from './api.js';
import './filters.js';
import { getFilterArray } from './filters.js';

getData()
  .then((photos) => {
    renderCards(photos);
    getFilterArray(photos);
  })
  .catch(
    (err) => {
      showAlertDownloadError(err);
    }
  );
setUserFormSubmit();
