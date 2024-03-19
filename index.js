const { Client } = require("discord.js-selfbot-v13");
const config = require("./config");
const client = new Client({
    checkUpdate: false,
});
const prefix = config.prefix;

client.once("ready", () => {
    console.log("logged in as: ", client.user.id);
});

client.on("messageCreate", async (message) => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (message.author.id !== client.user.id) return;
    if (command === "sugukesu") {
        await message.reply("このメッセージは５秒後に削除されます。").then(async(msg) => {
            await wait(5000);
            msg.delete();
        });
        message.delete();
        await message.channel.send(`メッセージの削除が完了しました！\ncontent: ${args.join(" ")}`);
    }
});

async function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

client.login(config.token);
