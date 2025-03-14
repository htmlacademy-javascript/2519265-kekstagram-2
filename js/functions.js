// Длина строки

function checkStringLength(string, count) {
  return (string.length <= count);
}

checkStringLength('проверяемая строка', 5);
// console.log(checkStringLength('проверяемая строка', 5));

// Палиндром

function isPalindrome(string) {
  const spacelessStr = string.replaceAll(' ', '');
  const stringLowerCase = spacelessStr.toLowerCase();
  let stringBackward = '';

  for(let i = 0; i < stringLowerCase.length; i++) {
    stringBackward = stringLowerCase[i] + stringBackward;
  }
  return stringBackward === stringLowerCase;
}

isPalindrome('ТоПот');

// console.log(isPalindrome('Лёша на полке клопа нашёл '));
// console.log(isPalindrome('ТоПот'));
// console.log(isPalindrome('квадрат'));

// Возврат числа из строки

function getNumber(string) {
  let stringCopy = string.toString();
  stringCopy = stringCopy.replaceAll(' ', '');
  let result = '';
  for(let i = 0; i < stringCopy.length; i++) {
    if (!isNaN(stringCopy[i])) {
      result = result + stringCopy[i];
    }
  }
  return result;
}

getNumber(-8);

// console.log(getNumber('-8'));
// console.log(getNumber('1,5'));
// console.log(getNumber('1 кефир, 0.5 батона'));
