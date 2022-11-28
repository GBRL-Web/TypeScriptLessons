/**
 * Get any amount of values from the user and checks for the closest value to 0.
 * @param temp - Array of temperatures to compare.
 * @returns - Closest temperature to 0
 */
function lowestTemp(...temp:number[]):number {
    let lowTemp: number = Math.max(...temp);
    for (let i = 0; i < temp.length; i++) {
        if (lowTemp > Math.abs(temp[i])) {
            lowTemp = temp[i];
        }
    }
    return lowTemp;
}

console.log("Closest temperature to 0 from [12, 1, -1, -15, 5] is: " + lowestTemp(12, 1, -1, -15, 5));