var handler = async (m, { conn, args }) => {

let group = m.chat
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)
conn.reply(m.chat, link, fkontak, m, { detectLink: true }, fake, )

}
handler.help = ['link']
handler.tags = ['grupo']
handler.command = /^link(gro?up)?$/i
handler.group = true
handler.botAdmin = true
export default handler
