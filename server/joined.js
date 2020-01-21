module.exports = {
  command: "joined",
  description: "Check when you joined current server",
  func: (ctx) => {
    const server = ctx.get_guild()
    return ctx.send_message(`You joined **${server.name}** at **${server.joinedAt}**`)
  }
};
