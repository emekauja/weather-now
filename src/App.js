import * as React from "react";
import "./App.css";
import { Search } from "./Components/Search";
import useFetch from "./utils/useFetch.js";
import { Card } from "./Components/Card";
import { Details } from "./Components/Details";

function App() {
  const [city, setCity] = React.useState("Lagos");

  //const baseUrl = `api.openweathermap.org/data/2.5/weather?q=London&APPID=549241ee1f0937fb35771807137d90f9`;
  //const API_URL = "https://api.openweathermap.org/data/2.5/weather?q=";

  // const userLocation = "";
  const {
    response: weather,
    error,
    loading,
  } = useFetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=549241ee1f0937fb35771807137d90f9`,
  );
  const dateBuild = (d) => {
    let date = String(d);
    let weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][d.getDay()];

    date = date.slice(3, 15);
    return `${weekday} ${date}`;
  };

  /*   const {
    response: weather,
    error,
    loading,
  } = useFetch(
    `https://api.openweathermap.org/data/2.5/weather?q=lagos&appid=804238d62bd901999e90c3e29f4ebda8`,
    {},
  ); */
  console.log(weather);
  // console.log(data);

  if (weather === null) {
    // If there is no data returned from the API
  }

  return (
    <div className="App">
      <h1>Weather Now</h1>
      <Search getQuery={setCity} />
      {weather !== null ? (
        <section className="main">
          <Card weatherData={weather} dateBuild={dateBuild} />
          <Details weatherData={weather} />
        </section>
      ) : weather !== null && error ? (
        <p>City not found</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
