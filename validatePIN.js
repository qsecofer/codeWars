function validatePIN (pin) {
	const entries = pin.split("");
	let tmp = true;
	pin.split("").forEach((elm) => {
		if ((parseInt(elm,10) !== 0) && !parseInt(elm, 10)){
			tmp= false;
		}
	});
	return tmp && (entries.length === 4 || entries.length === 6);
}

validatePIN(1234); 