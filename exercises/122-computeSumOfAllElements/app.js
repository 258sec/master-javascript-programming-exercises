function computeSumOfAllElements(arr) {
  return arr.reduce((sum, current) => sum + current, 0);
}

let output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6
