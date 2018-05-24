

function calender (new_year, new_month) {
    var	d = new Date(new_year, new_month-1);
    var year = d.getFullYear();
    var month = d.getMonth();
    var lastdate = new Date(d.getFullYear(),d.getMonth()+1,0).getDate();
    var firstday = new Date(d.getFullYear(),d.getMonth(),1).getDay();
    var start= document.querySelectorAll('td');
    for(var i = 0; i < start.length; i++){
        start[i].innerHTML = '';
    }
    for(var i = 1; i <=lastdate; i++){
        for(var j = firstday; j <firstday+lastdate; j++){
            start[j].innerHTML = i;
            i++;
        }
    }
    document.querySelector('.year').innerHTML = year;
    document.querySelector('.month').innerHTML = month + 1;
}
(function(){
    var prev = document.getElementById('prev'),
        next = document.getElementById('next'),
        year = new Date().getFullYear(),
        month = new Date().getMonth() + 1;
        calender(year, month);
        prev.onclick = function(){
            calender(year, --month);
        };
        next.onclick = function(){
            calender(year, ++month);
        };
    }
)();