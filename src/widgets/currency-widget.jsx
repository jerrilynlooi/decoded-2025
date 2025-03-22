import React, { useState } from 'react';

export default function CurrencyWidget() {
	const [result, setResult] = useState("");
	const [amount, setAmount] = useState("");
	const [fromCurrency, setFromCurrency] = useState('HKD');
	const [toCurrency, setToCurrency] = useState('AUD');

	const currencies = ["AUD","THB","HKD","USD","SGD","JPY"]
	const EXCHANGE_RATES = {}

	const convertAmount = async () => {
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

  return (
    <div className="p-6 max-w-md mx-auto bg-gradient-to-b from-teal-100 to-teal-400 rounded-lg shadow-xl text-center">
			<div className="flex flex-col gap-4">
				<h1 className="text-2xl text-black">Currency Converter</h1>
				<input
					type="number"
					placeholder="Enter amount"
					value={amount}
					onChange={(e) => setAmount(e.target.value)}
					className="flex-1 border p-2 rounded text-black"
				/>
				<div className='flex flex-row justify-between'>
					<select></select>
					<p> to </p>
					<select></select>	
				</div>
				<button
					onClick={convertAmount}
					className="bg-white text-black px-4 py-2 rounded font-semibold shadow-md hover:bg-gray-200 transition"
				>
					Convert
				</button>

				{(result !== "") && 
				<p>
					{amount} {fromCurrency} = {result} {toCurrency}
				</p>}

			</div>
		</div>
  )
}
