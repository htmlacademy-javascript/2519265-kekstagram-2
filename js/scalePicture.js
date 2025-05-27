import { MAX__SCALE, MIN__SCALE, STEP__SCALE } from './constants.js';

const scale = document.querySelector('.scale');
const scaleSmaller = scale.querySelector('.scale__control--smaller');
const scaleBigger = scale.querySelector('.scale__control--bigger');
const scaleValueElement = scale.querySelector('.scale__control--value');
const img = document.querySelector('.img-upload__preview');
let transformValue = scaleValueElement.value.slice(0, -1);

const buttonDisabled = (button, isDisabled = true) => {
  if (isDisabled) {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
};

const writeValue = (scaleValue) => {
  let value = scaleValue;
  scaleValueElement.value = `${value} %`;
  value = (value) / 100;
  img.style.transform = `scale(${value})`;
};

scaleBigger.onclick = function () {
  if (transformValue < MAX__SCALE) {
    transformValue += STEP__SCALE;
    if (transformValue >= MAX__SCALE) {
      buttonDisabled(this);
    } else {
      buttonDisabled(this, false);
    }
    writeValue(transformValue);
  }
};

scaleSmaller.onclick = function () {
  if (transformValue > MIN__SCALE) {
    transformValue -= STEP__SCALE;
    if (transformValue <= MIN__SCALE) {
      buttonDisabled(this);
    } else {
      buttonDisabled(this, false);
    }
    writeValue(transformValue);
  }
};

