const express = require('express');
const { Client,LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode');
const fs = require('fs');
const app = express();
const port = 3000;

let qrCodeUrl = ''; // Variable to store the QR code URL

const client = new Client({
    webVersionCache: {
      type: "remote",
      remotePath:
        "https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html",
        authStrategy: new LocalAuth({
            clientId: "client-one" // A unique identifier for this client
        })
    },
  });

client.on('qr', (qr) => {
  
    // Generate QR code URL
    qrcode.toDataURL(qr, (err, url) => {
        if (err) {
            console.error('Error generating QR code', err);
        } else {
            qrCodeUrl = url;
        }
    });
  
});

client.on('ready', () => {
    console.log('Client is ready!');
});

// Listening to all incoming messages
client.on('message', message => {
    if (message.body === '!ping' && !message.fromMe) { // Check if the message is not from the bot itself
        message.reply('pong');
    }
});


client.on('message', async message => {
    if (message.hasMedia) {
        const media = await message.downloadMedia();
        if (media.mimetype.includes('image')) {
            // Save the image to a file
            const fileName = `image_${Date.now()}.${media.mimetype.split('/')[1]}`;
            const filePath = `image/${fileName}`; // Change the path as needed
            fs.writeFileSync(filePath, media.data, 'base64');
            console.log(`Image saved to ${filePath}`);
        } else {
            console.log('Received media is not an image');
        }
    } else {
        console.log('Received message does not contain media');
    }
});


client.initialize();

app.get('/api/qr', (req, res) => {
    if (qrCodeUrl) {
        res.send(`<img src="${qrCodeUrl}" />`);
    } else {
        res.send('QR code is not available yet. Please try again later.');
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
