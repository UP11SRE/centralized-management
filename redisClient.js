const Redis = require('ioredis');
require('dotenv').config();


const redisClient = new Redis({
  username: process.env.RENDER_REDIS_NAME, // Render Redis name, red-xxxxxxxxxxxxxxxxxxxx
  host: process.env.RENDER_REDIS_HOSTNAME,             // Render Redis hostname, REGION-redis.render.com
  password: process.env.REDIS_PASSWORD,     // Provided password
  port: process.env.REDIS_PORT,     // Connection port
  tls: true, // TLS required when externally connecting to Render Redis
});

module.exports = redisClient;
