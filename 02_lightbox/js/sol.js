//라이트 박스 창 열기/닫기 기능

let thumbnail = document.querySelectorAll('.thumb');
let thumbnail2 = document.querySelectorAll('figure img');
let lightbox = document.querySelectorAll('#lightbox')[0];
let dimmed = document.querySelectorAll('#block')[0];
let closeBtn = document.querySelectorAll('.btn-close')[0];
let indicator = document.querySelectorAll('.indicator button');
thumbnail = Array.prototype.slice.call( thumbnail )
function getChildNumber(node) {
  return Math.ceil(Array.prototype.indexOf.call(node.parentNode.childNodes, node)/2);
}

thumbnail.map(item => {
  item.addEventListener('click', function(e) {
    lightbox.style.display = "block";
    dimmed.style.display = "block";
    let index = item.getAttribute('src').substring(11,12)
    thumbnail2[index-1].setAttribute('class', 'active');
  })
})

closeBtn.addEventListener('click', function(e) {
  lightbox.style.display = "none";
  dimmed.style.display = "none";
})

for(let i = 0 ; i < thumbnail.length ; i++ ) {
  indicator[i].addEventListener('click',function(e) {
    for(let s = 0; s < thumbnail2.length; s ++) {
      thumbnail2[i].removeAttribute('class');
    }
    thumbnail2[i].setAttribute('class', 'active');
  })
}
