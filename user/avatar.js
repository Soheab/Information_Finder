module.exports = {
  command: "avatar",
  description: "Get your avatar URL",
  func: (ctx) => {
    const user = ctx.getCurrentUser()
    const user_avatar_type = (user.icon.startsWith("a_")) ? "gif" : "png"
    return ctx.send_message(
      "Your avatar URL is " +
      `https://cdn.discordapp.com/avatars/${user.id}/${user.icon}.${server_icon_type}?size=1024`
    )
  }
};
