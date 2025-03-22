import React, { useState } from 'react'

const apiKey = import.meta.env.VITE_WEATHER_APIKEY
const weatherImages = {
	Clear: "clear.png",
	Clouds: "clouds.png",
	Snow: "snow.png",
	Rain: "rain.png",
	Drizzle: "drizzle.png",
	Thunderstorm: "thunderstorm.png",
	Mist: "mist.png",
	Fog: "fog.png",
};

export default function WeatherWidget() {
	const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

	const fetchWeather = async () => {
		console.log(apiKey)
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();

      if (data.cod !== 200) {
        setError(data.message);
        setWeather(null);
      } else {
        setWeather(data);
        setError("");
      }
    } catch (err) {
      setError("Error fetching weather data");
    }
  };

	if (city === "" || weather == null) return (
		<div className="p-6 max-w-md mx-auto bg-gradient-to-b from-blue-100 to-blue-400 text-white rounded-lg shadow-xl text-center">
			<h1 className="text-2xl font-bold mb-4 text-black">Weather Widget</h1>

			<div className="flex items-center space-x-2 mb-4">
				<input
					type="text"
					placeholder="Enter city"
					value={city}
					onChange={(e) => setCity(e.target.value)}
					className="flex-1 border p-2 rounded text-black"
				/>
				<button
					onClick={fetchWeather}
					className="bg-white text-black px-4 py-2 rounded font-semibold shadow-md hover:bg-gray-200 transition"
				>
					Search
				</button>
			</div>
			{error && <p className="text-red-900 mt-2">{error}</p>}
		</div>
	)

  return (
		weather && (
			<div className="p-6 max-w-md mx-auto bg-gradient-to-b from-blue-100 to-blue-400 rounded-lg shadow-xl">
				<div className="flex flex-row">
					<div className="flex-1">
						<h2 className="text-xl font-semibold">{weather.name}</h2>
						<div className="text-4xl text-blue-800">{weather.main.temp}°C</div>
						<p className="capitalize">{weather.weather[0].description}</p>
						<div>
							<p className="">Wind Speed: {weather.wind.speed} m/s -- Humidity: {weather.main.humidity}%</p>
						</div>
					</div>

				{/* Display corresponding weather image */}
					<div className="flex flex-col">
						<img
							src={weatherImages[weather.weather[0].main] || "default.png"}
							alt={weather.weather[0].main}
							className="w-24 h-24"
						/>
					</div>
				</div>
			</div>
		)
  )
}
