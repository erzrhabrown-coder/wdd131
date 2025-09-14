const currentY = new Date().getFullYear();


document.querySelector("#currentyear").innerHTML = currentY;

const docMod =(document.lastModified);

document.querySelector("#lastModified").textContent =  docMod;

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
})
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}) )
