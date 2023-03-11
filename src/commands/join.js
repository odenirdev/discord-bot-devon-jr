const { SlashCommandBuilder } = require("discord.js");

function JoinCommand() {
  this.data = new SlashCommandBuilder()
    .setName("join")
    .setDescription("Se tornar membro do servidor")
    .toJSON();

  this.execute = async (interaction, client) => {
    const { id } = interaction.user;

    client.users.fetch(id, false).then((user) => {
      user.send(`
      Olá,

Obrigado pelo interesse em se juntar à DevJr Brasil! Sou o Devon Jr bot, e estou aqui para ajudá-lo a ter a melhor experiência possível em nosso servidor do Discord.

Nossa comunidade é composta por profissionais e entusiastas de tecnologia que buscam se conectar, aprender e compartilhar conhecimentos. Queremos que você faça parte disso tudo!

Para finalizar seu cadastro e ter acesso completo às funcionalidades da DevJr Brasil, é necessário responder às próximas perguntas que serão enviadas pelo Devon Jr bot em mensagem privada. São apenas algumas informações básicas para ajudar a personalizar sua experiência na comunidade.

Após responder, você receberá um papel de membro e terá acesso a todos os canais e recursos exclusivos da DevJr Brasil. Qualquer dúvida ou problema, estou aqui para ajudar!

Mais uma vez, obrigado por se juntar a nós e espero que sua experiência na DevJr Brasil seja muito gratificante e proveitosa. Explore o servidor e participe das conversas e atividades que mais lhe interessarem.
      `);
    });

    await interaction.reply({ content: "Join em andamento!", ephemeral: true });
  };
}

module.exports = new JoinCommand();
