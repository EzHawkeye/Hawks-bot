const Discord = require('discord.js')

module.exports = {
    name: "kick",
    description: "kick command",

    async run (bot, message, args) {
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You cant use this command!")

        const mentionMember = message.mentions.members.first();
        let reason = args.slice(1).join(" "); //.kick <args(0) aka @member> | <args(1) aka reason>

        if (!reason) reason = "No reason given";

        const kickembed = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(`**Kicked user:** ${.message.mentions.members.first}
            **Kicked by:** ${message.author}
            **Reason:** ${reason}`)
        .setTimestamp()
        .setFooter(bot.user.tag, bot.user.displayAvatarURL())

        if (!args[0]) return message.channel.send("You need to specify a user to kick");

        if(!mentionMember) return message.channel.send("This user is not a valid user / is no-longer in the server!");

        if(!mentionMember.kickable) return message.channel.send("I was unable to kick this user!");


        try {
            await message.channel.send(kickembed);
        } catch (err) {

        }

        try {
            await message.channel.kick(reason);
        } catch (err) {
            return message.channel.send("I was unabe to kick this user! Sorry...")
        }
    }
}