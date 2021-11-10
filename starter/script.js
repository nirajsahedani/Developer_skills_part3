// Remember, we're gonna use strict mode in all scripts now!
"use strict";

//Problem:
/*we work for company building a smart home thermometer. 
Our most recent task is this: "Given an array of Temperature of one day , calculate temperature Amplitude. 
Keep in mind that sometimes there might be snsor error.*/

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the Problem
// -what is temp amplitude? Answer: diff between highest and lowest temp
// -how to compute min and max temp?
// -what's a sensor error? and what to do?

// 2) Breaking up into sub-Problems
// -How to ignores error
// -Find max value in Temp array
// -Find min value in Temp array
// -Subtract min from max (amplitude) and return it

const calcAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemperature = temps[i];

    if (typeof curTemperature !== "number") continue;
    if (curTemperature > max) {
      max = curTemperature;
    }
    if (curTemperature < min) {
      min = curTemperature;
    }
  }
  console.log(min, max);
  return max - min;
};

const amplitude = calcAmplitude(temperatures);
console.log(amplitude);

//Problem-2
//For 2 array

// 1) Understanding the Problem
// -calculate for both array same procedure twice: No , Just merge 2 array

// 2) Breaking up into sub-Problems
// -merge 2 arrays

const calcAmplitudeNew = function (t1, t2) {
  const tempsNew = t1.concat(t2);
  console.log(tempsNew);

  let max = tempsNew[0];
  let min = tempsNew[0];

  for (let i = 0; i < tempsNew.length; i++) {
    const curTemperature = tempsNew[i];

    if (typeof curTemperature !== "number") continue;
    if (curTemperature > max) {
      max = curTemperature;
    }
    if (curTemperature < min) {
      min = curTemperature;
    }
  }
  console.log(min, max);
  return max - min;
};

const amplitudeNew = calcAmplitudeNew([3, 8, 6], [-5, 2, 0]);
console.log(amplitudeNew);

// Debuging with the console and breakpoints

const convertKelvin = function () {
  const mesurement = {
    type: "Temp",
    unit: "celsius",

    //fix error
    value: Number(prompt("Degree Celsius")),
  };

  //find
  console.table(mesurement);

  const kelvin = mesurement.value + 273;
  return kelvin;
};

//identify

console.log(convertKelvin());
