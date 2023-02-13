import React, { useState,useEffect } from 'react';
import "./css/style.css"

function Tempapp() {
    
    const [seacrh ,setSearch] = useState("Lahore");
    const [weatherData, setWeatherData] = useState(null);
    useEffect(() => {
      const fetchWeatherData = async () => {
        const apiKey = 'f57f4e8da898b1009a0a82c9a22da137';
        
        console.log(seacrh)
        const response = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${seacrh}&units=metric&appid=${apiKey}`
        );
        const data = await response.json();
        setWeatherData(data.main);
        console.log(data.main)
      };
      fetchWeatherData();
    }, [seacrh]);
  return (
    <>
    <div className='container'>
    <div className='box'>
        <div className="inputData ">
            <input type="seacrh" 
            onChange={(event)=>{setSearch(event.target.value)}} />
        </div>
        {weatherData ? (
        <div>
          <div className='info'>
          <h2 className='location'>{seacrh}</h2>
          <h2>Temperature: {weatherData.temp}°C</h2>
          <h3>min: {weatherData.temp_min}°C | max: {weatherData.temp_max}°C </h3>
          
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}

  
      
  <div className='wave1'></div>
  <div className='wave2'></div>
  <div className='wave3'></div>
  </div>
   
   

    </div>
   
    </>
    
  )
}

export default Tempapp
