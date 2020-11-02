const string = document.getElementById('string');
const btn = document.getElementById('btn');

const popAndReturnArray = array => {
	array.pop();
	return array;
};

const ironArray = (accum, el) =>
	!accum[accum.length - 1]
		? accum.concat(el)
		: accum[accum.length - 1].concat(el) === '()' ||
		  accum[accum.length - 1].concat(el) === '{}' ||
		  accum[accum.length - 1].concat(el) === '[]'
		? popAndReturnArray(accum)
		: accum.concat(el);

const verifyString = str => {
	return [...str].reduce(ironArray, []).length > 0 ? 'Incorrecto' : 'Correcto';
};

string.addEventListener('keyup', e => {
	string.textContent = e.target.value;
});

btn.addEventListener('click', () => alert(verifyString(string.textContent)));
