const fs = require('fs');

const lines = fs.readFileSync('dayTwo.txt', {encoding: 'utf-8'}).split('\n').filter(x => x).map(x => x)

const splitLines = []

for(let i = 0; i < lines.length; i++){
  let line = lines[i].split(" ");
  splitLines.push(line)
}

function dayTwo(input){
  let numValid = 0
for(let i = 0; i < input.length; i++){
  let rules = input[i][0].split("-")
  let letter = input[i][1].charAt(0)
  let strSplit = input[i][2].split("")
 let res = partOneHelper(rules, letter, strSplit)
 if(res){
   numValid++
 }
}
return numValid
}

function partOneHelper (rules, letter, lettArr) {
  let count = 0
for(let i = 0; i < lettArr.length; i++){
  if(lettArr[i] === letter){
    count++
  }
}
if(rules[0] <= count && count <= rules[1]){
  return true
} else{
  return false
}
}

function partTwoHelper (rules, letter, lettArr) {
  let count = 0
  if(lettArr[rules[0] - 1] === letter){
    count++
  }
  if(lettArr[rules[1] - 1] === letter){
    count++
  }
if(count === 1){
  return true
} else{
  return false
}
}

console.log(dayTwo(splitLines))
