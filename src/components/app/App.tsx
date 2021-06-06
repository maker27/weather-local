import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import WeatherWidget from '../weather-widget/WeatherWidget';
import { notSupportGeolocation } from '../../assets/constants';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Погода по геолокации</p>
            </header>
            {navigator.geolocation ? <WeatherWidget /> : <h4>{notSupportGeolocation}</h4>}
        </div>
    );
}

export default App;
