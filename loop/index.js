/*
! LOOP DI JAVASCRIPT 
? FOR, WHILE, DO WHILE, FOR OF ,FOR IN, FOR EACH, MAP
*/
// ! For start
for (let i = 10;i>=1;i--){
       if (i % 2 != 0){ 
        console.log("data ke - "+i)}
}
// ! For end
// ! while start
let x= 10
while (x>=1) {
    if(x%2 != 0){
        console.log("data ke - "+x)
    }
    x--
}
// ! while end
// ! do while start
let y = 10
do {
    y--
    if(y%2!=0){
        console.log( "data y ke ", y)
    }
}while(y>=1)
// ! do while end
// ! for of start
const barangSaya = ['kursi','meja','televisi']
console.log(barangSaya)
for (let barang of barangSaya){
    console.log(barang)
}
// ! for of end
// ! for in start
for (let barang in barangSaya){
    console.log(barang)
}
// ! for in  end
// ! for each start
barangSaya.forEach((value,index) => {
    console.log(value,index)
})
// ! for each end
// ! Map start
barangSaya.map((value,index) => {
    console.log(value,index+1)
})
// ! Map end

