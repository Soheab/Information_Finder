module.exports = {
  command: "banner",
  description: "Get guild banner URL",
  func: (ctx) => {
    const server = ctx.get_guild()
    if (server.banner) {
      return ctx.send_message(
        `Banner of **${server.name}**\n` +
        `https://cdn.discordapp.com/banners/${server.id}/${server.banner}.png?size=2048`
      )
    } else {
      return ctx.send_message(`**${server.name}** doesn't have any banners... 💔`)
    }
  }
};
