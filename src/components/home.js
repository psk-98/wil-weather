import React from "react";
import { useSelector } from "react-redux";
import {
  degrees,
  forecastHelper,
  handleSun,
  handleTime,
  handleUV,
  handleVisibility,
  handleWindSpeed,
} from "./helpers";
import Loader from "./loader";

const Home = () => {
  const state = useSelector((state) => state);

  const { weather, loading, error, units } = state;

  return loading ? (
    <Loader />
  ) : error ? (
    <div className="error-msg lighter">{error?.message}!</div>
  ) : weather ? (
    <>
      <div className="main">
        <div className="main-temp">
          <div className="current-temp">
            {Math.round(weather?.current.temp)}
            <span>&#176;</span>
          </div>
          <div className="low-high-wrapper">
            <div className="high-temp">
              <span>H</span>
              <span>:</span>
              <span>
                {Math.round(weather?.daily[0].temp.max)}
                {degrees}
              </span>
            </div>
            <div className="low-temp">
              <span>L</span>
              <span>:</span>
              <span>
                {Math.round(weather?.daily[0].temp.min)}
                {degrees}
              </span>
            </div>
          </div>
          <div className="current-desc">
            {weather?.current.weather[0].description}
          </div>
          <div className="current-date-time">{handleTime(weather)}</div>
        </div>
        <div className="forecast">
          <div className="forecast-details">{forecastHelper(weather)}</div>
        </div>
      </div>
      <div className="details">
        <div className="detail">
          <div className="detail-header">Sunrise</div>
          <div className="detail-content">{handleSun(weather).sunrise}</div>
        </div>
        <div className="detail">
          <div className="detail-header">Sunset</div>
          <div className="detail-content">{handleSun(weather).sunset}</div>
        </div>
        <div className="detail">
          <div className="detail-header">Visibility</div>
          <div className="detail-content">
            {handleVisibility(weather?.current.visibility, units)}
          </div>
        </div>
        <div className="detail">
          <div className="detail-header">Humidity</div>
          <div className="detail-content">{weather?.current.humidity}%</div>
        </div>
        <div className="detail">
          <div className="detail-header">Wind</div>
          <div className="detail-content">
            {handleWindSpeed(weather?.current.wind_speed, units)}
          </div>
        </div>
        <div className="detail">
          <div className="detail-header">Feels like</div>
          <div className="detail-content">
            {Math.round(weather?.current.feels_like)}
            {degrees}
          </div>
        </div>
        <div className="detail">
          <div className="detail-header">UV Index</div>
          <div className="detail-content">{handleUV(weather?.current.uvi)}</div>
        </div>
        <div className="detail">
          <div className="detail-header">Pressure</div>
          <div className="detail-content">{weather?.current.pressure} hPa</div>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default Home;
