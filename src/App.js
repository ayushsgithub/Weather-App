import axios from "axios";
import React, { useState } from "react";

function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState("")
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=51b549bc91c2d63761c5360278a2138a`

  const searchLocation = (event) =>{
    if (event.key === "Enter"){
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
    }
    
  }

  return (
    
    
    <div className="app">
      <div className="search">
        <input type="text" 
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyDown={searchLocation}
        placeholder="Enter Your Location"
        />

        
      </div>
      <div className="container">


        {/* --------------------------------------------------------------------------- */}
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
            
          </div>
          <div className="description">
          {data.weather ? <p>{data.weather[0].description}</p> : null}
            
          </div>
          
        </div>


        {/* --------------------------------------------------------------------------- */}
        {data.name !== undefined && <div className="bottom">
          <div className="feels">
          {data.main ? <p className="bold">{data.main.feels_like.toFixed()}°C</p> : null }
            
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ?<p className="bold">{data.wind.speed.toFixed()}MPH</p> : null  }
            <p>Wind Speed</p>
            
            
          </div>
          
        </div>}
        
            
          
        
      </div>
      <footer>
      <a  href="https://github.com/ayushsgithub">&copy; Ayush</a>
              
            </footer>
    </div>
    
    
  );
}

export default App;
