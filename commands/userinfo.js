const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


    message.channel.send({embed: {
        color: 15158332,
        description: `**Username:** ${message.author.username}\n**Discord ID:** ${message.author.id}`
      }});
}

module.exports.help = {
    name: "Userinfo"
}