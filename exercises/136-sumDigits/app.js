

function sumDigits(num) {
    
    const negative = num < 0;;
    if (negative) {
        num = Math.abs(num);
    }
    const digits=  num.toString().split("");

    

    return digits.reduce(function(acc, curr, index) {
           let value = Number(curr);
           
           if (negative && index === 0){
            value = -value;
           }
        

           return acc + value;

        }, 0);
    } 
     
    

let output = sumDigits(-316);
console.log(output); // --> 4
