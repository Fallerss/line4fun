const Discord = require("discord.js");

const client = new Discord.Client();
let pfx = '!'
client.on('ready', () =>{
  client.user.setActivity('4F un Server.', {type: 'PLAYING'})
})
client.on('message', message =>{
  if(message.content === 'خط' ||message.content === 'line' ){
     const attachment = new Discord.MessageAttachment('./s.png')
    message.delete()
    message.channel.send(attachment);
  }
})

client.on('message', message =>{

const parts = message.content.split(' ');
    const command = parts.shift().toLowerCase();
  if(command === pfx + 'كتت' ||command === pfx + 'cut'){
    if(message.member.hasPermission('ADMINISTRATOR')){
      let c = message.content.slice('5')
      message.delete()
      try{
      message.channel.send(`**Cut tweet 4F un..** ${client.emojis.cache.get('739720044044353638')}\n\n ${c} \n\n ||@here||`)}catch{
        return
      }
    }else{
      return;
    }
  }
})


client.login('NzM5NzEzMjkxOTI4MjA3NDAw.XyedsA.fNhBr7yjS4qzpgDrKVXogTKG9-U');