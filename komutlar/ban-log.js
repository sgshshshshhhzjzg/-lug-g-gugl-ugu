const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("BAN_MEMBERS"))
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription(
          "Bu Komutu Kullanabilmek İçin `Üyeleri Banla` Yetkisine Sahip Olmalısın !"
        )
        .setColor("RANDOM")
    );

  let prefix = ayarlar.prefix;

  let kanal = message.mentions.channels.first();

  if (!kanal)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription(
          "Bir Kanal Belirtmelisin ! Örnek; " + prefix + "ban-log ayarla #kanal"
        )
        .setColor("RANDOM")
    );

  if (args[0] === "ayarla") {
    db.set(`banlog_${message.guild.id}`, kanal.id);
    message.channel.send(
      new Discord.MessageEmbed()
        .setDescription(
          "Ban Log Kanalı Başarıyla " + `${kanal}` + " Olarak Ayarlandı !"
        )
        .setColor("RANDOM")
    );
  }

  if (args[0] === "sıfırla") {
    db.delete(`banlog_${message.guild.id}`);
    message.channel.send(
      new Discord.MessageEmbed()
        .setDescription("Ban Log Kanalı Başarıyla Sıfırlandı !")
        .setColor("RANDOM")
    );
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [""],
  permlvl: 1
};

exports.help = {
  name: "ban-log"
};
