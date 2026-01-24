function joinArrayOfArrays(arr) {
  return arr.reduce ((anid ,current) => anid.concat(current), []);
  
}

let output = joinArrayOfArrays([
  [1, 4],
  [true, false],
  ['x', 'y'],
]);

console.log(output); // --> [1, 4, true, false, 'x', 'y']
