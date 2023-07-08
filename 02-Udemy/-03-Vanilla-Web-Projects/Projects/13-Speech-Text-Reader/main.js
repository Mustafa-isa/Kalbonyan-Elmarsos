const data = [
  {
    image: './img/drink.jpg',
    text: "I'm Thirsty"
  },
  {
    image: './img/food.jpg',
    text: "I'm Hungry"
  },
  {
    image: './img/tired.jpg',
    text: "I'm Tired"
  },
  {
    image: './img/hurt.jpg',
    text: "I'm Hurt"
  },
  {
    image: './img/happy.jpg',
    text: "I'm Happy"
  },
  {
    image: './img/angry.jpg',
    text: "I'm Angry"
  },
  {
    image: './img/sad.jpg',
    text: "I'm Sad"
  },
  {
    image: './img/scared.jpg',
    text: "I'm Scared"
  },
  {
    image: './img/outside.jpg',
    text: 'I Want To Go Outside'
  },
  {
    image: './img/home.jpg',
    text: 'I Want To Go Home'
  },
  {
    image: './img/school.jpg',
    text: 'I Want To Go To School'
  },
  {
    image: './img/grandma.jpg',
    text: 'I Want To Go To Grandmas'
  }
];
let container =document.querySelector(".container")
let main =document.querySelector("main")
let text_box =document.getElementById("text-box")
let close =document.getElementById("close")
let seselct =document.getElementById("voices")
let toggle =document.getElementById("toggle")
let read =document.getElementById("read")
let area =document.getElementById("text")


// render 
function createData(item){
    let {image ,text} =item
        const box =document.createElement("div")
        box.classList.add("box")
        box.innerHTML =` 
        <img src="${image}">
        <p class="info">${text}</p>
        `
        main.appendChild(box)
    }

data.forEach(createData)
//satrt coding by my own
toggle.addEventListener("click" ,() =>{


    text_box.classList.toggle("show")
})
close.addEventListener("click" ,() =>{
    text_box.classList.toggle("show")
    
})
let box = document.querySelector(".box")
console.log(box)

//get voivess
let voice =[]
function getVoices(){

    voice =speechSynthesis.getVoices()
  voice.forEach( v =>{

let opition =document.createElement("option")
opition.value = v.name
opition.innerText = `${v.name} ${v.lang}`

seselct.append(opition)

  })
}
speechSynthesis.addEventListener("voiceschanged" ,getVoices)
getVoices()
//speec
box.addEventListener('click' ,() =>{
text = box.querySelector("p").innerText
setTextmeeage(text)
speak()

})
let msg =new SpeechSynthesisUtterance()
function set(e){

    msg.voice =voice.find(voice =>{
return voice === e.target.value
    })
 }
 function setTextmeeage(text){
msg.text =text



 }

 function speak(){

speechSynthesis.speak(msg)

 }
 seselct.addEventListener("change" ,set)

read.addEventListener("click" ,() =>{

    setTextmeeage(area.value)
    speak()

})


