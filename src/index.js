const dotenv = require("dotenv");

dotenv.config();

const { Server } = require("./server");

const { DiscordBot } = require("./discord-bot");

new Server().start();

new DiscordBot().start();
