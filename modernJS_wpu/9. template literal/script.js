//! template literals / template string
const nama = 'ridwan setio'
const umur = '22'
let perkenalan = `halo, nama saya ${nama}. umur saya ${umur}`
console.log(`2 - 1 = ${2-1}`)
console.log(perkenalan)
// ekspresi statment
const x = 10
console.log(`${(x % 2 === 0 )? 'genap': 'ganjil'}`)

// HTML fragment
const mhs = {
    nama: "Ridwan",
    umur: 22,
    nim : 2205101005,
    email: "ridwansetiobudi77@gmail.com"
}
let el = `<div class="mhs">
    <h2 class="nama">${mhs.nama}</h2>
    <p class="umur">${mhs.umur}</p>
    <h1>email : ${mhs.email}</h1>

</div>`