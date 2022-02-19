const { MessageEmbed } = require("discord.js"); /*puxando a livraria discord.*/

const db = require("quick.db"); // puxando a database

module.exports = {
    config: {
        name: "sacar",
        aliases: [""],
        category: "economia",
        description: "sacar dinheiro do banco",
    },
    run: async (bot, message, args) => {
        let user = message.author;

        let member2 = db.fetch(`bank_${user.id}`)

        if (args.join(' ').toLocaleLowerCase() == 'all') {
            let lews = await db.fetch(`bank_${user.id}`)
            let embed = new MessageEmbed()
              .setColor("#0060EE")
              .setDescription(`Você não tem Gizmo Coins para sacar!`)
            if (!lews) return message.channel.send({embeds: [embed]})
            db.subtract(`bank_${user.id}`, lews)
            db.add(`gizmo.${user.id}`, lews)
            let embed5 = new MessageEmbed()
                .setColor("#0060EE")
                .setDescription(`Você sacou todas as seus Gizmo Coins do seu banco!`); 
            message.channel.send({embeds: [embed5]})

        } else {

            let embed2 = new MessageEmbed() 
                .setColor("#0060EE")
                .setDescription(`Especifique um valor para sacar, ou usando \`G!sacar all\``);

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
                .setDescription(`Você não pode sacar Gizmo Coins negativo!`);

            if (message.content.includes('-')) {
                return message.channel.send({embeds: [embed3]})
            }
            let embed4 = new MessageEmbed()
                .setColor("#0060EE")
                .setDescription(`Você não tem esse Gizmo Coins no banco!`);

             let embed5 = new MessageEmbed()
                .setColor("#0060EE")
                .setDescription(`Você não tem esse Gizmo Coins no banco!`);

            if (member2 < args[0]) {
                return message.channel.send({embeds: [embed5]})
            }

            let embed7 = new MessageEmbed()
                .setColor("#0060EE")
                .setFooter(`Autor do comando ${message.author.tag}`, message.author.displayAvatarURL())
                .setDescription(`Você sacou ${args[0]} Gizmo Coins do seu banco!`);

            message.channel.send({embeds: [embed7]})
            db.subtract(`bank_${user.id}`, args[0])
            db.add(`gizmo.${user.id}`, args[0])
        }
    }
               }