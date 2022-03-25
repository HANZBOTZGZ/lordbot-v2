let handler  = async (m, { conn, usedPrefix }) => {
  conn.reply(m.chat, `
*HanzBOTZ Menggunakan Script*
https://youtu.be/8Jg7f3oijfw
_*Jangan Lupa Like Sama Subscribe Ya kak*_

`.trim(), m)
}
handler.help = ['script']
handler.tags = ['main']
handler.command = /^(script)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
