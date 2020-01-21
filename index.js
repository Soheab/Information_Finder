const { Plugin } = require("powercord/entities")
const { getModule } = require("powercord/webpack")
const server = require("./server")
const user = require("./user")

module.exports = class InfoFinder extends Plugin {
  async startPlugin() {
    await this.import_modules()

    this.registerCommand(
      "user", [],
      "Get more information about yourself",
      `{c} <${Object.keys(user).join("|")}>`,
      (args) => {
        const subcommand = user[args[0]]
        if (!subcommand) return this.subcmd_unknown()
        return subcommand.func(this)
      }, (args) => {
        if (args[0] !== void 0 && args.length === 1) {
          return { commands: this.subcmd_autocomplete(user, args), header: 'User subcommands' }
        }
      }
    )

    this.registerCommand(
      "server", [],
      "Get more information about current server",
      `{c} <${Object.keys(server).join("|")}>`,
      (args) => {
        const subcommand = server[args[0]]
        if (!subcommand) return this.subcmd_unknown()
        return subcommand.func(this)
      }, (args) => {
        if (args[0] !== void 0 && args.length === 1) {
          return { commands: this.subcmd_autocomplete(server, args), header: 'Server subcommands' }
        }
      }
    )
  }

  subcmd_autocomplete(target, args) {
    return Object.values(target).filter(({ command }) => command.includes(args[0].toLowerCase()))
  }

  subcmd_unknown() {
    return { send: false, result: "Unknown subcommand or none..." }
  }

  send_message(context) {
    return {
      send: false, result: context,
      appearance: {
        username: 'Information Finder',
        avatar: {name: "alexflipnote_info", url: "https://i.alexflipnote.dev/A4U2C6n.png"}
      }
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

  unregisterTag(name) {
    powercord.api.commands.unregisterCommand("server")
    powercord.api.commands.unregisterCommand("user")
  }
}
