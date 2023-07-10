/*console.log(setNama())

var nama = "Ridwan" 
var umur = 22

//! function di hoisting dulu / dikerek 
function setNama() {
    return(`halo ${nama}, umur kamu ${umur}`)
} */
//? function membuat local Executin context
//? yang didalamnya terdapat cretion & execution phase
//? window
//? hoisting
//? argument

var nama = "Ridwan Setio Budi"
var username = "ridwanstbd"

function cetakURL(username) {
    var instagramURL = 'https://instagram.com/'
    return instagramURL + username
}

console.log(cetakURL('fitriarna'))

// function a() {
//     console.log("ini A")

//     function b() {
//         console.log("ini B")

//         function c() {
//             console.log("ini C")
            
//         }
//         c()
//     }
//     b()
// }
// a()