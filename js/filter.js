import { FilterEffectSaturation } from './constants.js';

const sliderFilter = document.querySelector('.effect-level__slider');
const filterValue = document.querySelector('.effect-level__value');
const img = document.querySelector('.img-upload__preview');
const effectList = document.querySelector('.effects__list');
const filterEffectInputs = document.querySelectorAll('.effects__radio');
const CLASS__OF__FILTERS = 'effects__preview--';
const slideContainer = document.querySelector('.img-upload__effect-level');
const filterEffects = ['none', 'chrome', 'sepia', 'marvin', 'phobos', 'heat'];

const showSlider = (isShown = true) => {
  if (isShown) {
    slideContainer.classList.remove('hidden');
  } else {
    slideContainer.classList.add('hidden');
  }
};

const removeClasses = () => {
  for (const filter of filterEffects) {
    img.classList.remove(CLASS__OF__FILTERS + filter);
  }
};

showSlider(false);

effectList.onclick = function (evt) {
  if (evt.target.value) {
    removeClasses();
    img.classList.add(CLASS__OF__FILTERS + evt.target.value);
  }
};

noUiSlider.create(sliderFilter, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 1,
  connect: 'lower',
  tooltips: true,
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
  for (const filterEffectInput of filterEffectInputs) {
    if (filterEffectInput.checked) {
      switch (filterEffectInput.value) {
        case filterEffects[1]:
          img.style.filter = `grayscale(${filterValue.value})`;
          break;

        case filterEffects[2]:
          img.style.filter = `sepia(${filterValue.value})`;
          break;

        case filterEffects[3]:
          img.style.filter = `invert(${filterValue.value}%)`;
          break;

        case filterEffects[4]:
          img.style.filter = `blur(${filterValue.value}px)`;
          break;

        case filterEffects[5]:
          img.style.filter = `brightness(${filterValue.value})`;
          break;
      }
    }
  }

});

effectList.addEventListener('change', (evt) => {
  for (const effect of FilterEffectSaturation) {
    if (evt.target.value === effect.effect) {
      sliderFilter.noUiSlider.updateOptions(effect.settings);
    }
  }
  if (evt.target.value === 'none') {
    showSlider(false);
    img.style.filter = '';
  } else {
    showSlider();
  }
});

