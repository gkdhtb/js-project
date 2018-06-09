container = document.querySelector('.wrapper');

function init() {
  let pages = document.querySelectorAll('.page');
  let pageWrapper = document.querySelector('#indicator');
  let angular = 90;

  container.style.transform = "translateZ(-826px) rotateY(0deg)";

  for(let i = 0; i < pages.length; i++) {
    let pageElement = document.createElement('li');
    angular = angular+ 90;
    pageElement.innerHTML = i+1;
    pageWrapper.appendChild(pageElement);

    pages[i].style.transform = "rotateY("+angular+"deg) translateZ(826px)";
  }
}

function change() {
  init();
  let pageIndicator = document.querySelectorAll('#indicator li');

  for(let x = 0 ; x < pageIndicator.length ; x++) {
    pageIndicator[x].addEventListener('click', function(e) {
      for(let y = 0; y < pageIndicator.length; y++) {
        pageIndicator[y].removeAttribute('class');
      }

      e.target.setAttribute('class', 'active');

      container.style.transform = "translateZ(-826px) rotateY("+x*-90+"deg)"
    })
  }
}

change();