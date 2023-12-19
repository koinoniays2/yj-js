const container = document.querySelector(".container");
const imgElem = document.querySelector(".video-img");
let loadedImgesCount = 0;
let totalImagesCount = 201; // 이미지의 총 갯수
let videoImages = []; //for문 돌린 이미지를 담아줄 배열


//이미지를 메모리에 올림
function loadImage() {
    for(let i=0; i<totalImagesCount; i++) {
        let imgElem = new Image(); // 객체에 경로를 넣는다.
        /* 이미지 로딩: new Image();를 사용하여 이미지 객체를 생성한 다음 
        src 속성에 이미지 파일의 경로를 할당하면 해당 이미지를 로딩 */
        imgElem.src = `./images/frame_${i}.jpg`;
        videoImages.push(imgElem);

        imgElem.addEventListener("load", function(){
            loadedImgesCount++;
            if(loadedImgesCount === totalImagesCount) {
                // console.log("이미지 로드 완료");
                init(); // 스크롤 이벤트 리스너 호출
            }
        });
    }
}
loadImage();

// 스크롤 이벤트 리스너
function init(){
    window.addEventListener("scroll", function(){ 
        let progress = window.scrollY / (container.offsetHeight - this.window.innerHeight); 
        /* container.offsetHeight - this.window.innerHeight -> 실제로 스크롤할 수 있는 값
        scrollY와 나누면 스크롤 위치를 0~1 사이로 만들 수 있다.
        console.log(progress); */
        if (progress < 0) progress = 0;
        if (progress > 1) progress = 1;

        this.requestAnimationFrame(function() {
            let currentFrame = Math.round((totalImagesCount-1) * progress); 
            /* currentFrame : 배열의 인덱스로 쓰임
            이미지 배열의 인덱스는 0부터 시작하므로, 배열의 길이(totalImagesCount)에서 1을 빼줌
            console.log(currentFrame); */
            imgElem.src = videoImages[currentFrame].src;
        });
    });
}