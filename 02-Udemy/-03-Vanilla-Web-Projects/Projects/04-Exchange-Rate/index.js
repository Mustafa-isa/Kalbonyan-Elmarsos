const  cuurencyOne  = document.querySelector(".one")
console.log(cuurencyOne.value)

const amount1  = document.getElementById('amount1')
const amount2  =document.getElementById('amount2')
const  cuurencyTwo  =  document.querySelector(".two")
const  ratel  =document.getElementById('rate')
const swap = document.querySelector('.btn')
console.log( cuurencyOne ,cuurencyTwo ,
    amount1 ,amount2 ,swap ,rate)
 // main funciton
 function calc(){
   const valueOne =cuurencyOne.value

const valueTwo =cuurencyTwo.value
   
const req = new XMLHttpRequest()
req.open('GET' ,`https://api.exchangerate-api.com/v4/latest/${valueOne}`)
req.send()
req.onreadystatechange =function(){
    if(req.status === 200 && req.readyState ===4){
      let arr = JSON.parse(req.responseText)
        let rate = arr.rates[valueTwo]
        console.log(rate)
        ratel.innerText =`1 ${valueOne} =${rate}
        ${valueTwo}`
        amount2.value =amount1.value*rate
    }
    
}
}
/// add some events
cuurencyOne.addEventListener('change' ,calc)
cuurencyTwo.addEventListener('change' ,calc)

amount1.addEventListener('input' , calc)

amount2.addEventListener('input' , calc)

