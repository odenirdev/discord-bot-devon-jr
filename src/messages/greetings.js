function GreetingsMessages() {
  this.GOODMORNING_MESSAGES = [
    "Bom dia, [nome]! Aprender programação pode ser desafiador, mas lembre-se de que cada obstáculo superado é uma vitória!",
    "Que o seu dia comece com muita motivação para aprender e aprimorar suas habilidades em programação, [nome]!",
    "Bom dia, [nome]! Não tenha medo de perguntar e buscar ajuda quando precisar. A comunidade de programadores está sempre disposta a ajudar!",
    "Comece o dia com muita curiosidade para explorar novas áreas da programação, [nome]. Quem sabe você não descobre uma nova paixão?",
    "Bom dia! Lembre-se de que a persistência é a chave para se tornar um programador de sucesso, [nome]. Continue praticando e aprimorando suas habilidades!",
    "Que seu dia seja repleto de soluções criativas para os desafios que você enfrenta em programação, [nome].",
    "Bom dia, [nome]! Não se esqueça de comemorar suas conquistas, por menores que sejam. Cada passo dado é uma vitória!",
    "Comece o dia com muita determinação para superar seus limites e alcançar seus objetivos em programação, [nome].",
    "Bom dia! Lembre-se de que os erros fazem parte do processo de aprendizagem em programação, [nome]. Não tenha medo de tentar novamente e de aprender com eles.",
    "Que seu dia comece com muita inspiração para criar soluções inovadoras em programação, [nome].",
    "Bom dia, [nome]! Continue estudando e se aprimorando, pois a programação está em constante evolução e sempre há algo novo para aprender!",
    "Comece o dia com muita criatividade para encontrar novas maneiras de resolver problemas em programação, [nome].",
    "Bom dia! Lembre-se de que não há atalhos para o sucesso em programação, [nome]. É preciso trabalhar duro e se dedicar para alcançar seus objetivos.",
    "Que seu dia seja cheio de desafios estimulantes que o ajudem a crescer e aprimorar suas habilidades em programação, [nome].",
    "Bom dia, [nome]! Não se esqueça de que cada pequeno progresso é um passo importante em direção ao seu objetivo em programação. Continue assim!",
  ];

  this.GOODAFTERNOON_MESSAGES = [
    "Boa tarde, [nome]! Lembre-se de que cada linha de código que você escreve é um passo em direção ao seu objetivo.",
    "Que sua tarde seja cheia de aprendizado e descobertas incríveis em programação, [nome]!",
    "Boa tarde, [nome]! Continue se desafiando e explorando novas possibilidades em programação.",
    "Aproveite a tarde para se dedicar aos seus projetos e aprimorar suas habilidades em programação, [nome].",
    "Boa tarde, [nome]! Não tenha medo de experimentar e testar novas ideias em programação, pois é assim que se aprende e se evolui.",
    "Que sua tarde seja cheia de soluções criativas para os desafios que você enfrenta em programação, [nome].",
    "Boa tarde, [nome]! Lembre-se de que o importante é o processo de aprendizagem, não a perfeição.",
    "Aproveite a tarde para se conectar com outros programadores e compartilhar conhecimentos, [nome].",
    "Boa tarde, [nome]! Continue trabalhando duro e se dedicando em programação, pois seu esforço será recompensado.",
    "Que sua tarde seja produtiva e repleta de pequenas conquistas em programação, [nome].",
    "Boa tarde, [nome]! Continue se desafiando e buscando novos desafios em programação para desenvolver suas habilidades.",
    "Aproveite a tarde para revisar seus códigos e encontrar maneiras de aprimorá-los, [nome].",
    "Boa tarde, [nome]! Não se esqueça de celebrar cada pequena conquista ao longo do seu caminho em programação.",
    "Que sua tarde seja cheia de inspiração para criar projetos incríveis em programação, [nome]!",
    "Boa tarde, [nome]! Continue perseverando e trabalhando duro, pois seus esforços valerão a pena no final.",
  ];

  this.GOODEVENING_MESSAGES = [
    "Boa noite, [nome]! Aproveite para descansar bem e recarregar as energias para seguir em frente com seus projetos em programação.",
    "Que sua noite seja tranquila e cheia de inspiração para criar coisas incríveis em programação, [nome].",
    "Boa noite, [nome]! Lembre-se de que cada erro é uma oportunidade de aprendizado e crescimento.",
    "Aproveite a noite para revisar e aprimorar seus códigos, [nome].",
    "Boa noite, [nome]! Aprender a programar é um processo contínuo, então não desanime com as dificuldades.",
    "Que sua noite seja repleta de soluções criativas para os desafios que você enfrenta em programação, [nome].",
    "Boa noite, [nome]! Mantenha o foco em seus objetivos em programação e nunca desista.",
    "Aproveite a noite para estudar e aprender mais sobre as linguagens de programação que você utiliza, [nome].",
    "Boa noite, [nome]! Não tenha medo de pedir ajuda quando precisar, a comunidade de programadores está sempre pronta para ajudar.",
    "Que sua noite seja cheia de inspiração para criar projetos inovadores em programação, [nome].",
    "Boa noite, [nome]! Lembre-se de que, por trás de cada aplicativo ou programa, existe um programador que o criou. Você também pode fazer a diferença!",
    "Aproveite a noite para experimentar e testar novas ideias em programação, [nome].",
    "Boa noite, [nome]! Celebre cada pequena conquista que alcançou em programação até agora e use isso como motivação para seguir em frente.",
    "Que sua noite seja tranquila e revigorante, [nome], para que possa encarar os desafios de programação do dia seguinte com ainda mais força.",
    "Boa noite, [nome]! Acredite em si mesmo e em seu potencial, pois você pode ir muito longe.",
  ];

  this.execute = async (message) => {
    if (message.author.bot) return;

    if (String(message.content).toLowerCase().includes("bom dia")) {
      const randomMessage =
        this.GOODMORNING_MESSAGES[
          Math.floor(Math.random() * this.GOODMORNING_MESSAGES.length)
        ];
      const replyMessage = randomMessage.replace(
        "[nome]",
        message.author.username
      );

      return message.reply(replyMessage);
    }

    if (String(message.content).toLowerCase().includes("boa tarde")) {
      const randomMessage =
        this.GOODAFTERNOON_MESSAGES[
          Math.floor(Math.random() * this.GOODMORNING_MESSAGES.length)
        ];
      const replyMessage = randomMessage.replace(
        "[nome]",
        message.author.username
      );

      return message.reply(replyMessage);
    }

    if (String(message.content).toLowerCase().includes("boa noite")) {
      const randomMessage =
        this.GOODEVENING_MESSAGES[
          Math.floor(Math.random() * this.GOODMORNING_MESSAGES.length)
        ];
      const replyMessage = randomMessage.replace(
        "[nome]",
        message.author.username
      );

      return message.reply(replyMessage);
    }
  };
}

module.exports = new GreetingsMessages();
