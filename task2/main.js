const str = '32bk55c890f';

function parsData(data) {
    let arrStrNumber = [];
    let arrNumber = [];
    let countReverse = 0;
    let typeString = isNaN(Number(data[0]));
    if (typeString === false) countReverse = 1;
    let buffer = '';
    try {
        for (let i = 0; i <= str.length; i++) {
            if (isNaN(Number(data[i])) !== typeString) {
                ++countReverse;
                typeString = isNaN(Number(data[i]));
            }
            if (countReverse === 2 || (i === data.length)) {
                arrStrNumber.push(buffer);
                buffer = ''.concat(String(data[i]));
                countReverse = 0;
            } else {
                buffer = buffer.concat(String(data[i]));
            }
        }
        console.log(arrStrNumber);
        for (let i = 0; i <= arrStrNumber.length - 1; i++) {
            let letter = '', number = '';
            for (let y = 0; y <= arrStrNumber[i].length - 1; y++) {
                if (isNaN(Number(arrStrNumber[i][y]))) {
                    if ( (arrStrNumber[i][y].charCodeAt(0)) <= 96 || (arrStrNumber[i][y].charCodeAt(0) ) >= 122) {
                        throw new Error(`${arrStrNumber[i][y]} invalid character`);
                    }
                    letter = letter.concat(arrStrNumber[i][y].charCodeAt(0) - 96);
                } else {
                    number = number.concat(arrStrNumber[i][y]);
                }
            }
            if (!Number(letter)) letter = 1;
            if (!Number(number)) number = 1;
            if (letter * number % 2 === 0) {
                arrNumber.push(letter * number)
            } else {
                arrNumber.push((-1) * letter * number)
            }
        }
        console.log(arrNumber);
        return arrNumber.reduce((a, b) => a + b, 0);
    } catch (e) {
        return e
    }
}

console.log(parsData(str));