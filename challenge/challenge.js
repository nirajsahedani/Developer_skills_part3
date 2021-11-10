// 1) Understanding the Problem
// -How to display single array value
// -How to concate single array value with some string and console

// 2) Breaking up into sub-Problems
// -Fetch turn by turn array value
// -Print array value with some string

const temperatures = [17, 21, 23];
//const temperatures = [12, 5, -5, 0, 4];

function printForecast(arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]} c in ${i + 1} days...`;
    //console.log(`...${arr[i]} c in ${i + 1} days`);
  }
  console.log("..." + str);
}

printForecast(temperatures);
