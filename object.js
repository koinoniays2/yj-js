// 객체생성
/*
var tv = new Object();
tv.color = "white";
tv.price = 300000;
tv.info = function() {
    document.write(`tv 색상 : ${this.color} <br />`);
    document.write(`tv 가격 : ${this.price} <br />`);
}

var car = {
    color:"black", price:5000000, 
    info: function() {
        document.write(`car 색상 : ${this.color} <br />`); // this = 객체 내를 지칭
        document.write(`car 가격 : ${this.price} <br />`);
    }
}
document.write(`<h1>tv 객체 메서드 호출</h1>`);
tv.info();
document.write(`<h1>car 객체 메서드 호출</h1>`);
car.info();
*/


// Date 객체
// "use strict"
/*
var today=new Date();
var nowMonth=today.getMonth()+1, nowDate=today.getDate(), nowDay=today.getDay();

document.write(`<h1>오늘 날짜 정보</h1>`);
document.write(`현재 월: ${nowMonth} <br />`);
document.write(`현재 일: ${nowDate} <br />`);
document.write(`현재 요일: ${nowDay} <br />`);

var worldcup=new Date(2002,4,31);
var theMonth=worldcup.getMonth(), theDate=worldcup.getDate(), theDay=worldcup.getDay();
document.write(`<h1>월드컵 날짜 정보</h1>`);
document.write(`2002월드컵 ${theMonth}월 <br />`);
document.write(`2002월드컵 ${theDate}일 <br />`);
document.write(`2002월드컵 ${theDay}요일 <br />`);

var nowYear = today.getFullYear();
theDate = new Date(nowYear, 11, 31);
var diffDate = theDate.getTime()-today.getTime();
var result = Math.ceil(diffDate / (60 * 1000 * 60 * 24));
document.write(`연말 D-day: ${result}일 남았습니다.`);
*/

// 수학 객체
/*
var num = 2.1234;

var maxNum = Math.max(10, 5, 8, 30);
var minNum = Math.min(10, 5, 8, 30);
var roundNum = Math.round(num);
var floorNum = Math.floor(num);
var ceilNum = Math.ceil(num);
var rndNum = Math.random();
var piNum = Math.PI;
var dice = Math.floor(Math.random() * 11);

document.write(`최댓값 ${maxNum} <br />`);
document.write(`최솟값 ${minNum} <br />`);
document.write(`소수점 첫째 자리 반올림 ${roundNum} <br />`);
document.write(`소수점 첫째 자리 내림${floorNum} <br />`);
document.write(`소수점 첫째 자리 올림${ceilNum} <br />`);
document.write(`0과 1사이 랜덤 ${rndNum} <br />`);
document.write(`원주율 상수 ${piNum} <br />`);
document.write(`${dice} <br />`);
*/

// 컴퓨터 가위 바위 보 맞추기
/*
document.write(`<h1>컴퓨터 가위, 바위, 보 맞추기</h1>`);
var game = prompt("가위, 바위, 보 중 선택하세요");
var gameNum;
switch(game) {
    case "가위":
        gameNum = 1; break;
    case "바위":
        gameNum = 2; break;
    case "보":
        gameNum = 3; break;
    default: alert("잘못 작성했습니다.");
        location.reload();
}
var com = Math.ceil(Math.random()*3);
document.write(`컴퓨터가 낸 것은?! <img src=images/math_img_${com}.jpg width="200">`); // 컴퓨터가 내는 것

if(gameNum===com){
    document.write(`당신은?! ${game} <img src=images/game_1.jpg width="200"> 맞췄습니다!!`); // 맞춤
}else {
    document.write(`당신은?! ${game} <img src=images/game_2.jpg width="200"> 틀렸습니다!!`); // 틀림
}
*/

// 가위 바위 보 게임
document.write("<h1>가위 바위 보 대결</h1>");
var game = prompt("가위, 바위, 보 중 선택하세요");
var com = Math.ceil(Math.random()*3);

var gameNum; // 유저가 prompt에 넣은 가위 바위 보에 숫자 정하기(com과 비교)
switch(game) {
    case "가위":
        gameNum = 1; break;
    case "바위":
        gameNum = 2; break;
    case "보":
        gameNum = 3; break;
    default: alert("잘못 작성했습니다.");
        location.reload();        
}

var comName; // 컴퓨터의 랜덤숫자에 1.가위, 2.바위, 3.보 이름 정하기
switch(com){
    case 1:
        comName = "가위"; break;
    case 2:
        comName = "바위"; break;
    case 3:
        comName = "보"; break;
}

var comImg =`<img src=images/math_img_${com}.jpg width="200">`;
var userImg = `<img src=images/math_img_${gameNum}.jpg width="200">`;
var result = `컴퓨터는 ${comImg} <b>${comName}</b> <br />당신은 ${userImg} <b>${game}</b> <br />`
var win = result+`<img src=images/game_1.jpg width="200">`
var lose = result+`<img src=images/game_2.jpg width="200">`
var draw = result+`<img src=images/game_3.jpg width="200">`

if((com===1 && gameNum===2)||(com===2 && gameNum===3)||(com===3 && gameNum===1)) {
    document.write(win);
}else if((com===1 && gameNum===3)||(com===2 && gameNum===1)||(com===3 && gameNum===2)) {
    document.write(lose);
}else {
    document.write(draw);
}