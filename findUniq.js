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
      return aee[0];
    }
  }
}



findUniq([ 4, 4, 4, 3, 4, 4, 4, 4 ]); //?
// console.log(findUniq([ ]), 1); //?
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2); //?
console.log(findUniq([ 3, 10, 3, 3, 3 ]), 10); //?
// console.log(findUniq([ 10, 3, 3, 3, 3 ]), 10); //?
