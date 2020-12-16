const fs = require('fs');

const lines = fs.readFileSync('daySix.txt', {encoding: 'utf-8'}).split('\n\n').filter(x => x)

const splitLines = lines.map(elem => elem.split(/\n/).join(''))

let partOne = 0;

for (let i = 0; i < splitLines.length; i++){
  const spLine = splitLines[i].split("");
  const unique = [spLine[0]];
  for(let i = 1; i < spLine.length; i++){
    if (!unique.includes(spLine[i])){
      unique.push(spLine[i])
    }
  }
  partOne += unique.length;
}

console.log(partOne)

let partTwo = 0;
for (const line of lines){
    const unique = new Set([...line.replace(/\n/g, '')]);
    const groupAnswers = line.split('\n').filter(x => x)
    partTwo += [...unique].filter(char => groupAnswers.every(form => form.includes(char))).length
}

console.log(partTwo)
