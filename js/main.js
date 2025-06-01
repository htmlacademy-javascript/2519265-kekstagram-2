//import {photos} from './data.js';
import { renderCards } from './createPictures.js';
import { closeModalSubmit } from './form.js';
import { showAlert } from './alert.js';
import { getData } from './api.js';

getData()
  .then((photos) => {
    renderCards(photos);
  })
  .catch(
    () => {
      // showAlert(false, err.message);
      showAlert(false);

    }
  );
closeModalSubmit();
