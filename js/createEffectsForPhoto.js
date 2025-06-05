import { FilterEffectSaturation } from './constants.js';

const sliderFilter = document.querySelector('.effect-level__slider');
const filterValue = document.querySelector('.effect-level__value');
const img = document.querySelector('.img-upload__preview');
const effectList = document.querySelector('.effects__list');
const CLASS__OF__FILTERS = 'effects__preview--';
const slideContainer = document.querySelector('.img-upload__effect-level');
const filterEffects = ['none', 'chrome', 'sepia', 'marvin', 'phobos', 'heat'];
let checkedEffect;


const showSlider = (isShown = true) => {
  if (isShown) {
    slideContainer.classList.remove('hidden');
  } else {
    slideContainer.classList.add('hidden');
  }
};

export const removeClasses = () => {
  for (const filter of filterEffects) {
    img.classList.remove(CLASS__OF__FILTERS + filter);
    img.style.filter = '';
    showSlider(false);
  }
};

showSlider(false);

effectList.addEventListener('click', (evt) => {
  if (evt.target.value) {
    removeClasses();
    img.classList.add(CLASS__OF__FILTERS + evt.target.value);
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
  checkedEffect = FilterEffectSaturation.find((item) => item.effect === evt.target.value);
  if (checkedEffect !== undefined) {
    sliderFilter.noUiSlider.updateOptions(checkedEffect.settings);
    showSlider();
  } else {
    showSlider(false);
    img.style.filter = '';
  }
  return checkedEffect;
});

