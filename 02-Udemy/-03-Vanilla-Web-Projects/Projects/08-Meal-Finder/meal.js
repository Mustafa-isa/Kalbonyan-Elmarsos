// www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
let form = document.getElementById("submit"),
  search = document.getElementById("search"),
  searchBtn = document.getElementById("searchBtn"),
  result = document.getElementById("result"),
  meals = document.getElementById("meals"),
  meal =  document.getElementById("meal")
  let random =document.getElementById("random")

  console.log(meal)
//add functionality to app

 function rondom(){

result.innerHTML =''
meals.innerHTML =''

fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
.then(res =>{
    return res.json()
})
.then(data =>{


    createFunction(data.meals[0])

})


 }
function renderEl(mealId){

fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
)
.then(res =>{

    return res.json()
})
.then(data =>{
    createFunction(data.meals[0])
})


}
function createFunction(obj){

    meal.innerHTML = `<div class="singl-meal">
    
    <h2>${obj.strMeal}</h2>
    <img src=" ${obj.strMealThumb}" alt="${obj.strMeal}" />

    <div class="meal-info" >
<h2>${obj.strCategory}</h2>

<p>${obj.strInstructions}</p>
</div>
<div class"gradient">
<h2>ingradient</h2>
<ul>
    <li>${obj.strIngredient1}</li>
    <li>${obj.strIngredient2}</li>
    <li>${obj.strIngredient3}</li>
    <li>${obj.strIngredient4}</li>
    <li>${obj.strIngredient5}</li>
    <li>${obj.strIngredien6}</li>
    
</ul>

</div>
    </div>
    
    
    
    `






}




function searchFunction(e) {
  e.preventDefault();

  let name = search.value;
  result.innerHTML = "";
  if (name !== "") {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        search.value = "";
        console.log(data);
        result.innerHTML = `<h2> the result of your search is ${name}<h2>`;

        meals.innerHTML = "";

        data.meals
          .map((meal) => {
            meals.innerHTML += `
<div class="meal">

<img src=" ${meal.strMealThumb} " alt="af" >
<div class="info" data =" ${meal.idMeal}">
<h2>${meal.strMeal}</h2>
</div>


</div>
`;
          })
          .join("");
      });
  } else {
    alert("please enter a name  of meal");
  }
}

random.addEventListener("click" ,rondom)
form.addEventListener("submit", searchFunction);

meals.addEventListener("click" , e =>{

if(e.target.classList == 'info')

renderEl(e.target.getAttribute('data'))
})
//check id
