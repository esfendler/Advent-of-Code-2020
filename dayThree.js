const fs = require('fs');

const lines = fs.readFileSync('dayThree.txt', {encoding: 'utf-8'}).split('\n').filter(x => x)

function dayThree(matrix, xMvmnt, yMvmnt){
let trees = 0;
let panelLen = matrix[0].length
let maxSouth = matrix.length
let x = 0;
let y = 0;
while(y < maxSouth - 1){
  x+= xMvmnt;
  y+= yMvmnt;
  if(x >= panelLen){
    let xCoordinate = x % panelLen;
  if(matrix[y].charAt(xCoordinate) === "#"){
    trees++;
  }
  } else {
      if(matrix[y].charAt(x) === "#"){
      trees++;
    }
    }
}
return trees;
}

console.log(dayThree(lines, 3, 1))

const partTwoInput =
[
[1,1],
[3,1],
[5,1],
[7,1],
[1,2]
]

function partTwo(input){
  let res = 1;
  for(let i = 0; i < input.length; i++){
    res *= dayThree(lines, input[i][0], input[i][1])
  }
  return res;
}

console.log(partTwo(partTwoInput))





