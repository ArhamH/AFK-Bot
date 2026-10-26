const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Render ke liye web server
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
    offline: true,
    version: '26.52'   // Yahan server ka exact version daal diya hai
  });

  client.on('spawn', () => {
    console.log('Bot successfully connected to HBTU SMP!');
  });

  client.on('error', (err) => {
    console.log('Connection Error:', err);
  });

  client.on('close', () => {
    console.log('Bot disconnected. Reconnecting in 10 seconds...');
    setTimeout(startBot, 10000);
  });
}

setTimeout(startBot, 3000);
