//import {photos} from './data.js';
import { renderCards } from './createPictures.js';
import { setUserFormSubmit } from './form.js';
import { showAlertDownloadError } from './alert.js';
import { getData } from './api.js';

getData()
  .then((photos) => {
    renderCards(photos);
  })
  .catch(
    (err) => {
      showAlertDownloadError(err);
    }
  );
setUserFormSubmit();
