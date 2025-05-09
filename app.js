const btnHamburger = document.querySelector('.hamburger');
const menuPanel = document.querySelector('.menu-panel');
const menuLinks = document.querySelectorAll('.menu-panel a, .menu-panel button');
const frameImages = document.querySelector('#frame');
const images = ['2.webp', '1-1.webp', '2-2.webp', '3-3.webp', '4-4.webp','5-5.webp'];

let currentImageIndex = 0;

btnHamburger.addEventListener('click', (event)=>{
   /*console.log(menuPanel);*/
   /*console.log(menuPanel.classList);*/
   menuPanel.classList.toggle('active');/*kas elemendil on olemas klassinimi*/


});

document.addEventListener('click', (event) => {
    if(!menuPanel.contains(event.target) && !btnHamburger.contains(event.target)) {
       menuPanel.classList.remove('active');
    } 
});

menuLinks.forEach((link)=>{
   /* console.log(link.innerHTML);*/
   link.addEventListener('click', ()=> {
    menuPanel.classList.remove('active');
   })
})

frameImages.addEventListener('click', ()=> {
    /*currentImageIndex++; //+1 */
    currentImageIndex = (currentImageIndex + 1) % images.length;
    frameImages.src = 'images/' + images[currentImageIndex];
});