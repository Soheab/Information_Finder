module.exports = {
  command: "avatar",
  description: "Get your avatar URL",
  func: async (ctx, user_id) => {
    var user;
    if (!user_id) {
      user = ctx.getCurrentUser();
    } else {
      user = ctx.fetchUser(user_id);
    }
    console.log("user", user, !user)
    if (user === undefined || user === null) return ctx.handleNotFound();

    const avatarURL = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=1024`
    return ctx.send_message(`${ctx.genName(user)}'s Avatar URL:\n${avatarURL}`)
  }
};
