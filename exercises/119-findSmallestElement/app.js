function findSmallestElement(arr) {
    if (arr.length === 0) return 0;
    
    
    return arr.reduce((acc, current) =>{
        if (current < acc){
            acc = current;
            
        }
        return acc;
    }, arr[0]);

} 

let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1