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
        .setColor("RANDOM")
    );

  let muteyetkili = message.mentions.roles.first();

  if (args[0] === "ayarla") {
    db.set(`muteyetkili_${message.guild.id}`, muteyetkili.id);
    const ayarlandı = new Discord.MessageEmbed()
      .setDescription(
        `Mute Yetkilisi Rolü Başarıyla ${muteyetkili} Olarak Ayarlandı !`
      )
      .setColor(ayarlar.oldu);
    message.channel.send(ayarlandı);
  }

  if (args[0] === "sıfırla") {
    db.delete(`muteyetkili_${message.guild.id}`);
    const sıfırlandı = new Discord.MessageEmbed()
      .setDescription(`Mute Yetkilisi Rolü Başarıyla Sıfırlandı !`)
      .setColor(ayarlar.oldu);
    message.channel.send(sıfırlandı)
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false, //Ccd Code x Fade Code
  aliases: [""],
  permlvl: 1 //Ccd Code
};

exports.help = {
  name: "mute-yetkili" //Ccd Code x Fade Code
}; //Ccd Code
