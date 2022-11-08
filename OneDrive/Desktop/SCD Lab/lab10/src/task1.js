function sumation(a,b){
    return a+b;
}

module.exports.sum = sumation;


function subtract(a,b){
    return a-b;
}

module.exports.sub = subtract;

function multiply(a,b){
    return a*b;
}

module.exports.mul = multiply;

function divide(a,b){
    if(b != 0){
    return a/b;
    }
    else {
        return undefined
    }
}

module.exports.div = divide;



