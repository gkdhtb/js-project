var selc = document.getElementsByClassName("thumb");
var lightbox = document.getElementById("lightbox");
var dimmed = document.getElementById("block");
var img = document.querySelectorAll("figure > img");
var indicator = document.querySelectorAll(".indicator button");
var closebutton = document.getElementsByClassName("btn-close");

for (var i = 0; i < selc.length; i++) {
    (function (i) {
        selc[i].addEventListener('click', function () {
            lightbox.setAttribute("class", "active");
            dimmed.setAttribute("class", "active");

            img[i].setAttribute("class", "active");
            indicator[i].focus();
        })

        indicator[i].addEventListener('click', function () {

            for (var j = 0; j < indicator.length; j++) {
                img[j].removeAttribute("class");
            }
            img[i].setAttribute("class", "active");
        })
    }(i));
}

closebutton[0].addEventListener('click', function () {
    lightbox.removeAttribute('class');
    dimmed.removeAttribute('class');
    for (var i = 0; i < selc.length; i++) {
        img[i].removeAttribute("class");
    }
});
