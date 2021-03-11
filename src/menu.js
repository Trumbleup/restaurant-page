import garlicImg from "./garlic.jpeg";
import goldImg from "./gold.jpeg";
import guavaImg from "./guava.jpg";


const createImage = (src) => {
    const image = document.createElement('img');
    image.setAttribute('src', src);

    return image
}

const setMenu = () => {
    const content = document.getElementById('content');
    content.innerHTML = "";

    const garlic = createImage(garlicImg);
    const gold = createImage(goldImg);
    const guava = createImage(guavaImg);
    content.appendChild(garlic);
    content.appendChild(gold);
    content.appendChild(guava);

    document.body.appendChild(content);
}

export default setMenu;