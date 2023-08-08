// ! di folder sebelum ini ada async await dengan memanfaatkan promise yg dihasilkan fetch()
// ! di folder ini adlah promise kita sendiri
// const coba = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('selesai');
//     }, 5000);
// })
// // console.log(coba);
// coba.then(()=> console.log(coba))

//! promise function kita sendiri
function cobaPromise() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('selesai coba1');
        }, 2000);
    })
}
// ? Sync Method
// const coba = cobaPromise() // tidak ada bedanya
// coba.then(() => console.log(coba)) 
// ? implementasi dengan aync await
async function cobaAsync(){
    const coba = await cobaPromise()
    // ! await artinya berhenti dulu disini tunggu promise di cobaPromise() sudah resolve kemudian lanjutkan ke baris kode selanjutnya
    console.log(coba);
}
cobaAsync()
// ! penambahan reject di parameter promise
function cobaPromise2() {
    return new Promise((resolve,reject)=>{
        const waktu = 5000
        if (waktu < 5000) {
            setTimeout(() => {
                resolve('Selesai');
            }, waktu);
        } else {
            reject('Kelamaan')
        }

    })
}
// ? Sync method
// const coba2 = cobaPromise2()
// coba2 .then(() => console.log(coba2)) .catch(() => console.log(coba2)) 
// ? implementasi dengan async await
// ? jika menggunakan then() maka kode tidak jalan karena ada tambahan parameter reject
async function cobaAsync2(){
    try {
        const coba2 = await cobaPromise2()
        console.log(coba2);        
    } catch (error) {
        console.error('kelamaan');
    }
}
cobaAsync2()