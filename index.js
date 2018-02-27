const commando = require('discord.js-commando');
const bot = new commando.Client();

bot.on('ready', () => {
    console.log('Bot Launched...')

    bot.user.setGame('With My Sun', 'https://www.twitch.tv/thegamingmonsters701');

    //bot.user.setStatus('dnd')

});

bot.registry.registerGroup('custom', 'Custom')
bot.registry.registerGroup('random', 'Random');
bot.registry.registerGroup('fun', 'Fun');
bot.registry.registerGroup('admin', 'Admin');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands")

bot.login('NDE3Nzg2Nzc4NjI0MTk2NjI4.DXYFyw.Zc34SYn0jCR4XyNUqg2wNov1-IU');
