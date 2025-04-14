const photoElementTemplate = document.querySelector('#picture').content.querySelector('.picture');

export const createPhotosList = function (photos) {
  const similarListFragment = document.createDocumentFragment();

  photos.forEach(({url, description, comments, likes}) => {
    const photoElement = photoElementTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__img').alt = description;
    photoElement.querySelector('.picture__comments').textContent = comments.length;
    photoElement.querySelector('.picture__likes').textContent = likes;
    similarListFragment.appendChild(photoElement);
  });
  return similarListFragment;
};
