const USER_COUNT = 30;
const PHOTO_COUNT = 25;
const MIN_AVATAR = 1;
const MAX_AVATAR = 6;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const COMMENTS__STEP = 5;
const STEP__SCALE = 25;
const MAX__SCALE = 100;
const MIN__SCALE = 25;

const NAMES = [
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

const DESCRIPTIONS = [
  'Синие камни.',
  'Рыжее пламя.',
  'Фиолетовые качели.',
  'Грустный человек.',
  'Параллельные линии.',
  'Древний дуб.',
  'Поверженный воин.',
  'Опавшая листва.',
];

const MESSAGES = [
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

const FilterEffectSaturation = [
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
    }
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
    }

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
    }

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
    }

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
    }
  },
];

export { NAMES, DESCRIPTIONS, USER_COUNT, PHOTO_COUNT, MIN_AVATAR, MAX_AVATAR, MIN_LIKES, MAX_LIKES, MESSAGES, COMMENTS__STEP, FilterEffectSaturation, MAX__SCALE, MIN__SCALE, STEP__SCALE };
