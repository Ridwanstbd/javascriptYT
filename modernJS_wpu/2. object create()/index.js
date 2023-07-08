//? function Declar Solusi Problem dari literal dengan mengisi method ke dalam variabel
// ? PROBLEM : jika membuat method baru harus di daftarkan dan disambungkan
//? Solusinya pakai object create()
//! object create()
//! PROBLEM : HARUS REPOT BUAT METHOD UNTUK MHS1
//! SOLUSI : CHECK MATERI PROTOTYPE
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
    let mhsiswa = Object.create(methodMhs)//? mirip inheritence
    mhsiswa.namalengkap = namalengkap
    mhsiswa.energi = energi

    return mhsiswa
}
let ridwan = mhs1('ridwan',20)