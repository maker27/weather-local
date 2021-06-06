import React, { useEffect, useState } from 'react';
import { getWeatherData } from '../../services/weaher-api';
import { defaultTemperatureUnit } from '../../assets/constants';
import './WeatherWidget.scss';
import IconView from './IconView';

export default function WeatherWidget() {
    const [status, setStatus] = useState('init');
    const [tempUnit, setTempUnit] = useState(defaultTemperatureUnit);
    const [tempValue, setTempValue] = useState(0);
    const [currentTempInCelsius, setCurrentTempInCelsius] = useState(0);
    const [icon, setIcon] = useState('');
    const [info, setInfo] = useState({ city: '', country: '', desc: '' });
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            setStatus('processing');
            const lat: string = 'lat=' + position.coords.latitude;
            const lon: string = 'lon=' + position.coords.longitude;
            getWeatherData(lat, lon).then(data => {
                setInfo({ city: data.name, country: data.sys.country, desc: data.weather[0].main });
                const initTempValue = Math.round(data.main.temp * 10) / 10;
                setCurrentTempInCelsius(initTempValue);
                setTempValue(initTempValue);
                setIcon(data.weather[0].main);
                setStatus('done');
            });
        });
    }, []);

    function tempUnitToggle() {
        const newTempUnit = tempUnit === 'C' ? 'F' : 'C';
        setTempUnit(newTempUnit);
        if (newTempUnit === 'F') {
            setTempValue(Math.round((currentTempInCelsius * 9) / 5 + 32));
        } else {
            setTempValue(currentTempInCelsius);
        }
    }

    if (status === 'init') return <p>Разрешите доступ к данным геолокации</p>;
    if (status === 'processing') return <p>Получаем данные о погоде...</p>;

    return (
        <div className="weather-widget">
            <div className="weather-widget__info">
                <p>
                    <span>{info.city}</span>, <span>{info.country}</span>
                </p>
                <p>
                    <span id="temp">{tempValue}</span>
                    <span className="temp" onClick={tempUnitToggle}>
                        {tempUnit}
                    </span>
                </p>
                <p>{info.desc}</p>
            </div>

            <IconView type={icon} />
        </div>
    );
}
