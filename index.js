const { Client, Intents, Collection } = require("discord.js");
const Discord = require("discord.js");
const botConfig = require("./botconfig.json");

Discord.RichEmbed = Discord.MessageEmbed;


const fs = require("fs");

const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGE_REACTIONS]
});

client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.length <= 0) {
        console.log("Kon geen files vinden");
        return;
    }
 
    jsFiles.forEach((f, i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`De kanker file ${f} is geladen`);

        client.commands.set(fileGet.help.name, fileGet);

    })

});


client.once("ready", async () => {

    console.log(`BOOMMM ${client.user.username} is online!`);

    client.user.setActivity("🛠️ Hawk Dev..", { type: "WATCHING" });

});



client.on("messageCreate", message => {

    if (message.author.bot) return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    if(command == `${prefix}hallo`) {
        return message.channel.send("Hallo");
    }



});



client.login(process.env.token);