// !literal
var mhs = {
    nama : "ridwan setio",
    nrp : "030402522",
    email : "suoidbcvowebcn@gmail.com",
    prodi : "teknik informatika"
}
var mhs1 = {
    nama : "zudith",
    nrp : "030402156",
    email : "suoidbcvowebcn@gmail.com",
    prodi : "teknik informatika"
}
//! declaration
function buatObjectMhs(nama,nrp,email,jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}
var mhs3 = buatObjectMhs('ridwan',4512551,'ifbwoibcweicfjn@gmail.com','teknik informatika')
//! constructor
class Mahasiswa {
    constructor(nama, nrp, email, jurusan) {
        this.nama = nama;
        this.nrp = nrp;
        this.email = email;
        this.jurusan = jurusan;
    }
}
var mhs4 = new Mahasiswa('retio',4512551,'ifbwoibsdvcicfjn@gmail.com','teknik informatika')