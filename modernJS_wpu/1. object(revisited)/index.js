//! cara untuk membuat object pada javascript
//! 1. Object Literal
// let mahasiswa = {
//     nama : 'ridwan',
//     energy : 10,
//     makan: function(porsi){
//         this.energy = this.energy + porsi
//         console.log(`Halo ${this.nama}, selamat makan!`)
//     }
// }
//! 2. function Declaration
// function mhs(namalengkap,energi) {
//     let mhsiswa = {}
//     mhsiswa.namalengkap = namalengkap
//     mhsiswa.energi = energi

//     mhsiswa.makan = function(porsi){
//         this.energi += porsi
//         console.log(`halo ${this.namalengkap}, selamat makan!`)
//     }
//     mhsiswa.main = function(jam){
//         this.energi -= jam
//         console.log(`Halo ${this.namalengkap}, selamat bermain`)
//     }
//     return mhsiswa
// }
// let ridwan = mhs('ridwan',20)
//! 3. Construction function (keyword : new)
function mhs(namalengkap,energi) {
    this.namalengkap = namalengkap
    this.energi = energi

    this.makan = function(porsi){
        this.energi += porsi
        console.log(`halo ${this.namalengkap}, selamat makan!`)
    }
    this.main = function(jam){
        this.energi -= jam
        console.log(`Halo ${this.namalengkap}, selamat bermain`)
    }
}
let ridwan = new mhs('ridwan',20)
//! 4. Object.create