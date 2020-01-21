module.exports = {
  command: "guilds",
  description: "Show how many servers you're in",
  func: (ctx) => {
    return ctx.send_message(
      `You're currently in **${Object.keys(ctx.getGuilds()).length}** servers`
    )
  }
};
