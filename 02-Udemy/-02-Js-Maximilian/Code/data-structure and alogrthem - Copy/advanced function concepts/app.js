function father (price){

function childern(tax){

    return tax * price
}

let productBeforeIncom =childern(0.2)
console.log(productBeforeIncom)
////
let productAftereIncom = childern(0.3)
console.log(productAftereIncom)
}

// ###########################################################
father(100)
//clouser function
let username ='mustafa'
function paste(){


console.log( 'hi:' + username)
}



username ='hussan'
paste()
//clouser function surrounding by all values of variable as it assigned by 
//memory place not a copy of value

//
function powerNum(x,y){
let result =1
for(let i=0 ;i <y ;i++){

    result *=x
}

return result
}
console.log(powerNum(3,3))
//
function ectra (n ,m){ 


return m===1 ? n :n*ectra(n ,m-1)


}
console.log(ectra(2,3))