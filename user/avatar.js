module.exports = {
  command: "avatar",
  description: "Get your avatar URL",
  func: (ctx) => {
    const user = ctx.getCurrentUser()
    return ctx.send_message(
      "Your avatar URL is " +
      user.avatarURL
    )
  }
};
