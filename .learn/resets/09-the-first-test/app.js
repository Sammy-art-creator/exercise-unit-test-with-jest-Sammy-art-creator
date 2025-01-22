// one euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
const fromEuroToDollar = (dollars) => {
    return dollars*oneEuroIs.USD
}
console.log(fromEuroToDollar(3.5));
module.exports = 