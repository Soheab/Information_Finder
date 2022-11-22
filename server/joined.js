module.exports = {
  command: "joined",
  description: "Check when you joined current server",
  func: (ctx, custom_id) => {
    const guild = ctx.get_guild(custom_id) ? ctx.get_guild(custom_id) : ctx.get_current_guild();
    if (!guild) return ctx.handleNotFound(); 

    const time = `${Math.round(guild.joinedAt / 1000)}`
    return ctx.send_message(`You joined **${guild.name} (${guild.id})** <t:${time}:F> (<t:${time}:R>)`);
  }
};

