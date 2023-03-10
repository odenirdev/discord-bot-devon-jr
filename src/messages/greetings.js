function GreetingsMessages() {
  this.execute = async (message) => {
    if (message.author.bot) return;

    if (String(message.content).toLowerCase().includes("bom dia")) {
      return message.reply(`${message.author.username}, Bom dia!`);
    }

    if (String(message.content).toLowerCase().includes("boa tarde")) {
      return message.reply(`${message.author.username}, Boa tarde!`);
    }

    if (String(message.content).toLowerCase().includes("boa noite")) {
      return message.reply(`${message.author.username}, Boa noite!`);
    }
  };
}

module.exports = new GreetingsMessages();
