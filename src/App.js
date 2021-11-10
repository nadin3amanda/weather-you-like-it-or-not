import React, { useState } from "react";
//https://openweathermap.org/weather-conditions
const api = {
  key: "dc5f0c9a6a3a0f330074417fdf61f7e9",
  base: "https://api.openweathermap.org/data/2.5/",
};
function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState("");
  const [cn, setCn] = useState("");

  const changeClass = () => {
    if (weather.main !== undefined) {
      switch (weather.weather[0].description) {
        case "clear sky":
          setCn("app clear");
          break;
        case "scattered clouds":
          case "broken clouds":
          case "few clouds":
          setCn("app clouds");
          break;
        case "rain":
          case "shower rain":
          setCn("app rain");
          break;
        case "snow":
          setCn("app snow");
          break;
        case "thunderstorm":
          setCn("app thunder");
          break;
        case "mist":
          setCn("app mist");
          break;
        default:
          setCn("");
      }
    }
  };

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
          changeClass();
        });
    }
  };
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month} ${year}`;
  };
  return (
    <div
      className={
        cn
      }
    >
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeHolder="Search here..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}{" "}
              </div>
              <div className="date">{dateBuilder(new Date())} </div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)} °C</div>
              <div className="weather">{weather.weather[0].main} </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;
