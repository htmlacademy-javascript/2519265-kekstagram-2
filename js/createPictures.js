import { photos } from './data.js';

const containerForPhoto = document.querySelector('.pictures');
const photoElementTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createPhotosList = (elements) => {
  const similarListFragment = document.createDocumentFragment();

  elements.forEach(({id, url, description, comments, likes}) => {
    const photoElement = photoElementTemplate.cloneNode(true);
    const img = photoElement.querySelector('.picture__img');
    photoElement.dataset.id = id;
    img.src = url;
    img.alt = description;
    photoElement.querySelector('.picture__comments').textContent = comments.length;
    photoElement.querySelector('.picture__likes').textContent = likes;
    similarListFragment.appendChild(photoElement);
  });
  return similarListFragment;
};

containerForPhoto.appendChild(createPhotosList(photos));
