const button = (id, text) => {
    const btnElement = document.createElement('button');
    btnElement.setAttribute('id', id);
    btnElement.innerHTML = text;
    return btnElement;
}

const setNavbar = () => {
    const navElement = document.createElement('nav');
    const homeBtn = button('home', 'Home');
    const menuBtn = button('menu', 'Menu');
    const contactBtn = button('contact', 'Contact');

    navElement.appendChild(homeBtn);
    navElement.appendChild(menuBtn);
    navElement.appendChild(contactBtn);

    content.appendChild(navElement);

    document.body.appendChild(navElement);
};

export default setNavbar