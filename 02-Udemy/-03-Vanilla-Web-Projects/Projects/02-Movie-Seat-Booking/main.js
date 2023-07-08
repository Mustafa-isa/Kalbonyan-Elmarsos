let container = document.querySelector(".container")
let seats =document.querySelectorAll('.rows .seat:not(.occupied)')


let selectedOption =document.getElementById("movie")
let count =document.getElementById("num")
let total =document.getElementById("total")
let price = +selectedOption.value
//add  event event
container.addEventListener('click' ,(e) =>{
   if(e.target.classList.contains('seat')
    && !e.target.classList.contains('occupied')){
    e.target.classList.toggle('selected')
    updateCount()
   }
})
function setmovie(movieindex ,movieprice){

localStorage.setItem('selectedMovie' , movieindex)
localStorage.setItem('movieprice' , movieprice)


}
function updateCount(){
const selected =document.querySelectorAll('.rows .seat.selected')
const indexes =[...selected].map((seat) =>{
    return [...seats].indexOf(seat)
})
localStorage.setItem('data' ,JSON.stringify(indexes))
console.log(indexes)
count.innerText =selected.length


total.innerText =selected.length * selectedOption.value
}
selectedOption.addEventListener('change' ,(e) =>{

    price = e.target.value
    updateCount()
    setmovie(e.target.indexes , e.target.value)
})