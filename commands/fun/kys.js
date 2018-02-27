const commando = require('discord.js-commando');

class kysCommand extends commando.Command {
    constructor(client){
        super(client, {
            name: 'kys',
            group: 'fun',
            memberName: 'kys',
            description: 'tells user to not kys'
        });
    }

    async run(message, args) {
        console.log("kys working")
        message.reply("Please Dont")
    }
}

module.exports = kysCommand;