const Discord = require("discord.js")
const bot = new Discord.Client({disableEveryone: true})
bot.queue = new Discord.Collection()

bot.on("ready", async () => {
  
  bot.user.setActivity("[MinersDreamID]", {type: "STREAMING"})
  console.log(`${bot.user.username} sudah online !`)
})

bot.on("message", async (message) => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return
  
  let prefix = "x!" // bisa ganti lah ya
    let msg = message.content.toLowerCase();
    let sender = message.author;
    let args = message.content.slice(prefix.length).trim().split(" ");
    let cmd = args.shift().toLowerCase();
  
  
if (message == `<@${bot.user.id}>` || message == `<@!${bot.user.id}>`) {
     message.channel.send(` Halo! **${message.author.tag}** Gunakan Prefix ***d!.***.
Jika Ingin Mengetahui Daftar Perintah. Gunakan **d!.help** `)
}
  if (!message.content.startsWith(prefix)) return;
try {
    let commandFile = require(`./cmds/${cmd}.js`);
    commandFile.run(bot, message, args);
} catch (e) {
    console.log(e.message)
} finally {
    console.log(`${message.author.tag} menggunakan perintah ${cmd}`);
}

});


bot.login(process.env.token);
