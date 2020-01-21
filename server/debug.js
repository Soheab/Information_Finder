module.exports = {
  command: "debug",
  description: "Get all guild variables (debug reasons)",
  func: (ctx) => {
    console.log("[ INFORMATION FINDER ]")
    console.log(ctx.get_guild())
    return ctx.send_message("Check the console ❤")
  }
};
