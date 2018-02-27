const commando = require('discord.js-commando');

class ShutdownCommand extends commando.Command {
    constructor(client){
        super(client, {
            name: 'shutdown',
            group: 'admin',
            memberName: 'shutdown',
            description: 'shuts the bot down'
        });
    }

    async run(message, args) {
        console.log("shutdown working")
        message.reply("Shutdown is an admin command")
    }
}

module.exports = ShutdownCommand;