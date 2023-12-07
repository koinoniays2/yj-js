const profile = document.querySelector("#profile");
const skills = document.querySelector("#skills");
const gallery = document.querySelector("#gallery");
const article1 = document.querySelector(".article1");
const article2 = document.querySelector(".article2");
const article3 = document.querySelector(".article3");
const menuGallery = document.querySelector("#menu-gallery");
const img = document.querySelectorAll(".article3>img")

profile.innerHTML = profile.innerHTML.toUpperCase();
skills.innerHTML = skills.innerHTML.toUpperCase();
gallery.innerHTML = gallery.innerHTML.toUpperCase();


for(let i=0; i<article1.childNodes.length; i++) {
    article1.childNodes[i].textContent=article1.childNodes[i].textContent.replace("KyungBuk National","Daegu");
}

for(let i=0; i<article2.childNodes.length; i++) {
    let text = article2.childNodes[i].textContent;
    let textTrim = text.trim();
    article2.childNodes[i].textContent=textTrim.substring(0,13);
}

menuGallery.addEventListener('click', function(){
    // setTimeout(function(){
    //     let img = document.createElement("img");
    //     img.src = "images/hanbit.jpg";
    //     // article3.appendChild(img); //뒤에 추가
    //     article3.insertBefore(img, article3.children[1]);//앞에 insert
    //     },1000)
    setTimeout(function(){
        for(let i=0; i<img.length; i++) {
            img[i].style.display="inline-block";
        }
    },1000)
})