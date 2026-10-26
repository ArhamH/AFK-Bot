const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Render ke liye chota sa web server taaki port open rahe
app.get('/', (req, res) => {
  res.send('Bedrock AFK Bot is running!');
});

app.listen(PORT, () => {
  console.log(`Web server is listening on port ${PORT}`);
});

// Minecraft Bedrock Bot Logic
const bedrock = require('bedrock-protocol');

function startBot() {
  const client = bedrock.createClient({
    host: 'Hbtusmp.falix.me',
    port: 27635,
    username: 'HBTU_AFK_Bot',
    offline: true
  });

  client.on('spawn', () => {
    console.log('Bot successfully connected to HBTU SMP!');
  });

  client.on('error', (err) => {
    console.log('Connection Error:', err);
  });

  client.on('close', () => {
    console.log('Bot disconnected. Reconnecting in 10 seconds...');
    setTimeout(startBot, 10000); // 10 second baad dobara connect karega
  });
}

// Bot start karein
setTimeout(startBot, 3000);
