ui = null;
equation = null;
viewInitFlag = false;

window.onload = () => {

	ui = {
		result: document.querySelector('input[type="text"]'),
		btns: document.querySelectorAll('input[type="button"]')
	};

	bindEvent({
		doms: ui.btns,
		event: 'click',
		fn: onClickBtn
	});
};

/* Event Function */
function onClickBtn(e) {
	let key = e.target.value;
	let equation = window.equation || ui.result.value;

	switch (key) {
		case '+':
		case '-':
		case '%':
		case '/':
		case '*':
			viewInitFlag = true;

			if ((new RegExp('[-+/*%]')).test(equation[equation.length - 1]))
				equation = equation.substr(0, equation.length - 1) + key;
			else
				equation += key;
			break;
		case '=':
			equation = eval(equation);
			ui.result.value = equation;
			break;

		case 'clear':
			equation = null;
			ui.result.value = '0';
			break;

		default:
			if (equation == '0')
				equation = key;
			else
				equation += key;

			if (viewInitFlag) {
				ui.result.value = key;
				viewInitFlag = false;
			} else if (ui.result.value == '0')
				ui.result.value = key;
			else
				ui.result.value += key;
	}

	console.log(equation);
	window.equation = equation === null ? '' : String(equation);
}

/* Util Function */
function bindEvent({doms, event, fn}) {

	if (doms instanceof HTMLCollection || doms instanceof NodeList) {
		Array.prototype.forEach.call(doms, (dom) => {
			dom.addEventListener(event, fn);
		});
	} else {
		doms.addEventListener(event, fn);
	}
}