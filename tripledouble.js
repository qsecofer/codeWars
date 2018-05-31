// https://www.codewars.com/kata/triple-trouble-1/train/javascript

function tripledouble(num1,num2) {	
	const triple =  num1.toString().split("").reduce((sum,current,index,arr) => {		
		return (current === arr[index+1] && current === arr[index+2] && current !== arr[index+3]) ? sum+current : sum;		
	},"");
	
	return num2.toString().split("").reduce((sum,current,index,arr) => {  
		return (triple === current && triple === arr[index+1]) ? sum+1 : sum;		
	},0);
}

// tripledouble(451999277,41177722899); //?
// tripledouble(1222345, 12345); //?

tripledouble(226499777333555460,733587775544); //?