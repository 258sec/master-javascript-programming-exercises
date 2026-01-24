function findShortestWordAmongMixedElements(arr) {
    if (arr.length === 0) return "";
    return arr.reduce (( acc, current) => {
        if (typeof current === "string"){
            if ( acc === "" || current.length < acc.length){
                acc= current;

            }
        }
        return acc;
    }, "")
}

let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
