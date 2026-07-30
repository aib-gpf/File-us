// Floating Hearts

const hearts = document.querySelector(".hearts");

setInterval(() => {

const heart = document.createElement("div");

heart.className = "heartFloat";

heart.innerHTML = "❤";

heart.style.left = Math.random() * 100 + "%";

heart.style.fontSize = (18 + Math.random() * 28) + "px";

heart.style.animationDuration = (8 + Math.random() * 6) + "s";

hearts.appendChild(heart);

setTimeout(() => {

heart.remove();

},14000);

},500);


// Fade on Scroll

const fades = document.querySelectorAll(".fade");

function reveal(){

const trigger = window.innerHeight * 0.9;

fades.forEach(item=>{

const top = item.getBoundingClientRect().top;

if(top < trigger){

item.classList.add("show");

}

});

}

window.addEventListener("scroll",reveal);

window.addEventListener("load",reveal);


// Continue Button

document
.getElementById("continueBtn")
.addEventListener("click",()=>{

window.location.href="netflix.html";

});
