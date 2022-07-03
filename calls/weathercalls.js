const router = require('express').Router();
const key = process.env.WEATHER_API_KEY;

router.get('/check/:zip', async (req, res) => {
    let { zip } = req.params;
    let api = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${zip}&aqi=yes`;
    console.log(`api: ${api}`);
    try {
        const response = await fetch(api);
        const data = await response.json();
        let weatherData = await {
            city: data.location.name,
            state: data.location.region,
            condition: data.current.condition.text,
            icon: data.current.condition.icon,
            temp: data.current.temp_f,
            humidity: data.current.humidity,
            zip: zip
        };
        res.send(weatherData);
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;
