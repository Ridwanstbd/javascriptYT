const token = ~~[Math.random()*12345678]
const pictures = ["1.jpg","2.jpg","3.jpg"]

function login (username){
    console.log("processing token user now.....")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(username != "ridwan_setio") reject("Sorry wrong data !!")
            resolve({token})
        }, 200);
    })
}
//! fungsi get user hanya dapat dijalankan ketika ada token kemudian 
//! fungsi token akan mereturn apikey
function getUser (token){
    console.log("processsing api key.....")
    return new Promise((resolve, reject) => {
        if (!token) reject("Sorry No Token Accessed ")
        setTimeout(() => {
            resolve({apiKey: "xkey123"})
        }, 500);        
    })
}
//! fungsi get pictures hanya dapat dijalankan ketika api Key muncul
function getPictures (apiKey){
    console.log("processsing pictures now.....")
    return new Promise((resolve, reject) => {
        if (!apiKey) reject("no api key cannot access !!!") 
        setTimeout(() => {
            resolve({pic: pictures})
        }, 1500);
    })
}
//! pemanggilan (hasil udenfined karena pemanggilan terlalu cepat sebab fungsi login async 
//! maka dari itu di fungsi login harus di kasil parameter callback)
// const user = login("ridwan setio")
// console.log(user) 
//! pemanggilan harus berubah bukan lagi seperti baris 21 & 22
//! menjadi. parameter response digunakan untuk dapat menampilkan didalam promise
//! NESTED PROMISE
// const user = login("ridwan_setio")
// user.then(function (response) {
//     const {token} = response
//     getUser(token).then(function (response) {
//         const {apiKey} = response
//         console.log(apiKey)
//     }).catch(err => console.log(err))
// }).catch(err => console.log(err))
// ! asnycrhonous function
async function UserDisplay() {
    try {
        const {token} = await login("ridwan_setio")
        const {apiKey} = await getUser(token)
        const {pic} = await getPictures(apiKey)
    
        console.log(`
        token anda adalah : ${token}
        apikey anda adalah : ${apiKey}
        hasil request gambar anda adalah : ${pic}
        `)
    } catch (err) {
        console.log(err)
    }
} 
UserDisplay()