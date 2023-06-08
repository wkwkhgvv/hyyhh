require('./settings')
const { default: rizzpiwConnect, useSingleFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require('@adiwajshing/baileys')
const { state } = useSingleFileAuthState(`./${sessionName}.json`)
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const chalk = require('chalk')
const figlet = require('figlet')
const FileType = require('file-type')
const path = require('path')
const PhoneNumber = require('awesome-phonenumber')
const { color, bgcolor, mycolor } = require('./rizzpiwjs/lib/color')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./rizzpiwjs/lib/exif')
const moment = require('moment-timezone')
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const hariiini = moment.tz('Asia/Jakarta').format('DD MMMM YYYY')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./rizzpiwjs/lib/functions')
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })


global.db = JSON.parse(fs.readFileSync('./rizzpiwjs/database/database.json'))
global.db.data = {
users: {},
chats: {},
sticker: {},
database: {},
game: {},
settings: {},
others: {},
...(global.db.data || {})
}

async function startrizzpiw() {
let { version, isLatest } = await fetchLatestBaileysVersion()
const rizzpiw = rizzpiwConnect({
logger: pino({ level: 'silent' }),
printQRInTerminal: true,
browser: ['RIZZPIW V3','Safari','1.0.0'],
auth: state,
version
})

store.bind(rizzpiw.ev)

console.log(color(figlet.textSync('RIZZPIW V3', {
font: 'Standard',
horizontalLayout: 'default',
vertivalLayout: 'default',
width: 80,
whitespaceBreak: false
}), 'orange'))

rizzpiw.ev.on('messages.upsert', async chatUpdate => {
try {
m = chatUpdate.messages[0]
if (!m.message) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
if (m.key && m.key.remoteJid === 'status@broadcast') return
if (!rizzpiw.public && !m.key.fromMe && chatUpdate.type === 'notify') return
if (m.key.id.startsWith('BAE5') && m.key.id.length === 16) return
m = smsg(rizzpiw, m, store)
require('./rizzpiwjs/rizzpiw')(rizzpiw, m, chatUpdate, store)
} catch (err) {
console.log(err)
}
})
rizzpiw.ev.on('groups.update', async pea => {
//console.log(pea)
// Get Profile Picture Group
try {
ppgc = await rizzpiw.profilePictureUrl(pea[0].id, 'image')
} catch {
ppgc = 'https://wallpapercave.com/uwp/uwp1976349.jpeg'
}
let pprizzpiw = { url : ppgc }
if (pea[0].announce == true) {
rizzpiw.sendMessage(pea[0].id, { image: pprizzpiw, caption: '「 *Group Settings Change* 」\n\nGroup telah ditutup oleh admin, Sekarang hanya admin yang dapat mengirim pesan !'})
} else if(pea[0].announce == false) {
rizzpiw.sendMessage(pea[0].id, { image: pprizzpiw, caption: '「 *Group Settings Change* 」\n\nGroup telah dibuka oleh admin, Sekarang peserta dapat mengirim pesan !'})
} else if (pea[0].restrict == true) {
rizzpiw.sendMessage(pea[0].id, { image: pprizzpiw, caption: 'Modifikasi Info Grup Telah Dibatasi, Sekarang Hanya Admin Yang Dapat Mengedit Info Grup!'})
} else if (pea[0].restrict == false) {
rizzpiw.sendMessage(pea[0].id, { image: pprizzpiw, caption: 'Modifikasi Info Grup Telah Tidak Dibatasi, Sekarang Semua Dapat Mengedit Info Grup!'})
} else {
teks =`Subjek Grup Telah Diperbarui Ke:\n\n*${pea[0].subject}*`
rizzpiw.sendMessage(pea[0].id, { image: pprizzpiw, caption: teks})
}
})

    rizzpiw.ev.on('group-participants.update', async (anu) => {
        console.log(anu)
        try {
            let metadata = await rizzpiw.groupMetadata(anu.id)
            let participants = anu.participants
            for (let num of participants) {
                // Get Profile Picture User
                try {
                    ppuser = await rizzpiw.profilePictureUrl(num, 'image')
                } catch {
                    ppuser = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Fi9v3kFfZVvsKnRiMkwf36iHhr9p2P-J8A&usqp=CAU'
                }

                // Get Profile Picture Group
                try {
                    ppgroup = await rizzpiw.profilePictureUrl(anu.id, 'image')
                } catch {
                    ppgroup = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Fi9v3kFfZVvsKnRiMkwf36iHhr9p2P-J8A&usqp=CAU'
                }
                
                                let buttons = [{ buttonId: 'owner', buttonText: { displayText: 'OWNER‡' }, type: 1 },{ buttonId: 'tesrow', buttonText: { displayText: 'MENU‡' }, type: 1 }]
                let nyoutube = ('© RizzPiw')
                let jumhal = '100000000000000'
                if (anu.action == 'add') {
                   let dmember = metadata.participants.length
                   let ppusr = await getBuffer(ppuser)
                   let participants = metadata.participants
               	   let buff = await getBuffer(`https://api.dhamzxploit.my.id/api/canvas/welcome2?name=${num.split("@")[0]}&mem=${metadata.participants.length}&gcname=${metadata.subject}&picurl=${ppuser}&bgurl=https://telegra.ph/file/05eb2c5a9d9993c661772.jpg?size=626&ext=jpg`)
                   var button = [{buttonId: `welcome`, buttonText: { displayText: `Welcome` }, type: 1}]
                   await rizzpiw.sendMessage(anu.id, { caption: `@${num.split('@')[0]} Joined To ${metadata.subject}`, image: buff,buttons: button, footer: `© RIZZPIW`, mentions: [num] })
                } else if (anu.action == 'remove') {
                    rizzpiw.sendMessage(anu.id, { image: { url: ppuser }, contextInfo: { mentionedJid: [num] }, caption: `@${num.split("@")[0]} Leaving To ${metadata.subject}` })
                } else if (anu.action == 'promote') {
                    rizzpiw.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `@${num.split('@')[0]} Promote From ${metadata.subject}` })
                } else if (anu.action == 'demote') {
                    rizzpiw.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `@${num.split('@')[0]} Demote From ${metadata.subject}` })
              }
            }
        } catch (err) {
            console.log(err)
        }
    })

rizzpiw.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

rizzpiw.ev.on('contacts.update', update => {
for (let contact of update) {
let id = rizzpiw.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

rizzpiw.getName = (jid, withoutContact= false) => {
id = rizzpiw.decodeJid(jid)
withoutContact = rizzpiw.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = rizzpiw.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === rizzpiw.decodeJid(rizzpiw.user.id) ?
rizzpiw.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
}

rizzpiw.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	list.push({
		displayName: await rizzpiw.getName(i + '@s.whatsapp.net'),
		vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await rizzpiw.getName(i + '@s.whatsapp.net')}\nFN:${await rizzpiw.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:${email}\nitem2.X-ABLabel:Email\nitem3.URL:${youtube}\nitem3.X-ABLabel:YouTube\nitem4.ADR:;;${region};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	})
	}
	rizzpiw.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
}

rizzpiw.setStatus = (status) => {
rizzpiw.query({
tag: 'iq',
attrs: {
to: '@s.whatsapp.net',
type: 'set',
xmlns: 'status',
},
content: [{
tag: 'status',
attrs: {},
content: Buffer.from(status, 'utf-8')
}]
})
return status
}

rizzpiw.public = true

rizzpiw.serializeM = (m) => smsg(rizzpiw, m, store)

rizzpiw.ev.on('connection.update', (update) => {
const {connection,lastDisconnect} = update
if (connection === 'close') {lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut ? startrizzpiw() : ''}
else if(connection === 'open') {rizzpiw.sendMessage("62895614033342@s.whatsapp.net", {text:`${JSON.stringify(update, undefined, 2)}`})}
console.log(update)})

rizzpiw.send5ButGif = async (jid , text = '' , footer = '', but = [], options = {}) =>{
let message = await prepareWAMessageMedia({ video: thumb, gifPlayback: true }, { upload: rizzpiw.waUploadToServer })
 const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
 templateMessage: {
 hydratedTemplate: {
 videoMessage: message.videoMessage,
 "hydratedContentText": text,
 "hydratedFooterText": footer,
 "hydratedButtons": but
}
}
}), options)
rizzpiw.relayMessage(jid, template.message, { messageId: template.key.id })
}

rizzpiw.send5ButImg = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
let message = await prepareWAMessageMedia({ image: img }, { upload: rizzpiw.waUploadToServer })
var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
 "hydratedContentText": text,
 "hydratedFooterText": footer,
 "hydratedButtons": but
}
}
}), options)
rizzpiw.relayMessage(jid, template.message, { messageId: template.key.id })
}

rizzpiw.send5ButVid = async (jid , text = '' , footer = '', vid, but = [], options = {}) =>{
let message = await prepareWAMessageMedia({ video: vid }, { upload: rizzpiw.waUploadToServer })
var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
videoMessage: message.videoMessage,
 "hydratedContentText": text,
 "hydratedFooterText": footer,
 "hydratedButtons": but
}
}
}), options)
rizzpiw.relayMessage(jid, template.message, { messageId: template.key.id })
}

rizzpiw.send5ButLoc = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
 "hydratedContentText": text,
 "locationMessage": {
 "jpegThumbnail": img },
 "hydratedFooterText": footer,
 "hydratedButtons": but
}
}
}), options)
rizzpiw.relayMessage(jid, template.message, { messageId: template.key.id })
}

rizzpiw.sendList = async (jid , title = '', text = '', buttext = '', footer = '', but = [], options = {}) =>{
var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
listMessage :{
 title: title,
 description: text,
 buttonText: buttext,
 footerText: footer,
 listType: "SELECT",
 sections: but,
 listType: 1
}
}), options)
rizzpiw.relayMessage(jid, template.message, { messageId: template.key.id })
}

rizzpiw.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
let buttonMessage = {
text,
footer,
buttons,
headerType: 2,
...options
}
rizzpiw.sendMessage(jid, buttonMessage, { quoted, ...options })
}

rizzpiw.sendButMessage = async (id, text1, desc1, but = [], options) => {
let buttonMessage = {
text: text1,
footer: desc1,
buttons: but,
headerType: 1
}
return rizzpiw.sendMessage(id, buttonMessage,{quoted: options})
}

rizzpiw.parseMention = (text = '') => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

rizzpiw.sendText = (jid, text, quoted = '', options) => rizzpiw.sendMessage(jid, { text: text, ...options }, { quoted })

rizzpiw.sendImage = async (jid, path, caption = '', quoted = '', options) => {
	let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await rizzpiw.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
}

rizzpiw.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await rizzpiw.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
}

rizzpiw.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await rizzpiw.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
}

rizzpiw.sendTextWithMentions = async (jid, text, quoted, options = {}) => rizzpiw.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

rizzpiw.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}

await rizzpiw.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

rizzpiw.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}

await rizzpiw.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}
 
rizzpiw.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
	let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

rizzpiw.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
	}
	return buffer
 }
 
rizzpiw.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
		if (options.readViewOnce) {
			message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
			vtype = Object.keys(message.message.viewOnceMessage.message)[0]
			delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
			delete message.message.viewOnceMessage.message[vtype].viewOnce
			message.message = {
				...message.message.viewOnceMessage.message
			}
		}
let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
		let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo
}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo
}
} : {})
} : {})
await rizzpiw.relayMessage(jid, waMessage.message, { messageId:waMessage.key.id })
return waMessage
}

rizzpiw.cMod = (jid, copy, text = '', sender = rizzpiw.user.id, options = {}) => {
		let mtype = Object.keys(copy.message)[0]
		let isEphemeral = mtype === 'ephemeralMessage'
if (isEphemeral) {
mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
}
let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
		let content = msg[mtype]
if (typeof content === 'string') msg[mtype] = text || content
		else if (content.caption) content.caption = text || content.caption
		else if (content.text) content.text = text || content.text
		if (typeof content !== 'string') msg[mtype] = {
			...content,
			...options
}
if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
		else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
		copy.key.remoteJid = jid
		copy.key.fromMe = sender === rizzpiw.user.id
return proto.WebMessageInfo.fromObject(copy)
}

rizzpiw.getFile = async (PATH, save) => {
let res
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
let type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'
}
filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
if (data && save) fs.promises.writeFile(filename, data)
return {
res,
filename,
	size: await getSizeMedia(data),
...type,
data
}
}
return rizzpiw
}

startrizzpiw()

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})