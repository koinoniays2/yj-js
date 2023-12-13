let images = [];
let currentIndex = 0;

fetch('https://gateway.marvel.com:443/v1/public/characters?apikey=ffc43cbb3dccf31c32c2e2d5ea084434')
.then(response => response.json())
// .then(json => {
//     // console.log(json);
//     const container = document.querySelector("#container");
//     const ul = document.createElement("ul");
//     json.data.results.map((item, index) => {
//         let li = document.createElement("li");
//         li.classList.add("marvel-li");
//         li.textContent = item.name;
//         ul.appendChild(li);
//         // console.log(item.name);
//     });
//     container.appendChild(ul);

//     return json;
// })
.then(json => {
    // console.log(json);
    // console.log(json.data.results);
    
    const container = document.querySelector("#img-container");
    images = json.data.results.map((item) => {
        img = document.createElement("img");
        img.src = item.thumbnail.path + "." + item.thumbnail.extension;
        img.classList.add("marvel-img");
        container.appendChild(img);
        return img;
    });
    console.log(images);
    // setInterval(function () {
    //     changeImage("next");
    // }, 3000);
})

// let preBtn = document.querySelector("#prev-btn");
// let nextBtn = document.querySelector("#next-btn");

//     function changeImage(direction) {
//         if (direction === "next") {
//             currentIndex = (currentIndex + 1) % images.length;
//         } else if (direction === "prev") {
//             currentIndex = (currentIndex - 1 + images.length) % images.length;
//         }

  
//         let translateValue = -currentIndex * 200;
//         for (let i = 0; i < images.length; i++) {
//             images[i].style.transform = `translateX(${translateValue}px)`;
//         }
//     }

//     preBtn.addEventListener('click', function () {
//         changeImage("prev");
//     });
//     nextBtn.addEventListener('click', function () {
//         changeImage("next");
//     });
