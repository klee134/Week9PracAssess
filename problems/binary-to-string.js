function binaryToString(binaryBlob) {
  let binArr = binaryBlob.split("");
  console.log(binArr);
  let byte;
  let str;
  let base10;
  let arr = [];

  while (binArr.length > 0) {
    byte = binArr.splice(0, 8).join("");
    base10 = parseInt(byte, 2);
    str = String.fromCharCode(base10);
    arr.push(str);
  }
  return arr.join("");
}

/* Comment in the code below to run local tests */
console.log(binaryToString('010000010100001001000011')); // 'ABC'
console.log(binaryToString('001101100011011100111000')); // '678'
console.log(binaryToString('0100000101110000011100000010000001000001011000110110000101100100011001010110110101111001'))


module.exports = binaryToString;
