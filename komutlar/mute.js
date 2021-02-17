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
  
  let muteyetkilisi = db.fetch(`muteyetkili_${message.guild.id}`)
  
  if(!message.member.roles.cache.has(muteyetkilisi)) return message.channel.send(new Discord.MessageEmbed().setDescription("Bu Komutu Kullanabilmek İçin Yeterli Yetkiye Sahip Değilsin !").setColor("RANDOM"))

  let muterol = db.fetch(`muterol_${message.guild.id}`);
  
  let log = db.fetch(`mutelog_${message.guild.id}`)

  let kullanıcı = message.mentions.members.first();

  kullanıcı.roles.add(muterol);

  const mutemesaj = new Discord.MessageEmbed()
    .setTitle("Kullanıcı Susturuldu !")
    .addField("Susturan Yetkili;", message.author)
    .addField("Susturulan Kullanıcı;", kullanıcı);
  message.channel.send(mutemesaj).then(mesaj => mesaj.delete({timeout: 5000}));
  
  const logmsg = new Discord.MessageEmbed()
  .setTitle("Bir Kullanıcı Susturuldu !")
  .addField("Susturan Yetkili;", message.author)
  .addField("Susturulan Kullanıcı;", kullanıcı);
  client.channels.cache.get(log).send(logmsg)
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
