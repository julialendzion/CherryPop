window.addEventListener("load", start);

let videoScr = document.querySelector("#videoScr")
let playBtn = document.querySelector("#play_button")
let playBtn2 = document.querySelector("#play_button2")
let playBtn3 = document.querySelector("#play_button3")
let videoScr2 = document.querySelector("#videoScr2")
let videoScr3 = document.querySelector("#videoScr3")
let stopBtn = document.querySelector("#stop_button")
let stopBtn2 = document.querySelector("#stop_button2")
let stopBtn3 = document.querySelector("#stop_button3")

function start() {
    playBtn.addEventListener("click", playVideo);
    playBtn2.addEventListener("click", playVideo2);
    playBtn3.addEventListener("click", playVideo3);
    stopBtn.addEventListener("click", stopVideo); stopBtn2.addEventListener("click", stopVideo2);
  stopBtn3.addEventListener("click", stopVideo3);
}

function playVideo() {
    console.log("playVideo");
    if (videoScr.paused == true) {
        videoScr.play();
        
        playBtn.style.backgroundImage = "url(img/pause.svg)";
        console.log(videoScr.paused);
    } else {
        videoScr.pause();
        playBtn.style.backgroundImage = "url(img/play.svg)";
    }
   
}
function playVideo2(){
  console.log("playVideo");
    if (videoScr2.paused == true) {
        videoScr2.play();
        
        playBtn2.style.backgroundImage = "url(img/pause2.svg)";
        console.log(videoScr.paused);
    } else {
        videoScr2.pause();
        playBtn2.style.backgroundImage = "url(img/play2.svg)";
    }}

function playVideo3(){console.log("playVide3");
    if (videoScr3.paused == true) {
        videoScr3.play();
        
        playBtn3.style.backgroundImage = "url(img/pause2.svg)";
        console.log(videoSc3.paused);
    } else {
        videoScr3.pause();
        playBtn3.style.backgroundImage = "url(img/play2.svg)";
    }}

function stopVideo() {
   
    videoScr.pause();
    videoScr.currentTime = 0;
    playBtn.style.backgroundImage = "url(img/play.svg)";
    videoScr.playbackRate = 1;
  
}

function stopVideo2() {
   
    videoScr2.pause();
    videoScr2.currentTime = 0;
    playBtn2.style.backgroundImage = "url(img/play2.svg)";
    videoScr2.playbackRate = 1;
  
}
function stopVideo3() {
   
    videoScr3.pause();
    videoScr3.currentTime = 0;
    playBtn3.style.backgroundImage = "url(img/play2.svg)";
    videoScr3.playbackRate = 1;
  
}
