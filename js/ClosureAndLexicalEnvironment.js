// let number = 5; debugger;

// function logNumber() {
//     // let number = 4; debugger;
//     console.log(number);
// }

// number = 6;

// logNumber(); debugger;

// number = 8;

// logNumber(); debugger;

function createCounter() {
    let counter = 0;

    const myFunction = function() { debugger// function expresion
        counter = counter + 1; debugger// save link
        return counter;debugger
    }

    return myFunction; 
}
debugger
const increment = createCounter();debugger
const c1 = increment(); debugger//when call function created new lexical enviroment
const c2 = increment();debugger
const c3 = increment();debugger

console.log(c1, c2, c3);
