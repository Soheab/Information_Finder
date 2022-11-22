const { Plugin } = require("powercord/entities");
const Context = require("./src/context");

const commands = {
  server: "Get more information about current server",
  user: "Get more information about current user"
}
module.exports = class InfoFinder extends Plugin {

  async startPlugin() {

    for (const command in commands) {
      powercord.api.commands.registerCommand({
        command: command,
        description: commands[command],
        usage: `{prefix} ${command} <${Object.keys(command).join("|")}>`,
        executor: async (args) => {
          const context = new Context(this, command, args);
          await context.setAttrs()
          return context.commandCallback()
        },
    })
  }
}


  pluginWillUnload() {
    powercord.api.commands.unregisterCommand("server")
    powercord.api.commands.unregisterCommand("user")
  }

  subcmd_autocomplete(target, args) {
    return Object.values(target).filter(({ command }) => command.includes(args[0].toLowerCase()))
  }

}
