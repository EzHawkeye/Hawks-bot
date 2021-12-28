const { CommandInteraction } = require("discord.js");
const discord = require("discord.js");

module.exports.run = async (Client, message, args) => {



    const target = message.mentions.members.first()
    if (!target) {
        const embed1 = new Discord.MessageEmbed()
        .setColor(commonjson.failcolor)
        .setTitle("Error")
        .setDescription("User does not exist in this server")
        message.channel.send(embed1);
        return
    }


        target.kick('not cool man')
        .then(async(target) => {
            
            const embed2 = new Discord.MessageEmbed()
            .setColor(commonjson.defaultolor)
            .setTitle(`Kicked!`)
            .setDescription(`You've kicked ${target.DisplayName} successfully`)
            message.channel.send(embed2);
            
        }).catch(() => {
            // Failmessage
        });


}

module.exports.help = {
    name: "kick",
    category: "general",
    discription: "kick"
}