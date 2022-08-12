const cooldown = 28800
let handler = async (m, { conn,usedPrefix, command, text, args }) => {
       let user = global.db.data.users[m.sender]
       let pancingan = user.fishingrod
       let umpan = user.umpan
       let type = (args[0] || '').toLowerCase()
        switch (type) {
	          case 'easy':
                                  let timers = (cooldown - (new Date - user.lastfishing))
                                  let _timers = (28800 - __timers)
                                  let timers = clockString(_timers) 
                                  if (pancingan == 0 || umpan == 0) return m.reply('*Kamu belum memiliki Pancingan dan Umpan, Silahkan beli dulu..*')
                                  if (new Date - global.db.data.users[m.sender].lastfishing > 28800) {
                                  if (global.db.data.users[m.sender].pancingan > 1) {
                                  if (global.db.data.users[m.sender].umpan > 99) {
                                  let randomaku1 = `${Math.floor(Math.random() * 10)}`
                                  let randomaku2 = `${Math.floor(Math.random() * 10)}`
                                  let randomaku3 = `${Math.floor(Math.random() * 10)}`
                                  let randomaku4 = `${Math.floor(Math.random() * 10)}`
                                  let randomaku5 = `${Math.floor(Math.random() * 10)}`
                                  let randomaku6 = `${Math.floor(Math.random() * 10)}`
                                  let randomaku7 = `${Math.floor(Math.random() * 10)}`
                                  let randomaku8 = `${Math.floor(Math.random() * 10)}`
                                  let randomaku9 = `${Math.floor(Math.random() * 10)}`
                                  let randomaku10 = `${Math.floor(Math.random() * 10)}`
                                  let randomaku11 = `${Math.floor(Math.random() * 10)}`
                                  let randomaku12 = `${Math.floor(Math.random() * 10)}`
                                  let randomaku13 = `${Math.floor(Math.random() * 50)}`

                                  let rbrb1 = (randomaku1 * 1)
                                  let rbrb2 = (randomaku2 * 1) 
                                  let rbrb3 = (randomaku3 * 1)
                                  let rbrb4 = (randomaku4 * 1)
                                  let rbrb5 = (randomaku5 * 1)
                                  let rbrb6 = (randomaku6 * 1)
                                  let rbrb7 = (randomaku7 * 1)
                                  let rbrb8 = (randomaku8 * 1)
                                  let rbrb9 = (randomaku9 * 1)
                                  let rbrb10 = (randomaku10 * 1)
                                  let rbrb11 = (randomaku11 * 1)
                                  let rbrb12 = (randomaku12 * 1)
                                  let rbrb13 = (randomaku13 * 1)

                                  let zero1 = `${rbrb1}`
                                  let zero2 = `${rbrb2}`
                                  let zero3 = `${rbrb3}`
                                  let zero4 = `${rbrb4}`
                                  let zero5 = `${rbrb5}`
                                  let zero6 = `${rbrb6}`
                                  let zero7 = `${rbrb7}`
                                  let zero8 = `${rbrb8}`
                                  let zero9 = `${rbrb9}`
                                  let zero10 = `${rbrb10}`
                                  let zero11 = `${rbrb11}`
                                  let zero12 = `${rbrb12}`

                                 let hsl = `
*《 Hasil Memancing Kali Ini 》*
 *🦀 = [ ${zero2} ]*			*🐠 = [ ${zero6} ]*
 *🦞 = [ ${zero8} ]*			 *🐟 = [ ${zero11} ]*
 *🦐 = [ ${zero10} ]*			 *🐬 = [ ${zero7} ]*
 *🦑 = [ ${zero4} ]*			 *🐳 = [ ${zero12} ]*
 *🐙 = [ ${zero3} ]*			 *🦈 = [ ${zero9} ]*
  *🐡 = [ ${zero5} ]*			*🐋 = [ ${zero1} ]*
  
+1 Tiketcoin
`.trim()
                                 global.db.data.users[m.sender].paus += rbrb1
                                 global.db.data.users[m.sender].kepiting += rbrb2
                                 global.db.data.users[m.sender].gurita += rbrb3
                                 global.db.data.users[m.sender].cumi += rbrb4
                                 global.db.data.users[m.sender].buntal += rbrb5
                                 global.db.data.users[m.sender].dory += rbrb6
                                 global.db.data.users[m.sender].lumba += rbrb7
                                 global.db.data.users[m.sender].lobster += rbrb8
                                 global.db.data.users[m.sender].hiu += rbrb9
                                 global.db.data.users[m.sender].udang += rbrb10
                                 global.db.data.users[m.sender].ikan += rbrb11
                                 global.db.data.users[m.sender].orca += rbrb12
                                 global.db.data.users[m.sender].tiketcoin += 1
                                 global.db.data.users[m.sender].umpan -= rbrb13

                                setTimeout(() => {
                                m.reply(`Yuk mancing mania level easy lagi`)
                                }, 50000) 
                                setTimeout(() => {
                                m.reply(`${hsl}`)
                                }, 1200) 
                                setTimeout(() => {
                                m.reply('Menunggu')
                                 }, 600) 
                                 setTimeout(() => {
                                 m.reply('_Sedang Memancing..._')
                                 }, 0) 
                                 user.lastmancingeasy = new Date * 1
                                 } else conn.reply(m.chat, 'Minimal umpan kamu *100* untuk memancing level mudah', m)
                            } else conn.reply(m.chat, 'Minimal pancingan kamu *Level 2* untuk memancing level mudah', m)
                       } else conn.reply(m.chat, `*Sepertinya Anda Sudah Lelah*\n*Silahkan Istirahat Sejenak Sekitar ${timers}*\n*Untuk Bisa Melanjutkan Memancing Lagi*`, m)
                 break
                 default:
                         return conn.reply(m.chat, `${usedPrefix + command} [easy | normal | hard | extreme]\nContoh penggunaan: *${usedPrefix + command} easy*`, m)
                 }
}

handler.help = ['pancing <type>']
handler.tags = ['game']
handler.command = /^(pancing)$/i
handler.register = true
handler.limit = false

export default handler

  return
}
