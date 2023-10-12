const aNumber = 5;
const aString = 'string';
const aBoolean = true;
let aUndefined;
let aNull = null;

// console.log(typeof aNumber + '\n' + typeof aString + '\n' + typeof aBoolean + '\n' + typeof aUndefined + '\n' + typeof aNull);
// console.log(typeof aNull);


// traingle perimeter

const a = 5;
const b = 4;
const c = 6;

console.log('a=' + a + ', b=' + b + ', c=' + c + ' bol \n gurvaljnii perimeter ni: ' + (a + b + c) + '   \n\n\n')


// circle 

const diameter = 4;
const pi = Math.PI;

console.log('Diameter ni: ' + diameter + 'bol \nene toirgiin talbai ni: ' + (diameter * pi) + '   \n\n\n')


// tegshitgel

// m = y2-y1/x2-x1 хариуг олох 

const y = 5, x = 2;
let m = null;

m = (y * y - y) / (x * x - x);
console.log('y=' + y + ' x=' + x + ' uyd \n M huvisagchiin utga ni: ' + m + '   \n\n\n')

//13 Gigabyte 15gb = ? bit 

let xGB = 15;
let aByte = (10 ** 9);
let resultByte = 0, resultBit = 0;
resultByte = xGB * aByte;
resultBit = resultByte * 8;

// console.log(xGB + 'GB=' + resultByte + 'byte');
// console.log(xGB + 'GB=' + resultBit + 'bit' + '   \n\n\n');


// 15 МB дата 3 секундэд манай интернэт онлайнаар татаж чаддаг бол түүнийг BIT Rate-ийг олно уу.
let MByte = (10 ** 6);
let aBit = 8;
let data = 15 * MByte;
let allSec = 3;

let BytePerSecond = data / allSec;
let BitPerSecond = BytePerSecond * 8;

console.log(allSec + ' sec-d ' + data + 'Byte data tataj chaddag bol 1 sec-d ' + BytePerSecond + 'byte data tatna');
console.log('tegvel 1 sec-d ' + BitPerSecond + 'bit rate bolno' + '\n\n\n');

function printHelloe(num) {
    let i = 0;
    while (i < num) {
        console.log('Void')
        i++;
    }
}

// printHello(4);


const hun = {
    name: 'bold',
    age: 23,
    print: function (num) {
        let i = 0;
        while (i < num) {
            console.log('Vosconsid')
            i++;
        }
    }
}




function printMoji(str, c) {
    let i = 0;
    let j = 0;
    while (i < str.length) {
        if (str[i] === c) {
            j++;
        }
        i++;
    }
    console.log(j)
}

printMoji('zsoool', 'o')