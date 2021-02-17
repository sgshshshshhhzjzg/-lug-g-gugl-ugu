const Discord = require ('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');
const os = require('os');
const moment = require('moment');

exports.run = async (client, message, args, tools) => {
  let anan; //let anan -_-
  
  if (message.mentions.users.first()) {
    anan = message.mentions.users.first();
  } else {
    anan = message.author;
  }
  
  const member = message.guild.member(anan);
  
  const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
  
  .setThumbnail(anan.avatarURL)
  
  .setTitle(`${anan.username}#${anan.discriminator} Kullanıcı Bilgi`)
  
  .addField("Kullanıcı İsmi: ",`${anan.username}#${anan.discriminator}`, true)
  .addField("Kullanıcı ID Numarası:", `${anan.id}`, true)
  .addField("Discord TAG", `${anan.discriminator}`, true)
  .addField("Hesap Açma Tarihi:", `${moment.utc(anan.createdAt).format('YYYY-MM-DD HH:mm:ss')}`, true)
  .addField("Sunucuya Katılma Tarihi:", `${moment.utc(member.joinedAt).format('YYYY-MM-DD HH:mm:ss')}`, true)
  message.channel.send(embed) //ccd yazdı bunu aq kimse let anan koymaz onun dışında
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['profil'],
  permlvl: 0
}

exports.help = {
  name: "kullanıcı-bilgi"
}