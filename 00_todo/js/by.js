var title = document.getElementById('title');
var list = document.getElementById('list');
var btn_add = document.getElementById('btn_add');

list.addEventListener('click',showItem);
function showItem(event) {
	title.innerHTML = event.target.innerText;
}

btn_add.addEventListener('click',function(){
	var item = prompt('목록추가');
	var addItem = '<li class="item">'+item+'</li>';
	list.innerHTML += addItem;
});