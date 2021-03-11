const navbar = () => {
    const content = document.getElementById('content');

    const navElement = document.createElement('nav');
    const homeBtn = document.createElement('button');
    homeBtn.innerHTML = "Home";

    const menuBtn = document.createElement('button');
    menuBtn.innerHTML = "Menu";

    const contactBtn = document.createElement('button');
    contactBtn.innerHTML = "Contact";

    navElement.appendChild(homeBtn);
    navElement.appendChild(menuBtn);
    navElement.appendChild(contactBtn);

    content.appendChild(navElement);

    document.body.appendChild(content);
};

export default navbar