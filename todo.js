let listSet = document.getElementsByClassName('list')[0];

listSet.addEventListener('click', function(e) {
	document.getElementsByClassName('title')[0].innerText = e.target.innerText;
})

document.getElementsByClassName('btn_add')[0].addEventListener('click', function() {
	let todoList = prompt('목록을 추가해 주세요.');

	let todoListTag = document.createElement('li');
	let todoListText = document.createTextNode(todoList);

	todoListTag.className = 'item';

	todoListTag.appendChild(todoListText);

	listSet.append(todoListTag);
})