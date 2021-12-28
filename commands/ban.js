const Discord = require('discord.js')

module.exports = {
    name: "ban",
    description: "ban command",

    async run (bot, message, args) {
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You cant use this command!")

        const mentionMember = message.mentions.members.first();
        let reason = args.slice(1).join(" "); //.ban <args(0) aka @member> | <args(1) aka reason>
        if (!reason) reason = "No reason given";

        const embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle (`You were Banned from **${message.guild.name}**`)
        .setDescription(`**Banned user:** ${mentionMember}
            **Banned by:** ${message.author}
            **Reason:** ${reason}`)
        .setTimestamp()
        .setFooter(bot.user.tag, bot.user.displayAvatarURL())

        if (!args[0]) return message.channel.send("You need to specify a user to ban");

        if(!mentionMember) return message.channel.send("This user is not a valid user / is no-longer in the server!");

        if(!mentionMember.bannable) return message.channel.send("I was unable to ban this user!");

        await message.channel.send(embed);
        await mentionMember.ban({
            reason: reason
        })
    }
}