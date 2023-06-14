import bannerimg from './banner.png'
import Image1 from './image1.png'
import Image2 from './image2.png'
import Image3 from './image3.png'
import Image4 from './image4.png'
function productDOM() 
{
    const maindiv = document.querySelector('.maincontent');
    
    const title = document.createElement('h2');
    title.textContent = 'OUR HEALTHBOX';
    title.classList.add('h2title');
    maindiv.replaceChildren(title);

    const mybanner = new Image;
    mybanner.src = bannerimg;
    mybanner.classList.add('bannerP');
    maindiv.appendChild(mybanner);

    const subdiv = document.createElement('div');
    subdiv.classList.add('subdiv');
    maindiv.appendChild(subdiv)

    const img1 = new Image;
    img1.src = Image1;
    img1.classList.add('productimg')
    subdiv.appendChild(img1);

    const img2 = new Image;
    img2.src = Image2;
    img2.classList.add('productimg')
    subdiv.appendChild(img2);

    const img3 = new Image;
    img3.src = Image3;
    img3.classList.add('productimg')
    subdiv.appendChild(img3);

    const img4 = new Image;
    img4.src = Image4;
    img4.classList.add('productimg')
    subdiv.appendChild(img4);
    
    const subscription = document.createElement('h3');
    subscription.textContent = 'Weekly Fruit and Veg Healthbox';
    subscription.classList.add('subscription');
    maindiv.appendChild(subscription);

    const price = document.createElement('h3');
    price.textContent = 'R160';
    price.classList.add('price');
    maindiv.appendChild(price);

    const pricedel = document.createElement('h5');
    pricedel.textContent = '*Delivery is included in the price';
    pricedel.classList.add('pricedel');
    maindiv.appendChild(pricedel);

    const info = document.createElement('p');
    info.textContent = 'Every Tuesday we offer a different variety of fruit and veg. We take orders and do confirmations every Monday.';
    info.classList.add('info');
    maindiv.appendChild(info);

    const subdiv1 = document.createElement('div');
    subdiv1.classList.add('subdiv1');
    maindiv.appendChild(subdiv1);



}
export {productDOM}