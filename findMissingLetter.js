function findMissingLetter(array) {
  let res;
  for (let i=0; i < array.length-1; i++) {    
    if (array[i].charCodeAt(0)+1 !== array[i+1].charCodeAt(0)) {
      res = String.fromCharCode(array[i].charCodeAt(0)+1);//?
    }
  }
  return res;
 }

findMissingLetter(['a','b','c','d','f']);//?
findMissingLetter(['O','Q','R','S']);//?
