var prev = document.getElementById("prev");
var next = document.getElementById("next");

var year = new Date().getFullYear();
var month = new Date().getMonth()+1;

function setCalendar(y, m) {
    var caption_year = document.getElementsByClassName("year");
    var caption_month = document.getElementsByClassName("month");

    caption_year[0].innerHTML = y;
    caption_month[0].innerHTML = m;

    var days = new Date(y, m-1, 1), //month는 0부터 시
        days_length = 32 - new Date(y, m-1, 32).getDate(), //한달의 날짜 수
        date = days.getDate(), //어짜피 1
        day = days.getDay(); //몇번째 요일(0:일요일...)

    var days_td = document.querySelectorAll("tr td");

    for(var i = 0; i < days_td.length; i++) {
        days_td[i].innerHTML = "&nbsp;";
    }

    for(var i = day; i < day + days_length; i++) {
        days_td[i].innerHTML = date;
        date++;
    }
}

setCalendar(year, month);

prev.addEventListener("click", function(){
    setCalendar(year, --month);
})
next.addEventListener("click", function(){
    setCalendar(year, ++month);
})