const Discord = require('discord.js')
module.exports = {
    name: 'embed com button', 
    author: 'tiozão', 
    aliases: 'embed', 
    run: async(client, message, args) => {

        const embed = new Discord.MessageEmbed()
        .setColor('#A020F0')
        .setTitle('<:firewall:942415761857728532> Servidor suporte! <:firewall:942415761857728532>')
        .setDescription(`
        Aconteceu algum erro comigo? caso queira conversar diretamente com a staff entre no meu suporte!
        Caso não queira entrar use **G!bug**!

        **<a:hype:897139138661351434>| Aqui está o meu link de [Suporte](https://discord.gg/Vk8sEtb4n5)!**

        `)

        
        const button = new Discord.MessageActionRow()
        .addComponents(
            new Discord.MessageButton() //button
            .setStyle('LINK') //NÃO TROQUE POIS É UM LINK!
            .setEmoji('<:info:916909634403573801>') //EMOJI DO BOTÃO
            .setLabel('Servidor de Suporte.') //TEXTO DO BOTÃO
            .setURL('https://discord.gg/Vk8sEtb4n5')//URL
        )
     
        message.reply({ embeds: [embed], components: [button] })
    }
}

