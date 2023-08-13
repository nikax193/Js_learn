// const name = 'Jhon', surname = 'Smith';

// console.log("Hello", name + surname)


// const result = getSum(5, 6);
// const getSum = function(a, b) {
//     // return a + b;
//     console.log(a + b)
// }
// getSum();

const user = {
    name: 'Alex',
    age: 25
}
const {name, age} = user;

for (let i = 1; i < 5; i++) {
    console.log(i + 1)
}


// Что будет содержаться в переменной result после завершения кода?
function foo(a,b) {
    const [first] = a;
    const {eng} = b;
    console.log(`${first} ${eng}`);

    // return `${first} ${eng}`;
}
const result = foo(['Hello', 'Привет'], {ru: 'Мир', eng: 'World'});


// Что будет содержаться в переменной time?

let time = '';
5 > 3 || 2 ? time = 'Day' : time = 'Night' 

console.log(time)