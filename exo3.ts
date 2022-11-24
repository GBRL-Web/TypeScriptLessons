/**
 * Simple function to calculate profitability.
 * @param prodPrice - Production price
 * @param sellPrice - Sellings price
 * @returns - A text representing gain, loss or none of them.
 */

function checkPrice(prodPrice: number, sellPrice: number): string {
    let result: number = prodPrice - sellPrice;
    if (result < 0) {
        return "You are at a loss of: $" + Math.abs(result);
    } else if (result > 0) {
        return "You are at a gain of: $" + Math.abs(result);
    } else {
        return "No gain, no loss. :(";
    }
}
console.log(checkPrice(12,11));
console.log(checkPrice(12,12));
console.log(checkPrice(12,13));