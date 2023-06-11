const token = ~~[Math.random()*12345678]
const pictures = ["1.jpg","2.jpg","3.jpg"]

function login (username){
    return {token,username}
}
//! fungsi get user hanya dapat dijalankan ketika ada token kemudian 
//! fungsi token akan mereturn apikey
function getUser (token){
    if (token) return {apiKey: "xkey123"}
}
//! fungsi get pictures hanya dapat dijalankan ketika api Key muncul
function getPictures (apiKey){
    if (apiKey) return pictures
}
//! pemanggilan
const user = login("ridwan_setio")
console.log(user.token)
const {apiKey} = getUser(user.token)
console.log(apiKey)
const getUserPictures = getPictures(apiKey)
console.log(getUserPictures)