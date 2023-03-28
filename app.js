require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;
const headers = require('./middleware/headers');
const calls = require('./calls/index');

app.use(headers);
app.use('/weather', calls.weathercalls);

app.get('/', (req, res) => {

    res.send('Hello World');
});
app.get('/status', (req, res) => {
    res.send('If you can see this, I\'m alive!');
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Congrats, Server running on port ${port}`);
});