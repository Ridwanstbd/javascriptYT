// //! template literals / template string
// const nama = 'ridwan setio'
// const umur = '22'
// let perkenalan = `halo, nama saya ${nama}. umur saya ${umur}`
// console.log(`2 - 1 = ${2-1}`)
// console.log(perkenalan)
// // ekspresi statment
// const x = 10
// console.log(`${(x % 2 === 0 )? 'genap': 'ganjil'}`)

// // HTML fragment
// const mhs = {
//     nama: "Ridwan",
//     umur: 22,
//     nim : 2205101005,
//     email: "ridwansetiobudi77@gmail.com"
// }
// let el = `<div class="mhs">
//     <h2 class="nama">${mhs.nama}</h2>
//     <p class="umur">${mhs.umur}</p>
//     <h3>email : ${mhs.email}</h3>

// </div>`
// const mhs = [
//     {
//         nama : 'Ridwan Setio Budi',
//         email : 'ridwansetiobudi77@gmail.com'
//     },
//     {
//         nama : 'ichwan astori',
//         email : 'ichwanastoridark87@gmail.com'
//     }
// ]
// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//     <li>${m.nama}</li>
//     <li>${m.email}</li>
//     </ul>
//     `).join('')}
// </div>`

//! 3. Conditional Ternary
// const lagu = {
//     judul : 'tetep dalam jiwa',
//     penyanyi : 'isyana sarasvati',
    
// }

// const el = `<div class="lagu">
//     <ul>
//     <li>${lagu.judul}</li>
//     <li>${lagu.penyanyi} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//     </ul>
// </div>`

// ! nested Html fragment bersarang
const mhs = {
    nama : 'Ridwan Setio Budi',
    semester : 3,
    mataKuliah : ['rekayasa web',
    'analisis perancangan  sistem informasi',
    'pemograman sistem interaktif',
    'Perancangan Sistem Berorientasi Object'
] 
}
function cetakMataKuliah(mataKuliah){
    return `
    <ol>
        ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
    </ol>
    `
}
const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">${mhs.semester}</span>
    <h4>Mata Kuliah :</h4>
    ${cetakMataKuliah(mhs.mataKuliah)}
</div>`
document.body.innerHTML = el