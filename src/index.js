import setHome from "./home.js";
import setMenu from "./menu";
import setContact from "./contact";
import setNavbar from "./navbar";

const setNavEvents = () => {
    const homeButton = document.getElementById("home");
    const contactButton = document.getElementById("contact");
    const menuButton = document.getElementById("menu");

    homeButton.addEventListener('click', setHome);
    menuButton.addEventListener('click', setMenu);
    contactButton.addEventListener('click', setContact);
}

const initialLoad = () => {
	setNavbar();
	setHome();
    setNavEvents();
}


initialLoad();



