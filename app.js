const btnHamburger = document.querySelector('.hamburger');
const menuPanel = document.querySelector('.menu-panel');
const menuLinks = document.querySelectorAll('.menu-panel a, .menu-panel button');
const frameImages = document.querySelector('#frame');
const images = ['2.webp', '1-1.webp', '2-2.webp', '3-3.webp', '4-4.webp','5-5.webp'];
const modal = document.querySelector('.modal');
const btnOpenModal = document.querySelector('#btn-open-form');
const btnCloseModal = document.querySelector('#modal-close-button');
const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputMessage = document.querySelector('#message');
const contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', (event)=> {
    event.preventDefault();
    const name = inputName.value;
    const email = inputEmail.value;
    const message = inputMessage.value;


    //object literal = paindlik andmete struktuur, salvestab valued key-value formaadis

    const formData = {
        userName: name,
        userEmail: email,
        userMessage: message
    }

   // localStorage.setItem("formData", JSON.stringify(formData));
   localStorage.setItem("name", JSON.stringify(formData.userName));
   localStorage.setItem("email", JSON.stringify(formData.userEmail));
   localStorage.setItem("message", JSON.stringify(formData.userMessage));

    console.log('form submitted')
});

/*btnOpenModal.addEventListener('click', () => {
    modal.style.display = 'block';
    document.body.classList.add('no-scroll'); 
});


btnCloseModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.classList.remove('no-scroll'); 
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        document.body.classList.remove('no-scroll');
    }
}); */

btnOpenModal.addEventListener('click', () => {
    modal.classList.add('show');
    document.body.classList.add('no-scroll');
});

btnCloseModal.addEventListener('click', () => {
    modal.classList.remove('show');
    document.body.classList.remove('no-scroll');
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.remove('show');
        document.body.classList.remove('no-scroll');
    }
});

const closeBtn = document.querySelector('.close-button');

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});


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