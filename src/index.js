console.log("It worked!")

const module = (() => {
	const pageLoad = () => {
		const content = document.getElementById('content');
		const restaurantImage = document.createElement('img');
		const srcImage = document.createAttribute('src');
		restaurantImage.setAttribute(srcImage, '../wario-restaurant.jpg');
	}
})();