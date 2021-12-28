const { CommandInteraction } = require("discord.js");
const discord = require("discord.js");

module.exports.run = async (Client, message, args) => {


     if(!message.member.permissions.has("KICK_MEMBERS")) return message.reply("You can't use that Command.");

     if (!message.guild.me.permissions.has("KICK_MEMBERS")) return message.reply("You don't have permission for this.");

     if(!args[0]) return message.reply("You did not choose a member.");
     
     if (!args[1]) return message.reply("Please give up a reason.");

     var kickUser = message.guild.members.cache.get(message.mentions.users.first().id || message.guild.members.get(args[0]).id);

     if (!kickUser) return message.reply("Can't find that person.");

     if (kickUser.permissions.has("MANAGE_MESSAGES")) return message.reply("You don't have acces to kick that user");

     var reason = args.slice(1).join(" ");


     var embedPrompt = new discord.MessageEmbed()
     .setColor("RED")
     .setDescription(`**Kicked:** ${kickUser} (${kickUser.id})
     **Kicked by:** ${message.author}
     **Reason:** ${reason}`)
     .setFooter(message.member.displayname)
     .setTimestamp();

     message.channel.send({ embeds: [embedPrompt] }).then(async msg =>)




}

module.exports.help = {
    name: "kick",
    category: "general",
    discription: "kick"
}