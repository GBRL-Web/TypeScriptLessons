/**
 *  Simple function to output the highest number from the 3 inputted numbers.
 * @param a |
 * @param b } Single numerical values to compare
 * @param c |
 * @returns - The highest number from the three values
 */
export function getMax(a: number, b: number, c:number): number {
    let numArr: Array<number> = [a, b, c];
    return Math.max(...numArr);
}
console.log("Highest number between 3,7,1 is: ", getMax(3,7,1));