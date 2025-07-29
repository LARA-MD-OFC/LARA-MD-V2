const { readEnv } = require("../lib/database");
const { cmd, commands } = require("../command");

cmd(
  {
    pattern: "menu",
    alise: ["getmenu"],
    desc: "get cmd list",
    category: "main",
    filename: __filename,
  },
  async (
    robin,
    mek,
    m,
    {
      from,
      quoted,
      body,
      isCmd,
      command,
      args,
      q,
      isGroup,
      sender,
      senderNumber,
      botNumber2,
      botNumber,
      pushname,
      isMe,
      isOwner,
      groupMetadata,
      groupName,
      participants,
      groupAdmins,
      isBotAdmins,
      isAdmins,
      reply,
    }
  ) => {
    try {
      const config = await readEnv();
      let menu = {
        main: "",
        download: "",
        group: "",
        owner: "",
        convert: "",
        search: "",
      };

      for (let i = 0; i < commands.length; i++) {
        if (commands[i].pattern && !commands[i].dontAddCommandList) {
          menu[
            commands[i].category
          ] += `${config.PREFIX}${commands[i].pattern}\n`;
        }
      }

      let madeMenu = `╔   〔  〕   ╗\n\n👋 *Hello  ${pushname}*

  ╭─「 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 𝗣𝗔𝗡𝗘𝗟 」
  │🔹 𝗢𝘄𝗻𝗲𝗿 : 𝗧𝗵𝗲𝗲𝗸𝘀𝗵𝗮𝗻𝗮
  │🔹 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 0.0.1
  │🔹 𝗠𝗲𝗺𝗼𝗿𝘆 : 𝘅𝘅
  ╰─────────────●●►
  
  ╭─「 𝗥𝗘𝗣𝗟𝗬 𝗧𝗛𝗘 𝗡𝗨𝗠𝗕𝗘𝗥 」
   ¦ ➊ 𝘅𝘅
   ¦ ➋ 𝘅𝘅
   ¦ ➌ 𝘅𝘅
  ╰─────────────●●►

💠*𝗡𝗼𝘃𝗮 ✦ All Rights Reserved*

> ᴍᴀᴅᴇ ʙʏ ᴛʜᴇᴇᴋꜱʜᴀɴᴀ , ᴍᴀʟꜱʜᴀɴɪ


`;
      await robin.sendMessage(
        from,
        {
          image: {
            url: "https://github.com/NOVA-MD-OFC/NOVA-MD-Help/blob/main/WhatsApp%20Image%202025-07-28%20at%2013.14.18_33ce712b.jpg?raw=true",
          },
          caption: madeMenu,
        },
        { quoted: mek }
      );
    } catch (e) {
      console.log(e);
      reply(`${e}`);
    }
  }
);
