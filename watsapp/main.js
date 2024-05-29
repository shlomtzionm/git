const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');



const client = new Client({
    webVersionCache: {
      type: "remote",
      remotePath:
        "https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html",
    },
  });


client.on('message_create', message => {
	if (message.body === '!ping') {
		// reply back "pong" directly to the message
		message.reply('pong');
	}
});


client.initialize();
