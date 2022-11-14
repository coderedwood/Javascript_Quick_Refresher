/* const firstName = 'Jonas'
const job = 'Teacher'
const birthYear = 1991
const year = 2037

const jonas = "I'm " + firstName + ', a ' + (year-birthYear) + ' year old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`); */

/* const markMass = 56;
const markHeight = 1.28;
const johnMass = 78;
const johnHeight = 1.59;

const markBMI = markMass / (markHeight ** 2);
const johnBMI = johnMass / (johnHeight ** 2);

if (markBMI > johnBMI)
{
    console.log(markBMI);
}
else{
    console.log(johnBMI);
}

console.log(`John's BMI is ${johnBMI} and Mark's BMI is ${markBMI}.`) */

/* const scoreDophins = ((96 + 108 + 89)/3)
const scoreKoalas = ((88 + 91 + 110)/3)

if (scoreDophins > scoreKoalas) {
    console.log(`Dophins win, score = ${scoreDophins}`)
} else if (scoreDophins < scoreKoalas) {
    console.log(`Koalas win, score = ${scoreKoalas}`)
} else {
    console.log(`It's a draw Dolphins score and Koalas score = ${scoreDophins}`)
} */

// const bill = 430;
// let tip;

// if (bill >=50 && bill <=300)
// {
//     tip = bill * 0.15;
// }else {
//     tip = bill * 0.2;
// }

/* const tip = (bill >=50 && bill <=300) ? bill * 0.15 : bill *0.2;
console.log (`The bill was ${bill} and the tip was ${tip}. The total is ${bill + tip}`); */
'use strict';

/* function logger() {
    console.log('My name is Dwayne');
}

//calling / running /invoking the function
logger();
logger();
logger();


function fruitProcessor(apples, oranges){
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice); */

/* //Function declaration
function calcAge1(birthYear){
    return 2037 - birthYear;
}

const age1 = calcAge1(1999);

//function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2) */

/* const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(2000);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 -age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1991, 'James'));
console.log(yearsUntilRetirement(2006, 'Kayla')); */

/* function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`
    return juice;
}

console.log(fruitProcessor(2,3)); */

/* const calcAge = function(birthYear) {
    return 2037 - birthYear
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 -age;

    if(retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
    } else{
        console.log(`${firstName} has already retired.`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, 'Dwayne'));
console.log(yearsUntilRetirement(1950, 'Jackie')); */

//Coding challenge 
// Function for calculating average
/* const calcAverage = (num1, num2, num3) => ((num1 + num2 + num3) / 3);

function checkWinner(avgKoalas, avgDolphins) {
    if (avgKoalas > 2 * avgDolphins){
        console.log(`The Koalas win (${avgKoalas} vs ${avgDolphins})`);
    } else if (2 * avgKoalas < avgDolphins) {
        console.log(`The Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    } else {
        console.log(`No one wins`);
    }
}

const koalasAvg = calcAverage(65,54,49);
const dolphinsAvg = calcAverage(44,23,71);
checkWinner(koalasAvg,dolphinsAvg);

const koalasAvg1 = calcAverage(23,34,27);
const dolphinsAvg1 = calcAverage(85,54,41);
checkWinner(koalasAvg1,dolphinsAvg1); */

// Coding challenge for arrays

// if (bill >=50 && bill <=300)
// {
//     tip = bill * 0.15;
// }else {
//     tip = bill * 0.2;
// }

// const tip = (bill >=50 && bill <=300) ? bill * 0.15 : bill *0.2;

// const tip = (bill) => { (bill >=50 && bill <= 300) ? bill * 0.15 : bill * 0.2};

function calcTip(bill) {
    return bill >=50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const billArray =  [125 , 555, 44];

const tipArray = [calcTip(billArray[0]), calcTip(billArray[1]), calcTip(billArray[2])];
const totalArray = [billArray[0] +tipArray[0],billArray[1] +tipArray[1],billArray[2] +tipArray[2]]

console.log(`${billArray},
${tipArray},
${totalArray}`);