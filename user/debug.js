module.exports = {
  command: "debug",
  description: "Get all user variables (debug reasons)",
  func: (ctx) => {
    console.log("[ INFORMATION FINDER ]")
    console.log(ctx.getCurrentUser())
    return ctx.send_message("Check the console ❤")
  }
};
