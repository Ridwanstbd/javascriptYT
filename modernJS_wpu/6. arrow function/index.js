const tampilNama = (nama,waktu) =>{
    return `Selamat ${waktu}, ${nama}`
}
console.log(tampilNama("ridwan","Sore"))

//? implisit return
const showName = name => `halo, ${name}`
console.log(showName("ridwan setio"))

//? MAPPING
let mahasiswa = ['pragos','pralam','wanwan']

// let jumlahHuruf = mahasiswa.map(function (nama){
//     return nama.length
// })
// console.log(jumlahHuruf)

let jumlahHuruf = mahasiswa.map( nama => ({
    nama,
    jmlhuruf : nama.length
}))

console.table(jumlahHuruf)