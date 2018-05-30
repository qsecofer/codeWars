function digPow(n, p){    
  total = n.toString().split("").reduce((sum, value) => {
    return sum + Math.pow(parseInt(value,10),p++);
  },0);
  return !(total % n ) ? total/n : -1;
}


digPow(89, 1); //?
digPow(92, 1); //?
digPow(46288, 3); //?
