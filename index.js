const { Plugin } = require("powercord/entities")
const { getModule } = require("powercord/webpack")
const server = require("./server")
const user = require("./user")

module.exports = class InfoFinder extends Plugin {
  async startPlugin() {
    await this.import_modules()
    powercord.api.commands.registerCommand({
      command: "user",
      description: "Get more information about yourself",
      usage: `{c} <${Object.keys(user).join("|")}>`,
      executor: (args) => {
        const subcommand = user[args[0]]
        if (!subcommand) return this.subcmd_unknown()
        return subcommand.func(this)
      },
      autocomplete: (args) => {
        if (args[0] !== void 0 && args.length === 1) {
          return { commands: this.subcmd_autocomplete(user, args), header: 'User subcommands' }
        }
      }
    })

    powercord.api.commands.registerCommand({
      command: "server",
      description: "Get more information about current server",
      usage: `{c} <${Object.keys(server).join("|")}>`,
      executor: (args) => {
        const subcommand = server[args[0]]
        if (!subcommand) return this.subcmd_unknown()
        return subcommand.func(this)
      },
      autocomplete: (args) => {
        if (args[0] !== void 0 && args.length === 1) {
          return { commands: this.subcmd_autocomplete(server, args), header: 'Server subcommands' }
        }
      }
    })
  }

  pluginWillUnload() {
    powercord.api.commands.unregisterCommand("server")
    powercord.api.commands.unregisterCommand("user")
  }

  subcmd_autocomplete(target, args) {
    return Object.values(target).filter(({ command }) => command.includes(args[0].toLowerCase()))
  }

  subcmd_unknown() {
    return { send: false, result: "Unknown subcommand or none..." }
  }

  send_message(context) {
    return {
      send: false, result: context
    }
  }

  get_guild() {
    return this.getGuild(this.getChannel(this.getChannelId()).guild_id)
  }

  async import_modules() {
    const import_list = [
      "getChannel", "getChannelId", "getCurrentUser",
      "getGuild", "getGuilds", "getUser"
    ]

    for (var g in import_list) {
      let name = import_list[g]
      this[name] = (await getModule([name]))[name]
    }
  }
}
