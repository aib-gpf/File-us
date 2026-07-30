const memories = [
{type:"photo",src:"photo1.jpg",caption:"❤️ The day everything became more beautiful..."},
{type:"photo",src:"photo2.jpg",caption:"✨ Every smile with you became my favourite memory."},
{type:"photo",src:"photo3.jpg",caption:"💕A cut moment always stay in my heart 💋💞."},
{type:"photo",src:"photo4.jpg",caption:"🌹 😘 🚶‍♂️❤️ One road. One journey. Us forever.."},
{type:"photo",src:"photo5.jpg",caption:"🥰 😘 One kiss... A memory I'll never forget."},
{type:"photo",src:"photo6.jpg",caption:"💖 🫶 My happiest place is beside you.."},
{type:"photo",src:"photo7.jpg",caption:"❤️ Forever starts with you."},
{type:"video",src:"video1.mp4",caption:"🎥 One unforgettable moment."},
{type:"video",src:"video2.mp4",caption:"🎬 Our beautiful journey... ❤️"}
];

const photo=document.getElementById("photo");
const video=document.getElementById("video");
const caption=document.getElementById("caption");
const counter=document.getElementById("counter");

const prevBtn=document.getElementById("prevBtn");
const nextBtn=document.getElementById("nextBtn");
const continueBtn=document.getElementById("continueBtn");

const musicBtn=document.getElementById("musicBtn");

let music=document.getElementById("bgMusic");
if(!music){
music=document.createElement("audio");
music.id="bgMusic";
music.src="music.mp3";
music.loop=true;
document.body.appendChild(music);
}

let current=0;

musicBtn.onclick=()=>{
music.play();
musicBtn.style.display="none";
};

function showMemory(){

let item=memories[current];

counter.innerHTML=(current+1)+" / "+memories.length;

caption.innerHTML=item.caption;

if(item.type==="photo"){

video.pause();
video.style.display="none";

photo.style.display="block";
photo.src=item.src;

}else{

photo.style.display="none";

video.style.display="block";
video.src=item.src;
video.load();
video.play();

if(item.src==="video2.mp4"){

let fade=setInterval(()=>{

if(music.volume>0.05){

music.volume-=0.05;

}else{

music.pause();
clearInterval(fade);

}

},150);

video.onended=()=>{

nextBtn.style.display="none";
continueBtn.style.display="block";

};

}else{

video.onended=null;

}

}

}

showMemory();

nextBtn.onclick=()=>{

if(current<memories.length-1){

current++;
showMemory();

}

};

prevBtn.onclick=()=>{

if(current>0){

current--;
showMemory();

}

};

continueBtn.onclick=()=>{

window.location.href="chapter3.html";

};

setInterval(()=>{

const heart=document.createElement("div");

heart.className="heart";
heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";
heart.style.animationDuration=(6+Math.random()*5)+"s";

document.querySelector(".hearts").appendChild(heart);

setTimeout(()=>{

heart.remove();

},11000);

},500);