import { photos } from './data.js';
import { createPhotosList } from './createPictures.js';

const containerForPhoto = document.querySelector('.pictures');

containerForPhoto.appendChild(createPhotosList(photos));
