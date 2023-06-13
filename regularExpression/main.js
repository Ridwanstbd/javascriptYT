let cari = /e/ //! ekspresi untuk mencari huruf e berrsifat sensituve type
let text = "ridwan setio budi nyemplung kali brantas barwi nyemplung kali bantaran"

let i = text.search("nyemplung") //!sensitive type
console.log(i)
let a = text.search(/brantas/i) //! huruf i menjadikan tidak sensitif type
console.log(a)

let u = text.match(/nyemplung/g) //! huruf g setelah / mencari dan menghubungkan kata "nyemplung" secara global
console.log(u)
let e = text.match(/kali/m) //! huruf m mencari dan menhubungkan kata "kali"
console.log(e)

console.log(cari.test(text)) //! library test() dari default js adalah untuk mencari karakater yang ada di variabel cari yang akan menampilkan sebuah boolean

//!PENGIMPLEMENTASIAN REGEXX biasanya untuk validasi password
//? (?=.*) untuk minimal harus ada 1 
//? {6,20} harus lebih dari 6
let cek = /(?=.*[0-9])([a-zA-Z0-9!@$#]{6,20})/g
cek.test = "ridwan membeli sebuah barang berupa jaket seharga 12000 secara kontan"
// ! terdapat juga regex meta character, untuk melakukan cek terdapat spasi atau tidak?,tab,word,digit,dll atau tidak? seperti berikut ini
//! meta char => deskripsi
//! . => mencari karakter single kecuali newline,atau line terminator
//! \w => mencari karakter kata
//! \W => mencari bukan karakter kata
//! \d => mencari karakter digit
//! \D => mencari bukan karakter digit
//! \s => mencari karakter whitespace
//! \S => mencari bukan karakter whitespace
