const watchBtn = document.getElementById("watchBtn");
const movieSection = document.getElementById("movieSection");
const movie = document.getElementById("movie");
const ending = document.getElementById("ending");
const giftBtn = document.getElementById("giftBtn");
const container = document.querySelector(".container");

// Watch Movie

watchBtn.addEventListener("click",()=>{

container.style.opacity="0";

setTimeout(()=>{

container.style.display="none";

movieSection.style.display="flex";

movie.play();

},700);

});
movie.addEventListener("ended",()=>{

movie.style.display="none";

ending.style.display="flex";

const credits=document.getElementById("credits");
const finalMessage=document.getElementById("finalMessage");

credits.style.display="block";

setTimeout(()=>{

credits.style.display="none";

finalMessage.style.display="block";

setTimeout(()=>{

giftBtn.style.display="inline-block";

},2500);

},7000);

});
// Open Gift Page

giftBtn.addEventListener("click",()=>{

window.location.href="gift.html";

});