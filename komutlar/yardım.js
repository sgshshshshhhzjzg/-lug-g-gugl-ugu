const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let anancıccd  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(`${client.user.username} - Komutlarım`)
.setDescription(`**\`Genel\`**
» \`${anancıccd}komutadı\`: **Burayı kendinize göre ayarlayın!**
» \`${anancıccd}komutadı\`: **Burayı kendinize göre ayarlayın!**
» \`${anancıccd}komutadı\`: **Burayı kendinize göre ayarlayın!**

**\`Sistemler\`**
» \`${anancıccd}erkek/kız <isim> <yas>\`: **Burayı kendinize göre ayarlayın!**
» \`${anancıccd}nick <isim> <yas>\`: **Burayı kendinize göre ayarlayın!**
» \`${anancıccd}vip al/ver\`: **Burayı kendinize göre ayarlayın!**

**\`Yetkili\`**
» \`${anancıccd}komutadı\`: **Burayı kendinize göre ayarlayın!**
» \`${anancıccd}komutadı\`: **Burayı kendinize göre ayarlayın!**
» \`${anancıccd}komutadı\`: **Burayı kendinize göre ayarlayın!**
» \`${anancıccd}komutadı\`: **Burayı kendinize göre ayarlayın!**
» \`${anancıccd}komutadı\`: **Burayı kendinize göre ayarlayın!**
» \`${anancıccd}komutadı\`: **Burayı kendinize göre ayarlayın!**
» \`${anancıccd}komutadı\`: **Burayı kendinize göre ayarlayın!**
» \`${anancıccd}komutadı\`: **Burayı kendinize göre ayarlayın!**
» \`${anancıccd}komutadı\`: **Burayı kendinize göre ayarlayın!**
» \`${anancıccd}komutadı\`: **Burayı kendinize göre ayarlayın!**
» \`${anancıccd}komutadı\`: **Burayı kendinize göre ayarlayın!**
» \`${anancıccd}komutadı\`: **Burayı kendinize göre ayarlayın!**`)

.setThumbnail("https://cdn.discordapp.com/attachments/785821149580754954/786124655085748264/766653460988428308.gif")
.setTimestamp()
.setFooter('Ccd x Fade Code')
message.channel.send(yardım)
  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: 'yardım kodu.',
  usage: 'yardım'
};