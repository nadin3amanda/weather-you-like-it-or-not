import React from "react";

const api = {
  key: "dc5f0c9a6a3a0f330074417fdf61f7e9",
  base: "https://api.openweathermap.org/data/2.5/",
};
function App() {
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
        <div className="location-box"></div>
      </main>
    </div>
  );
}

export default App;
