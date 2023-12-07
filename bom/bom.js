/* 팝업창 띄우기
window.open("bom.html", "pop1","width=300, height=400, left=300, top=50"); */

/* setInterval() 메소드
let addNum = 0;
let subNum = 1000;

let auto_1 = setInterval(function() {
    addNum++;
    console.log("addNum: " + addNum);
}, 3000);

let auto_2 = setInterval(function() {
    subNum--;
    console.log("subNum: " + subNum);
}, 3000);
*/

window.addEventListener("load", function () {
    // 시계
    /*
    const second = document.querySelector("#second");
    setInterval(function(){
    let day = new Date();
    second.innerHTML = `${day.getHours()}시 ${day.getMinutes()}분 ${day.getSeconds()}초`;
    }, 1000) */

    /*
    // 원
    //1. setTimeout을 이용하여 화면 로딩후 5초뒤에 빨간색 동그라미 화면중앙에 출력
    const circle = document.querySelector(".circle");
    setTimeout(function(){
        circle.style.display="block";
    }, 5000);

    //2. 1초간격으로 가로 5px 세로 5px 커지게 하기
    let px = 100;
    let add = setInterval(function(){
        circle.style.height = px + "px";
        circle.style.width = px + "px";
        px += 5;
        // circle.style.cssText = `width:${px}px; height:${px}px`

        //3. 가로150px이 되면 커지는것 중단
        if(px===150) {
            clearInterval(add);
        }
        
    }, 1000)
    */

    // screen 객체
    /*
    console.log(screen.width); //화면의 너비값 1920
    console.log(screen.height); //화면의 높이값 1080
    console.log(screen.availWidth); //작업표시줄 제외 화면너비 1920
    console.log(screen.availHeight); //작업표시줄 제외 화면높이 1040
    console.log(screen.colorDepth); //사용자 모니터가 표현 가능한 컬러bit 24
    */

    // location 객체
    /*
    let url="http://www.naver.com"
    // location.href=url;
    console.log(location.hash); //url의 #에 명시된 해시값을 반환
    console.log(location.hostname);
    console.log(location.host);
    console.log(location.protocol);
    console.log(location.search);
    */

    //navigator
    /*
    let info = navigator.userAgent.toLocaleLowerCase();
    let osImg = null;
 
    if(info.indexOf('windows') >=0) {
     osImg = "windows.png";
    } else if(info.indexOf('macintosh') >=0) {
     osImg = "macintosh.jpg";
    } else if(info.indexOf('iphone') >=0) {
     osImg = "iphone.png"
    } else if(info.indexOf('android') >=0) {
     osImg = "android.png";
    }
 
    document.write(`<img src="images/${osImg}"><br />`);
    let sc_w = screen.width;
    let sc_h = screen.height;
 
    document.write(`모니터 해상도 너비: ${sc_w}px`);
    document.write(`모니터 해상도 높이: ${sc_h}px`);
    */

    //미션
    /*
    let phoneNum = "010-2345-1234"
    let result_1 = phoneNum.substring(0,9);
    console.log(result_1,"****");
    let imgSrc = "images/bnt_out.jpg"
    let result_2 = imgSrc.replace("out","over");
    console.log(result_2);
 
    let menu=['짜장면', '돈가스', '된장국', '김치찌개', '회덮밥'];
    let menuNum = Math.floor(Math.random()*menu.length);
    var result = menu[menuNum];
    console.log(result);
    */

    // let offset = {x:0, y:0};
    // document.write(`<button class=btn>버튼</button>`);
    // let button = document.querySelector(".btn");
    // button.onmousedown = function(e) {
    //     offset.x = e.offsetX;
    // }
    // setTimeout(function(){
    //     console.log(offset);
    // },5000);

    /* ------------------------------함수-------------------------------------*/
     
    let count = 0;
     myFnc(); // 호출이 먼저 되어도 호이스팅되어 호출이 됨
     function myFnc(){
         count++;
         document.write("hello" + count,"<br />");
     }
 
     myFnc();
 
     let theFnc = function(){
         count++;
         document.write("bye" + count, "<br />");
     }
 
    theFnc();
    

})