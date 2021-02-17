const Discord = require('discord.js') //Ccd Code

exports.run = async (client, message, args) => {
  
  const ping = new Discord.MessageEmbed()
  .setDescription(`Pingim; ${client.ws.ping}`)
  message.channel.send(ping)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [""],
  permlvl: 1 //Ccd Code
};

exports.help = {
  name: "ping"
}; //Ccd Code
