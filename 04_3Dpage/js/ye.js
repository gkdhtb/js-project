/* get elements */
var wrapper = document.querySelector('.wrapper');
var indicatorElement = document.getElementById('indicator');
var pages = document.getElementsByClassName('page');
var yDeg = 0;
var w = pages[0].offsetWidth;
var page_angle = 0;

// 페이지 초기화
function init_page(){
    w = pages[0].offsetWidth;

    // 3D page 4면체 위치 정의
    for(var i = 0; i < pages.length; i++){
        pages[i].style.transform = 'rotateY(' + page_angle + 'deg) translateZ(' + (w/2) + 'px)';
        page_angle += 90;
    }

    // page wrapper 정면으로 초기화
    wrapper.style.transform = 'translateZ(' + (-w/2) + 'px) rotateY(' + yDeg + 'deg)';
}

init_page();

for(var i = 0; i < pages.length; i++) {
    var pageElement =  document.createElement('li');
    var pageText = document.createTextNode(i+1);
    pageElement.appendChild(pageText);
    indicatorElement.appendChild(pageElement);
    pageElement.onclick = function () {
        var num = new Number(this.innerHTML);
        for(var j = 0; j < pages.length; j++) {
            pages[j].style['z-index'] = 0;
            indicatorElement.getElementsByTagName('li')[j].removeAttribute('class');
        }
        pages[num-1].style['z-index'] = 1;
        this.setAttribute('class', 'active');

        yDeg = -90 * (num - 1);
        wrapper.style.transform = 'translateZ(' + (-w/2) + 'px) rotateY(' + yDeg + 'deg)';
    }
}