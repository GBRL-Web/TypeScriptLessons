/**
 * A function to create a piramid with a specified length and character used to fill it.
 * @param num - The length of the piramid
 * @param char - Charater used to fill the piramid
 */
function makePiramid(num:number, char:string) {
    for (var i = 0; i < num; i++) {
        console.log(char.repeat(i));
    }
    for (let j = num; j > 0; j--){
        console.log(char.repeat(j));
    }
}

makePiramid(6, "*");
makePiramid(9, "+");