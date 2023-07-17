//! higher order function
//? function yang beroperasi pada function lain baik itu digunakan dalam argument maupun sebagai return value
//? javascript memperlakukan function sebagai object
//? callback adalah argument yang berupa function
//? contoh higher order function filter(),map(),reduce()
//! filter, map, and reduce
const angka = [-1,8,9,1,4,-5,-4,3,2,9]
//? mencari angka >= 3
// //for 
// const newAngka = []
// for (let i = 0; i < angka.length; i++) {
//     if(angka[i] >= 3){
//         newAngka.push(angka[i])
//     }    
// }
// console.log(newAngka)
//! filter di function biasa
const newAngka = angka.filter(function (a) {
    return a >= 3
})
console.log(newAngka)
//! filter di arrow function
const newNumber = angka.filter(a => a >= 3)
console.table(newNumber)
//! map 
//? kalikan smeua angka dengan 2
const newNum = angka.map(a=> a *2)
console.log(newNum)
//! reduce
//? jumlahan seluruh element pada array dengan angka awal 5
const jml = angka.reduce((accumulator,currentValue) => accumulator + currentValue,5 )
console.log(jml)
//! method chaining
//cari angka > 5
//kalikan 3
//jumlahkan
const hasil = angka.filter(a=>a>5)
.map(a=> a*3) .reduce((acc,cur)=> acc +cur)
console.log(hasil)