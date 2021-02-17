const Discord = require("discord.js")

exports.run = async (client, message, args) => {
  
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(new Discord.MessageEmbed().setDescription("Bu Komutu Kullanmak İçin \`Mesajları Yönet\` Yetkisine Sahip Olmalısın !").setColor("RANDOM"))
let mesajsayı = args[0]

if(!mesajsayı) return message.channel.send(new Discord.MessageEmbed().setDescription("Lütfen 1-99 Arası Sayı Belirtin !").setColor("RANDOM"))

  message.channel.bulkDelete(args[0]).then(() => {
  
const yanıt = new Discord.MessageEmbed()
.setTitle("Mesajlar Silindi !")
.addField("Silinen Mesaj Sayısı;", mesajsayı)
.addField("Mesajları Silen Yetkili;", message.author)
message.channel.send(yanıt).then(sil => sil.delete({timeout: 5000}))
  
  })
  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permlvl: 1
}

exports.help = {
  name: "sil"
}