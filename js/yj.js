var inputs = document.forms.cal.getElementsByTagName("input");
var res = inputs.result;

for(var i = 0; i < inputs.length; i++) {
    if(inputs[i].value == '=') {
        inputs[i].onclick = function() {
            res.value = eval(res.value);
        }
    }
    else if(inputs[i].value == 'clear') {
        inputs[i].onclick = function() {
            res.value = 0;
        }
    }
    else {
        inputs[i].onclick = function() {
            if(res.value == 0) {
                res.value = '';
            }
            res.value += this.value;
        }
    }
}