const fs = require('fs')
const chalk = require('chalk')

global.domain = 'hyuraa.panellku.me' // Isi Link Login Lu
global.apikey = 'ptla_pr2hTnXZ87i8e6QHOhLpJ3qT1IB09YpENefpbAeatz9' // Isi Apikey Plta Lu
global.capikey = 'ptlc_q3QC1p9ja3UhmxKKTEZRlBWx0537n7xP8BeVZzDf1cK' // Isi Apikey Pltc Lu

//------------------------------------------------------------------------------------------------\\

global.ownerName = 'ZanSXD' // Isi Nama Owner
global.namaOwner = 'ZanSXD' // Isi Nama Owner Lu

global.botName = 'BOT ZANS' // Isi Nama Bot
global.namaBot = 'BOT ZANS' // Isi Nama Bot

global.owner = ['6283171043979','6281351692548'] // Isi Nomor Lu
global.ownerNumber = ["6281351692548@s.whatsapp.net"] // Isi Nomor lu
global.nomorOwner = "6281351692548" //Isi Nomor Lu

//------------------------------------------------------------------------------------------------\\

global.sessionName = 'sesion' // Jangan Di Ubah!
global.packname = '© By ZansXD'
global.author = 'Cie Mau Maling\n62895614033342'
global.email = 'ikhsancandra721@gmail.com'
global.youtube = '_'
global.region = 'I`m From Indonesia'
global.prefa = ['','!','.','#','-','•']

global.mess = 
{
success: 'Succes',
admin: 'Fitur Khusus Admin Group',
botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu',
owner: 'Fitur Khusus Owner Bot',
group: 'Fitur Digunakan Hanya Untuk Group',
private: 'Fitur Digunakan Hanya Untuk Private Chat',
bot: 'Fitur Khusus Pengguna Nomor Bot',
error: 'Mungkin Lagi Error Kak Harap Lapor Owner Biar Langsung Di Benerin',
wait: 'Tunggu Sebentar'
}

//------------------------------------------------------------------------------------------------\\

global.dana = fs.readFileSync('./image/dana.jpg')
global.gopay = fs.readFileSync('./image/gopay.jpg')
global.qris = fs.readFileSync('./image/qris.jpg')
global.logo = fs.readFileSync('./image/logo.jpg')

//------------------------------------------------------------------------------------------------\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.orange(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})