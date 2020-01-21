module.exports = {
  command: "features",
  description: "Get guild features",
  func: (ctx) => {
    const server = ctx.get_guild()
    if ([...server.features].length > 0) {
      return ctx.send_message(`Features of **${server.name}**: ${[...server.features].join(", ")}`)
    } else {
      return ctx.send_message(`**${server.name}** doesn't have any features... 💔`)
    }
  }
};
