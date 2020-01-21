module.exports = {
  command: "splash",
  description: "Get guild splash URL",
  func: (ctx) => {
    const server = ctx.get_guild()
    if (server.splash) {
      return ctx.send_message(
        `Splash of **${server.name}**\n` +
        `https://cdn.discordapp.com/splashes/${server.id}/${server.splash}.png?size=2048`
      )
    } else {
      return ctx.send_message(`**${server.name}** doesn't have any splash images... 💔`)
    }
  }
};
