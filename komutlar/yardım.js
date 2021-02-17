const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let anancıccd  = ayarlar.prefix

  
const yardım = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(`${client.user.username} - Komutlarım`)
.setDescription(`**\`Genel\`**
» \`${anancıccd}avatar\`: **Avatarınızı Atar**
» \`${anancıccd}say\`: **Üye Durum Grafiğini Gösterir**
» \`${anancıccd}kullanıcı-bilgi\`: **Etiketlediğin & Kendi Profilin Hakkında Bilgi Verir**

**\`Kayıt\`**
» \`${anancıccd}erkek/kız <isim> <yas>\`: **Belirtilen Kullanıcıyı Kayıt Edersiniz**
» \`${anancıccd}nick <isim> <yas>\`: **Belirtilen Kullanıcının İsmini Değiştirirsiniz**
» \`${anancıccd}vip al/ver\`: **Kullanıcıya Vip Al/Ver**

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