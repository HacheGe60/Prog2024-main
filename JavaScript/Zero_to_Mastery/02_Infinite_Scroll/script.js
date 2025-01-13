// Unsplash API
const count = 10;
const apiKey = 'eBuH9MJ7niT9RUuMFHJki5O6l-dfBO4tzbMwqfOYj_Y';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API
async function getPhotos() {
	try {
		const response = await fetch(apiUrl);
		const data = await response.json();
		console.log(data);
	} catch (error) {
		// Catch Error Here
	}
}

getPhotos();
