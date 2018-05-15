let calc = document.getElementsByTagName('td');
let inputBar = document.querySelector('th input');
let number = '';
let result = '';
let numberArray = [];

calc = Array.prototype.slice.call(calc);

calc.map(item => {
	item.getElementsByTagName('input')[0].addEventListener('click', function(e) {
		let value = parseInt(this.value);
		if(!isNaN(value)) {
			number += this.value;
			inputBar.value = number;
		}

		if(this.value === 'clear') {
			inputBar.value = '';
			number = '';
			numberArray = [];
			result = '';
		}
		if(isNaN(value) && this.value!=='=' && this.value !=='clear') {
			numberArray.push(number);
			numberArray.push(this.value);
			inputBar.value = '';
			number = '';
		}
		if(this.value === '=') {
			numberArray.push(number);
			numberArray.map(item => {
				result += item;
			});
			result = eval(result);
			inputBar.value = result;
			numberArray = [];
			number = '';
			result = '';
			numberArray.push(inputBar.value);
		}
	})
});
