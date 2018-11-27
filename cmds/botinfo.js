const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    
    
 
  let bicon = bot.user.displayAvatarURL
  let embed = new Discord.RichEmbed()
  .setTitle("MinerDreamsID Information")
  .addField("❱ Bot Name", "MinersDreamID")
  .setThumbnail(bicon)
  .addField("❱ Bot ID" , `${bot.user.id}`)
  .addField("❱ Bot Prefix" , "d!.")
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
