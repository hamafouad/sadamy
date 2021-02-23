////////////////Escanoruo
const express = require("express");
const { Client, RichEmbed } = require("discord.js");
const app = express();
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}///////////////Escanor up
const http = require("http");
app.get("/", (request, response) => {
  console.log(Date.now() + "hosteriosx");
  response.sendStatus(200);
});///////////////Escanor up
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
const Discord = require("discord.js");
const client = new Discord.Client();
const data = new Map(); 
///////////////Escanor up
client.on("ready", () => {
  console.log(
    `Online In Servers : ${client.guilds.size} | Users : ${client.users.size}`
  );///////////////Escanor up
  let statuses = [
    `Servers: ${client.guilds.size} | Users: ${client.users.size}`,
    `WT UP`
    
  ];///////////////Escanor up
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(STREAMING, {
      type: "PLAYING",
      url: "http://www.twitch.tv/faith"
    });
  }, 3000);
});///////////////Escanor up

// ======== { • REPLAY • }======== //

///////////////EscaNor up
client.on("message", Escanor => {
  if (Escanor.content.startsWith("reklam")) {
    Escanor.author.send("**دڵەکەم ڕیـکـلامـەکـەم بـۆ بنێرە**");
    Escanor.reply("**ڕیـکلامەکەم لە تایـبـەت بـۆ بنێرە**");
  }
});

// ======== { • REKLAM • }======== //

///////////////Escanor 
client.on("ready", () => {
  var join = client.channels.get("812378188897583104"); /// ئاید ڤۆیس
  if (join) join.join();
});
client.on("message", Escanor => {
  if (Escanor.channel.type === "dm") {
    if (Escanor.content.startsWith("https://discord.gg/")) {
      Escanor.author.send(`> ** تـۆش ریکلام بۆ ئـەم سێرڤـەرە بکە ئاگادار به توش ريكلامه نه كه ي ريكلاكمت ره ش دكريت **https://discord.gg/ce3HJ4e96v  
`); /// لینکە سیرڤەرە خۆت
      client.channels.get("794258334223695892").send(////ئایدی ژوری تێکست
///////////////Escanor up
 
        `> Nerdra la layan <@${Escanor.author.id}> 
${Escanor.content}`
      );
    }
  }
});

// ======== { • TOKEN • }======== //
//// tb:bro bashe .env token dane
///////////////Escanor up
client.login(process.env.token);
