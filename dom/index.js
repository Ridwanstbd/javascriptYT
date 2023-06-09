let saldoNow = Number(prompt("berapa uang kamu sekarang? "))
let saldoTambah = Number(prompt("Berapa yang kamu tambahkan ke saldo? "))
const saldoAkhir = saldoNow + saldoTambah;
const days =["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"]
const d= new Date()
let hari = days[d.getDay()]

alert(`Saldo akhir kamu hari ${hari} ini adalah ${saldoAkhir} `)

// dom
document.title = "Javascript Pemula"
const body = document.body

body.append('Hallo Gessssss')
const h1 = document.createElement('h1')
h1.textContent = "Anjayyyyyy bisa Domm"

body.append(h1)