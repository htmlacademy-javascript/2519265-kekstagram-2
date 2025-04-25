const photoElementTemplate = document.querySelector('#picture').content.querySelector('.picture');

export const createPhotosList = (photos) => {
  const similarListFragment = document.createDocumentFragment();

  photos.forEach(({url, description, comments, likes}) => {
    const photoElement = photoElementTemplate.cloneNode(true);
    const img = photoElement.querySelector('.picture__img');
    img.src = url;
    img.alt = description;
    photoElement.querySelector('.picture__comments').textContent = comments.length;
    photoElement.querySelector('.picture__likes').textContent = likes;
    similarListFragment.appendChild(photoElement);
  });
  return similarListFragment;
};
