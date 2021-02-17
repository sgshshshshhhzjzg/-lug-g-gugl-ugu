const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = "../ayarlar.json"; //Ccd Code

exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("BAN_MEMBERS")) //Ccd Code
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription(
          "Bu Komutu Kullanabilmek İçin `Üyeleri Banla` Yetkisine Sahip Olmalısın !" //Ccd Code
        )
        .setColor("RANDOM")
    );

  let kullanıcı = message.mentions.members.first();
  let oldu = ayarlar.oldu;
  let log = db.fetch(`banlog_${message.guild.id}`);

  message.guild.member(kullanıcı).ban();
  
  const başarılı = new Discord.MessageEmbed() //Ccd Code
    .setTitle("Kullanıcı Banlandı !")
    .addField("Banlanan Kullanıcı", kullanıcı) //Ccd Code
    .addField("Banlayan Yetkili", message.author)
    .setColor(oldu);
  message.channel.send(başarılı);
//Ccd Code
  const logmesaj = new Discord.MessageEmbed()
    .setTitle("Ban Log !")
    .addField("Banlanan Kullanıcı", kullanıcı)
    .addField("Banlayan Yetkili", message.author) //Ccd Code
    .setColor(oldu);
  client.channels.cache.get(log).send(logmesaj);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [""],
  permlvl: 1
};

exports.help = {
  name: "ban"
}; //Ccd Code
