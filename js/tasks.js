/*1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)*/

const a = 5; 
const b = 7;

if (a > b) {
    console.log (`skaičius "${a}" yra didesnis`);
} else if (a < b) {
    console.log (`skaičius "${b}" yra didesnis`);
} else if (a === b) {
    console.log (`skaičiai yra lygus`);
} 



/*2.Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)*/

const skaiciai = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i >= 10; i++) {
    console.log(i);
}

/*3.Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
*/
for(let i = 0; i <= 8; i+=2) {
    console.log(i);
}

/*4.Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
*/
function rand(min, max){return Math.floor(Math.random()*(max-min+1)+min);}
for (let i = 1; i < 10; i++) {
     console.log(rand(0,10));
 }

 /*5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
 */
 let n = 1;
while (n !== 5) {
     n = Math.floor(Math.random() * 10);
     console.log(n)
}

/*6.Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)
*/

/*7.Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
*/
