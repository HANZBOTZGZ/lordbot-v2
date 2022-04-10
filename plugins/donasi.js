let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • XL [087830949637]
│ • Smartfren [088215110787]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6288215110787
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
