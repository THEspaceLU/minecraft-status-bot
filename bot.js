const Discord = require('discord.js');
const client = new Discord.Client();


var request = require('request');
var mcCommand = '/minecraft'; // Command for triggering
var mcIP = 'THEspaceLU.aternos.me'; // Your MC server IP

client.on('message', message => {
    if (message.content === mcCommand) {
        var url = 'http://mcapi.us/server/status?ip=' + mcIP;
        request(url, function(err, response, body) {
            if(err) {
                console.log(err);
                return message.reply('Error getting Minecraft server status...');
            }
            body = JSON.parse(body);
            var status = '*Minecraft server is currently offline*';
            if(body.online) {
                status = '**Minecraft** server is **online**  -  ';
                if(body.players.now) {
                    status += '**' + body.players.now + '** people are playing!';
                } else {
                    status += '*Nobody is playing!*';
                }
            }
            message.reply(status);
        });
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NTM1ODU2ODk3Nzk5MjI1MzQ0.DyOPgQ.kqP0w9CxJb-KCLfw7Ckef5ZXx7c);
