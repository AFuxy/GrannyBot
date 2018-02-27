const commando = require('discord.js-commando');

class AvatarCommand extends commando.Command {
    constructor(client){
        super(client, {
            name: 'avatar',
            group: 'random',
            memberName: 'avatar',
            description: 'shows an avatar'
        });
    }

    async run(message, args) {
        console.log("Avatar Works")
        message.reply("Avatar Coming Soon")
    }
}

module.exports = AvatarCommand;