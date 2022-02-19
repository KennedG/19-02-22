const { MessageEmbed } = require("discord.js"); /*puxando a livraria discord.*/

const db = require("quick.db"); // puxando a database

module.exports = {
    config: {
        name: "dep",
        aliases: ["depositar"],
        category: "economia",
        description: "depositar o dinheiro no banco",
    },
    run: async (bot, message, args) => {
        let user = message.author;

        let member2 = db.fetch(`gizmo.${user.id}`)

        if (args.join(' ').toLocaleLowerCase() == 'all') {
            let lews = await db.fetch(`gizmo.${user.id}`)
            let embed = new MessageEmbed()
              .setColor("#0060EE")
              .setDescription(`Você não tem Gizmo Coins para depositar!`)
            if (!lews) return message.channel.send({embeds: [embed]})
            db.subtract(`gizmo.${user.id}`, lews)
            db.add(`bank_${user.id}`, lews)
            let embed5 = new MessageEmbed()
                .setColor("#0060EE")
                .setDescription(`Você depositou todo seu Gizmo Coins no banco!`); 
            message.channel.send({embeds: [embed5]})

        } else {

            let embed2 = new MessageEmbed() 
                .setColor("#0060EE")
                .setDescription(`Especifique um valor para depositar, ou usando \`G!depositar all\``);

            if (!args[0]) {
                return message.channel.send({embeds: [embed2]})
            }
            let embed6 = new MessageEmbed()
                .setColor("#0060EE")
                .setDescription(`Seu valor não é um número!`)

            if(isNaN(args[0])) {
                return message.channel.send({embeds: [embed6]})
            }
            let embed3 = new MessageEmbed()
                .setColor("#0060EE")
                .setDescription(`Você não pode depositar Gizmo Coins negativo!`);

            if (message.content.includes('-')) {
                return message.channel.send({embeds: [embed3]})
            }
            let embed4 = new MessageEmbed()
                .setColor("#0060EE")
                .setDescription(`Você não tem esse Gizmo Coins na carteira!`);

            if (member2 < args[0]) {
                return message.channel.send({embeds: [embed4]})
            }

            let embed5 = new MessageEmbed()
                .setColor("#0060EE")
                .setFooter(`Autor do comando ${message.author.tag}`, message.author.displayAvatarURL())
                .setDescription(`Você depositou ${args[0]} na sua conta bancária!`);

            message.channel.send({embeds: [embed5]})
            db.subtract(`gizmo.${user.id}`, args[0])
            db.add(`bank_${user.id}`, args[0])
        }
    }
}