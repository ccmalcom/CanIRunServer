const router = require('express').Router();
const key = process.env.WEATHER_API_KEY;

//? how to make this dynamic zipcode?




router.get('/check/:zip', async (req, res) => {
    let { zip } = req.params;
    let api = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${zip}&aqi=yes`;
    console.log(`api: ${api}`);
    try {
        const response = await fetch(api);
        const data = await response.json();
        let weatherData = await {
            temp: data.current.temp_f,
            condition: data.current.condition.text,
            humidity: data.current.humidity,
        };
        res.send(weatherData);
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;