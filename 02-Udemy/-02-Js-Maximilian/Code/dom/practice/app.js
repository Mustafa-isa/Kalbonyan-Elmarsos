 let h2 =document.getElementById('h2')
 let li = document.querySelectorAll('li')
 let header =document.querySelector('header')
 li[0].textContent ='Mustafa'
 li[1].textContent ='Eisa'
 li[2].textContent ='Ibrahim'
li[1].style.color='red'
let newUl =document.createElement('ul')
let newLi =document.createElement('li')
let text =document.createTextNode('السلام عليكم')
newLi.append(text)
newUl.append(newLi)
header.append(newUl)