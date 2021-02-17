const Discord = require ('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');
const os = require('os');
const moment = require('moment');

exports.run = async (client, message, args, tools) => {
  let anan;
  
  if (message.mentions.users.first()) {
    anan = message.mentions.users.first();
  } else {
    anan = message.author;
  }
  
  const member = message.guild.member(anan);
  
  const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
  
  .setThumbnail(user.avatarURL())
  
  .setTitle(`${user.username}#${user.discriminator} Ku`)