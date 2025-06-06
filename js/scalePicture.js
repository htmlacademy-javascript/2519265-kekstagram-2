import { MAX_SCALE, MIN_SCALE, STEP_SCALE, SCALE_FACTOR } from './constants.js';

const scale = document.querySelector('.scale');
const scaleSmaller = scale.querySelector('.scale__control--smaller');
const scaleBigger = scale.querySelector('.scale__control--bigger');
const scaleValueElement = scale.querySelector('.scale__control--value');
const img = document.querySelector('.img-upload__preview img');

let currentScale = MAX_SCALE;

const buttonDisabled = () => {
  scaleSmaller.disabled = false;
  scaleBigger.disabled = false;
  if (currentScale === MIN_SCALE) {
    scaleSmaller.disabled = true;
  }
  if (currentScale === MAX_SCALE) {
    scaleBigger.disabled = true;
  }
};

const render = () => {
  scaleValueElement.value = `${currentScale}%`;
  img.style.transform = `scale(${currentScale * SCALE_FACTOR})`;
  buttonDisabled();
};

scaleBigger.addEventListener('click', () => {
  currentScale = (currentScale + STEP_SCALE <= MAX_SCALE) ? currentScale + STEP_SCALE : MAX_SCALE;
  render();
});

scaleSmaller.addEventListener('click', () => {
  currentScale = (currentScale - STEP_SCALE >= MIN_SCALE) ? currentScale - STEP_SCALE : MIN_SCALE;
  render();
});

export const reset = () => {
  currentScale = MAX_SCALE;
  render();
};

