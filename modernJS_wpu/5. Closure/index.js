function init() {
    let nama = "Ridwan" //? local variable
    let umur = 33
    function tampilNama() { //? inner function (closure*)
        console.log(nama) //? akses ke parent variable
        console.log(umur)
    }
    return tampilNama
}
let panggilNama = init()
panggilNama()