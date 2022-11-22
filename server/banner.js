module.exports = {
  command: "banner",
  description: "Get guild banner URL",
  func: (ctx, custom_id) => {
    const guild = ctx.get_guild(custom_id) ? ctx.get_guild(custom_id) : ctx.get_current_guild();
    if (!guild) return ctx.handleNotFound(); 
    if (!server.banner) return ctx.handleNotFound(`**${server.name}** doesn't have any banners... 💔`)

    return ctx.send_message(
      `Banner of **${server.name}**\n` +
      `https://cdn.discordapp.com/banners/${server.id}/${server.banner}.png?size=2048`
    )
  }
};