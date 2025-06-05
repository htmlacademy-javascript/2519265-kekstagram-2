// Создает случайное число
export const getRandomInteger = (a, b) => {
	const lower = Math.ceil(Math.min(a, b));
	const upper = Math.floor(Math.max(a, b));
	const result = Math.random() * (upper - lower + 1) + lower;
	return Math.floor(result);
};

//Массив случайных неповторяемых чисел

export const getSetRandomInteger = (a, b, count) => {
	const arrRandom = [];

	function getArrElem(number) {
		if (!arrRandom.includes(number)) {
			arrRandom.push(number);
		}
	}

	if ((((a - b) + 1) >= count) || (((b - a) + 1) >= count)) {
		while (arrRandom.length < count) {
			getArrElem(getRandomInteger(a, b));
		}
	} else {
		return 'Колличество необходимых целых чисел для создания больше возможных в данном промежутке';
	}
	return { arrRandom };
};

// //Счетчик

export function makeCounter(maxCount) {
	let currentCount = 0;

	return function () {
		if (currentCount > (maxCount - 1)) {
			currentCount = 0;
		}
		return currentCount++;
	};
}

export const isEscape = (evt) => evt.key === 'Escape';

export const debounce = (callback, timeoutDelay = 500) => {
	let timeoutId;

	return (...rest) => {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
	};
}
