
import chalk from 'chalk';

//console.log(process.stdout.columns);
//console.log(process.stdout.rows);

let simbol ='AB 1 DE 2 FGH 3 IJ KL MN';

let mas = [];
 for(let i =0; i< 90; i++){
    mas[i]=[]; 
for (let a=0; a<200; a++){
    mas[i].push(simbol.charAt(Math.floor(Math.random()* simbol.length)));
    mas[i].push('')
}
 }


let skaiciuoti =0

 const interval = setInterval(() => {
    skaiciuoti++;
    console.log(chalk.greenBright(mas[skaiciuoti].splice(',').join('')))
    if(skaiciuoti===100)
    clearInterval(interval) 
 
 }, 100);

