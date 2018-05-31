function alphabetPosition(text) {
	return (
		text.toLowerCase()
			.split("")
			.filter(ch => ch.charCodeAt(0) >= 96 &&  ch.charCodeAt(0) <= 122)
			.map(ch => ch.charCodeAt(0)-96)
			.reduce((sum,value) => sum + " " + value.toString())
			.toString()); //?    
}

alphabetPosition("The sunset sets at twelve o' clock.");//?
