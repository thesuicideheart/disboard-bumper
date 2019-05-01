const Discord = require('discord.js')
const client = new Discord.Client();
const config = require('./config')

client.on('ready', () => {
    console.log(`Bot started on ${new Date()}`);
    console.log(`Logged in as ${client.user.username}#${client.user.discriminator}`)
    var guild = client.guilds.get(config.serverId);

    if(guild){
        /**
         * this is only used to get the right type in vs code.
         * So yah
         * @type {Discord.TextChannel}
         */
        let channel = guild.channels.get(config.channelId);
        if(channel && channel.type === "text"){
            setInterval(()=>{
                channel.send(config.message);
            }, config.interval);
        }else{
            console.log("Channel's type was not text")
        }
    }
});


client.login(config.token);