const { REST, Routes } = require("discord.js");
const fs = require("node:fs");
const path = require("node:path");

const { TOKEN, CLIENT_ID, GUILD_ID } = process.env;

const rest = new REST({ version: "10" }).setToken(TOKEN);

function DeployCommands() {
  this.run = async () => {
    try {
      const commands = this.getCommands();

      await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
        body: commands,
      });

      console.log(
        "📦[discord-bot]: Successfully reloaded application (/) commands."
      );
    } catch (error) {
      console.error(error);
    }
  };

  this.getCommands = () => {
    const commandsPath = path.join(__dirname, "commands");
    const commandsFiles = fs
      .readdirSync(commandsPath)
      .filter((file) => file.endsWith(".js"));

    const commands = [];
    for (const file of commandsFiles) {
      const command = require(`./commands/${file}`);

      commands.push(command.data);
    }

    return commands;
  };
}

module.exports = { DeployCommands };
