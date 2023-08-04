//! spread operator
//? memecah iterable menjadi single element dengan tanda titik 3 ...

// const mhs = ['Ridwan','Dimas','Thomas']
// console.log(...mhs) // hasil : Ridwan Dimas Thomas
// console.log(...mhs[0]) // hasil : R i d w a n


// ? untuk menggabungkan 2 atau lebih array 
// const dosen = ['Nur','Alim','Thoriq']
// const orang = [...mhs,'Aji',...dosen] // fleksibel bisa nambahkan anggota didalam gabungan array 
// const orangConcat = mhs.concat(dosen) // cara yang praktis tapi tidak fleksibel
// console.log(orang)
// console.log(orangConcat) 

// ? untuk mencopy array
// const mhs1 = mhs; //! bukan mengcopy karena hal tsb adalah merupakan referensi
// const mhs1 = [...mhs]
// mhs1[0] = 'fajar' //? bisa merubah yang kopiannya
// console.log(mhs)
// console.log(mhs1)

// const liMhs = document.querySelectorAll('li')
//! cara lama
// const mhs = []
// for (let i = 0 ; i< liMhs.length;i++){
//     mhs.push(liMhs[i].textContent)
// }
// console.log(mhs)
// ! CARA MODERN YANG DISARANKAN
// const mhs = [...liMhs].map(m => m.textContent)
// console.log(mhs)

// !implementasi di front end
const nama = document.querySelector('.nama')
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('')
nama.innerHTML = huruf