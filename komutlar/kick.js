const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = "../ayarlar.json"; //Ccd Code

exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("KICK_MEMBERS")) //Ccd Code
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription(
          "Bu Komutu Kullanabilmek İçin `Üyeleri At` Yetkisine Sahip Olmalısın !" //Ccd Code
        )
        .setColor("RANDOM")
    );

  let kullanıcı = message.mentions.members.first();
  let oldu = ayarlar.oldu;
  let log = db.fetch(`kicklog_${message.guild.id}`);

  message.guild.member(kullanıcı).kick();
  
  const başarılı = new Discord.MessageEmbed() //Ccd Code
    .setTitle("Kullanıcı Kicklendi !")
    .addField("Kicklenen Kullanıcı", kullanıcı) //Ccd Code
    .addField("Kickleyen Yetkili", message.author)
    .setColor(oldu);
  message.channel.send(başarılı);
//Ccd Code
  const logmesaj = new Discord.MessageEmbed()
    .setTitle("Kick Log !")
    .addField("Kicklenen Kullanıcı", kullanıcı)
    .addField("Kickleyen Yetkili", message.author) //Ccd Code
    .setColor(oldu);
  client.channels.cache.get(log).send(logmesaj); //Ccd Code x Fade Code
};

exports.conf = {
  enabled: true, //Ccd Code x Fade Code
  guildOnly: false,
  aliases: [""],
  permlvl: 1
};

exports.help = { //Ccd Code x Fade Code
  name: "kick"
}; //Ccd Code
