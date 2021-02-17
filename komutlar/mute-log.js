const Discord = require("discord.js");
const db = require("quick.db"); //Ccd Code x Fade Code
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("MANAGE_ROLES"))
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription(
          "Bu Komutu Kullanabilmek İçin `Rolleri Yönet` Yetkisine Sahip Olmalısın !" //Ccd Code x Fade Code
        )
        .setColor("RANDOM")
    );

  let logkanal = message.mentions.channels.first();

  if (!logkanal)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription("Bir Kanal Etiketlemelisin !") //Ccd Code x Fade Code
        .setColor("RANDOM")
    );

  if (args[0] === "ayarla") {
    db.set(`mutelog_${message.guild.id}`, logkanal.id);
    const embed = new Discord.MessageEmbed()
      .setDescription(
        `Mute Log Kanalı Başarıyla ${logkanal} Olarak Ayarlandı !`
      )
      .setColor(ayarlar.oldu);
    message.channel.send(embed);
  }

  if (args[0] === "sıfırla") {
    db.delete(`mutelog_${message.guild.id}`);
    const embed1 = new Discord.MessageEmbed()
      .setDescription("Mute Log Kanalı Başarıyla Sıfırlandı !") //Ccd Code x Fade Code
      .setColor(ayarlar.oldu);
    message.channel.send(embed1); //Ccd Code x Fade Code
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false, //Ccd Code x Fade Code
  aliases: [""],
  permlvl: 1 //Ccd Code
};

exports.help = {
  name: "mute-log" //Ccd Code x Fade Code
}; //Ccd Code
