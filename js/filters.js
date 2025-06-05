import { RANDOM_PHOTO_COUNT } from './constants.js';
import { getSetRandomInteger } from './utilits.js';
import { renderCards } from './createPictures.js';
import { debounce } from './utilits.js';

const filterContainer = document.querySelector('.img-filters__form');
const filterButtons = {
  default: 'filter-default',
  random: 'filter-random',
  discussed: 'filter-discussed',
};

const activeButtonClass = 'img-filters__button--active';

const debouncedRenderCards = debounce(renderCards);

const randomPhotoArr = (arr) => {
  const randomCountPhoto = getSetRandomInteger(0, (arr.length - 1), (RANDOM_PHOTO_COUNT));
  const arrCopy = [];
  randomCountPhoto.arrRandom.forEach((element) => {
    arrCopy.push(arr[element]);
  });
  return arrCopy;
};

const resetActiveClass = (container) => {
  const activeElement = container.querySelector('.img-filters__button--active');
  activeElement.classList.remove(activeButtonClass);
};

export const getFilterArray = (arr) => {
  let localArr = [...arr];
  filterContainer.addEventListener('click', (evt) => {

    resetActiveClass(filterContainer);
    evt.target.classList.add(activeButtonClass);

    localArr = [...arr];
    if (evt.target.id === filterButtons.random) {
      localArr = randomPhotoArr(localArr);
    } else if (evt.target.id === filterButtons.discussed) {
      localArr = localArr.sort((a, b) => b.comments.length - a.comments.length);
    } else {
      localArr = [...arr];
    }
    debouncedRenderCards(localArr);
  });
};
