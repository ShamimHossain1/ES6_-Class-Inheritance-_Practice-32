
const numbers = [2, 4, 6, 3]
function getDouble (number){
    
    const output = [];
    for (const number of numbers){
        const doubled = doubleIt(number)
        output.push(doubled);
    }
    return output;
}

// call function to calculate
// function doubleIt(number) {
//     return number * 2;
// }

const doubleIt = num => num * 2

const result = getDouble(numbers);
console.log(result);

const makeDoble = numbers.map(doubleIt);
console.log(makeDoble);

const mapDoubleDirect = numbers.map(num => num *2);
console.log(mapDoubleDirect);

const makeDoble2 = numbers.map(x => x * 2);
console.log(makeDoble2);

const fiveTimes = [1,2,3,4,5].map(x => x * 5);
console.log(fiveTimes);