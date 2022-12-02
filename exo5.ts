/**
 * Simple comparison function to get the highest value of an array of multiple values.
 * @param number - Input of multiple numerical values. By default is an array.
 * @returns - Highest numerical value from the input array of numbers.
 */
export function getHighest(...number:number[]):number {
    return Math.max(...number);
}

console.log("Highest number between 3,5,1,2,4,9,10 is: " + getHighest(3,5,1,2,4,9,10));