import { createBigPicture } from './createBigPicture.js';

const containerForPhoto = document.querySelector('.pictures');
const photoElementTemplate = document.querySelector('#picture').content.querySelector('.picture');
const body = document.body;
let localPhotos;

const clear = () => {
  document.querySelectorAll('.picture').forEach((card) => {
    card.remove();
  });
};


export const renderCards = (elements) => {
  clear();
  localPhotos = [...elements];
  const similarListFragment = document.createDocumentFragment();

  localPhotos.forEach(({ id, url, description, comments, likes }) => {
    const photoElement = photoElementTemplate.cloneNode(true);
    const img = photoElement.querySelector('.picture__img');
    photoElement.dataset.id = id;
    img.src = url;
    img.alt = description;
    photoElement.querySelector('.picture__comments').textContent = comments.length;
    photoElement.querySelector('.picture__likes').textContent = likes;
    similarListFragment.appendChild(photoElement);
  });
  containerForPhoto.appendChild(similarListFragment);
};

containerForPhoto.addEventListener('click', ({ target }) => {
  const card = target.closest('.picture');
  if (card) {
    const idTarget = card.dataset.id;
    const currentPhoto = localPhotos.find((photo) => photo.id === +idTarget);
    body.classList.add('modal-open');
    createBigPicture(currentPhoto);
  }
});
