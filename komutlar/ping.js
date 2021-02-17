const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  const ping = new Discord.MessageEmbed()
  .setDescription(`Pingim; ${client.ws.ping}`)
  message.channel.send(ping)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [""],
  permlvl: 1
};

exports.help = {
  name: "ping"
};
