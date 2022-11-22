module.exports = {
    command: "members",
    description: "Check when you joined current server",
    func: (ctx) => {
      const server = ctx.get_current_guild();
      console.dir(server);
      return ctx.send_message("h", {title: "yes", description: "yes"});
  }
};
  