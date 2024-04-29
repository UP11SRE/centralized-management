const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./router/routes');
const app = express();
require('dotenv').config();
const redis = require('./redisClient');

console.log("redis--->", redis);

const PORT = process.env.PORT;


app.use(bodyParser.json());
app.use('/api/v1', routes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
