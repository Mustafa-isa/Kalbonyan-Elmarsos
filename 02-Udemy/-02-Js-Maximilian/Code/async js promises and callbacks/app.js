const button = document.querySelector('button');
const output = document.querySelector('p');
 const app =function (dauration){
let pro = new Promise((resolve ,reject) =>{

  setTimeout(() =>{
resolve('not done')

  } ,dauration)

})

return pro

 }
function eventAdded() {
 navigator.geolocation.getCurrentPosition(posdata =>{
     app(3000).then( data =>{


      console.log(data  ,posdata)
     })
  
 },
 error =>{
  console.log(error)
 }
 )
}

button.addEventListener('click',  eventAdded);
let res =0
 for(let i  =0 ;i<10000 ; i++){


  res += i
 }
 console.log(res)