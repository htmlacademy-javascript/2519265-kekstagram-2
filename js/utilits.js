// Создает случайное число
export const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//Массив случайных неповторяемых чисел

export const getSetRandomInteger = (a, b, count) => {
  const arrayOfRandomNumbers = [];

  function getArrElem(number) {
    if (!arrayOfRandomNumbers.includes(number)) {
      arrayOfRandomNumbers.push(number);
    }
  }

  if ((((a - b) + 1) >= count) || (((b - a) + 1) >= count)) {
    while (arrayOfRandomNumbers.length < count) {
      getArrElem(getRandomInteger(a, b));
    }
  } else {
    return 'Колличество необходимых целых чисел для создания больше возможных в данном промежутке';
  }
  return { arrayOfRandomNumbers };
};

//Счетчик

export const isEscape = (evt) => evt.key === 'Escape';

export const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};
