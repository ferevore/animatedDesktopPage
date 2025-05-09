const btnHamburger = document.querySelector('.hamburger');
const menuPanel = document.querySelector('.menu-panel');
const menuLinks = document.querySelectorAll('.menu-panel a, .menu-panel div')

/*console.log(menuLinks)*/
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
