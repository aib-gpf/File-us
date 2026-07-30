/* ===========================
   OUR STORY ❤️
   HOME PAGE SCRIPT
=========================== */

// Floating Hearts
const hearts = document.querySelector(".hearts");

function createHeart() {
    const heart = document.createElement("div");

    heart.className = "heartFloat";
    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 25) + "px";
    heart.style.animationDuration = (6 + Math.random() * 6) + "s";
    heart.style.animationDelay = (Math.random() * 5) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 12000);
}

setInterval(createHeart, 450);

// Fade Animation
const items = document.querySelectorAll(
".heart,.title,.line,.surprise,#beginBtn"
);

items.forEach((item,index)=>{
    item.classList.add("hidden");

    setTimeout(()=>{
        item.classList.add("show");
    },400 + index*350);
});

// Begin Button
const beginBtn = document.getElementById("beginBtn");

beginBtn.addEventListener("click",()=>{

    document.body.style.transition="0.8s";
    document.body.style.opacity="0";

    setTimeout(()=>{
        window.location.href="chapter1.html";
    },800);

});