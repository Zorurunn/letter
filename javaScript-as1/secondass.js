// 1. Өгөгдсөн цагийг минутруу шилжүүлээд буцаа
function checkMinute(letHour) {
    return letHour * 60;
}
console.log(checkMinute(2) + '\n\n\n');

// 2. Өгөгдсөн тоог тэгш тоо бол “even”, сондгой бол “odd” гэж буцаа

function oddOrEven(num) {
    if (num % 2 === 0) {
        return 'even'
    } else {
        return 'odd'
    }
}
console.log(oddOrEven(20) + '\n\n\n');

// 3. Өгөгдсөн 3 тоо өсөх дарааллаар байгаа эсэхийг шалгаад тийм бол true, үгүй бол false буцаа
function isUpper(a, b, c) {
    if (a <= b && b <= c) {
        return true
    } else {
        return false
    }
}
console.log(isUpper(10, 100, 1000) + '\n\n\n');

// 4. Өгөгдсөн 3 тооны хамгийн ихийг буцаа

function max(a, b, c) {
    let max = a;
    if (b >= max) {
        max = b;
    } else if (c >= max) {
        max = c;
    }
    return max;
}
console.log(max(9, 5, 3) + '\n\n\n');

// 5. Өгөгдсөн 3 тоог буурах эрэмбээр хэвлэ.
// iluug zas
function lowerPrint(a, b, c) {
    if (a >= b && b >= c) {
        console.log(a + ' ' + b + ' ' + c)
    } else if (a >= c && c >= b) {
        console.log(a + ' ' + c + ' ' + b)
    } else if (b >= a && a >= c) {
        console.log(b + ' ' + a + ' ' + c)
    } else if (b >= c && c >= a) {
        console.log(b + ' ' + c + ' ' + a)
    } else if (c >= a && a >= b) {
        console.log(c + ' ' + a + ' ' + b)
    } else if (c >= b && b >= a) {
        console.log(c + ' ' + b + ' ' + a)
    }
}
lowerPrint(100, 200, 100);

// 6. A, B тоонууд өгөгдөхөд A тооны B зэргийг буцаа.
function square(a, b) {
    return (a ** b);
}
console.log(square(2, 4) + '\n\n\n');


// 7. A, B хоёр тоо өгөгдөхөд тухайн хоёр тооны ихийг нь багад нь хуваахад гарах үлдэгдлийг буцаа
function nokori(a, b) {
    if (a >= b) {
        return a % b
    } else {
        return b % a
    }
}

console.log(nokori(10, 22) + '\n\n\n');

// 8. Гурвалжны 2 тал өгөгдөхөд 3 дахь талын байж болох хамгийн их бүхэл утгыг буцаа
function traingleLong(a, b) {
    return (a + b) - 1;
}
console.log(traingleLong(10, 22) + '\n\n\n');

// 9. Өгөгдсөн жил өндөр жил эсэхийг шалгаад өндөр жил бол true, эсрэг тохиолдолд false буцаа
function leapYear(a) {
    if ((a % 4 !== 0) || (a % 100 === 0 && a % 400 !== 0)) {
        return false;
    } else {
        return true;
    }
}
console.log(leapYear(2200) + '\n\n\n');

// 10. Гурвалжны 3 тал өгөгдөхөд талбайг олж буцаа.
function traingleS(a, b, c) {
    let firstS;
    let lastS;

    firstS = (a + b + c) / 2;
    return lastS = Math.sqrt(firstS * (firstS - a) * (firstS - b) * (firstS - c));
}
console.log(traingleS(10, 8, 10) + '\n\n\n');

// 11. Квадрат тэгшитгэлийн 3 коэффициент өгөгдөхөд шийдүүдийг буцаа. Шийдгүй бол “Error” буцаа.
// b**2 -4*ac >= 0 ok 
// b**2 -4*ac < 0 not
function tegshitgel(a, b, c) {
    let result = null;
    if (b ** 2 - 4 * a * c >= 0) {

        return true;
    } else if (b ** 2 - 4 * a * c < 0) {
        return false
    }
}
console.log(tegshitgel(5, -8, -4) + '\n\n\n');

// 12. Төрсөн өдөр “YYYY-MM-DD” форматтай өгөгдөхөд одоог хүртэл элээсэн хоногийн тоог буцаа. (JS Date Object ашиглах)
function livedDays(y, m, d) {
    // torson oniig sar luu shiljuuleh 
    let resultYtoM = 0;
    if ((y % 4 !== 0) || (y % 100 === 0 && y % 400 !== 0)) {
        resultYtoM = (y * 12);
    } else {
        return resultYtoM = (y * 12) + 1;
    }
    console.log(resultYtoM)
    // 
    let resultYMtoD = 0;
    switch (resultYtoM) {
        case 1, 3, 5, 7, 8, 10, 12:
            resultYMtoD = m * 31;
            break;
        case 2:
            resultYMtoD = m * 28;
            break;
        default:
            resultYMtoD = m * 30;
            break;
    }

    //torson sariig udur luu hiljuuleh 
    let resultMtoD = 0;
    switch (m) {
        case 1, 3, 5, 7, 8, 10, 12:
            resultMtoD = m * 31;
            break;
        case 2:
            resultMtoD = m * 28;
            break;
        default:
            resultMtoD = m * 30;
            break;
    }

    return resultYMtoD + resultMtoD + d;
}

console.log(livedDays(1995, 1, 22) + '\n\n\n');

// let today = new Date();

// let year = today.getFullYear();
// let month = today.getMonth();
// let day = today.getDate();

// console.log(year + '年' + month + '月' + day + '日');

const today = new Date();

const birthYear = 1995;
let age = today.getFullYear() - 1995;


console.log(age)

