import React , { useState, useEffect } from 'react';


function Weather() {
    const [weatherData, setWeatherData] = useState(null);
    useEffect(() => {
        const fetchWeatherData = async () => {
          const apiKey = 'f57f4e8da898b1009a0a82c9a22da137';
          const city = 'Lahore';
          const response = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
          );
          const data = await response.json();
          setWeatherData(data);
          console.log(data)
        };
        fetchWeatherData();
      }, []);
    
  return (
    <div>


      {weatherData ? (
        <div>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
  
      
    </div>
  )
}

export default Weather
