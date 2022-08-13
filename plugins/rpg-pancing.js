const cooldown = 20000
let handler = async (m,{ conn} ) => {
  let user = global.db.data.users[m.sender]
  let timers = (cooldown - (new Date - user.lastfishing))
  if (user.stamina < 70) return m.reply(`
Requires at least 70 ðŸ”‹Stamina for the fishing!!
please buy ðŸ”‹Stamina first by typing *${usedPrefix}buy potion <quantity>*,
and type *${usedPrefix}heal <quantity>* to use potions
`.trim())
     if (user.fishingrod  == 0) return m.reply('Mau mancing ga punya alat pancingðŸŽ£')
    if (new Date - user.lastfishing <= cooldown) return m.reply(`
You're already fishing!!, please wait *Ã°Å¸â€¢Â${timers.toTimeString()}*
`.trim())
const rewards = reward(user)
    let text = 'you\'ve been fishing and lost'
    for (const lost in rewards.lost) if (user[lost]) {
        const total = rewards.lost[lost].getRandom()
        user[lost] -= total * 1
        if (total) text += `\n*${global.rpg.emoticon(lost)}${lost}:* ${total}`
    }
  if (new Date - user.lastfishing < cooldown) throw `You have already claimed this daily claim!, wait for *${((user.lastfishing + cooldown) - new Date()).toTimeString()}*`
  let text = ''
  for (let reward of Object.keys(rewards)) {
    if (!(reward in user)) continue
    user[reward] += rewards[reward]
    text += `*+${rewards[reward]}* ${global.rpg.emoticon(reward)}${reward}\n`
  }
  conn.sendButton(m.chat,'*––––––『 DAILY 』––––––*', text.trim(), null, [['Inventory', '.inv'], ['Weekly', '.weekly']],m)
  user.lastfishing = new Date * 1
}
handler.help = ['mancing', 'fishing']
handler.tags = ['rpg']
handler.command = /^(mancing|fishing)$/i

handler.cooldown = cooldown

export default handler

function reward(user = {}) {
    let rewards = {
        reward: {
            money: 201,
            exp: 301,
            trash: 101,
            potion: 2,
            rock: 2,
            wood: 2,
            string: 2,
            common: 2 * (user.dog && (user.dog > 2 ? 2 : user.dog) * 1.2 || 1),
            uncommon: [0, 0, 0, 1, 0].concat(
                new Array(5 - (
                    (user.dog > 2 && user.dog < 6 && user.dog) || (user.dog > 5 && 5) || 2
                )).fill(0)
            ),
            mythic: [0, 0, 0, 0, 0, 1, 0, 0, 0].concat(
                new Array(8 - (
                    (user.dog > 5 && user.dog < 8 && user.dog) || (user.dog > 7 && 8) || 3
                )).fill(0)
            ),
            legendary: [0, 0, 0, 0, 0, 0, 0, 1, 0, 0].concat(
                new Array(10 - (
                    (user.dog > 8 && user.dog) || 4
                )).fill(0)
            ),
            iron: [0, 0, 0, 1, 0, 0],
            gold: [0, 0, 0, 0, 0, 1, 0],
            diamond: [0, 0, 0, 0, 0, 0, 1, 0].concat(
                new Array(5 - (
                    (user.fox < 6 && user.fox) || (user.fox > 5 && 5) || 0
                )).fill(0)
            ),
        },
        lost: {
            health: 101 - user.cat * 4
        }
    }
    return rewards
}
