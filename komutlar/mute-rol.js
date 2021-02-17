const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = ("../ayarlar.json")

exports.run = async (client, message, args) => {
  
  if(!message.member.permissions.has("MANAGE_ROLES")) return message.channel.send(new Discord.MessageEmbed().setDescription("Bu Komutu Kullanabilmek İçin \`Rolleri Yönet\` Yetkisine Sahip Olmalısın !").setColor("RANDOM"))
  
  let muterol = message.mentions.roles.first()
  
  if(!muterol) return message.channel.send(new Discord.MessageEmbed().setDescription("Bir Rol Etiketlemelisin !").setColor("RANDOM"))
  
  if(args[0] === "ayarla") {
    db.set(`muterol_${message.guild.id}`, muterol.id)
    const ayarlandı = new Discord.MessageEmbed()
    .setDescription("Mute Rolü Başarıyla Ayarlandı !")
    .setColor(ayarlar.oldu)
    message.channel.send(ayarlandı)
  }
  
  if(args[0] === "sıfırla") {
    db.delete(`muterol_${message.guild.id}`)
    const sıfırlandı = new Discord.MessageEmbed()
    .setDescription("")
    .setColor(ayarlar.oldu)
    message.channel.send(sıfırlandı)
  }
} //Ccd Code x Fade Code