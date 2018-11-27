const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    
    
 
  let bicon = bot.user.displayAvatarURL
  let embed = new Discord.RichEmbed()
  .setTitle("<:verified:435160984521408512> | DJ Beatz Information")
  .addField("❱ Bot Name", "DJ Beatz")
  .setThumbnail(bicon)
  .addField("❱ Bot ID" , `${bot.user.id}`)
  .addField("❱ Bot Prefix" , "x!")
  .addField("❱ Owner ", "EzraMighty#5576", true)
        .addField("❱ Created On", bot.user.createdAt)
  .addField("❱ Library Bot", " • Discord.js v11.4.2  Nodejs v8.12.0", true)
.setColor('RANDOM')
  .setFooter(`⏱ ${Date.now() - message.createdTimestamp}ms`)
  .setImage(bot.displayAvatarURL);
  message.channel.send(embed);
}

module.exports.help = {
    name: "botinfo"
}
