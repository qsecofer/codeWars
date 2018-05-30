function findOdd(A) {
  let Numbers = {};
  let res;
  A.forEach((num) => {
    Numbers[num] = Numbers.hasOwnProperty(num) ? Numbers[num]+1 : Numbers[num] = 1;
  });

  for (const key of Object.keys(Numbers)) {
    if (Numbers[key] % 2 !== 0) {
      res = key;
    }
  }
  return parseInt(res, 10);
}
// findOdd([3,1,3,20]) //?
findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]) //?
findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]) //?
