const token = ~~[Math.random()*12345678]
const pictures = ["1.jpg","2.jpg","3.jpg"]

function login (username, callback){
    console.log("processing token user now.....")
    setTimeout(() => {
        callback({token,username})
    }, 200);
}
//! fungsi get user hanya dapat dijalankan ketika ada token kemudian 
//! fungsi token akan mereturn apikey
function getUser (token, callback){
    if (token) 
    console.log("processsing api key.....")
    setTimeout(() => {
        callback({apiKey: "xkey123"})
    }, 500);
}
//! fungsi get pictures hanya dapat dijalankan ketika api Key muncul
function getPictures (apiKey, callback){
    if (apiKey) 
    console.log("processsing pictures now.....")
    setTimeout(() => {
        callback({pic: pictures})
    }, 1500);
}
//! pemanggilan (hasil udenfined karena pemanggilan terlalu cepat sebab fungsi login async 
//! maka dari itu di fungsi login harus di kasil parameter callback)
// const user = login("ridwan setio")
// console.log(user) 
//! pemanggilan harus berubah bukan lagi seperti baris 21 & 22
//! menjadi. parameter response digunakan untuk dapat menampilkan didalam callback()
login("ridwan setio",function (response) {
    const {token} = response
    getUser(token, function (response) {
        const {apiKey}= response
        getPictures(apiKey, function (response) {
            const {pic} = response
            console.log(pic)
        })
    })
})