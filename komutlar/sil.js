const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) //Ccd Code
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription(
          "Bu Komutu Kullanmak İçin `Mesajları Yönet` Yetkisine Sahip Olmalısın !" //Ccd Code
        )
        .setColor("RANDOM")
    );
  let mesajsayı = args[0]; //Ccd Code

  if (!mesajsayı)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription("Lütfen 1-100 Arası Sayı Belirtin !") //Ccd Code
        .setColor("RANDOM") //Ccd Code
    );

  message.channel.bulkDelete(args[0]).then(() => { //Ccd Code
    const yanıt = new Discord.MessageEmbed()
      .setTitle("Mesajlar Silindi !") //Ccd Code
      .addField("Silinen Mesaj Sayısı;", mesajsayı) //Ccd Code
      .addField("Mesajları Silen Yetkili;", message.author);
    message.channel.send(yanıt).then(sil => sil.delete({ timeout: 5000 }));
  });
};

exports.conf = {
  enabled: true, //Ccd Code
  guildOnly: false,
  aliases: [""],
  permlvl: 1
};

exports.help = {
  name: "sil" //Ccd Code
}; //Ccd Code
