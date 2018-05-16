window.onload = () => {

	// select UI
	window.ui = {};
	ui.indicator = document.querySelectorAll('.indicator button');
	ui.lightbox = document.querySelector('#lightbox');
	ui.block = document.querySelector('#block');
	ui.imgs = document.querySelectorAll('header img');

	// attach events
	Array.prototype.forEach.call(ui.imgs, (img, index) => {
		img.onclick = () => lightbox_open(index);
	});

	Array.prototype.forEach.call(ui.indicator, (btn, index) => {
		btn.onclick = () => lightbox_open(index);
	});

	document.querySelector('.btn-close').onclick = () => lightbox_close();
};

/* (num[number]) => (void)
 * open lightbox and show image matched number
 */
function lightbox_open(index) {
	ui.lightbox.setAttribute('class', 'active');
	ui.block.setAttribute('class', 'active');

	change_img(index);
	ui.indicator[index].focus();
}

/* (void) => (void)
 * close lightbox
 */
function lightbox_close() {
	ui.lightbox.removeAttribute('class');
	ui.block.removeAttribute('class');
}

/* (num[number]) => (void)
 * change img matched number
 */
function change_img(index) {
	let imgs = document.querySelectorAll('#lightbox img');

	for (let i = 0; i < imgs.length; ++i)
		imgs[i].removeAttribute('class');

	imgs[index].setAttribute('class', 'active');
}