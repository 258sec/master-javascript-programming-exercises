function findSmallestNumberAmongMixedElements(arr) {
  if (arr.length === 0) return 0;
  
 const numbers = arr.filter(element => typeof element === "number");
  if (numbers.length === 0) return 0;

  return Math.min(...numbers);

  
}

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
