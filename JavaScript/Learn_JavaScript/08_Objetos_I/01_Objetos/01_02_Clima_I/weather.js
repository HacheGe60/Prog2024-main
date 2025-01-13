export function getCountry(data) {
	console.log(data.location.country);

	return data.location.country;
}

export function getIcon(data) {
	console.log(data.current.weather_icons[0]);

	return data.current.weather_icons[0];
}

export function getTemperature(data) {
	console.log(data.current.temperature);

	return data.current.temperature;
}
