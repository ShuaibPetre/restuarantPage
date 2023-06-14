import Image3 from './image3.png'
import bannerimg from './banner.png'
function homeDOM() {
    const maindiv = document.querySelector('.maincontent');
    
    // use your function!
    const title = document.createElement('h1');
    title.textContent = 'The Petre Dish';
    title.classList.add('hometitle');
    maindiv.replaceChildren(title);

    const mybanner = new Image;
    mybanner.src = bannerimg;
    mybanner.classList.add('banner');
    maindiv.appendChild(mybanner);

    const info = document.createElement('h3');
    info.textContent = 'Weekly seasonal fruit and veg healthboxes delivered every Tuesday!';
    info.classList.add('homeh3');
    maindiv.appendChild(info);

    const myImage = new Image;
    myImage.src = Image3;
    myImage.classList.add('image3')
    maindiv.appendChild(myImage);

    const order = document.createElement("BUTTON");
    order.setAttribute('id', 'order');
    order.textContent = 'ORDER NOW';
    maindiv.appendChild(order);

  }
  export { homeDOM };
