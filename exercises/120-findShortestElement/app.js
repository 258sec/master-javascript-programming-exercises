function findShortestElement(arr) {
    if (arr.length ==0) { return ""};
    return arr.reduce((shortest, current) =>{
        if (current.length < shortest.length){
            shortest= current;
        }
        
        else return shortest;
        
    }, arr[0]);

}

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'