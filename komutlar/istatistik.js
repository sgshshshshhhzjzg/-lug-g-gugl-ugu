const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (bot, message, args) => {
  const napim = moment.duration(bot.uptime).format(" D [gün], H[saat], m [dakika], s [saniye]");
  const napimstats = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setFooter('Ccd Code x Fade Code v12 Moderasyon İstatistikler', bot.user.avatarURL)
  .setThumbnail(bot.user.avatarURL({ format: "png", size: 1024 }))
  .addField("**Ccd Code İstatistikleri**", "En iyi Moderasyon Botu!")
  .addField("**RAM Kullanımı**", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + 'MB', true)
  .addField("**Uptime Süresi**", napim)
  .addField("**Kullanıcı Sayısı**", bot.guilds.cache.reduce((a, m) => a + m.memberCount, 0).toLocaleString(), true)
  .addField("**Sunucu Sayısı**", bot.guilds.cache.size.toLocaleString(), true)
  .addField("**Kanal Sayısı**", bot.channels.cache.size.toLocaleString(), true)
  .addField("**Ping/Gecikme**", bot.ws.ping+"ms", true)
  .addField("**Discord.js Sürümü**", "v"+Discord.version, true)
  .addField("CPU",`md\n${os.cpus().map(i => `${i.model}`)[0]}`,true)
  message.channel.send(napimstats)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i", "stats"],
  permlvl: 1
};

exports.help = {
  name: "istatistik"
};