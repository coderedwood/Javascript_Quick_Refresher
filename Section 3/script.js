'use strict';
// const measureKelvin = function () {
//     const measurement = {
//         type: 'temp',
//         unit: 'celcius',
//         value: Number(prompt('Degrees celcius;')),
//     };

//     debugger;
//     console.table(measurement);
//     const kelvin = measurement.value + 273;
//     return kelvin;
// }

// console.log(measureKelvin());

const data1 = [17, 21, 23]
const data2 = [12, 5, -5, 0, 4]

const printForecast = function(arr) {
    let temp = ''
    for (let i =0; i<arr.length; i++){
        temp += `${arr[i]}°C in ${i+1} days ... `;
    }
    console.log('... ' + temp);
}

printForecast(data1);
printForecast(data2);