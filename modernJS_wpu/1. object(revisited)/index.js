//! cara untuk membuat object pada javascript
//! 1. Object Literal
// ? PROBLEM : TIDAK EFEKTIF UNTUK OBJECT YANG BANYAK
// let mahasiswa = {
//     nama : 'ridwan',
//     energy : 10,
//     makan: function(porsi){
//         this.energy = this.energy + porsi
//         console.log(`Halo ${this.nama}, selamat makan!`)
//     }
// }
//! 2. function Declaration
//? Solusi Problem dari literal dengan mengisi method ke dalam variabel
// ? PROBLEM : jika membuat method baru harus di daftarkan dan disambungkan

const methodMhs ={
    makan : function(porsi){
        this.energi += porsi
        console.log(`halo ${this.namalengkap}, selamat makan!`)
    },
    main : function(jam){
        this.energi -= jam
        console.log(`Halo ${this.namalengkap}, selamat bermain`)
    },
    tidur : function(jam){
        this.energi += jam*2
        console.log(`halo ${this.nama}, selamat tidur!`)
    }
};
function mhs1(namalengkap,energi) {
    let mhsiswa = {}
    mhsiswa.namalengkap = namalengkap
    mhsiswa.energi = energi
    mhsiswa.makan = methodMhs.makan
    mhsiswa.main = methodMhs.main
    mhsiswa.tidur = methodMhs.tidur//!Problem

    return mhsiswa
}
let dodi = mhs1('ridwan',20)
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