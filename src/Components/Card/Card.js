import React from "react";
import "./elements.css";
import {
  SunIcon,
  ClearIcon,
  CloudIcon,
  RainIcon,
  FewIcon,
  SnowIcon,
  MistIcon,
  ThunderStormIcon,
  WindIcon,
  DrizzleIcon,
} from "../Icons";

export const Card = ({ weatherData, dateBuild }) => {
  const GetIcon = (temp) => {
    switch (temp) {
      case "Clear":
        return <ClearIcon />;
      case "Clouds":
        return <FewIcon />;
      case "Snow":
        return <SnowIcon />;
      case "Mist":
        return <MistIcon />;
      case "Thunderstorm":
        return <ThunderStormIcon />;
      case "Rain":
        return <RainIcon />;
      case "Drizzle":
        return <DrizzleIcon />;

      default:
        return <CloudIcon />;
    }
  };
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <div className="card-top">
            <div className="card-icon">
              {GetIcon(weatherData.weather[0].main)}
            </div>
            <div className="card-details">
              <h2 className="card-title">{dateBuild(new Date())}</h2>
              <div className="card-details--right">
                <div className="card-temp">
                  {parseInt(weatherData.main.temp) / 10}°
                </div>
                {/*  <div className="card-temp">15°</div> */}
              </div>
              <p className="card-description">
                Mostly {weatherData.weather[0].main} Today in{" "}
                <span className="card-location">{weatherData.name}</span>
              </p>
            </div>
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <div className="card-info__icon">
                <DrizzleIcon width={25} height={25} />
              </div>
              45%
            </div>
            <div className="card-info">
              {Number(weatherData.wind.deg) / 10}%
            </div>
            <div className="card-info">
              <div className="card-info__icon">
                <WindIcon width={25} height={25} />
              </div>
              {weatherData.wind.speed} Mph
            </div>
            <div className="card-info">
              <div className="card-info__icon">
                <SunIcon width={25} height={25} />
              </div>
              {weatherData.wind.gust}
            </div>
          </div>
        </div>

        <div className="card-back">
          <div className="card-back__container">
            <div className="card-back__left">
              <div className="card-back__temp">
                {parseInt(weatherData.main.temp) / 10}°
              </div>
              <div className="card-back__info">
                Real Feel: {parseInt(weatherData.main.feels_like / 10)}
              </div>
            </div>

            <div className="card-back__right">
              <div className="card-icon">
                {GetIcon(weatherData.weather[0].main)}
              </div>
              <div className="card-back__info">
                {weatherData.weather[0].main}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
