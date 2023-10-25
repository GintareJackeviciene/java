//1 uzduotis
let text = "Sandleris";
let text1 = "Adom";

if(text.length > text1.length) {
    console.log(text1);
}

//console.log(text.length);
//console.log(text1.length);


//2 uzduotis Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). 
//Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius 
//atspausdintų tokį sakinį :Aš esu Vardenis Pavardenis. Man yra XX metai(ų)".

let vardas = "Gintare";
let pavarde = "Jackeviciene";
let birth = 1985;
let date = 2023;
let amzius = date - birth;

console.log(`As esu ${vardas} ${pavarde}. Man yra ${amzius} metai`);

//8 uzduotis Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. 
//Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš pirmų vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.

let text2 = "Evenas";
let text3 = "Seagalas";
let bendras = text2.charAt(0) + text3.charAt(0);

console.log(bendras);

// 3 uzduotis Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. 
//Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.

let text0 = "Stevenas";
let text01 = "Seagalas";
let visas = text0.slice(-3) + text01.slice(-3);

console.log(visas);

//4 uzduotis Sukurti kintamąjį su stringu: “Once upon a time in hollywood”. 
//Jame visas “o” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  Rezultatą atspausdinti.

let text4 = "Once upon a time in hollywood";
text4 = text4.replaceAll("o", "*").replaceAll("O", "*");
console.log(text4);
//console.log(text4.toLowerCase().replaceAll(`o`, `*`));


function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//5 uzduotis Sukurkite keturis kintamuosius kuriems sugeneruokite atsitiktines 
//reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų. 

let a = rand(0, 2);
let b = rand(0, 2);
let c = rand(0, 2);
let d = rand(0, 2);
let nulis = 0;
let vienas = 0;
let du = 0;

if(a === 0)
nulis++;

if(b === 0)
nulis++;

if(c === 0)
nulis++;

if(d === 0)
 nulis++;

 if(a === 1)
vienas++;

if(b === 1)
vienas++;

if(c === 1)
vienas++;

if(d === 1)
 vienas++;

 if(a === 2)
du++;

if(b === 2)
du++;

if(c === 2)
du++;

if(d === 2)
 du++;

console.log(a, b, c, d);

console.log(nulis,  vienas, du);

//9 uzduotis.Parašyti kodą, kuris generuotų atsitiktinį stringą 
//iš lotyniškų mažųjų raidžių. Stringo ilgis 3 simboliai.
let raides = "abcdefghijklmnrstzv";
    console.log(raides[rand(0, raides.length - 1)] + raides[rand(0, raides.length - 1)] + raides[rand(0, raides.length - 1)]);


//6 uzduotis
a = rand(0, 4);
b = rand(0, 4);
let rezultatas = 0;

if(a > b) {
    if(b === 0) {
        rezultatas = "daugyba is nulio";
    } else {
        rezutatas = (a / b).toFixed(2);
    }
     
 } else {
    if(a === 0){
         rezultatas ="begalybe"
    } else {
        rezultatas = (b / a).toFixed(2);
    }
}
console.log(rezultatas);


//7 uzdupotis Naudokite funkciją ir sukurkite tris kintamuosius kuriems 
//priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite vidurinę reikšmę.

   a = rand(0, 25);
   b = rand(0, 25);
   c = rand(0, 25);

   let min = Math.min(a, b, c);
   let max = Math.max(a, b, c);

   rezultatas = (a + b + c) - (min + max);
   console.log(rezultatas);












