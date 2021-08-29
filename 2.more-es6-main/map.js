const numbers = [4, 6, 8, 10];
const output2 = [];

// function doubleOld(number) {
//     return number * 2;
// }

const doubleIt = number => number * 2;

for (const number of numbers) {
    const result = doubleIt(number);
    output2.push(result);
}
// console.log(output2);

// 1. loop through each element
// 2. for each element call the provided function
// 3. result for each element will be stored in an array

// const output = numbers.map(doubleIt);
// const output = numbers.map(number => number * 2);
const output = numbers.map(x => x * 2);
// console.log(output);

const squares = numbers.map(x => x * x);
// console.log(squares);




// my practice.............
const myArrays = [1,2,3,4,5];
// const outputArray =[];
// for (const myArray of myArrays){
//     updateMyArray = double(myArray);
//     outputArray.push(updateMyArray);
// }
// console.log(outputArray);
//  function double(arrays){
//      return arrays * 2;
//  }
// const arrayOutput = array.map(array => array * 2);
// console.log(arrayOutput)
const output3 = myArrays.map( x => x * x);
console.log(output3);

