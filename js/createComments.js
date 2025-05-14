import {COMMENTS__STEP} from './constants.js';

const commentTemplate = document.querySelector('.social__comment');
const commentsContainer = document.querySelector('.social__comments');
const totalStatistic = document.querySelector('.social__comment-total-count');
const currentStatistic = document.querySelector('.social__comment-shown-count');
const buttonMoreComments = document.querySelector('.social__comments-loader');

let localComments;
let renderedComments = 0;

const renderComment = ({message, avatar, name}) => {
  const comment = commentTemplate.cloneNode(true);
  const userpic = comment.querySelector('.social__picture');

  userpic.src = avatar;
  userpic.alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
};

const renderStatistic = () => {
  currentStatistic.textContent = renderedComments;
};

const renderLoaderButton = () => {
  if(localComments.length) {
    buttonMoreComments.classList.remove('hidden');
  } else {
    buttonMoreComments.classList.add('hidden');
  }
};

const renderComments = () => {
  const fragment = document.createDocumentFragment();
  localComments.splice(0, COMMENTS__STEP).forEach((item) => {
    fragment.append(renderComment(item));
    renderedComments++;
  });
  commentsContainer.append(fragment);
  renderStatistic();
  renderLoaderButton();
};

export const initComments = (comments) => {
  localComments = [...comments];
  commentsContainer.innerHTML = '';
  totalStatistic.textContent = comments.length;
  renderedComments = 0;
  renderComments();
};

buttonMoreComments.addEventListener('click', renderComments);
