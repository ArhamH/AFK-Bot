const bedrock = require('bedrock-protocol');

const client = bedrock.createClient({
  host: 'Hbtusmp.falix.me',   // Aapka Falix server IP
  port: 27635,                // Aapka port
  username: 'HBTU_AFK_Bot',   // Bot ka naam
  offline: true               // Cracked/Offline server ke liye true
});

client.on('spawn', () => {
  console.log('Bot successfully connected to HBTU SMP!');
});

client.on('error', (err) => {
  console.log('Connection Error:', err);
});

client.on('close', () => {
  console.log('Bot disconnected. Attempting to reconnect...');
});
