const MAX_DESCRIPTION = 140;
const HASHTAG_FORMULA = /^#[a-zA-Zа-яА-яЁё0-9]{1,19}$/;
const HASHTAGS_COUNT = 5;
const MAX_LENGTH_HASHTAG = 20;

const form = document.querySelector('.img-upload__form');
const description = form.querySelector('.text__description');
const hashtagsElem = form.querySelector('.text__hashtags');

export const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

const checkLengthDescription = (value) => value.length <= MAX_DESCRIPTION;

const getHashtags = (text) => text.toLowerCase().split(' ').filter((item) => item.length);

const repeatHashtags = (value) => {
  if (!value.trim().length) {
    return true;
  }
  const hashtags = getHashtags(value);
  const uniqHashtags = [...new Set(hashtags)];
  return uniqHashtags.length === hashtags.length;
};

const checkHashtags = (value) => {
  if (!value.trim().length) {
    return true;
  }
  const hashtags = getHashtags(value);
  return hashtags.every((item) => HASHTAG_FORMULA.test(item));
};

const checkHashtagCount = (value) => {
  if (!value.trim().length) {
    return true;
  }
  const hashtags = getHashtags(value);
  return hashtags.length <= HASHTAGS_COUNT;
};

pristine.addValidator(
  description,
  checkLengthDescription,
  `Длина описания не должна превышать ${MAX_DESCRIPTION}`
);

pristine.addValidator(
  hashtagsElem,
  checkHashtags,
  `Хештег должени начинаться с символа #, содержать только буквы или цифры. Длина хэштега не должна превышать ${MAX_LENGTH_HASHTAG} символов`
);

pristine.addValidator(
  hashtagsElem,
  repeatHashtags,
  'Повторяющиеся хэштеги'
);

pristine.addValidator(
  hashtagsElem,
  checkHashtagCount,
  `Количество хэштегов не должна превышать ${HASHTAGS_COUNT}`
);

export const isValid = () => pristine.validate();

export const resetValidation = () => {
  pristine.reset();
};

