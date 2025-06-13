export const COMMENTS__STEP = 5;
export const STEP_SCALE = 25;
export const MAX_SCALE = 100;
export const MIN_SCALE = 25;
export const SCALE_FACTOR = 0.01;
export const RANDOM_PHOTO_COUNT = 10;

export const filterEffectSaturation = [
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
