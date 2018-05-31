// https://www.codewars.com/kata/create-phone-number/train/javascript

function createPhoneNumber(numbers){
	return numbers.reduce((tel, value,index) => {
		switch(index) {
		case 2:
			return tel + value + ") ";            
		case 5:
			return tel + value + "-";
		default:
			return tel + value;
		}
	},"(");	 
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); //?
// "(123) 456-7890"