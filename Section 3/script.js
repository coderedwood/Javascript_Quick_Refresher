'use strict';
const measureKelvin = function () {
    const measurement = {
        type: 'temp',
        unit: 'celcius',
        value: Number(prompt('Degrees celcius;')),
    };

    debugger;
    console.table(measurement);
    const kelvin = measurement.value + 273;
    return kelvin;
}

console.log(measureKelvin());