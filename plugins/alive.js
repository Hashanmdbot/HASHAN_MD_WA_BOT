const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    
await conn.sendMessage(from,{image: {url: `https://files.catbox.moe/fbebro.jpeg`},caption: `*Hello* ${pushname}, _hello iam created by Hashan Sathsara And Induwa md Bot Owner...🌝❤️‍🔥_`},{quoted: mek})
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
