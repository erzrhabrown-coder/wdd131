const currenty = new Date().getFullYear();

document.querySelector("#currentyear").innerHTML = currenty;

const docMod =(document.lastModified);

document.querySelector("#lastModified").textContent =  docMod;


const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];


populateProduct(products)


function populateProduct() {

  products.forEach(product => {
    let dis = document.createElement('option');
    let name = document.createElement('value');

    name.textContent = product.name;


    dis.appendChild(name);

document.querySelector("#prodname").appendChild(dis);
  })}

 
    let visitCount = localStorage.getItem("pageLoadCount");

    if (visitCount ==null){
        visitCount = 1;
        document.querySelector(".countdisplay") = 'This is your first visit';
    }
    else{
        visitCount = parseInt(visitCount)+1;
 }
    localStorage.setItem("pageLoadCount", visitCount);
    visitCount = localStorage.getItem("pageLoadCount")
    document.querySelector(".countdisplay").innerHTML = visitCount;
        

document.querySelector('.countdisplay').textContent = visitCount;