const button = (id, text) => {
    const btnElement = document.createElement('button');
    btnElement.setAttribute('id', id);
    btnElement.innerHTML = text;
    return btnElement;
}

const setNavbar = () => {
    const content = document.getElementById('content');
    const navElement = document.createElement('nav');
    const homeBtn = button('home', 'Home');
    const menuBtn = button('menu', 'Menu');
    const contactBtn = button('contact', 'Contact');

    navElement.appendChild(homeBtn);
    navElement.appendChild(menuBtn);
    navElement.appendChild(contactBtn);

    const buttons = navElement.querySelectorAll("button");

    content.appendChild(navElement);

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            content.childNodes[2].innerHTML = "hi";
        })
    })

    document.body.appendChild(content);
};

export default setNavbar