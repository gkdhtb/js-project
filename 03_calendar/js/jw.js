ui = null;
date = getDate();

window.onload = () => {

	ui = {
		year: document.querySelector('.year'),
		month: document.querySelector('.month'),
		btnPrev: document.getElementById('prev'),
		btnNext: document.getElementById('next'),
		td: document.querySelectorAll('td')
	};

	updateUI();

	ui.btnPrev.onclick = () => {
		if (date.month === 1) {
			date.year--;
			date.month = 12;
		} else {
			date.month--;
		}
		date.length = getDateLength(date.month);
		date.endDay = date.startDay - 1 < 0 ? 6 : date.startDay - 1;
		date.startDay = getStartDay(date.length, date.endDay);

		updateUI();
	};

	ui.btnNext.onclick = () => {
		if (date.month === 12) {
			date.year++;
			date.month = 1;
		} else {
			date.month++;
		}
		date.length = getDateLength(date.month);
		date.startDay = date.endDay + 1  > 6 ? 0 : date.endDay + 1;
		date.endDay = getEndDay(1, date.startDay, date.length);

		updateUI();
	}
};

function updateUI() {
	ui.year.innerText = date.year;
	ui.month.innerText = date.month;

	Array.prototype.forEach.call(ui.td, (td) => {
		td.innerText = '';
	});

	Array.prototype.forEach.call(ui.td, (td, i) => {

		if (i > date.startDay - 1) {

			let d = i - date.startDay + 1;
			if (d <= date.length) td.innerText = d;
		}
	});
}

function getDate() {
	let date = new Date();

	let dateInfo = {
		year: date.getFullYear(),
		month: date.getMonth() + 1,
		date: date.getDate(),
		day: date.getDay(),
	};

	dateInfo.length = getDateLength(dateInfo.month);
	dateInfo.startDay = getStartDay(dateInfo.date, dateInfo.day);
	dateInfo.endDay = getEndDay(dateInfo.date, dateInfo.day, dateInfo.length);

	return dateInfo;
}

function getDateLength(month) {
	switch(month) {
		case 2:
			return 29;
		case 4:
		case 6:
		case 9:
		case 11:
			return 30;
		case 1:
		case 3:
		case 5:
		case 7:
		case 8:
		case 10:
		case 12:
			return 31;
	}
}

function getStartDay(date, day) {
	day = day < 0 ? 6 : day;
	return date <= 1 ? day : getStartDay(date - 1, day - 1);
}

function getEndDay(date, day, length) {
	day = day > 6 ? 0 : day;
	return date >= length ? day : getEndDay(date + 1, day + 1, length);
}