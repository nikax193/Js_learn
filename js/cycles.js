"use strict";
//Циклы 

let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num <= 57)

for (let i = 1; i < 8; i++) {
    // console.log(i)
    console.log(num);
    num++;
}

for (let i = 1; i < 8; i++) {
    if (i === 6) {
        // break
        continue
    }
    console.log(i)
}

for (let i = 0; i < 3; i++) {
    console.log(i)
    for (let j = 0; j <3; j++)
    console.log(j)
}


let result = "";
const length = 7;

for (let i = 1; i < length; i++) {

    for (let j =0; j < i; j++) {
        result +="*"
    }

    result += '\n';
}

    console.log(result)


    function firstTask() {
        // Пишем решение вот тут
        for (let i = 5; i <= 10; i++) {
            console.log(i)
        }
        
    }
    firstTask();

    function secondTask() {
        // Пишем решение вот тут
        for (let i = 20; i >= 10; i--) {
            if (i === 13) break
            console.log(i)
            
        }
        
    }
    secondTask();


    function thirdTask() {
        // Пишем решение вот тут
        for (let i = 2; i <= 10; i++) {
            if (i % 2 === 0) {
                console.log(i)
            }
        
        }
        
    }
    thirdTask();

    // Цикл, который нужно переписать:
    // for (let i = 2; i <= 16; i++) {
    //     if (i % 2 === 0) {
    //         continue;
    //     } else {
    //         console.log(i);
    //     }
    // }

    function fourthTask() {
        // Пишем решение вот тут
        let i = 2;

        while (i <= 16) {
            if (i % 2 === 0) {
                i++;
                continue;
            }else {
                console.log(i);
            }
            i++;
        }
        
    }
    fourthTask()       

    function fifthTask() {
        const arrayOfNumbers = [];
    
        // Пишем решение вот тут
        for (let i = 5; i < 11; i++) {
            arrayOfNumbers[i - 5] = i
        }
        
        console.log(arrayOfNumbers)
        // Не трогаем
        return arrayOfNumbers;
    }
    fifthTask()

    