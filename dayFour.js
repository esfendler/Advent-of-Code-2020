const fs = require('fs');

const lines = fs.readFileSync('dayFour.txt', {encoding: 'utf-8'}).split('\n\n').filter(x => x)

const splitLines = lines.map(elem => elem.split(/\n|\s/))

const reqs = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"]

const eyeColors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];

function dayFour(passports) {
  let count = 0;
for(let i = 0; i < passports.length; i++){
  let reqCount = 0;
  let passport = passports[i];
  let passReqs = passport.map(elem => elem.substring(0, 3))
  let passValues = passport.map(elem => elem.substring(4))
  for(let j = 0; j < passReqs.length; j++){
    if(reqs.includes(passReqs[j]) && fieldValidator(passReqs[j], passValues[j])){
      reqCount++;
    }
  } if(reqCount === reqs.length){
    count++;
  }
} return count;
}

function fieldValidator(field, value){
if(field === "byr"){
  if(/^\d{4}$/.test(value) && 1920 <=value && value <= 2002){
    return true;
  }
} if(field === "iyr"){
  if(/^\d{4}$/.test(value) && 2010 <= parseInt(value) && parseInt(value) <= 2020){
    return true;
  }
} if(field === "eyr"){
  if(/^\d{4}$/.test(value) && 2020 <= parseInt(value) && parseInt(value) <= 2030){
    return true;
  }
} if(field === "hgt"){
  if(/^\d{2}in$/.test(value) && 59 <= value.substring(0,2) <= 76){
    return true;
  } else if (/^\d{3}cm$/.test(value) && 150 <= value.substring(0,2) <= 193){
    return true
  }
} if(field === "hcl"){
    if(/^#[0-9a-f]{6}$/.test(value)){
      return true;
    }
} if(field === "ecl"){
    if(eyeColors.includes(value)){
      return true;
    }
} if(field === "pid"){
  if(/^\d{9}$/.test(value)){
    return true;
  }
} return false;
}

console.log(dayFour(splitLines))

