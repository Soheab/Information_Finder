module.exports = {
  command: "owner",
  description: "Check who owns the current server",
  func: async (ctx) => {
    const server = ctx.get_guild()
    const owner = await ctx.getUser(`${server.ownerId}`)
    return ctx.send_message(`**${server.name}** is owned by **${owner.tag}** (${owner.id})`)
  }
};
