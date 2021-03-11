import restaurantImg from './wario-restaurant.jpg';

const setHome = () => {
    const content = document.getElementById('content');
    content.innerHTML = "";

    const restaurantImage = document.createElement('img');
    restaurantImage.setAttribute('src', restaurantImg);

    const headline = document.createElement('h1');
    headline.innerHTML = "Welcome to WAAAHRIO'S";

    const description = document.createElement('p');
    description.innerHTML = "We got all of the gold, garlic, and guaves you could ever ask for!"

    content.appendChild(restaurantImage);
    content.appendChild(headline);
    content.appendChild(description);

    document.body.appendChild(content);
}

export default setHome;