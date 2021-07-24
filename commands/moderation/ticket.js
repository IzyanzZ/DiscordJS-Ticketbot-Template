


/// Template by TwentyDollarStudios
/// Want more? 
/// https://discord.gg/ns56mzu9
/// Support us on Ko-Fi
/// https://ko-fi.com/twentydollarstudios



const Discord = require('discord.js');
const client = new Discord.Client();
const data = new Object()
var channelName = ('Ticket ' + Math.floor(Math.random() * 999) + 1)
module.exports = {
	name: 'ticketopen',
    aliases: ['ticket', 'newticket', 'neeonticket'],
	description: 'Opening a ticket!',
    scopes: ["bot"],
	cooldown: 30000,
	execute(message, args, member, guild) {
        message.channel.send('This Command uses a spam protection of 30 minutes!')
        message.react('🎟️').then(() => message.react('❌'));

        const filter = (reaction, user) => {
            return ['🎟️', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
        };
        
        
        
        message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
            .then(collected => {
                const reaction = collected.first();
        
                if (reaction.emoji.name === '🎟️') {
                    const ticketopen1 = new Discord.MessageEmbed()
                    .setTitle(`⚙️Your Ticket is beeing created, please wait... spam protection timer started!⚙️`)
                    message.reply(ticketopen1)
                    const ticketclose = new Discord.MessageEmbed()
                    .setTitle(`${message.author.username}'s Ticket`)
                    .setColor('RANDOM')
                    .addFields(
                        { name: '⚒️Ticket Created⚒️', value: 'Your ticket has been created, only you and administrators can see it!', inline: true }
                    )
                    message.guild.channels.create(channelName, {
                        type: "text", 
                        permissionOverwrites: [
                           {
                             allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
                             id: message.author,               
                           }, {
                            deny: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
                            id: message.guild.roles.everyone,
                           }
                        ],
                      }).then(channel => channel.send(ticketclose))
                    } else {
                    const ticketdecline = new Discord.MessageEmbed()
                    .setTitle(`✂️Your ticket request got canceled, spam protection timer started!✂️`)
                    message.channel.send(ticketdecline);
                    message.delete({ timeout: 5000 })
                }
            })




            
            
       .catch(collected => {
         const reply = new Discord.MessageEmbed()
          .setTitle(`⛔You didn't react, your ticket request has been canceled, spam protection timer started!⛔`)
            message.reply(reply);
         });
	},
};



/// Template by TwentyDollarStudios
/// Want more? 
/// https://discord.gg/ns56mzu9
/// Support us on Ko-Fi
/// https://ko-fi.com/twentydollarstudios



