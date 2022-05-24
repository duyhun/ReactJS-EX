import axios from 'axios';
import { useState, useEffect } from 'react';


export default function WeatherApp() {
    const [weather, setWeather] = useState({});
    const [city, setCity] = useState('Hanoi');

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ee6de521fda3d6518c1c40e36c8ccb7a`);
            setWeather(result.data.weather[0])
        };
        fetchData();
    }, [city])
    console.log(weather);
    return (
        <div>
            <h2> Current Weather </h2>
            {Object.keys(weather).map((key) => (
                <p key={key} > {key} : {weather[key]} </p>
            ))}
            <input id='city' type='text' placeholder='Enter City'></input>
            <button onClick={(e) => { setCity(document.getElementById('city').value) }}> Check </button>
        </div>
    )
}