const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (bot, message, args) => {
  const napim = moment.duration(bot.uptime).format(" D [gün], H[saat], m [dakika], s [saniye]");
  const napimstats = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setfooter('Ccd Code x Fade Code v12 Moderasyon İstatistikler', bot.user.avatarURL)
  .addField('Ccd Code', bot.user.avatarURL)
  .addField("**Ccd Code İstatistikleri**", "En iyi Moderasyon Botu!")
  .addField("**RAM Kullanımı**", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + 'MBD', true)
  .addField("**Uptime Süresi**", napim)
  .addField("**Kullanıcı Sayısı**", bot.guilds.reduce((a, m) => a + m.memberCount, 0).toLocaleString(), true)
  .addField("**Sunucu Sayısı**", bot.guilds.size.toLocaleString(), true)
  .addField("**Kanal Sayısı**", bot.channels.size.toLocaleString(), true)
  .addField("**Ping/Gecikme", bot.ping+"ms", true)
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