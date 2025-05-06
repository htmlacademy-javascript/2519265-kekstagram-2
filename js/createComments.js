import { VISIBLE_COMMENTS } from './constants.js';

let startComment = 0;
export let endComment = VISIBLE_COMMENTS;

export const createCommentNodeList = (comments, nodeForComment) => {
  const similarListFragment = document.createDocumentFragment();
  const visibleCommentsNode = document.querySelector('.social__comment-shown-count');
  visibleCommentsNode.textContent = endComment;

  const getVisibleComments = () => {

    for(let i = startComment; i < endComment; i++) {
      const comment = nodeForComment.cloneNode(true);
      const commentImg = comment.querySelector('.social__picture');

      commentImg.src = comments[i].avatar;
      commentImg.alt = comments[i].name;
      comment.querySelector('.social__text').textContent = comments[i].message;
      similarListFragment.append(comment);
    }
  };
  getVisibleComments();
  return similarListFragment;
};

export const loadingMoreComments = (comments, container, emptyNode, button) => {
  startComment += VISIBLE_COMMENTS;
  if(comments.length < (endComment + VISIBLE_COMMENTS)) {
    endComment = endComment + (comments.length - endComment);
  } else {
    endComment += VISIBLE_COMMENTS;
  }

  if(comments.length === endComment) {
    button.classList.add('hidden');
  }
  const commentsList = createCommentNodeList(comments, emptyNode);
  container.append(commentsList);
};

export const removeComments = (container) => {
  startComment = 0;
  endComment = VISIBLE_COMMENTS;
  container.textContent = '';
};

