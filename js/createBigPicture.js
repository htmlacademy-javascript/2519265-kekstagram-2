import { isEscape } from './utilits.js';
import { photos } from './data.js';

const body = document.body;
const containerForBigPhoto = document.querySelector('.big-picture');
const wrapperForComments = containerForBigPhoto.querySelector('.social__comments');
const commentEmptyNode = wrapperForComments.querySelector('li');
export const containerForPhoto = document.querySelector('.pictures');

const onEscapePress = (evt) => {
  if(isEscape(evt)) {
    closeUserModal();
    document.removeEventListener('keydown', onEscapePress);
  }
};

const onButtonClosePress = () => {
  closeUserModal ();
  document.removeEventListener('click', onButtonClosePress);
};

const clearCommentNodeList = () => {
  wrapperForComments.textContent = '';
};

function closeUserModal () {
  containerForBigPhoto.classList.add('hidden');
  clearCommentNodeList();
  body.classList.remove('modal-open');
}

const createCommentNodeList = (comments) => {
  const similarListFragment = document.createDocumentFragment();

  comments.forEach(({avatar, name, message}) => {
    const comment = commentEmptyNode.cloneNode(true);
    const commentImg = comment.querySelector('.social__picture');

    commentImg.src = avatar;
    comment.alt = name;
    comment.querySelector('.social__text').textContent = message;
    similarListFragment.append(comment);
  });
  return similarListFragment;
};

export const createBigPicture = ({url, likes, comments, description}) => {
  containerForBigPhoto.classList.remove('hidden');

  containerForBigPhoto.querySelector('.big-picture__img').querySelector('img').src = url;
  containerForBigPhoto.querySelector('.likes-count').textContent = likes;
  containerForBigPhoto.querySelector('.social__comment-shown-count').textContent = comments.length;
  containerForBigPhoto.querySelector('.social__comment-total-count').textContent = comments.length;
  containerForBigPhoto.querySelector('.social__caption').textContent = description;

  wrapperForComments.textContent = '';
  const commentsList = createCommentNodeList(comments);

  wrapperForComments.append(commentsList);

  document.addEventListener('keydown', (evt) => onEscapePress(evt));

  containerForBigPhoto.addEventListener('click', (evt) => onButtonClosePress(evt));
};

containerForPhoto.addEventListener('click', (evt) => {
  evt.preventDefault();
  const imgWithEvent = evt.target;
  const idTarget = imgWithEvent.closest('.picture').dataset.id;

  if (imgWithEvent === null) {
    // Если клик выполнен не на кнопке, ничего не делаем
    evt.stopPropagation();
  }

  for (const photo of photos) {
    if(photo.id === +idTarget) {
      createBigPicture(photo);

      const commentCount = document.querySelector('.social__comment-count');
      const commentLoader = document.querySelector('.comments-loader');

      commentCount.classList.add('hidden');
      commentLoader.classList.add('hidden');
      body.classList.add('modal-open');
    }
  }
});
