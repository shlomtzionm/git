const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const fs = require('fs');

const SESSION_FILE_PATH = './data/session.json';

let client;

if (fs.existsSync(SESSION_FILE_PATH)) {
    const sessionData = require(SESSION_FILE_PATH);
    client = new Client({
        session: sessionData,
        puppeteer: {
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
        },
        webVersionCache: {
            type: "remote",
            remotePath: "https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html",
        },
    });
} else {
    client = new Client({
        authStrategy: new LocalAuth({
            dataPath: './data'
        }),
        webVersionCache: {
            type: "remote",
            remotePath: "https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html",
        },
    });
}

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message_create', message => {
    console.log(message.body);
});

client.on('message_create', message => {
	
		message.reply('pong');
	}
);

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('authenticated', (session) => {
    console.log('Authenticated!');
    saveSession(session);
});

client.initialize();

function saveSession(session) {
    try {
        fs.writeFileSync(SESSION_FILE_PATH, JSON.stringify(session));
        console.log('Session data saved');
    } catch (error) {
        console.error('Error saving session data:', error);
    }
}
