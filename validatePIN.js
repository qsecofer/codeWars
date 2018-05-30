function validatePIN (pin) {
  const entries = pin.split("")
  let tmp = true;
  pin.split("").forEach((elm) => {
    if ((parseInt(elm,10) !== 0) && !parseInt(elm, 10)){
        tmp= false;
    }
  });
  return tmp && (entries.length === 4 || entries.length === 6);
}

parseInt('a', 10) !== 0; //?

validatePIN("1")  //?
validatePIN("12") //?
validatePIN("123") //?
validatePIN("12345") //?
validatePIN("1234567") //?
validatePIN("-1234") //?
validatePIN("1.234") //?
validatePIN("-1.234") //?
validatePIN("00000000") //?

validatePIN("a234"); //?
validatePIN(".234"); //?

validatePIN("1234"); //?
validatePIN("0000"); //?
validatePIN("1111"); //?
validatePIN("123456"); //?
validatePIN("098765"); //?
validatePIN("000000"); //?
validatePIN("123456"); //?
validatePIN("090909"); //?
