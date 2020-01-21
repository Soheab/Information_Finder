module.exports = {
  command: "icon",
  description: "Get guild icon URL",
  func: (ctx) => {
    const server = ctx.get_guild()
    const server_icon_type = (server.icon.startsWith("a_")) ? "gif" : "png"
    return ctx.send_message(
      `Avatar of **${server.name}**\n` +
      `https://cdn.discordapp.com/icons/${server.id}/${server.icon}.${server_icon_type}?size=1024`
    )
  }
};
