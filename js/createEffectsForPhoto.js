import { filterEffects } from './constants.js';

const CLASS_OF_FILTERS = 'effects__preview--';

const sliderFilter = document.querySelector('.effect-level__slider');
const filterValue = document.querySelector('.effect-level__value');
const img = document.querySelector('.img-upload__preview img');
const effectList = document.querySelector('.effects__list');
const slideContainer = document.querySelector('.img-upload__effect-level');
const effects = ['none', 'chrome', 'sepia', 'marvin', 'phobos', 'heat'];
let checkedEffect;


const showSlider = (isShown = true) => {
  if (isShown) {
    slideContainer.classList.remove('hidden');
  } else {
    slideContainer.classList.add('hidden');
  }
};

export const removeClasses = () => {
  for (const filter of effects) {
    img.classList.remove(CLASS_OF_FILTERS + filter);
    img.style.filter = '';
    showSlider(false);
  }
};

showSlider(false);

effectList.addEventListener('click', (evt) => {
  if (evt.target.value) {
    removeClasses();
    img.classList.add(CLASS_OF_FILTERS + evt.target.value);
  }
});


noUiSlider.create(sliderFilter, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

sliderFilter.noUiSlider.on('update', () => {
  filterValue.value = sliderFilter.noUiSlider.get();

  if (checkedEffect !== undefined) {
    img.style.filter = `${checkedEffect.style}(${filterValue.value}${checkedEffect.units})`;
  }
});

effectList.addEventListener('change', (evt) => {
  checkedEffect = filterEffects.find((item) => item.effect === evt.target.value);
  if (checkedEffect !== undefined) {
    sliderFilter.noUiSlider.updateOptions(checkedEffect.settings);
    showSlider();
  } else {
    showSlider(false);
    img.style.filter = '';
  }
  return checkedEffect;
});

