// ! Callback
// ? Synchronous callback
// function halo(nama) {
//     alert(`halo, ${nama}`)
// }

// function tampilkanPesan(callback) {
//     const nama = prompt('Masukkan Nama : ')
//     callback(nama)
// }

// tampilkanPesan(halo)
// const mhs = [
//     {
//         "nama" : "Ridwan Setio",
//         "nim" : "2205101005",
//         "email" : "ridwansetiobudi77@gmail.com",
//         "jurusan" : "Teknik Informatika",
//         "idDosenWali" : 1 
//     },
//     {
//         "nama" : "Hadis Listyo",
//         "nim" : "2205101006",
//         "email" : "saintXceed799@gmail.com",
//         "jurusan" : "Teknik Informatika",
//         "idDosenWali" : 2
//     },
//     {
//         "nama" : "Hafizh Syakur",
//         "nim" : "2205101009",
//         "email" : "hafizhskuy99@gmail.com",
//         "jurusan" : "Teknik Informatika",
//         "idDosenWali" : 3
//     }
// ]
// console.log('mulai')
// mhs.forEach(m => {
//     for (let i = 0 ; i <10000000;i++){
//         let date = new Date()
//     }
//     console.log(m.nama)}
// )
// console.log('selesai')
// ? Asynchronous Callback dengan vanilla javascript
// function getDataMahasiswa(url,success,error) {
//     let xhr = new XMLHttpRequest()

//     xhr.onreadystatechange = function () {
//         if(xhr.readyState === 4){
//             if(xhr.status === 200){
//                 success(xhr.response)
//             }else if(xhr.status === 404){
//                 error()
//             }
//         }
//     }
//     xhr.open('get', url)
//     xhr.send()
// }
// console.log('mulai')
// getDataMahasiswa('data/mahasiswa.json',results=>{
//     const mhs = JSON.parse(results)
//     mhs.forEach(m => console.log(m.nama));
// },()=>{})
// console.log('selesai')
//? Asynchronous CallBack dengan JQuery
console.log('mulai')
$.ajax({
    url : 'data/mahasiswa.json',
    success : (mhs) => {
        mhs.forEach(m => console.log(m.nama));
    },
    error : (e)=>{
        console.log(e.responseText)
    }
})
console.log('selesai')
