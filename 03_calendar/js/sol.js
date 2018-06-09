// getDate 함수

/*  1. 테이블을 지운다. (o)
	2. 첫째 날의 요일과 마지말 날짜를 구한다. (o)
	3. 테이블에 날짜를 기록. (o)
	4. year 와 month는 전역변수 (o)
	5. 이전 버튼을 누루면 month를 줄인다. month가 1 이하면 year는 -1 month는 12
	6. 다음 버튼을 누루면 month를 늘린다. month가 12 이상이면 year는 +1 month는 1
 */

let dateObj = new Date();
year = dateObj.getFullYear();
month = dateObj.getMonth()+1;

function getDate (year, month) {
	document.querySelector('.year').innerHTML = year;
	document.querySelector('.month').innerHTML = month;

	let firstDay = new Date(year+'-'+month+'-1').getDay();
	let lastDate = new Date(year, month, 0).getDate();

	let row = document.querySelectorAll('tr');
	for(let x = 1; x < 7 ; x ++) {
		let col = row[x].querySelectorAll('td');
		for(let y = 0; y < col.length; y ++) {
			col[y].innerHTML = '&nbsp';
		}
	}

	let day = 1;
	let start = firstDay;
	for(let x = 1; x < 7 ; x ++ ) {
		let col = row[x].querySelectorAll('td')
		for(let y = start; y < 7; y ++) {
			if(day > lastDate) {
				break;
			}
			col[y].innerHTML = day;
			day++;
		}
		start = 0;
	}
}

getDate(year, month);
