const { SlashCommandBuilder } = require("discord.js");

function PingCommand() {
  this.data = new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Pong!")
    .toJSON();

  this.execute = async (interaction, client) => {
    await interaction.reply({ content: "Pong!", ephemeral: true });
  };
}

module.exports = new PingCommand();
