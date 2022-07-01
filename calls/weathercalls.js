const router = require('express').Router();
const key = process.env.WEATHER_API_KEY;

let api = `https://api.weatherapi.com/v1/current.json?key=${key}&q=46225&aqi=yes`



router.get('/check', async (req, res) => {
    try {
        const response = await fetch(api);
        const data = await response.json();
        let weatherData = {
            temp: data.current.temp_f,
            condition: data.current.condition.text,
            humidity: data.current.humidity,
        };
        res.send(weatherData);
    } catch (error) {
        res.send(`Sorry, ${error}`);
    }
});

module.exports = router;