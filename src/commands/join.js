const { SlashCommandBuilder } = require("discord.js");

function JoinCommand() {
  this.data = new SlashCommandBuilder()
    .setName("join")
    .setDescription("Se tornar membro do servidor")
    .toJSON();

  this.execute = async (interaction) => {
    await interaction.reply({ content: "Join!", ephemeral: true });
  };
}

module.exports = new JoinCommand();
