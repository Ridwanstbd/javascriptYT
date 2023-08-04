// ! destructuring
// function kalkulasi(a,b){
//     return [a+b,a-b,a*b,a / b]
// }

// ! TIdak perlu kaya di bawah ini
// const jumlah = pemjumlahanPerkalian(2,3)[0]
// const kali = pemjumlahanPerkalian(3,5)[1]
// console.log(kali)
// ! YANG DI DiSARANKAN PAKE DESTRUCTURING
// const [jumlah,kali] = pemjumlahanPerkalian(2,5)
// console.log(jumlah)
// console.log(kali)
//! banyak variasi
// const [tambah,kurang,kali,bagi,akar = 'tidak ada'] = kalkulasi(4,5)
// console.log(kurang)
// console.log(akar)
// ! masalah nyua harus berurutan jadi, harus ubah jadi objek
// function kalkulasi(a,b) {
//     return {
//         tambah : a+b,
//         kurang : a-b,
//         kali : a*b,
//         bagi :a / b
//     }
// }
// const {bagi,tambah,kurang,kali} = kalkulasi(7,2)
// console.log(kurang)
// ! destructuring function arguments
const mhs1 = {
    name : 'Ridwan Setio Budi',
    age : 22,
    email : 'ridwansetiobudi77@gmail.com',
    nilai : {
        tugas :80 ,
        uas : 78
    }
}
function cetakMhs({name, age, nilai : {tugas,uas}}) {
    return `halo,nama saya ${name} umur saya ${age} tahun dan nilai uas saya adalah ${uas} serta tugas ${tugas} `
}
console.log(cetakMhs(mhs1))