
module.exports = {
  command: "features",
  description: "Get guild features",
  func: (ctx, custom_id) => {
    const guild = custom_id ? ctx.getGuild(custom_id) : ctx.getCurrentGuild();
    if (!guild) return ctx.handleNotFound(); 
    if (!guild.features) return ctx.handleNotFound(`**${guild.name}** doesn't have any features... 💔`)

    const toTitleCase = (str) => str.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));

    const features = [...guild.features].map(feature => `**${toTitleCase(feature.replaceAll("_", " ").toLowerCase())}**`);
    return ctx.send_message(`Features of ${ctx.genName(guild)}:\n\n${features.join("\n")}`);
  }
};
