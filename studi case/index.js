//! 1. object angkot
function Angkot(sopir,trayek,penumpang,kas) {
    this.sopir = sopir ;
    this.trayek = trayek ;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangnaik = function (namaPenumpang){
        this.penumpang.push(namaPenumpang)
        return this.penumpang
    }

    this.penumpangTurun = function (namaPenumpang,bayar){
        if(this.penumpang.length === 0){
            alert('angkot masih kosong!');
            return false;
        }
        for (let i = 0; i < penumpang.length; i++) {
            if (this.penumpang[i] == namaPenumpang) {
                this.penumpang[i] = undefined
                this.kas += bayar
                return this.penumpang
            }
            
        }
    }
}
var angkot1 = new Angkot('ridwan setio',['madiun','magetan'],[],0)
var angkot2 = new Angkot('hary kane',['madiun','ngawi'],[],0)