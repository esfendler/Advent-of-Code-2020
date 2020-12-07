const fs = require('fs');

const lines = fs.readFileSync('dayOne.txt', {encoding: 'utf-8'}).split('\n').filter(x => x).map(x => parseInt(x));

for (let i = 0; i < lines.length; i++) {
  for (let j = i+1; j < lines.length; j++) {
      if(lines[i]+lines[j] === 2020) {
          console.log('result: ', lines[i]*lines[j]);
      }
  }
}

  for(let i = 0; i < lines.length - 1; i++){
    for(let j = 1; j < lines.length; j++){
      for(let k = 2; k < lines.length; k++){
        if(lines[i] + lines[j] + lines[k] === 2020){
        console.log("nums:" + lines[i] +"   " +lines[j] + "   " + lines[k])
        console.log("result: " + lines[i] * lines[j] * lines[k])
      }
      }
    }
  }



  // function dayOne (expenseReport) {
  //   for(let i = 0; i < expenseReport.length - 1; i++){
  //     for(let j = 1; j < expenseReport.length; j++){
  //       for(let k = 2; k < expenseReport.length; k++){
  //         if(expenseReport[i] + expenseReport[j] + expenseReport[k] === 2020){
  //         console.log(expenseReport[i] +"   " +expenseReport[j] + "   " + expenseReport[k])
  //         return expenseReport[i] * expenseReport[j] * expenseReport[k]
  //       }
  //       }
  //     }
  //   }
  //   }
