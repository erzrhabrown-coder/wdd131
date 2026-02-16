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
    
  let saveName = document.querySelector("#submitreview");
  let saveEmail = document.querySelector('#youremail').value;

  saveName.addEventListener("click", () => {
      let name = document.querySelector('#yourname').value;
      let saveEmail = document.querySelector('#youremail').value;

      /*check if user has visited page / is registered*/ 
    if (localStorage.getItem(saveEmail)=== name){
      visitCount =1;
        document.querySelector(".countdisplay").textContent = 'This is your first visit';
        
    }
    else{
        visitCount = parseInt(visitCount)+1;
        localStorage.setItem("pageLoadCount", visitCount);
        visitCount = localStorage.getItem("pageLoadCount");

        
        saveName = document.getElementById('yourname').value;
        saveEmail = document.getElementById('youremail').value;

        localStorage.setItem(saveEmail, saveName);

        document.querySelector('.countdisplay').textContent = "Number of visits: " +visitCount;
        alert(visitCount);
        alert(saveEmail);
        
 }

    saveName = document.getElementById('yourname').value;
    saveEmail = document.getElementById('youremail').value;
        localStorage.setItem(saveEmail, saveName);
        visitor = localStorage.getItem(saveName);
        saveName = visitor;
    

  })
    

