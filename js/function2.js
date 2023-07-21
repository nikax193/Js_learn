//****/
function sayHello(name) {
    console.log(`Привет, ${name}!`)
    return `Привет, ${name}!`;
}
sayHello('Alex');

//**** */
function returnNeighboringNumbers(num) {
    console.log([num - 1, num, num + 1]);
    return [num - 1, num, num + 1]
}
returnNeighboringNumbers(5);


function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }
        let str = '';

        for (let i = 1; i <= times; i++) {
            if(i === times) {
                str += `${num * i}`;
            } else {
                str += `${num * i}---`;
            }
        }
        console.log(str)
        return str
}
getMathResult(5, 3);
getMathResult(3, 10);
getMathResult(10, 5);
getMathResult(10, '5');
getMathResult(10, 0);
getMathResult(20, -5);