// 컬러바꾸기
/*
let color = ["white", "yellow", "aqua", "purple"];
let i=0;
function changeColor() {
    i++;
    if(i>=color.length) {
        i = 0;
    }
    let changeBox=document.querySelector("#change-box");
    changeBox.style.backgroundColor = color[i];
}
*/
// function gugudan(num) {
//     if(num<=1 || 9<num || isNaN(num)) {
//         alert("2~9까지 입력하세요.");
//         location.reload();
//     }else {
//         for(let i=num; i<=num; i++) {
//             for(let j=1; j<10; j++){
//                 document.write(`${i} * ${j} = ${i*j} <br />`);
//             }
//         }
//     }
// }
// gugudan(+prompt("출력할 구구단 입력(2~9)"));
/*
function gugudan2(num) {
    if(num<=1 || 9<num || isNaN(num)) {
        alert("2~9까지 입력하세요.");
        location.reload();
    }else {
            for(let j=1; j<10; j++){
                document.write(`${num} * ${j} = ${num*j} <br />`);
            }
        }
    }
gugudan2(+prompt("출력할 구구단 입력(2~9)"));
*/
//1204
/*
function myFnc(name, area) {
    document.write(`안녕하세요 ${name} 입니다. <br />`);
    document.write(`사는 곳은 ${area} 입니다.<br /><br />`);
}
myFnc("홍당무", "서울");
myFnc("깍두기","부산");
*/

/*
let rightId = "korea";
let rightPw = "1234";
function login(userId, userPw) {
    if(userId===rightId) {
        if(userPw==rightPw) {
            document.write(`${userId}님 방문을 환영합니다.`);
        }else {
            alert("잘못된 비밀번호 입니다.");
        }
    }else {
        alert("존재하지 않는 아이디입니다.");
    }
}
let userId = prompt("아이디를 입력하세요");
let userPw = prompt("패스워드를 입력하세요.");

login(userId, userPw);
*/
/*
function sum1() {
    let sum = arguments[0] + arguments[1] + arguments[2];
    document.write(sum);
}
sum1(10, 20, 30);

function sum() {
    let sum = 0;
    for(let i=0; i <arguments.length; i++) {
        sum += arguments[i];
    }
    console.log(arguments);
    console.log(...arguments);
    document.write(sum);
    let [x, y , z] = [...arguments];
    console.log(x, y, z);
}
sum(10, 20, 30);
*/
/*
//계산기 함수 만들기
function calculate(x, y, z) {
    if (isNaN(x) || isNaN(y)) {
        document.write("숫자 입력이 올바르지 않습니다.");
    } else {
        if (z == "+") {
            document.write(`${x}${z}${y} = ${x + y}`);
        } else if (z == "-") {
            document.write(`${x}${z}${y} = ${x - y}`);
        } else if (z == "*") {
            document.write(`${x}${z}${y} = ${x * y}`);
        } else if (z == "/") {
            document.write(`${x}${z}${y} = ${x / y}`);
        } else if (z == "%") {
            document.write(`${x}${z}${y} = ${x % y}`);
        } else {
            document.write("연산 입력이 올바르지 않습니다.");
        }
    }
}
let arg1 = Number(prompt("첫번째 숫자를 입력하세요"));
let arg2 = Number(prompt("두번째 숫자를 입력하세요"));
let calc = prompt("연산(+, -, *, /, %)");
calculate(arg1, arg2, calc);
*/

/*
// 퀴즈1. 숫자만큼의 이후 "안녕하세요" {이름}!" 출력
function delayMessage(name, num) {
    setTimeout(() => {
        document.write(`안녕하세요 ${name}!`);
    }, (num * 1000));
};
delayMessage(prompt("이름을 입력하세요."), prompt("n초 뒤에 실행됩니다.","n"));
*/

/*
// 퀴즈2.
function formatNumber(phone) {
    let match = phone.match(/^(\d{3})(\d{3,4})(\d{4})$/);
    if (match) {
        let phoneNum = match[1] + '-' + match[2] + '-' + match[3];
        document.write(phoneNum);
      }else {
        document.write("휴대폰번호 10자리를 정확히 입력하세요.");

    }
}
formatNumber(prompt("전화번호입력."));
*/

/*
function formatNumber(num) {
if (num.length === 11) {
    let phone = num.slice(0, 3) + '-' + num.slice(3, 7) + '-' + num.slice(7);
    document.write(phone);
  }else if(num.length === 10) {
    let phone = num.slice(0, 3) + '-' + num.slice(3, 6) + '-' + num.slice(6);
    document.write(phone);
  } else {
    document.write("올바르지않습니다.");
  }
}

formatNumber(prompt("번호입력"));
*/
/*
function testAvg(arrData) {
    let sum=0;
    for(let i=0; i<arrData.length; i++) {
        sum += Number(prompt(`${arrData[i]} 점수는?`))
    }
    let avg = sum / arrData.length;
    return avg;
}

let arrSubject = ["국어", "수학"];
let result = testAvg(arrSubject);
document.write(`평균 점수는 ${result} 점입니다.`);
*/

/* 이전, 다음
let num = 1;
function gallery(direct) {
    if(direct) {
        if(num == 3) return;
        num++;
    }else {
        if(num == 1) return;
        num--;
    }
    let imgTag = document.getElementById("photo");
    imgTag.setAttribute("src", "images/pic_" + num + ".jpg");
}
*/

// 재귀함수
/* let num = 0;
function testFnc(){
    num++;
    document.write(num, "<br />");
    if(num == 10) return;

    testFnc();
}

testFnc();
console.log(num);
*/
function CheckWeight(name, height, weight) {
    this.userName = name;
    this.userHeight = height;
    this.userWeight = weight;
    this.minWeight;
    this.maxWeight;
    
    this.getinfo = function() {
        let str ="";
        str = `이름: ${this.userName}<br /> 키:${this.userHeight}<br /> 몸무게:${this.userWeight}<br />`;
        return str;
    }
    this.getResult = function() {
        this.minWeight = (this.userHeight - 100) * 0.9 - 5;
        this.maxWeight = (this.userHeight - 100) * 0.9 + 5;

        if(this.userWeight >= this.minWeight && this.userWeight <= this.maxWeight) {
            return "정상 몸무게입니다.";
        } else if(this.userWeight <= this.minWeight) {
            return "정상 몸무게보다 미달입니다";
        } else {
            return "정상 몸무게보다 초과입니다.";
        }
    }
}

let jang = new CheckWeight("장보리", 168, 62);
let park = new CheckWeight("박달재", 180, 88);
console.log(jang);
console.log(park);

document.write(jang.getinfo());
document.write(jang.getResult());