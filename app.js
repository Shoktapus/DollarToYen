// const { sum } = require('./app.js');



const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
    
}
console.log(fromEuroToDollar(1*1.2))
const sum = (a,b) => {
    return a + b
}
const fromDollarToYen = function(valueInDollar){ 
    let valueInYen = valueInDollar * 1.44;
    return valueInYen;
}
console.log(fromDollarToYen(1*1.44))

const fromYenToPound = function(valueInYen){
    // convert the given valueInEuro to dollars
    let valueInPound = valueInYen * 2.0736;
    //return the dollar value
    return valueInPound;
}

console.log('this is yen to pound', fromYenToPound(1*2.0763))

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};