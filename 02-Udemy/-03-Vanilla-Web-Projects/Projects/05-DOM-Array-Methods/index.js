let addUser =document.getElementById("add-user")
let double =document.getElementById("double")

let addUsshowMillin = document.getElementById("show-millionaires")

let sorting =document.getElementById("sort")

let calcWealth =document.getElementById("calculate-wealth")

let mainDev = document.getElementById("main")
///fetch data


 function fechData (){

let res =new XMLHttpRequest()
res.open('GET' ,'https://randomuser.me/api')
res.send()
res.onreadystatechange = () =>{

if(res.status ===200 && res.readyState ===4){

let data =JSON.parse(res.responseText)
console.log(data)
}

}
}
fechData()
