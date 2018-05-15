var input = document.forms.cal.getElementsByTagName('input');
var result = input['result'].value;
var calc = input['calc'];
var clear = input['clear'];
for (var i = 0; i < input.length; i++) {
	input[i].onclick = function() {
        if(result == 0) {
            result = '';
        }
        result += this.value;
        input['result'].value = result;
    }
}
calc.onclick = function () {
	var calc_result = eval(input['result'].value);
	  input['result'].value = calc_result;
}
clear.onclick= function() {
		result = 0;
		document.forms.cal.reset();
}
