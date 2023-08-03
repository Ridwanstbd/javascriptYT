//!destructuring Variable/ Assignment

//// destructuring array
// const perkenalan = ['halo','nama','saya','Ridwan Setio']
// const [salam,satu,dua,nama] = perkenalan

//// skip item
// const [salam,,,nama] = perkenalan
// console.log(salam)

//// swap items
// let a = 1
// let b = 2
// console.log(a)
// console.log(b)
// [a,b] = [b,a]
// console.log(a)
// console.log(b)

// //  return value pada function
// function coba(){
//     return [1,2]
// }

// const [a,b] = coba()
// console.log(b)

// // rest parameter
// const [a,...values] = [1,2,3,4,5]
// console.log(a)
// console.log(values)

// // destructuring object
// const mhs = {
//     nama : 'ridwan setio budi',
//     umur : 22
// }

// const {nama,umur} = mhs
// console.log(nama)

// // assignment tanpa deklarasi object
// ({nama,umur} = {
//     nama : 'ridwan setio budi',
//     umur : 22
// })
// console.log(nama)

// // assignment ke variabel baru
// const mhs = {
//     nama : 'ridwan setio budi',
//     umur : 22
// }

// const {nama: n ,umur: u} = mhs
// console.log(u)

// memberikan default Value
// const mhs = {
//     nama : 'ridwan setio budi',
//     umur : 22
// }

// const {nama,umur,email= 'email@default.com'} = mhs
// console.log(email)

// // memberi nilai default dan assign ke variabel baru
// const mhs = {
//     nama : 'ridwan setio budi',
//     umur : 22,
//     email : 'ridwansetiobudi@gmail.com'
// }

// const {nama: n,umur: u,email: e = 'email@default.com'} = mhs
// console.log(e)

// // rest parameter
// const mhs = {
//     nama : 'ridwan setio budi',
//     umur : 22,
//     email : 'ridwansetiobudi@gmail.com'
// }

// const {nama, ...value} = mhs
// console.log(value)

// mengambil field pada object, setelah dikirim sebagai parameter untuk function
const mhs = {
    id : 123,
    nama : 'ridwan setio budi',
    umur : 22,
    email : 'ridwansetiobudi@gmail.com'
}
function getIdMhs({id}){
    return id
}
console.log(getIdMhs(mhs))