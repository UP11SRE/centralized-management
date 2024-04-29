const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./router/routes');
const app = express();
require('dotenv').config();
const redis = require('./redisClient');



const PORT = process.env.PORT;


app.use(bodyParser.json());
app.use('/api/v1', routes);

app.get('/', async (req, res) => {
    try {
        // Check if the Redis client is connected
        const result = await redis.ping();
        res.status(200).json({ message: 'Redis is connected' });
    } catch (error) {
        console.error('Error checking Redis connection:', error);
        res.status(500).json({ error: 'Failed to connect to Redis' });
    }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
