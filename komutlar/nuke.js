const Discord = require('discord.js'); //Ccd Code x Fade Code

exports.run = (client, message, args) => {
if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Bu Komutu Kullanabilmek İçin **KANALLARI YÖNET** Yetkisine Sahip Olman Gerek."); //Ccd Code x Fade Code
message.channel.clone().then(knl => { //Ccd Code x Fade Code
  let position = message.channel.position; //Ccd Code x Fade Code
  knl.setPosition(position); //Ccd Code x Fade Code
  message.channel.delete(); //Ccd Code x Fade Code
  const embed = new Discord.MessageEmbed() //Ccd Code x Fade Code
  .setTitle('Bir kanal patladı!')
.setImage('https://media1.giphy.com/media/oe33xf3B50fsc/giphy.gif') //Ccd Code x Fade Code
.setFooter(`Nuke atan: ${message.author.id}`) //Ccd Code x Fade Code
knl.send(embed) //Ccd Code x Fade Code
}); //Ccd Code x Fade Code
   
} //Ccd Code x Fade Code
exports.conf = { //Ccd Code x Fade Code
  enabled: true, //Ccd Code x Fade Code
  guildOnly: true, //Ccd Code x Fade Code
  aliases: ["nuke","nuk","nk"], //Ccd Code x Fade Code
  permLevel: 3 //Ccd Code x Fade Code
}; //Ccd Code x Fade Code

exports.help = { //Ccd Code x Fade Code
    name: 'nuke',
  description: 'belirtilen kanalı siler tekrar oluşturur.', //Ccd Code x Fade Code
  usage: 'nuke' //Ccd Code x Fade Code
}; //Ccd Code x Fade Code