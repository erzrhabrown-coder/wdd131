const currenty = new Date().getFullYear();


document.querySelector("#currentyear").innerHTML = currenty;

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
}) );



const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    built: 2005,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    built: 1888,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    built: 2015,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    built:2020,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    built: 1974,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    built: 1986,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    built:1983,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Accra Ghana",
    location: "Accra Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    built:2004,
    imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/320x180/accra-ghana-temple-detail-249022-2400x1200.jpg"
  },
  {
    templeName: "Anchorage Alaska Temple",
    location: "Anchorage Alaska ",
    dedicated: "1999, January, 9",
    area: 1109.0,
    imageUrl : "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/anchorage-alaska/320x180/anchorage-temple-lds-253274-wallpaper.jpg"
  },
  {
   templeName: "Bern Switzerland Temple",
    location: "Bern Switzerland ",
    dedicated: "1955, September, 11",
    area: 3302.3,
    imageUrl :"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/400x250/ber-switzerland-temple-lds-903376-wallpaper.jpg"
  },
];

templecard(temples);


const oldlink = document.querySelector("#old");

oldlink.addEventListener("click", () =>{
  let oldlink = temples.filter(temple => temple.built< 1900)
  templecard(oldlink);

})

const largelink = document.querySelector("#large");

largelink.addEventListener("click", () =>{
  let largelink = temples.filter(temple => temple.area > 90000)
  templecard(largelink)});


 const newlink = document.querySelector("#newo");

newlink.addEventListener("click", () =>{
  let newlink = temples.filter(temple => temple.built > 2000)
  templecard(newlink)}); 

   const smalllink = document.querySelector("#small");

smalllink.addEventListener("click", () =>{
  let smalllink = temples.filter(temple => temple.area < 10000)
  templecard(smalllink)}); 


 const homelink = document.querySelector("#home");

homelink.addEventListener("click", () =>{
  let homelink = templecard(temples)}); 

function templecard(filteredtemple) {
    document.querySelector(".container").innerHTML = "";

  filteredtemple.forEach(temple => {
    let card= document.createElement('section');
    let name = document.createElement('h3');
    let location = document.createElement('p');
    let dedicated = document.createElement('p');
    let area = document.createElement('p');
    let img = document.createElement('img');

    name.textContent = temple.templeName;
    location.innerHTML = '<span class="label">Location:</span> ' + temple.location;
    dedicated.innerHTML = '<span class="label">Dedicated:</span> ' + temple.dedicated;
    area.innerHTML = '<span class="label">Size:</span> ' + temple.area;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("loading","lazy");


    card.appendChild(img);

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);

document.querySelector(".container").appendChild(card);



   
}
)
}



