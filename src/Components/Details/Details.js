import * as React from "react";
import "./elements.css";
export const Details = ({ weatherData }) => {
  return (
    <div className="details">
      <div className="details-card">
        <p className="details-title">Clouds</p>{" "}
        <p className="details-value">{weatherData.clouds.all}</p>
      </div>
      <div className="details-card">
        <p className="details-title">Humidity</p>{" "}
        <p className="details-value">{weatherData.main.humidity}%</p>
      </div>
      <div className="details-card">
        <p className="details-title">Pressure</p>{" "}
        <p className="details-value">{weatherData.main.pressure} Pa</p>
      </div>
      <div className="details-card">
        <p className="details-title">{weatherData.weather[0].main}</p>{" "}
        <p className="details-value">{weatherData.weather[0].description}</p>
      </div>
    </div>
  );
};
