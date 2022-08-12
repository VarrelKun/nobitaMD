const cooldown = 150000
let handler = async (m, { usedPrefix }) => {
    let user = global.db.data.users[m.sender]
    let timers = (cooldown - (new Date - user.lastfishing))
    if (user.stamina < 70) return m.reply(`
Requires at least 70 🔋Stamina for the fishing!!
please buy 🔋Stamina first by typing *${usedPrefix}buy potion <quantity>*,
and type *${usedPrefix}heal <quantity>* to use potions
`.trim())
     if (user.fishingrod  == 0) return m.reply('Mau fishing ga punya alat pancing🎣')
    if (new Date - user.lastfishing <= cooldown) return m.reply(`
You're already fishing!!, please wait *ðŸ•${timers.toTimeString()}*
`.trim())
    const rewards = reward(user)
    let text = 'you\'ve been fishing and lost'
    for (const lost in rewards.lost) if (user[lost]) {
        const total = rewards.lost[lost].getRandom()
        user[lost] -= total * 1
        if (total) text += `\n*${global.rpg.emoticon(lost)}${lost}:* ${total}`
    }
 m.reply(text.trim())
    user.lastfishing= new Date * 1
}
handler.help = ['fishing', 'mancing']
handler.tags = ['rpg']
handler.command = /^(fishing|mancing)$/i

handler.cooldown = cooldown
handler.disabled = false

export default handler

function reward(user = {}) {
    let rewards = {
        reward: {
            exp: 1000,
            trash: 101,
            string: 25,
            fish: 30,
            crab: 25,
            shrimp: 9
            lobster: 4,
        },
        lost: {
            stamina: 40,
            fishingroddurability: 10
        }
    }
    return rewards
}
