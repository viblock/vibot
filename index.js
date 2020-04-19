const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'TOKEN';

bot.on('ready', () =>{
    console.log('Vibot is now online.');
    bot.user.setStatus('available')
    bot.user.setPresence({
        game: {
            name: 'Viblock',
            type: "PLAYING",
            url: "https://www.viblock.xyz"
        }
    });
})

bot.login(token);

bot.on('message', msg =>{
    if(msg.content === "worm"){
        const react1 = client.emojis.find(emoji => emoji.name === "WormThink");
        const react2 = client.emojis.find(emoji => emoji.name === "WormSad");
        const react3 = client.emojis.find(emoji => emoji.name === "WormPew");
        const react4 = client.emojis.find(emoji => emoji.name === "WormPensive");
        const react5 = client.emojis.find(emoji => emoji.name === "WormNani");
        message.react(react1.id)
        message.react(react2.id)
        message.react(react3.id)
        message.react(react4.id)
        message.react(react5.id)
    }
})