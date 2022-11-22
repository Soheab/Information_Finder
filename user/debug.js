module.exports = {
  command: "debug",
  description: "Get all user variables (debug reasons)",
  func: async (ctx, custom_id) => {
    console.log("[ INFORMATION FINDER ]")
    console.log(ctx.getCurrentUser())
    return ctx.send_message("Check the console ❤")
  }
};
