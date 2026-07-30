// Elements

const gift = document.getElementById("giftBox");
const letter = document.getElementById("letter");
const music = document.getElementById("giftMusic");
const replay = document.getElementById("replayBtn");

// Open Gift

gift.addEventListener("click",()=>{

music.play();

gift.classList.add("open");

setTimeout(()=>{

gift.style.display="none";

startTimeline();


},900);

});

// Fade Paragraphs

function showParagraphs(){

const items=document.querySelectorAll(".fade");

items.forEach((item,index)=>{

setTimeout(()=>{

item.classList.add("show");

},index*900);

});
}

function startTimeline(){

const timeline=document.getElementById("timeline");

const day=document.getElementById("dayText");

timeline.style.display="block";

const days=[

"❤️ Day 1 ❤️",

"❤️ Day 50 ❤️",

"❤️ Day 100 ❤️",

"❤️ Day 200 ❤️",

"❤️ Day 300 ❤️",

"❤️ Day 400 ❤️",

"❤️ Day 499 ❤️",

"💖 DAY 500 💖"

];

let i=0;

const timer=setInterval(()=>{

day.innerHTML=days[i];

i++;

if(i===days.length){

clearInterval(timer);

setTimeout(()=>{

timeline.style.display="none";

letter.style.display="block";

showParagraphs();

},1200);

}

},1000);

}


// Floating Hearts

const hearts=document.querySelector(".hearts");

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="absolute";

heart.style.left=Math.random()*100+"%";

heart.style.bottom="-50px";

heart.style.fontSize=(20+Math.random()*25)+"px";

heart.style.opacity=".6";

heart.style.animation="floatUp 8s linear forwards";

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

},500);

// Heart Animation

const style=document.createElement("style");

style.innerHTML=`

@keyframes floatUp{

0%{

transform:translateY(0);

opacity:0;

}

20%{

opacity:.7;

}

100%{

transform:translateY(-110vh);

opacity:0;

}

}

`;

document.head.appendChild(style);

// Replay Story

replay.addEventListener("click",()=>{

window.location.href="index.html";

});