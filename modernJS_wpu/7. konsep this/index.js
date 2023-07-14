//! KONSEP THIS PADA ARROW FUNCTION

//? constructor function
// const Mahasiswa = function(){
//     this.nama = "ridwan"
//     this.umur = 23
//     this.sayHello = function(){
//         console.log(`hello nama saya ${this.nama} dan saya berumur ${this.umur} tahun, salam kenal ya....`)
//     }
// }
// const ridwan = new Mahasiswa()
//? arrow function hanya method yang bisa construct tidak bisa
// const Mahasiswa = function(){
//     this.nama = "ridwan"
//     this.umur = 23
//     this.sayHello = () => {
//         console.log(`hello nama saya ${this.nama} dan saya berumur ${this.umur} tahun, salam kenal ya....`)
//     }
// }
// const ridwan = new Mahasiswa()
//? Object literal 
//! arrow function tidak mengenal konsep this
// const mhs1 = {
//     nama : "ridwan",
//     umur : 23,
//     sayHello : ()=>{
//         console.log(`hallo nama saya ${this.nama}, umur saya ${this.umur} tahun`)
//     }
// }
// ? jika ada this di arrow function maka dia akan mencari keluar ke lexical scope
// const Mahasiswa = function(){
//     this.nama = "ridwan"
//     this.umur = 23
//     this.sayHello = function(){
//         console.log(`hello nama saya ${this.nama} dan saya berumur ${this.umur} tahun, salam kenal ya....`)
//     }
//     setInterval(() => {
//         console.log(this)
//     }, 500);
// }
// const ridwan = new Mahasiswa()
// ! implementasi arrow function
const box = document.querySelector('.box');
box.addEventListener('click', function () {
    let satu = 'size'
    let dua = 'caption'

    if (this.classList.contains(satu) ){
        [satu,dua]=[dua,satu]
    }
    this.classList.toggle(satu)
    setTimeout(() => {
        this.classList.toggle(dua)
    },600)
})
