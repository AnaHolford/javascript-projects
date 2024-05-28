function makeLine(size) {
    let line = ""
    for (let i = 0; i < size; i++) {
        line += '#';
    }
    return line
}
//console.log(makeLine(5));

function makeSquare(size) {
    let square = "";
    square = makeRectangle(size, size);
    return square
}
//console.log(makeSquare(5));

function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
        rectangle += (makeLine(width)) + '\n';
    }
    return rectangle.slice(0, -1)
}
//console.log(makeRectangle(5, 3));

function makeDownwardStairs(height) {
    let stairs = '';
    for (let i = 0; i < height; i++) {
        stairs += (makeLine(i + 1)) + '\n';
    }
    return stairs.slice(0, -1)
}
//console.log(makeDownwardStairs(5));

function makeSpaceLine(numSpaces, numChars) {
    let spaces = '';

    for (let i = 0; i < numSpaces; i++) {
        spaces += ' ';
    }
    spaceLine = ((spaces) + (makeLine(numChars)) + (spaces))

    return spaceLine
}
// console.log(makeSpaceLine(3, 5));

function reverse(str) {
    let reversed = '';

    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }

    return reversed;
}

function makeIsocelesTriangle (height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
            triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
            }
            return triangle.slice(0, -1);
          }
    
//console.log(makeIsocelesTriangle(5));

function makeDiamond(height) {
    let diamond = '';
    
    diamond = (makeIsocelesTriangle(height) + '\n' + reverse(makeIsocelesTriangle(height)))
    return diamond
    }
    

console.log(makeDiamond(5)); 