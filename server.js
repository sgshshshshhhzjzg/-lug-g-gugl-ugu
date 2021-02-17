const Discord = require('discord.js')
const db = require('quick.db')
const client = new Discord.Client()
const moment = require('moment')
const chalk = require('chalk')
const jimp = require('jimp')
const ayarlar = ("./ayarlar.json")
const fs = require('fs')
var prefix = ayarlar.prefix
/////////////////////////////////////////////////////////////Ccd Code <3

client.on("ready", () => {
  console.log(`Bot Aktif ! CCD Code İyi Kodlamalar Diler !`) //CCD Code!
})

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

//Komutlar Baş

//Komutlar Son
//Alt Kısma Dokunma !
require("./util/eventLoader")(client); //CCD Code!

client.login("ODExNTQ3MTkyNjUzMjUwNTcw.YCzyOA.-LmT3bxPTKjuJdNrXWYimvgTNHc"); //CCD Code!

client.commands = new Discord.Collection(); //CCD Code!
client.aliases = new Discord.Collection(); //CCD Code!
fs.readdir("./komutlar/", (err, files) => { //CCD Code!
  if (err) console.error(err); //CCD Code!
  log(`${files.length} komut yüklenecek.`); //CCD Code!
  files.forEach(f => { //CCD Code!
    let props = require(`./komutlar/${f}`); //CCD Code!
    log(`Yüklenen komut: ${props.help.name}`); //CCD Code!
    client.commands.set(props.help.name, props); //CCD Code!
    props.conf.aliases.forEach(alias => { //CCD Code!
      client.aliases.set(alias, props.help.name); //CCD Code!
    }); //CCD Code!
  }); //CCD Code!
}); //CCD Code!

client.reload = command => { //CCD Code!
  return new Promise((resolve, reject) => { //CCD Code!
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)]; //CCD Code!
      let cmd = require(`./komutlar/${command}`); //CCD Code!
      client.commands.delete(command); //CCD Code!
      client.aliases.forEach((cmd, alias) => { //CCD Code!
        if (cmd === command) client.aliases.delete(alias); //CCD Code!
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name); //CCD Code!
      });
      resolve();
    } catch (e) {
      reject(e); //CCD Code!
    }
  }); //CCD Code!
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try { //CCD Code!
      let cmd = require(`./komutlar/${command}`); //CCD Code!
      client.commands.set(command, cmd); //CCD Code!
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name); //CCD Code!
      });
      resolve();
    } catch (e) {
      reject(e); //CCD Code!
    }
  });
}; //CCD Code!

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)]; //CCD Code!
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias); //CCD Code!
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
}; //CCD Code!

client.elevation = message => {
  if (!message.guild) {
    return; //CCD Code!
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2; //CCD Code!
  if (message.member.hasPermission("MANAGE_MESSAGES")) permlvl = 1; //CCD Code!
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3; //CCD Code!
  if (ayarlar.sahip.includes(message.author.id)) permlvl = 4; //CCD Code!
  return permlvl;
}; //CCD Code!

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => { //CCD Code!
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted"))); //CCD Code!
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted"))); //CCD Code!
}); //CCD Code!