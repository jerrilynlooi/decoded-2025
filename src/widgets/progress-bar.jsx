import React, { useState, useEffect } from "react";

export default function ProgressBar() {
	const [yearPercent, setYearPercent] = useState(0);
	const [year, setYear] = useState(new Date().getFullYear());

	useEffect(() => {
		const updateYearPercent = () => {
			const now = new Date();
			const currentYear = now.getFullYear();
			if (currentYear !== year) {
				setYear(currentYear);
			}

			const startThisYear = new Date(year, 0, 1);
			const startNextYear = new Date(year+1, 0, 1);
			const percent = Math.round((now - startThisYear) / (startNextYear - startThisYear) * 100);
			setYearPercent(percent);
		};
		updateYearPercent();
		const interval = setInterval(updateYearPercent, 1000);
		return () => clearInterval(interval)
	}, [year])

  return (
    <div className="p-6 max-w-md mx-auto bg-gradient-to-b from-pink-100 to-pink-400 text-white rounded-lg shadow-xl text-center">
			<h1 className="text-2xl text-black">Progress Bar</h1>
			<div>
				<p className="text-black mb-3">
					{year} is now {yearPercent}% complete.
				</p>
			</div>
			<div className="bg-gray-200 w-full h-2 rounded">
				<div className="bg-blue-400 h-2 rounded" style={{ width: `${yearPercent}%` }}></div>
			</div>
		</div>
  )
}
