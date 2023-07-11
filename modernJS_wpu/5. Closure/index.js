function init() {
    let nama = "Ridwan" //? local variable
    let umur = 33
    function tampilNama() { //? inner function (closure*)
        console.log(nama) //? akses ke parent variable
        console.log(umur)
    }
    console.dir(tampilNama)
}
init()