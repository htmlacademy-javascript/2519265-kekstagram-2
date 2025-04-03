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

function getResult(workStart, workEnd, meetStart, meetLong) {
  let result = false;

  const workStartArr = workStart.split(':');
  const workEndArr = workEnd.split(':');
  const meetStartArr = meetStart.split(':');

  const workStartMinit = workStartArr[0] * 60 + +workStartArr[1];
  const workEndMinit = workEndArr[0] * 60 + +workEndArr[1];
  const meetStartMinit = meetStartArr[0] * 60 + +meetStartArr[1];

  if(((workEndMinit - workStartMinit) >= meetLong) && ((workEndMinit - meetStartMinit) <= (workEndMinit - workStartMinit))) {
    if((workEndMinit - meetStartMinit) >= meetLong) {
      result = true;
    }
  }
  return result;
}

console.log(getResult('08:00', '17:30', '14:00', 90)); //eslint-disable-line
console.log(getResult('8:0', '10:0', '8:0', 120)); //eslint-disable-line
console.log(getResult('08:00', '14:30', '14:00', 90)); //eslint-disable-line
console.log(getResult('14:00', '17:30', '08:0', 90)); //eslint-disable-line
console.log(getResult('8:00', '17:30', '08:00', 900));//eslint-disable-line
