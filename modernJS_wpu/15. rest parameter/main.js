// ! Rest Parameter
//? parameter yang mencakup semua parameter yang dikirim melalui titik 3 ...
function myFunc(...myArgs)  {
    return myArgs
}
// console.log(myFunc(1,2,3,4,5))
// ? contoh 2
// function jumlahkan(...angka){
    // ? Cara for of
    // let total = 0
    // for (const a of angka){
    //     total+=a
    // }
    // return total
    // ? cara reduce
    // return angka.reduce((a,b) => a+b)

// }
// console.log(jumlahkan(1,2,3,4,5))

// ? Array destructuring mengandung rest parameter
// const kelompok1 = ['Ridwan', 'Rizal','Thomas','Fajar']
// const [ketua,wakil, ...anggota] = kelompok1
// console.log(anggota)

// ? Object destructuring mengandung rest parameter
// const team = {
//     pm : 'Ridwan',
//     frontEnd1 : 'Juna',
//     frontEnd2 : 'Hasan',
//     backEnd : 'David',
//     ux : 'Anggar',
//     devOps : 'Rasmus'
// }
// const {pm,...myteam} = team
// console.log(myteam)
// ? Contoh Kasus Filtering
function filterBy(type, ...values) {
    return values.filter(v => typeof v === type)
}
console.log(filterBy('string',1,2,'Ridwan',false, 10, true,'Danny'))