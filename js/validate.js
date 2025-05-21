const MAX__DESCRIPTION = 5;
const HASHTAG__FORMULA = /^#[a-zA-Z0-9]{1,19}$/;
const HASHTAGS__COUNT = 5;
//const MIN__LENGTH__HASHTAG = 2;
const MAX__LENGTH__HASHTAG = 20;

const form = document.querySelector('.img-upload__form');
const description = form.querySelector('.text__description');
const hashtagsElem = form.querySelector('.text__hashtags');

export const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

const checkLengthDescription = (value) => value.length <= MAX__DESCRIPTION;

const getHashtags = (text) => text.toLowerCase().split(' ').filter((item) => item.length);

const repeatHashtags = (value) => {
    if(!value.trim().length) {
    return true;
  }
  const hashtags = getHashtags(value);
  const arrayCopy = [...new Set(hashtags)];
  return arrayCopy.length === hashtags.length;
};

const checkHashtags = (value) => {
  if(!value.trim().length) {
    return true;
  }
  const hashtags = getHashtags(value);
  return hashtags.every((item) => HASHTAG__FORMULA.test(item));
};

const checkHashtagCount = (value) => {
    if(!value.trim().length) {
    return true;
  }
  const hashtags = getHashtags(value);
  return hashtags.length <= HASHTAGS__COUNT;
}

pristine.addValidator(
  description,
  checkLengthDescription,
  `Длина описания не должна превышать ${MAX__DESCRIPTION}`
);

pristine.addValidator(
  hashtagsElem,
  checkHashtags,
  `Хештег должени начинаться с символа #, содержать только буквы или цифры. Длина хэштега не должна превышать ${MAX__LENGTH__HASHTAG} символов`
);

pristine.addValidator(
  hashtagsElem,
  repeatHashtags,
  'Повторяющиеся хэштеги'
);

pristine.addValidator(
  hashtagsElem,
  checkHashtagCount,
  `Количество хэштегов не должна превышать ${HASHTAGS__COUNT}`
);

export const isValid = () => pristine.validate();

