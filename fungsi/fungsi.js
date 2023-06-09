function AddName(firstname,lastname) {
    console.log('nama depan :',firstname)
    console.log('nama belakang :',lastname)
}
AddName('ridwan','setio budi')
function AddNama() {
    console.log('nama depan :',arguments[0])
    console.log('nama belakang :',arguments[1])
}
AddNama('amin','nugroho')
function tambahNama(){
    for(let i = 0 ; i < arguments.length ; i++){
        console.log(arguments[i])
    }
}
// berparameter start
tambahNama('ridwan','barkowiiooooi','yoii')
function tmbhName(firstname, lastName){
    console.log(firstname, lastName)
}
tmbhName('bara','pokki')
// berparameter end
// fungsi didalam variabel start
const sum = new Function ('x','y','return x+y')
console.log(sum(2,3))
// fungsi didalam variabel end
// Arrow function start
const sum2 = (x,y) =>{
    console.log(x+y)
}
sum2(4,5)
// Arrow function end
