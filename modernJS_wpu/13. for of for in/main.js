//! for of 
//?array
// const mhs = ['ridwan','garit','adit']

// mhs.forEach( m => console.log(m))
// for(const m of mhs){
    // console.log(m)
// }

//? string 
// const nama = 'ridwan'
// for (const n of nama){console.log(n)}

// const mhs = ['ridwan','garit','adit']
// mhs.forEach((m,i) => {console.log(`${m} adalah mahasiswa ke ${i+1}`)})

// for (const [i,m] of mhs.entries()){console.log(`${m} adalah mahasiswa ke-${i+1}`)}

//? Node List
// const liNama = document.querySelectorAll('.nama')
// liNama.forEach(n => console.log(n.textContent))
// for (n of liNama){ console.log(n.innerHTML)}
// ? Arguments
// function jumlahkanAngka(){
//     let jumlah = 0 
//     for (a of arguments){
//         jumlah += a
//     }
//     return jumlah
// }
// console.log(jumlahkanAngka(1,2,3,4,5))
// ! for in
const mhs = {
    nama : 'ridwan',
    umur : 22,
    email : 'ridwansetiobudi77@gmail.com'
}
for (m in mhs){
    console.log(mhs[m])
}