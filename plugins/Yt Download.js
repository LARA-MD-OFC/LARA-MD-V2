const { exec, yts } = require('../lib');
const axios = require('axios');

exec({
  command: 'video',
  desc: 'Download video from YouTube by title',
  category: 'download',
  react: '🎬',
}, async (darknero, match, m, { text }) => {
  try {
    if (!text) return match.reply('❗ Please enter a video title.\n\nExample: *.video Faded*');

    match.reply('🔎 Please Wait...');

    const search = await yts(text);
    if (!search || !search.videos.length) return match.reply('❌ No video results found.');

    const video = search.videos[0];
    const yt = video.url;

    const api = `https://apis.davidcyriltech.my.id/youtube/mp4?url=${encodeURIComponent(yt)}`;
    const { data } = await axios.get(api);

    if (!data || !data.status || !data.result) {
      return match.reply('❌ Failed.');
    }

    const { title, thumbnail, url: downloadLink } = data.result;

    await darknero.sendMessage(m.chat, {
      video: { url: downloadLink },
      caption: `*Done ✅*`,
      mimetype: 'video/mp4',
    }, { quoted: m });

  } catch (err) {
    console.error(err);
    match.reply('❌ Error.');
  }
});
