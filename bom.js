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

window.addEventListener("load", function(){
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

    let url="http://www.naver.com"
    // location.href=url;
    console.log(location.hash); //url의 #에 명시된 해시값을 반환
    console.log(location.hostname);
    console.log(location.host);
    console.log(location.protocol);
    console.log(location.search);
    
})