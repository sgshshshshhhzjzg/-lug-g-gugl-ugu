const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs"); //Ccd Code
const moment = require("moment");
const Jimp = require("jimp");
const ayarlar = require("./ayarlar.json");
require("./util/eventLoader")(client);
const db = require("quick.db"); //Ccd Code
const express = require("express");
const app = express();
const http = require("http");
app.get("/", (request, response) => {
  console.log(`...`); //Ccd Code
  console.error("---");

  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => { //Ccd Code
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

let prefix = ayarlar.prefix;

console.log("Başarı ile bağlantı kurdum ve aktifim... Ccd Code <3"); //Ccd Code
console.log("Ccd Code <3");
const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`); //Ccd Code
};

client.commands = new Discord.Collection(); //Ccd Code
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek. Ccd Code!.`); //Ccd Code
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props); //Ccd Code
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
}); //Ccd Code

client.reload = command => {
  return new Promise((resolve, reject) => {
    try { //Ccd Code
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => { //Ccd Code
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name); //Ccd Code
      });
      resolve();
    } catch (e) {
      reject(e); //Ccd Code
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`); //Ccd Code
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name); //Ccd Code
      }); //Ccd Code
      resolve();
    } catch (e) {
      reject(e); //Ccd Code
    }
  });
}; //Ccd Code

client.unload = command => { //Ccd Code
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)]; //Ccd Code
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias); //Ccd Code
      });
      resolve();
    } catch (e) { //Ccd Code
      reject(e);
    }
  });
}; //Ccd Code

client.elevation = message => { //Ccd Code
  if (!message.guild) return message.author.send("**Beni Sunucuda Deneyin**"); //Ccd Code
  let permlvl = 0;
  if (message.member.permissions.has("BAN_MEMBERS")) permlvl = 2; //Ccd Code
  if (message.member.permissions.has("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4; //Ccd Code
  return permlvl; //Ccd Code
};

client.login(ayarlar.token); //Ccd Code
