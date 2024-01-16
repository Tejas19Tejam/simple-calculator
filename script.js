'use strict';

// Select Elements

const btnContainer = document.querySelector('.buttons-container');
const inputBox = document.querySelector('.input-box');

// Adding Listener
btnContainer.addEventListener('click', (e) => {
	e.preventDefault();
	// Guard Clause
	if (e.target.classList.contains('buttons-container')) return;
	displayValue(e.target.textContent);
});



// Display value
function displayValue(value) {
	try {
		switch (value) {
			case '➕':
				inputBox.value += '+';
				break;

			case '➖':
				inputBox.value += '-';
				break;
			case '➗':
				inputBox.value += '÷';
				break;
			case '✖️':
				inputBox.value += 'x';
				break;

			case 'Reset':
				break;
			case 'DEL':
				inputBox.value = '';
				break;
			case '=':
				evaluateExpression(inputBox.value);
				break;

			default:
				// This will remove the error warning .
				toggleErrorElement();
				inputBox.value += value;
		}
	} catch (err) {
		console.log(err.message);
		return 0;
	}
}



// Evaluate Expression
function evaluateExpression(expression) {
	console.log(expression);
	try {
		if (expression) {
			const result = eval(expression.replace('÷', '/'));
			inputBox.value = result;
		}
		if (!expression) throw Error('Please enter a value, to evaluate!');
	} catch (err) {
		inputBox.value = '';
		errorHandler(err.message);
		// This will show the error warning .
		toggleErrorElement(true);
	}
}



// Handle Error
function errorHandler(errorMassage) {
	return { error: errorMassage };
}

// ToggleErrorElement
function toggleErrorElement(state = false) {
	const errorMsgElement = document.querySelector('.error-msg');

	if (state) return (errorMsgElement.style.display = 'block');
	errorMsgElement.style.display = 'none';
}
