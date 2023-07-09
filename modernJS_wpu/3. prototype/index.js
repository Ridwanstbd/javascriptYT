//! SOLUSI : CHECK MATERI PROTOTYPE
//? mirip konsep class
//!hal sebenarnya dijalankan
// function mhs1(namalengkap,energi) {
//     // let mhsiswa = Object.create(methodMhs)//? mirip inheritence
//     // let this = Object.create(mhs1.prototype)
//     this.namalengkap = namalengkap
//     this.energi = energi
// }
// //? method tambahan
// mhs1.prototype.makan = function (porsi){
//     this.energi += porsi
//     return `halo ${this.namalengkap}, Selamat Makan !`
// }
// mhs1.prototype.bermain = function (jam) {
//     this.energi += jam
//     return `Halo ${this.namalengkap}, Selamat Bermain`
// }
// mhs1.prototype.tidur = function (jam) {
//     this.energi += jam * 2
//     return ` halo ${this.namalengkap}, Selamat Tidur `
// }
// //? ---------------
// let ridwan = new mhs1('ridwan',20)
// ! yang kita lakukan
class mhs1 {
    constructor(namalengkap, energi) {
        // let mhsiswa = Object.create(methodMhs)//? mirip inheritence
        // let this = Object.create(mhs1.prototype)
        this.namalengkap = namalengkap
        this.energi = energi
    }
    //? method tambahan
    makan(porsi) {
        this.energi += porsi
        return `halo ${this.namalengkap}, Selamat Makan !`
    }
    bermain(jam) {
        this.energi += jam
        return `Halo ${this.namalengkap}, Selamat Bermain`
    }
    tidur(jam) {
        this.energi += jam * 2
        return ` halo ${this.namalengkap}, Selamat Tidur `
    }
}
//? ---------------
let ridwan = new mhs1('ridwan',20)