//Credits Jangan Dihapus
//Thanks For KannaChan & Papah-Chan
import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*https://FuzePage.my.id*`
let wibu = `https://telegra.ph/file/3626c73cbd174fc3c8b20.jpg` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, wm,'Dimengerti','Bilek', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/cekilgans",
    mediaType: "VIDEO",
    description: "https://www.instagram.com/reel/Ce_bngYBkEA/?igshid=YmMyMTA2M2Y=", 
    title: 'FUZEBOT MultiDevice',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
  }
  } }) 
          }
handler.help = ['source code']
handler.tags = ['info']
handler.command =  /^(script|sc)$/i

export default handler
