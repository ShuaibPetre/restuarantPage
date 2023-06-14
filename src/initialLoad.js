const initialLoad = () => {
    console.log('hi')
    const container = document.querySelector('#container');
    
    const header = document.createElement('div');
    header.setAttribute('id','header');
    container.appendChild(header);

    const legend = document.createElement('div');
    legend.setAttribute('id', 'legend');
    header.appendChild(legend);

    const homebtn = document.createElement("BUTTON");
    homebtn.classList.add('home');
    homebtn.textContent = 'HOME';
    legend.appendChild(homebtn);

    const product = document.createElement("BUTTON");
    product.setAttribute('id', 'product');
    product.textContent = 'PRODUCT';
    legend.appendChild(product);
    
    
    const contact = document.createElement("BUTTON");
    contact.setAttribute('id', 'contact');
    contact.textContent = 'CONTACT';
    legend.appendChild(contact);

    const maincontent = document.createElement('div')
    maincontent.classList.add('maincontent');
    maincontent.textContent = 'test'
    container.appendChild(maincontent)
    console.log('hi1')
}
export { initialLoad };
