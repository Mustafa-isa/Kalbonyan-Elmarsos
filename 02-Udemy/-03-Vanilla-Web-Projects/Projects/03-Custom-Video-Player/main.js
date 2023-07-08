const video =document.getElementById('video')
const play =document.getElementById('play')
const stop =document.getElementById('stop')
const progress =document.getElementById('progress')
const time = document.getElementById('time')
//add some event listner to video


video.addEventListener('click' , togglevideostauts)
video.addEventListener('pause', updateplayicon)
video.addEventListener('play' , updateplayicon)
video.addEventListener('timeupdate' , updateprogresss)
play.addEventListener('click' ,togglevideostauts)
stop.addEventListener('click' ,stopvideo)
progress.addEventListener('change' ,setvideoprogress)

//play and pause video
function togglevideostauts(){
if(video.paused){
    video.play()
}else{
    video.pause()
}
}
function updateplayicon(){
if(video.paused){
    play.innerHTML =` <i class="fa-solid fa-play"></i>`
}else{
    play.innerHTML =`<i class="fa-solid fa-pause"></i>`
}
}
function updateprogresss(){
 progress.value =(video.currentTime / video.duration) *100
 
}
function setvideoprogress(){
    video.currentTime =  (+progress.value * video.duration) / 100

}
function stopvideo(){
    video.currentTime = 0
    video.pause()
}