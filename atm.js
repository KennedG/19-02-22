const {MessageEmbed} = require("discord.js");
const db = require("quick.db");

module.exports = {

  name: "bal",

  aliases: ["saldo"],

  run: async(client, message, args) => {

    let membro = message.mentions.members.first() || message.member;
  
    let user = message.author;

    let gizmo = db.fetch(`gizmo.${user.id}`)
    if (gizmo === null) gizmo = 0;

    let bank = db.fetch(`bank_${user.id}`)
    if (bank === null) bank = 0;

    let cristais = db.fetch(`cristais_${user.id}`)
    if (cristais === null) cristais = 0;

    let moneyEmbed = new MessageEmbed()
    .setTitle(`<:coinGizmo:940747974206713886> | Saldo de: ${membro.displayName}`)
    .setColor("BLUE")
    .setDescription(`<:coinGizmo:940747974206713886> | Gizmo Coins na Carteira: ${gizmo}\n🏦 | Gizmo Coins no Banco: ${bank}\n📦 | Cristais: ${cristais}`)


    message.reply({embeds: [moneyEmbed]})  
}
}