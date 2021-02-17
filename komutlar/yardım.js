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
» \`${anancıccd}ban <kullanıcı> <sebep>\`: **Belirtilen Kullanıcıyı Sunucudan Yasaklar**
» \`${anancıccd}kick <kullanıcı> <sebep>\`: **Belirtilen Kullanıcıyı Sunucudan Atar**
» \`${anancıccd}mute <kullanıcı> <süre> <sebep>\`: **Kullanıcıyı Belirtilen Süre Boyunca Sohbet Kanalında Susturur**
» \`${anancıccd}ses-mute <kullanıcı> <süre> <sebep>\`: **Kullanıcıyı Belirtilen Süre Boyunca Sesli Kanalda Susturur**
» \`${anancıccd}unban <id>\`: **Belirtilen İD Deki Kişinin Sunucudan Yasağını Kaldırır**
» \`${anancıccd}temizle/sil <0-100>\`: **Belirtilen Miktarda Mesajı Siler**
» \`${prefix}sohbet-aç/kapat\`: **Sohbet Aç/Kapat**
» \`${prefix}ban-say\`: **Sunucudakı Banlanan Üye Sayısını Gösterir**
» \`${prefix}jail <kullanıcı> <sebep>\`: **Kullanıcıyı Belirtilen Sebepten Dolayı Jaile Atar**
» \`${prefix}e-unjail\`: **Erkek Kullanıcıyı Jailden Çıkarır**
» \`${prefix}k-unjail\`: **Kız Kullanıcıyı Jailden Çıkarır**
» \`${prefix}kurallar\`: **Hazır Kurallar Metni Atar**`)

.setThumbnail("https://cdn.discordapp.com/attachments/785821149580754954/786124655085748264/766653460988428308.gif")
.setTimestamp()
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