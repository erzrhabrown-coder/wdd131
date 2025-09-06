const currentY = new Date().getFullYear();


document.querySelector("#currentyear").innerHTML = currentY;

const docMod =(document.lastModified);

document.querySelector("#lastModified").textContent =  docMod;