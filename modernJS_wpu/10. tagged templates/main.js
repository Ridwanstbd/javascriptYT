// !tagged templates
// const nama = 'Ridwan Setio'
// const umur = 22

// function coba(strings, ... values){
//     // let result = ''
//     // strings.forEach((str,i)=> {
//     //     result += `${str}${values[i]|| ''}`
//     // })
//     // return result
//     return strings.reduce((result,str,i)=> `${result}${str}${values[i] || ''}`,'')
// }
// const str = coba`halo, nama saya ${nama}, saya ${umur}  tahun`

// console.log(str)

// ! highlight
const nama = 'Ridwan Setio'
const umur = 22
const email = 'ridwansetiobudi77@gmail.com'
function highlight(strings, ... values){
    return strings.reduce((result,str,i)=> `${result}${str} <span class="hl">${values[i] || ''}</span>`,'')
}
const str = highlight`halo, nama saya ${nama}, saya ${umur} tahun dan email saya ${email}`

document.body.innerHTML = str