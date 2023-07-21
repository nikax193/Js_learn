// function showFirstMessage(text) {
//     console.log(text);
//   let  num = 10;
// }
// showFirstMessage("hello world!!!"); 

// console.log(num);

//global

let num = 20

function showFirstMessage(text) {
    console.log(text);
    // let  num = 10;
    console.log("test",num)
}
showFirstMessage("hello world!!!"); 

console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(1, 2));
// console.log(calc(2, 3));  

//fuction declaration
function ret() {
    let num = 50;
//
    return num;
}

const anotherNum = ret();
console.log(anotherNum);


// function expresion

const logger = function() {
    console.log("hello")
}; //; - ned
logger();


// arrow function
const calc = (a, b) => {
    return a + b
}

// const usdCurr = 28;
// const eurCurr = 32;

// function convert(amount, curr) {
//     console.log(curr * amount);
// }
// convert(500, usdCurr);
// convert(500, eurCurr);

//

const usdCurr = 28;
const discount = 0.9;

function convert(amount, curr) {
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);

}

const res = convert(500, usdCurr);

promotion(res);

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i)
        if (i === 3) return
    }
    console.log('done');
}

test()

function doNoting() {};
console.log(doNoting() === undefined);



