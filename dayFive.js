const fs = require('fs');

const lines = fs.readFileSync('dayFive.txt', {encoding: 'utf-8'}).split('\n').filter(x => x)

function strToInt (str) {
  return parseInt([...str].map(x => x === 'B' || x === 'R' ? 1 : 0).join(""), 2)
}

class Seat {
  constructor(string){
    this.row = strToInt(string.slice(0,7))
    this.column = strToInt(string.slice(7))
    this.id = this.row * 8 + this.column
  }
}

const seats = [];

for (let i = 0; i < lines.length; i++){
  const s = new Seat(lines[i]);
  seats.push(s);
}

console.log(Math.max(...seats.map(s => s.id)))

//Part 2
const seatIds = seats.map(seat => seat.id)
const sortedIds = seatIds.sort((a, b) => a-b)
for (let i = 20; i < sortedIds.length - 1; i++){
  if((sortedIds[i + 1] - sortedIds[i]) > 1){
    let mySeat = sortedIds[i] + 1;
    console.log(mySeat)
  }
}
