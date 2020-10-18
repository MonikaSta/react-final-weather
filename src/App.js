import React from "react";
import "./App.css";
import "./index.js"


export default function App() {
  return (
    <div className="App">
      <div className="weatherApp">
        <div className="row">
          <div className="col-8">
            <form id="search-form">
              <input
                type="search"
                className="form-control"
                autoComplete="off"
                autoFocus="on"
                id="city-input"
                placeholder="Search for a city..."
              />
            </form>
          </div>
          <div className="col-4">
            <button type="button" className="btn btn-outline-light" id="button">
              <i className="fas fa-location-arrow"></i>
            </button>
          </div>
        </div>
        <h1>
          <div id="current-location">Chicago</div>
        </h1>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-6">
              <span id="display-date">Monday, Oct 19</span>
            </div>
            <div className="col-6">
              <span id="display-time">13:45</span>
            </div>
          </div>
        </div>
        <div id="temperature">
          <span id="current-temperature">12</span>
          <span className="units">
            <a href="#" id="temperature-c" className="active">
              °C
            </a>
            |
            <a href="#" id="temperature-f" className="active">
              °F
            </a>
          </span>
        </div>
        <div id="description"></div>
        <div className="container" id="parameters">
          <div className="row">
            <div className="col-4">
              <img
                src="https://static.thenounproject.com/png/1001987-200.png"
                alt="humidity icon"
                id="weather-icons"
              />
              Humidity:
              <div id="humidity"></div>
            </div>
            <div className="col-4 m-40">
              <img
                id="icon"
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt="weather"
              />
            </div>
            <div className="col-4">
              <img
                src="https://img.icons8.com/ios/452/wind.png"
                alt="wind icon"
                id="weather-icons"
              />
              Wind:
              <div id="wind"></div>
            </div>
          </div>
        </div>
        <div className="row weather-forecast" id="forecast"></div>
      </div>
      <small className="codedBy">
        <a href="https://github.com/MonikaSta/Monika-s-new-better-Weather-App">
          Open-source{" "}
        </a>
        code by Monika Stasauskiene
      </small>
    </div>
  );
}

