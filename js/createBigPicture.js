import { isEscape } from './utilits.js';
import { initComments } from './createComments.js';

const body = document.body;
const containerForBigPhoto = document.querySelector('.big-picture');

const buttonCloseModal = containerForBigPhoto.querySelector('.big-picture__cancel');

const onEscapePress = (evt) => {
  if (isEscape(evt)) {
    closeUserModal();
    document.removeEventListener('keydown', onEscapePress);
  }
};

const onButtonClosePress = () => {
  closeUserModal();
  document.removeEventListener('click', onButtonClosePress);
};

function closeUserModal() {
  containerForBigPhoto.classList.add('hidden');
  body.classList.remove('modal-open');
}


export const createBigPicture = ({ url, likes, comments, description }) => {

  containerForBigPhoto.classList.remove('hidden');

  containerForBigPhoto.querySelector('.big-picture__img').querySelector('img').src = url;
  containerForBigPhoto.querySelector('.likes-count').textContent = likes;
  containerForBigPhoto.querySelector('.social__comment-shown-count').textContent = comments.length;
  containerForBigPhoto.querySelector('.social__caption').textContent = description;

  initComments(comments);

  document.addEventListener('keydown', (evt) => onEscapePress(evt));
};

buttonCloseModal.addEventListener('click', () => onButtonClosePress());
