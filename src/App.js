import React, { useState } from 'react';
import Header from './Header';
import Search from './Search';
import Content from './Content';
import Footer from './Footer';

import rain_icon from './images/rain.png';
import drizzle_icon from './images/drizzle.png';
import clear_icon from './images/clear.png';
import cloud_icon from './images/clouds.png';
import mist_icon from './images/mist.png';
import snow_icon from './images/snow.png';
import './index.css';

function App() {
  const api_key = "3caf91e296344855ca38b928c8b78af3";
  const [weathericon, setWeatherIcon] = useState(cloud_icon);
  const [humidity, setHumidity] = useState('');
  const [windSpeed, setWindSpeed] = useState('');
  const [error, setError] = useState('');
  const [isDay, setIsDay] = useState('');

  const search = async () => {
    const element = document.getElementsByClassName("Search");
    if (element[0].value === "") {
      return 0;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_key}`;
    let response = await fetch(url);
    let data = await response.json();
    if (data.cod && data.cod === "404") {
      setError(" not found.");
      return;
    }
    setHumidity(data.main.humidity);
    setWindSpeed(data.wind.speed);
    const temperature = document.getElementsByClassName("temp");
    const location = document.getElementsByClassName("city");
    temperature[0].innerHTML = data.main.temp + "°C";
    location[0].innerHTML = data.name;
    updateWeatherIcon(data.weather[0].icon);

    if (data.weather && data.weather.length > 0) {
      const weatherCode = data.weather[0].icon;
      if (weatherCode.endsWith("d"))
        setIsDay(true);
      else
        setIsDay(false);
    }
  };

  const updateWeatherIcon = (icon) => {
    switch (icon) {
      case "01d":
      case "01n":
        setWeatherIcon(clear_icon);
        break;
      case "02d":
      case "02n":
        setWeatherIcon(cloud_icon);
        break;
      case "03d":
      case "03n":
      case "04d":
      case "04n":
        setWeatherIcon(drizzle_icon);
        break;
      case "09d":
      case "09n":
      case "13d":
      case "13n":
        setWeatherIcon(snow_icon);
        break;
      case "10d":
      case "10n":
        setWeatherIcon(rain_icon);
        break;
      case "11d":
      case "11n":
        setWeatherIcon(mist_icon);
        break;
      default:
        setWeatherIcon(cloud_icon);
    }
  };
  function changecolor() {
    document.documentElement.style.setProperty('--body_background',
      'rgb(' + Math.round(Math.random() * 255) +
      ',' + Math.round(Math.random() * 255) +
      ',' + Math.round(Math.random() * 255) + ')'
    );
  }


  return (
    <div className="App">
      <Header />
      <Search search={search}
        changecolor={changecolor} />
      <Content weathericon={weathericon} error={error} />
      <Footer humidity={humidity} windSpeed={windSpeed} isDay={isDay}
      />

    </div>
  );
}

export default App;
