ui = null;

window.onload = () => {
	ui = {
		wrapper: document.querySelector('.wrapper'),
		pannels: document.querySelectorAll('.page'),
		indicator: document.querySelector('#indicator')
	};

	ui.indicator.onclick = (e) => {
		let target = e.target;
		if (target.tagName === 'LI') {
			let index = new Number(target.innerHTML) - 1;
			changePage(index);
		}
	};

	ui.pages = createPages();

	set3DPosition();

	changePage(0);
};

function set3DPosition () {

	var wrapperStyle = ui.wrapper.style;
	wrapperStyle['touch-action'] = 'pan-y';
	wrapperStyle['userSelect'] = 'none';
	wrapperStyle['-webkit-user-drag'] = 'none';
	wrapperStyle['-webkit-tap-highlight-color'] = 'black';
	wrapperStyle['transform'] = 'translateZ(-720px) rotateY(0)'

	Array.prototype.forEach.call(ui.pannels, function(pannel, index) {
		let rotateValue = 'rotateY(' + (90 * index) + 'deg)',
			translateValue = 'translateZ(720px)';

		pannel.style.transform = rotateValue + ' ' + translateValue;
	});
}

function createPages () {
	let pageLength = ui.pannels.length;
	let pageWrapper = ui.indicator;

	for (let i = 0; i < pageLength; i++) {
		let pageElement = document.createElement('li');
		pageElement.innerHTML = i + 1;
		pageWrapper.appendChild(pageElement);
	}

	document.body.appendChild(pageWrapper);

	return pageWrapper.querySelectorAll('li');
}

function changePage (index) {

	let transformValue = 'translateZ(-720px) rotateY(' + (-90 * index) + 'deg)';

	ui.wrapper.style.transform = transformValue;

	Array.prototype.forEach.call(ui.pages, function(page) {
		page.classList.remove('active');
	});

	ui.pages[index].classList.add('active');
}