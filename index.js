let arr = ['Hello' , 'World']
let str = prompt('If u want Hello-Ok, if World-Cancel')

if(str == false) {
    alert(arr.slice(0,1))
} else {
    alert(arr.slice(1,2))
}


let arrTwo = ['Hello' , 'I' , 'am' , 'student' , 'in' , 'WEPRO IT school']
let ask = prompt('I have 6 words, write a number 1-6 or all')

if(ask == 'all') {
    alert('Hello I am student in WEPRO IT school')
} else if(ask == 1) {
    alert(arrTwo.slice(0,1))
} else if(ask == 2) {
    alert(arrTwo.slice(1,2))
} else if(ask == 3) {
    alert(arrTwo.slice(2,3))
} else if(ask == 4) {
    alert(arrTwo.slice(3,4))
} else if(ask == 5) {
    alert(arrTwo.slice(4,5))
} else if(ask == 6) {
    alert(arrTwo.slice(5,6))
} else {
    alert('I ask from 1 to 6')
}

let arrThree = [1,2,3]
let One = prompt('Massive list its <1,2,3>, type 1 number')
let Two = prompt('Another one')

alert(arrThree.concat([`${One},${Two}`]))

//let users = [
   // {id: 1, name: 'Javokhir'},
   // {id: 2, name: 'Muhamadali'},
   // {id: 3, name: 'Munir'},
   // {id: 4, name: 'Jaxonbek'},
   // {id: 5, name: 'Jago'},
//    {id: 6, name: 'Savlat'},
//    {id: 7, name: 'Penaldo'}
//]
//let askFour = prompt('From 1 to 7?')

//let user = user.find(item => item.id == ${askFour})
//
//alert(user.name);

