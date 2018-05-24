function calendar(new_year, new_month){
    var d = new Date(new_year , new_month);
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    var date = d.getDate();
    var day = d.getDay();
    var last_day = 32 - new Date(year, month-1, 32).getDate(); // 마지막날 구하기

    var temp_date = day - (date % 7 - 1); // 1일의 요일구하기

    var dates = document.querySelectorAll('tr td');
    var table_year = document.querySelector('.year');
    var table_month = document.querySelector('.month');

    table_year.innerHTML = year;
    table_month.innerHTML = month;

    for(var i = 0; i < dates.length; i++)
        dates[i].innerHTML = '&nbsp;';

    var j = 1;
    for(var i = temp_date; i < last_day+temp_date; i++){
        dates[i].innerHTML = j;
        j++;
    }
}

var prev_month = document.getElementById('prev');
var next_month = document.getElementById('next');
var year = new Date().getFullYear(); // 올해 구하기
var month = new Date().getMonth(); //이번달 구하기

calendar(year, month); //이번달 출력

prev_month.onclick = function () {
    calendar(year, --month);
}
next_month.onclick = function () {
    calendar(year, ++month);
}