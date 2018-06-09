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

document.querySelector('#prev').addEventListener('click', function() {
  if(month < 2) {
    year = year - 1;
    month = 12;
  }
  else {
    month = month-1;
  }
  getDate(year,month);
});

document.querySelector('#next').addEventListener('click', function() {
  if(month >= 12) {
    year = year + 1;
    month = 1;
  }
  else {
    month = month+1;
  }
  getDate(year,month);
});

getDate(year, month);
