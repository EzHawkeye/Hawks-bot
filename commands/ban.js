const { CommandInteraction } = require("discord.js");
const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


     if(!message.member.permissions.has("KICK_MEMBERS")) return message.reply("You can't use that Command.");

     if (!message.guild.me.permissions.has("KICK_MEMBERS")) return message.reply("You don't have permission for this.");

     if(!args[0]) return message.reply("You did not choose a member.");
     
     if (!args[1]) return message.reply("Please give up a reason.");

     var banUser = message.guild.members.cache.get(message.mentions.users.first().id || message.guild.members.get(args[0]).id);

     if (!banUser) return message.reply("Can't find that person.");

     if(banUser.permissions.has("MANAGE_MESSAGES")) return message.reply("You don't have acces to ban that user");

     var reason = args.slice(1).join(" ");

     var embedPrompt = new discord.MessageEmbed()
     .setColor("RED")
     .setDescription(`**Banned:** ${banUser} (${banUser.id})
     **Kicked by:** ${message.author}
     **Reason:** ${reason}`)
     .setFooter(message.member.displayname)
     .setTimestamp();




}

module.exports.help = {
    name: "kick",
    category: "general",
    discription: "kick"
}