const profile = document.querySelector("#profile");
const skills = document.querySelector("#skills");
const gallery = document.querySelector("#gallery");
const article1 = document.querySelector(".article1");

profile.innerHTML = profile.innerHTML.toUpperCase();
skills.innerHTML = skills.innerHTML.toUpperCase();
gallery.innerHTML = gallery.innerHTML.toUpperCase();


// console.log(article.innerText.replace("KyungBuk National","Daegu"));
for(let i=0; i<article1.childNodes.length; i++) {
    article1.childNodes[i].textContent=article1.childNodes[i].textContent.replace("KyungBuk National","Daegu");
}

