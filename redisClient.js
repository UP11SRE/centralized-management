const Redis = require('ioredis');
require('dotenv').config();


const redisClient = new Redis({
  username: process.env.RENDER_REDIS_NAME, // Render Redis name, red-xxxxxxxxxxxxxxxxxxxx
  host: process.env.RENDER_REDIS_HOSTNAME,             // Render Redis hostname, REGION-redis.render.com
  password: process.env.REDIS_PASSWORD,     // Provided password
  port: process.env.REDIS_PORT,     // Connection port
  tls: true, // TLS required when externally connecting to Render Redis
});

//---------for render internal connection-----------------//

// Internal Redis URL, extract the details into environment variables.
// "redis://red-xxxxxxxxxxxxxxxxxxxx:6379"

// const redisClient = new Redis({
//   host: process.env.RENDER_REDIS_NAME, // Render Redis service name, red-xxxxxxxxxxxxxxxxxxxx
//   port: process.env.REDIS_PORT, // Redis port
// });

module.exports = redisClient;
