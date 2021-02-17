const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("MANAGE_ROLES"))
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription(
          "Bu Komutu Kullanabilmek İçin `Rolleri Yönet` Yetkisine Sahip Olmalısın !"
        )
        .setColor("RANDOM")
    );
  
  let muterol = db.fetch(`muterol_${message.guild.id}`)
  
  let kullanıcı = message.mentions.members.first()
  
  kullanıcı.roles.add(muterol)
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [""],
  permlvl: 1 //Ccd Code
};

exports.help = {
  name: "mute"
}; //Ccd Code
