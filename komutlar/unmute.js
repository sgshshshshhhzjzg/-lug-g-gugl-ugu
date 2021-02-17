const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = "../ayarlar.json";

exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("MANAGE_ROLES"))
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription(
          "Bu Komutu Kullanabilmek İçin `Rolleri Yönet` Yetkisine Sahip Olmalısın !"
        )
        .setColor(ayarlar.hata)
    );

  let anan = message.mentions.members.first();

  let anancılarxyz = db.fetch(`muterol_${message.guild.id}`);

  if (!message.member.roles.cache.has(anancılarxyz)) {
    const anancılarcom = new Discord.MessageEmbed()
      .setDescription(
        "Bu Komutu Kullanabilmek İçin Yeterli Yetkiye Sahip Değilsin !"
      )
      .setColor(ayarlar.hata);
    message.channel.send(anancılarcom);
  }

  anan.roles.remove(anancılarxyz);

  const anansj = new Discord.MessageEmbed()
    .setDescription("Başarıyla Kullanıcının Susturulmasını Açtım !")
    .setColor(ayarlar.oldu);
  message.channel.send(anansj);

  if (!anan) {
    const anancılarnet = new Discord.MessageEmbed()
      .setDescription("Bir Kullanıcıyı Etiketlemelisin !")
      .setColor(ayarlar.hata);
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
