let number = 6;

console.log(-4/0);

console.log('string' * 9);

const storeName = 'My store';

const storeDescription = {
    budget: 10000,
    employees: ['Nika', 'Gio', 'Maxo'],
    products: {
        'cola': 20,
        'water': 5
    },
    open: true
}

console.log(storeDescription.open)

//cycles

let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }
// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

for (let i = 1; i < 10; i++) {
    console.log(num)
    num++;
}

for (let i = 1; i < 10; i++) {
    if (i === 8){
        // break
        continue
    }
    console.log(i)
}

//Цикл в цикле и метки
for (let i = 0; i < 3; i++) {
    console.log(i)
    for (let j = 0; j < 3; j++) {
        console.log(j)
    }
}

// Asterix
// *
// **
// ***
// ****
// *****
// ******

let result = '';
const length = 7;

for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
        result += "*"
    }


    result += '\n';
}

console.log(result) 

//метки
first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`)
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`)

        for (let k = 0; k < 3; k++) {
            if (k === 2) continue first;
            console.log(`Hhird level: ${k}`)

        }
    }
}

first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`)
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`)

        for (let k = 0; k < 3; k++) {
            if (k === 2) break first;
            console.log(`Hhird level: ${k}`)

        }
    }
}