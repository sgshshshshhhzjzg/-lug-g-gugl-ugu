const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = "../ayarlar.json";

exports.run = async (client, message, args) => {
  if (!message.member.hasPermissions("BAN_MEMBERS"))
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription(
          "Bu Komutu Kullanabilmek İçin `Üyeleri Banla` Yetkisine Sahip Olmalısın !"
        )
        .setColor("RANDOM")
    );

  let kullanıcı = message.mentions.members.first();
  let oldu = ayarlar.oldu;
  let log = db.fetch(`banlog_${message.guild.id}`);

  const başarılı = new Discord.MessageEmbed()
    .setTitle("Kullanıcı Banlandı !")
    .addField("Banlanan Kullanıcı", kullanıcı)
    .addField("Banlayan Yetkili", message.author)
    .setColor(oldu);
  message.channel.send(başarılı);

  const logmesaj = new Discord.MessageEmbed()
    .setTitle("Ban Log !")
    .addField("Banlanan Kullanıcı", kullanıcı)
    .addField("Banlayan Yetkili", message.author)
    .setColor(oldu);
  message.channel.send(log);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [""],
  permlvl: 1
};

exports.help = {
  name: "ban"
};
