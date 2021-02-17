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
  .addField("**RAM Kullanımı**", (process.memoryUsage().))
}