function init() {
    return function (nama) { //? inner function (closure*)
        console.log(nama) //? akses ke parameter
    }
    return tampilNama
}
let panggilNama = init()
panggilNama('Ridwan') //? isi parameter




function ucapkanSalam(waktu) {
    return function (name) {
        console.log(`halo ${name}, Selamat ${waktu} semoga harimu menyenangkan!`)
    }
}
let SelamatPagi = ucapkanSalam('Pagi')
let SelamatSiang = ucapkanSalam('Siang')
let SelamatSore = ucapkanSalam('Sore')

SelamatPagi('ridwan')
console.dir(SelamatSore('ridwan'))