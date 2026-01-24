function getLongestElement(arr) {
     if (arr.length === 0) return "";

     let longest = arr[0];
     arr.map((element) => {
         if (element.length > longest.length) {
             longest = element;
         }
     });

     return longest;
}

let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'
