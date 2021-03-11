const setContact = () => {
    const content = document.getElementById('content');
    content.innerHTML = "";

    const heading = document.createElement("h1");
    heading.innerHTML = "CONTACT";

    const phoneNumber = document.createElement("h2");
    phoneNumber.innerHTML = "1-800-WAA-HHHH";

    const emailContact = document.createElement("p");
    emailContact.innerHTML = "wario@garlicracket.wahh";

    content.appendChild(heading);
    content.appendChild(phoneNumber);
    content.appendChild(emailContact);

    document.body.appendChild(content);
}

export default setContact;