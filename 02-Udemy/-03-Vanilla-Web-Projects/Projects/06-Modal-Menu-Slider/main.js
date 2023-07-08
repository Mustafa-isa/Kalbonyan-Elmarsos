const tog  =document.getElementById('toggle')
const closing  =document.getElementById('close')
const opening  =document.getElementById('open')
const mod  =document.getElementById('modal')
//// toggle 
tog.addEventListener('click' ,() =>{


document.body.classList.toggle('show-nav')


})
opening.onclick =function (){

mod.classList.add('show-modal')



}
closing.addEventListener("click" ,() =>{



    mod.classList.remove('show-modal')

})
mod.addEventListener('click' , () => {


    mod.classList.remove('show-modal')
})