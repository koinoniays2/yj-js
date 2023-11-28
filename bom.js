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

// 1초마다 증가하는 타이머
window.addEventListener("load", function(){
    const second = document.querySelector("#second");
    
    
    setInterval(function(){
        let day = new Date();
        second.innerHTML = `${day.getHours()}시 ${day.getMinutes()}분 ${day.getSeconds()}초`;
    }, 1000)
})