export const PHOTO_COUNT = 25;
export const USER_COUNT = 30;
export const MIN_AVATAR = 1;
export const MAX_AVATAR = 6;
export const MIN_LIKES = 15;
export const MAX_LIKES = 200;
export const COMMENTS__STEP = 5;
export const STEP_SCALE = 25;
export const MAX_SCALE = 100;
export const MIN_SCALE = 25;
export const SCALE_FACTOR = 0.01;

export const NAMES = [
  'Никита',
  'Владислава',
  'Марк',
  'Незнакомец',
  'Дина',
  'Святослав',
  'Кирилл',
  'Ангелина',
  'Дмитрий',
  'Роман',
  'Оксана',
];

export const DESCRIPTIONS = [
  'Синие камни.',
  'Рыжее пламя.',
  'Фиолетовые качели.',
  'Грустный человек.',
  'Параллельные линии.',
  'Древний дуб.',
  'Поверженный воин.',
  'Опавшая листва.',
];

export const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  'Забавное фото',
  'Как мило',
  'Вас даже не узнать',
  'Никогда не видела подобного',
];

export const FilterEffectSaturation = [
  {
    effect: 'chrome',
    settings: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
      connect: 'lower',
    },
    style: 'grayscale',
    units: '',
  },
  {
    effect: 'sepia',
    settings: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
      connect: 'lower',
    },
    style: 'sepia',
    units: '',
  },
  {
    effect: 'marvin',
    settings: {
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
      connect: 'lower',
    },
    style: 'invert',
    units: '%',
  },
  {
    effect: 'phobos',
    settings: {
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
      connect: 'lower',
    },
    style: 'blur',
    units: 'px',
  },
  {
    effect: 'heat',
    settings: {
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
      connect: 'lower',
    },
    style: 'brightness',
    units: '',
  },
];
