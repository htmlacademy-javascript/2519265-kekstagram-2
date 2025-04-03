import {NAMES, DESCRIPTIONS, USER_COUNT, PHOTO_COUNT, MIN_AVATAR, MAX_AVATAR, MESSAGES} from './data.js';
import { getRandomInteger, getSetRandomInteger, makeCounter} from './utilits.js';

const getRandonArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const commentPersonID = (getSetRandomInteger(1, USER_COUNT, USER_COUNT));
const arrObjID = (getSetRandomInteger(1, PHOTO_COUNT, PHOTO_COUNT));
const numberPhoto = (getSetRandomInteger(1, PHOTO_COUNT, PHOTO_COUNT));

const arrObjIDCounter = makeCounter(PHOTO_COUNT);
const commentPersonIDCounter = makeCounter(USER_COUNT);
const numberPhotoCounter = makeCounter(PHOTO_COUNT);

//Объект комментатора

const createComment = () => ({
  id: commentPersonID.arrRandom[commentPersonIDCounter(USER_COUNT)],
  avatar: `img/avatar-${getRandomInteger(MIN_AVATAR, MAX_AVATAR)}.svg`,
  message: getRandonArrayElement(MESSAGES),
  name: getRandonArrayElement(NAMES),
});

//Оъект фотографии

const getPhoto = () => ({
  id: arrObjID.arrRandom[arrObjIDCounter()],
  url: `photos/${numberPhoto.arrRandom[numberPhotoCounter()]}.jpg`,
  description: getRandonArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(1, PHOTO_COUNT - 1),
  comments: Array.from({length: USER_COUNT}, createComment),
});

const photos = Array.from({length: PHOTO_COUNT}, getPhoto);
const photo = Array.from({length: PHOTO_COUNT}, getPhoto);

console.log(photos); //eslint-disable-line
console.log(photo); //eslint-disable-line
