// ? fetching api by ajax
// $.ajax({
//     url: 'http://www.omdapi.com/?apikey=dca61bcc&s=avengers',
//     success : movies => console.log(movies)
// })

// ? fetching api with javascript vanilla
// const xhr = new XMLHttpRequest()
// xhr.onreadystatechange = function () {
//     if (xhr.status === 200) {
//         if (xhr.readyState === 4) {
//             console.log(JSON.parse(xhr.response))
//         }
//     } else {
//         console.log(xhr.responseText)
//     }
// }
// xhr.open('get','https://api-lk21.herokuapp.com/api/v1/search?q=avenger')
// xhr.send()

// ? fetching wit modern  javascript
// fetch('http://www.omdbapi.com/?apikey=dca61bcc&s=avengers')
// .then(response => response.json())
// .then(response => console.log(response))

//! fetch mengembalikan promise 
// ! Promise 
// ? object yang merepresentasikan keberhasilan / kegagalan sebuah event yang asynchronous di masa yang akan datang
// janji (terpenuhi/ ingkar)
// states (fulfilled/rejected/pending)
// fungsi callback yang penting
// callback (resolve/reject/finally)
// aksi (then/reject)
// ? contoh 1
// let ditepati = false
// const janji1 = new Promise((resolve,reject) => {
//     if ( ditepati ){
//         resolve('janji ditepati')
//     }else{
//         reject('ingkar janji...')
//     }
// })

// janji1 .then(response => console.log('OK! : ' + response)).catch(response => console.log("NOT OK ! : " + response))
// ? contoh 2
// let ditepati = false
// const janji2 = new Promise((resolve,reject) => {
//     if (ditepati) {
//         setTimeout(()=> {
//             resolve('ditepati setelah beberapa waktu')
//         },7000)
//     }else {
//         setTimeout(() => {
//             reject('tidak ditepati setelah beberapa waktu')
//         },10000)
//     }
// })
// console.log('mulai')
// // console.log(janji2.then( () => console.log(janji2)))
// janji2 .then(response => console.log("OK! : "+response)) .catch(response => console.log("NOT OK! : "+response)) .finally(() => console.log('selesai menunggu'))
// console.log('selesai')

// ? Promise.all()
const film = new Promise(resolve => {
    setTimeout(()=>{
        resolve([{
            judul : 'the avengers',
            sutradara : 'Ridwan Setio Budi',
            pemeran : 'gilang, adit'
        }])
    },7000)
})
const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota : 'Madiun',
            temp : 26,
            kondisi : 'cerah berawan'
        }])
    }, 5000);
})
Promise.all([film,cuaca]) .then(response => {
    const [film,cuaca] = response
    console.log(film)
    console.log(cuaca)
})