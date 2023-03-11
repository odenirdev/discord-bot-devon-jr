const { Client, Events, GatewayIntentBits, Collection } = require("discord.js");
const fs = require("node:fs");
const path = require("node:path");

const { DeployCommands } = require("./deploy-commands");

function DiscordBot() {
  this.client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.GuildMembers,
    ],
  });

  this.start = async () => {
    this.handleCommands();

    this.handleMessages();

    new DeployCommands().run();

    this.login();
  };

  this.login = () => {
    this.client.once("ready", async (c) => {
      console.log(`🔥[discord-bot]: Logged in as ${c.user.tag}`);
    });

    this.client.login(process.env.TOKEN);
  };

  this.handleCommands = () => {
    this.client.commands = new Collection();

    const commandsPath = path.join(__dirname, "commands");
    const commandsFiles = fs
      .readdirSync(commandsPath)
      .filter((file) => file.endsWith(".js"));

    for (const file of commandsFiles) {
      const filePath = path.join(commandsPath, file);
      const command = require(filePath);

      if ("data" in command && "execute" in command) {
        this.client.commands.set(command.data.name, {
          ...command,
          execute: (interaction) => {
            return command.execute(interaction, this.client);
          },
        });

        // this.client.commands.set(command.data.name, command);
      } else {
        console.error(
          `Esse comando ${filePath} está com "data" ou "execute" ausentes`
        );
      }
    }

    this.client.on(Events.InteractionCreate, async (interaction) => {
      if (!interaction.isChatInputCommand()) {
        return;
      }

      const command = this.client.commands.get(interaction.commandName);
      if (!command) {
        console.error("Command is not found");
        return;
      }

      try {
        command.execute(interaction);
      } catch (error) {
        console.error(error);
      }
    });
  };

  this.handleMessages = () => {
    const messagesPath = path.join(__dirname, "messages");
    const messagesFiles = fs
      .readdirSync(messagesPath)
      .filter((file) => file.endsWith(".js"));

    for (const file of messagesFiles) {
      const filePath = path.join(messagesPath, file);
      const message = require(filePath);

      if ("execute" in message) {
        this.client.on(Events.MessageCreate, message.execute);
      } else {
        console.error(`Esse mensagem ${filePath} está com "execute" ausentes`);
      }
    }
  };
}

module.exports = { DiscordBot };
