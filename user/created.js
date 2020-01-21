module.exports = {
  command: "created",
  description: "Get your creation date",
  func: (ctx) => {
    const user = ctx.getCurrentUser()
    return ctx.send_message(`You account was created at **${user.createdAt}**`)
  }
};
