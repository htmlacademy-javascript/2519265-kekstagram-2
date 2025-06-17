import { RANDOM_PHOTO_COUNT } from './constants.js';
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

const resetActiveClass = (container) => {
  const activeElement = container.querySelector('.img-filters__button--active');
  activeElement.classList.remove(activeButtonClass);
};

export const getFilterArray = (totalPhotos) => {
  let localPhotos = [...totalPhotos];
  filterContainer.addEventListener('click', (evt) => {

    resetActiveClass(filterContainer);
    evt.target.classList.add(activeButtonClass);

    localPhotos = [...totalPhotos];
    if (evt.target.id === filterButtons.random) {
      localPhotos = [...totalPhotos].sort(() => Math.random() - 0.5).slice(0, RANDOM_PHOTO_COUNT);
    } else if (evt.target.id === filterButtons.discussed) {
      localPhotos = localPhotos.sort((a, b) => b.comments.length - a.comments.length);
    } else {
      localPhotos = [...totalPhotos];
    }
    debouncedRenderCards(localPhotos);
  });
};
