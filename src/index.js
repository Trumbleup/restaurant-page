import restaurantImg from './wario-restaurant.jpg';

const module = (() => {
	const pageLoad = () => {
		const content = document.getElementById('content');
		const restaurantImage = document.createElement('img');
		restaurantImage.setAttribute('src', restaurantImg);
		content.appendChild(restaurantImage);

		return content;
	}
	return { pageLoad }
})();

document.body.appendChild(module.pageLoad());