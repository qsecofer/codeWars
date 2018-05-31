function findUniq(arr) {
	if (arr[0] === arr[1]) {
		let i = 1;
		do {
			i++;
		}
		while (arr[0] === arr[i]);
		return arr[i];
	} else {
		if (arr[0] === arr[1]) {
			return arr[2];
		}
		if (arr[0] === arr[2]) {
			return arr[1];
		} else {
			return arr[0];
		}
	}
}



findUniq([ 4, 4, 4, 3, 4, 4, 4, 4 ]); //?

