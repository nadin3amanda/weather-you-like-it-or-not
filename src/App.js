import React from "react";

const api = {
  key: "dc5f0c9a6a3a0f330074417fdf61f7e9",
  base: "https://api.openweathermap.org/data/2.5/",
};
function App() {
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

    return `${day} ${date} ${month} ${year}`;
  };
  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeHolder="Search here..."
          />
        </div>
        <div className="location-box">
          <div className="location">Quezon City, PH</div>
          <div className="date">{dateBuilder(new Date())} </div>
        </div>
        <div className="weather-box">
          <div className="temp">25 °C</div>
          <div className="weather">Sunny</div>
        </div>
      </main>
    </div>
  );
}

export default App;
