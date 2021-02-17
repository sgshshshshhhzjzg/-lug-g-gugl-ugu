const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = ("../ayarlar.json")

exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("MANAGE_ROLES"))
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription(
          "Bu Komutu Kullanabilmek İçin `Rolleri Yönet` Yetkisine Sahip Olmalısın !"
        )
        .setColor("RANDOM")
    );
  
  let anan = message.mentions.members.first()
  
  let anancılarxyz = db.fetch(`muterol_${message.guild.id}`)
  
  anan.roles.remove(anancılarxyz)
  
  const anansj = new Discord.MessageEmbed()
  .setDescription("Başarıyla Kullanıcının Susturulmasını Açtım !")
  .setColor(ayarlar.oldu)
  message.channel.send(anansj)
  
  if(!anan) {
    const anancılarnet = new Discord.MessageEmbed()
    .setDescription("")
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [""],
  permlvl: 1 //Ccd Code
};

exports.help = {
  name: "unmute"
}; //Ccd Code
