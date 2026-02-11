function modulo(num1, num2) {
    let remainder=  num1-Math.floor(num1/num2)*num2;
     if (remainder < 0) {
    remainder += Math.abs(num2);
  }

  return remainder;
}
    
    


let output = modulo(25, 4);
console.log(output); // --> 1
