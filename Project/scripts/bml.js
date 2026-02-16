const currenty = new Date().getFullYear();


document.querySelector("#currentyear").innerHTML = currenty;

const docMod =(document.lastModified);

document.querySelector("#lastModified").textContent =  docMod;


const materials = [
    {
        materialName: "2inch 40degrees Wye",
        price: 100,
        Remaining: 20,
        imageUrl :"https://github.com/erzrhabrown-coder/wdd131/blob/main/Project/images/2inch%2040degrees%20wye.PNG?raw=true",
        type_material: "Pipe"
    },
    {
        materialName: "2inch 45degree bend",
        price: 100,
        Remaining: 20,
        imageUrl :"https://github.com/erzrhabrown-coder/wdd131/blob/main/Project/images/2inch%2045degrees%20bend.PNG?raw=true",
        type_material: "Pipe"

    },
    { 
        materialName: "4inch 45 degree  bend",
        price: 100,
        Remaining: 20,
        imageUrl :"https://github.com/erzrhabrown-coder/wdd131/blob/main/Project/images/4inch%2045degree%20Bend.PNG?raw=true",
         type_material: "Pipe"

     },
     {
        materialName: "Stop Cork",
        price: 100,
        Remaining: 20,
        imageUrl :"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/400x250/ber-switzerland-temple-lds-903376-wallpaper.jpg",
        type_material: "Pipe"

     },

     {
        materialName: "4inch PVC tee ",
        price: 100,
        Remaining: 20,
        imageUrl :"https://github.com/erzrhabrown-coder/wdd131/blob/main/Project/images/4inch%20pvc%20tee.PNG?raw=true",
        type_material: "Pipe"

     },
     {
        materialName: "4inch wye",
        price: 100,
        Remaining: 20,
        imageUrl :"https://github.com/erzrhabrown-coder/wdd131/blob/main/Project/images/4inch%20wye.PNG?raw=true",
        type_material: "Pipe"
    },
    {
        materialName: "45W LED light",
        price: 100,
        Remaining: 20,
        imageUrl :"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/400x250/ber-switzerland-temple-lds-903376-wallpaper.jpg",
        type_material: "Electricals"

    },
 {
        materialName: "20W LED light",
        price: 100,
        Remaining: 20,
        imageUrl :"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/400x250/ber-switzerland-temple-lds-903376-wallpaper.jpg",
        type_material: "Electricals"

    },
     {
        materialName: "25W bulb",
        price: 100,
        Remaining: 20,
        imageUrl :"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/400x250/ber-switzerland-temple-lds-903376-wallpaper.jpg",
        type_material: "Electricals"

    },
     {
        materialName: "2Meters Cable Reel",
        price: 100,
        Remaining: 20,
        imageUrl :"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/400x250/ber-switzerland-temple-lds-903376-wallpaper.jpg",
        type_material: "Electricals"

    },
     {
        materialName: "Angle Valve",
        price: 100,
        Remaining: 20,
        imageUrl :"https://github.com/erzrhabrown-coder/wdd131/blob/main/Project/images/angle%20valve.PNG?raw=true",
        type_material: "Plumbing"

    },
     {
        materialName: "Flexible tube",
        price: 100,
        Remaining: 20,
        imageUrl :"https://github.com/erzrhabrown-coder/wdd131/blob/main/Project/images/flexible%20cable.PNG?raw=true",
        type_material: "Plumbing"

    },
     {
        materialName: "Stop Gate",
        price: 100,
        Remaining: 20,
        imageUrl :"https://github.com/erzrhabrown-coder/wdd131/blob/main/Project/images/stop%20gate.PNG?raw=true",
        type_material: "Plumbing"

    },
     {
        materialName: "Stop Valve",
        price: 100,
        Remaining: 20,
        imageUrl :"https://github.com/erzrhabrown-coder/wdd131/blob/main/Project/images/ppr%20stop%20valve.PNG?raw=true",
        type_material: "Plumbing"

    },
     {
        materialName: "floor Drain",
        price: 100,
        Remaining: 20,
        imageUrl :"https://github.com/erzrhabrown-coder/wdd131/blob/main/Project/images/floorDrain.PNG?raw=true",
        type_material: "Plumbing"

    },

];
materialcard(materials);

const pipe_link = document.querySelector('#pipe');
pipe_link.addEventListener('click', () =>{
    let pipe_link = materials.filter(material => material.type_material =='Pipe');
    materialcard(pipe_link);
    document.querySelector('.high').textContent = "P  I  P  E  S";
})

const plumbing_link = document.querySelector('#plumbing');
plumbing_link.addEventListener('click', () =>{
    let plumbing_link = materials.filter(material => material.type_material =='Plumbing');
    materialcard(plumbing_link);
    document.querySelector('.high').textContent = "P  L  U  M  B";

})

const elect_link = document.querySelector('#electricals');
elect_link.addEventListener('click', () =>{
    let elect_link = materials.filter(material => material.type_material =='Electricals');
    materialcard(elect_link);
    document.querySelector('.high').textContent = "E  L  E  C  T  ";


})

const homelink = document.querySelector('#home');
homelink.addEventListener('click', () =>{
    let homelink = materials.filter(material => material.materialName !=='');
    materialcard(homelink);
    document.querySelector('.high').textContent = "H   O   M   E ";

});
 
function materialcard(filteredmaterial) {
    document.querySelector(".container").innerHTML = "";

  filteredmaterial.forEach(material => {
    let card= document.createElement('section');
    let materialName = document.createElement('h3');
    let price = document.createElement('p');
    let remaining = document.createElement('p');
    let materialType = document.createElement('p');
    let img = document.createElement('img');

    materialName.textContent = material.materialName;
    price.innerHTML = '<span class="label">Price:</span> ' + material.price;
    remaining.innerHTML = '<span class="label">Quantity In Stock:</span> ' + material.Remaining;
    materialType.innerHTML = '<span class="label">Category:</span> ' + material.type_material;
    img.setAttribute("src", material.imageUrl);
    img.setAttribute("loading","lazy");


    card.appendChild(img);

    card.appendChild(materialName);
    card.appendChild(price);
    card.appendChild(remaining);
    card.appendChild(materialType)

document.querySelector(".container").appendChild(card);

})};
