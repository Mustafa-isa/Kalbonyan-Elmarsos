const addBtn =document.getElementById("add-movie-btn")
const searchBtn =document.getElementById("search-btn")
//make function to add movie
let arr =[]
const renderElemnt =function( search = ''){

let movie_list = document.getElementById("movie-list")
if(arr.length === 0){
    movie_list.classList.remove('visible')
    return
}else{

    movie_list.classList.add('visible')
     const filterArr =!search ? arr :arr.filter(e =>{
        e.info.title.includes(search)
     })
filterArr.forEach(one =>{


    let li =document.createElement('li')
li.textContent = one.info.title +"   " + one.info.extra_name +":" + one.info.extra_value
movie_list.append(li)
})


}
}
const addEventMovie = function (){
    searchClick()
let title =document.getElementById("title").value
let extra_name =document.getElementById("extra-name" ).value
let extra_value =document.getElementById("extra-value").value
if(title.trim() ==='' || extra_name.trim() ==='' || 
 extra_value.trim() === ''){
    return
}
let movie={
    info:{
        title,
        extra_name,
        extra_value
    },
    id: Math.random()
}
arr.push(movie)
renderElemnt()
}
const searchClick =function (){
    const search =document.getElementById('filter-title')
    renderElemnt(search)
}
addBtn.addEventListener('click', addEventMovie)
searchBtn.addEventListener('click' ,searchClick)