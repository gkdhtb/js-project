window.onload = function () {
    var imgs = document.getElementsByClassName('thumb');
    var lightbox = document.getElementById('lightbox');
    var block = document.getElementById('block');
    var close_btn = document.getElementsByClassName('btn-close');
    var light_bx_imgs = lightbox.getElementsByTagName('img');
    var change_btn = lightbox.getElementsByTagName('button');

    for(var i = 0; i < imgs.length; i++) {
        function aa(i) {
            imgs[i].onclick = function () {
                lightbox.setAttribute('class', 'active');
                block.setAttribute('class', 'active');
                for(var j = 0; j < light_bx_imgs.length; j++) {
                    light_bx_imgs[j].setAttribute('style', 'display:none');
                }
                light_bx_imgs[i].setAttribute('style', 'display:block');
            }
            change_btn[i].onclick = function () {
                for(var j = 0; j < light_bx_imgs.length; j++) {
                    light_bx_imgs[j].setAttribute('style', 'display:none');
                }
                light_bx_imgs[i].setAttribute('style', 'display:block');
            }
        }
        aa(i);
    }

    close_btn[0].onclick = function () {
        lightbox.removeAttribute('class');
        block.removeAttribute('class');
    }
}