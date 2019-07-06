// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

    let result = {};
    let half = 0;
    let quarters = 0;
    let dimes = 0;
    let nickels = 0;
    let pennies = 0;
    if (currency <= 0) {
        return result
    }
    if(currency > 10000){
        return {
            error: "You are rich, my friend! We don't have so much coins for exchange"
        }
    }
    while (currency !== 0) {
        if (currency >= 50) {
            currency -= 50;
            half++;
        } else if (currency >= 25) {
            currency -= 25;
            quarters++;
        } else if (currency >= 10) {
            currency -= 10;
            dimes++;
        } else if (currency >= 5) {
            currency -= 5;
            nickels++;
        } else {
            currency -= 1;
            pennies++;
        }
    }

    if (half > 0) {
        result["H"] = half
    }
    if (quarters > 0) {
        result["Q"] = quarters
    }
    if (dimes > 0) {
        result["D"] = dimes
    }
    if (nickels > 0) {
        result["N"] = nickels
    }
    if (pennies > 0) {
        result["P"] = pennies
    }
    return result

};
