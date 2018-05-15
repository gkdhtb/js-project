var title = document.getElementById('title');
var list = document.getElementById('list');
var li = list.getElementsByTagName('li');
var addBtn = document.getElementById('btn_add');

for(var i = 0; i < li.length; i++) {
    li[i].addEventListener('click', activeItem);
}

function activeItem() {
    title.innerHTML = this.innerHTML;
    for(var i = 0; i < li.length; i++) {
        li[i].classList.remove('active');
    }
    this.classList.add('active');
}

addBtn.addEventListener('click', function () {
    var txt = prompt('할일을 입력하시오');
    var temp = list.innerHTML;
    list.innerHTML = temp + '<li>' + txt + '</li>';
});