const { CommandInteraction } = require("discord.js");
const discord = require("discord.js");

module.exports.run = async (Client, message, args) => {


    module.exports = {

        execute(message, args){
            const target = message.mentions.users.first();
            if(target){
                const memberTarget = message.guild.members.cache.get(target.id);
                memberTarget.kick();
                message.channel.send("User has been kicked");
            }else{
                message.channel.send(`You coudn't kick that member!`);
            }
        }
    }



}

module.exports.help = {
    name: "kick",
    category: "general",
    discription: "kick"
}