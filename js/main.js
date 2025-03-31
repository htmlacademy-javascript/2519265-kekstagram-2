// Вводные данные

const commentPersonName = [
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

const userCount = 30;
const PhotoCount = 25;

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

// Создает случайное число

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//Массив случайных неповторяемых чисел

const getSetRandomInteger = (a, b, count) => {
  const arrRandom = [];

  function getArrElem(number) {
    if (!arrRandom.includes(number)) {
      arrRandom.push(number);
    }
  }

  if((((a - b) + 1) >= count) || (((b - a) + 1) >= count)) {
    while (arrRandom.length < count) {
      getArrElem(getRandomInteger(a, b));
    }
  } else {
    return 'Колличество необходимых целых чисел для создания больше возможных в данном промежутке';
  }
  return arrRandom;
};

const getRandonArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const commentPersonID = (getSetRandomInteger(1, 30, 30));
const arrObjID = (getSetRandomInteger(1, 25, 25));
const numberPhoto = (getSetRandomInteger(1, 25, 25));


//Счетчик

function makeCounter() {
  let currentCount = 0;

  return function() {
    return currentCount++;
  };
}

const arrObjIDCounter = makeCounter();
const commentPersonIDCounter = makeCounter();
const numberPhotoCounter = makeCounter();

//Объект комментатора

const createCommentPerson = () => ({
  id: commentPersonID[commentPersonIDCounter()],
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandonArrayElement(MESSAGES),
  name: getRandonArrayElement(commentPersonName),
});

//Оъект фотографии

const arrObj = () => ({
  id: arrObjID[arrObjIDCounter()],
  url: `photos/${numberPhoto[numberPhotoCounter()]}.jpg`,
  description: getRandonArrayElement(DESCRIPTIONS),
  likes: getRandonArrayElement(1, 25),
  comments: Array.from({length: userCount}, createCommentPerson),
});
//const arrayPhotoObj = Array.from({length: PhotoCount}, arrObj);

Array.from({length: PhotoCount}, arrObj);


