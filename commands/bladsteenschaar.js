module.exports.run = async (bot, message, args) => {

    // sps steen papier schaar.

    if(!args[0]) return message.channel.send("gebruik: sps <steen, papier, schaar>");

    var options = ["steen", "papier", "schaar"];

    var result = options[Math.floor(Math.random() * options.length)];

    if(args[0] == "steen"){

        if (result == "papier"){

            message.channel.send(`Ik heb ${result} :notepad_spiral:, Ik win.`);

        } else if (result == "schaar"){
            message.channel.send(`Ik heb ${result} :scissors:, jij wint.`);
        } else if (result == "steen"){
            message.channel.send(`Ik heb ${result} :moyai:, Het is gelijkspel.`);
        }

    }
    else if(args[0] == "papier"){

        if (result == "steen"){

            message.channel.send(`Ik heb ${result} :moyai:, Jij wint.`);

        } else if (result == "schaar"){
            message.channel.send(`Ik heb ${result} :scissors:, Ik win.`);
        } else if (result == "papier"){
            message.channel.send(`Ik heb ${result} :notepad_spiral:, Het is gelijkspel.`);
        }

    }
    else if(args[0] == "schaar"){

        if (result == "steen"){

            message.channel.send(`Ik heb ${result} :moyai:, Ik win.`);

        } else if (result == "papier"){
            message.channel.send(`Ik heb ${result} :notepad_spiral:, jij wint.`);
        } else if (result == "schaar"){
            message.channel.send(`Ik heb ${result} :scissors:, Het is gelijkspel.`);
        }

    }
    

}

module.exports.help = {
    name: "sps"
} 