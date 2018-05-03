ui = null;

window.onload = () => {

	ui = {
		title: document.getElementById('title'),
		list: document.getElementById('list'),
		item: document.getElementsByClassName('item'),
		btn: document.getElementById('btn_add')
	};

	eventBind({
		element: ui.list,
		event: 'click',
		fn: onChangeTitle
	});

	eventBind({
		element: ui.btn,
		event: 'click',
		fn: onAppendList
	});
};

onChangeTitle = (e) => {
	ui.title.innerText = e.target.innerText;
};

onAppendList = (e) => {
	let work = prompt('할일을 작성하세요.');
	let list = createElement({
		tag: 'li',
		className: 'item',
		text: work
	});

	ui.list.appendChild(list);
};

eventBind = ({ element, event, fn }) => {
	if (element instanceof HTMLCollection) {
		Array.prototype.forEach.call(element, (el) => {
			el.addEventListener(event, fn);
		});
	} else {
		element.addEventListener(event, fn);
	}
};

createElement = ({ tag, className, text }) => {
	let element = document.createElement(tag);
	element.className = className;
	element.innerText = text;
	return element;
};