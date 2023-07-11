function init() {
    return function (nama) { //? inner function (closure*)
        console.log(nama) //? akses ke parameter
    }
    return tampilNama
}
let panggilNama = init()
panggilNama('Ridwan') //? isi parameter