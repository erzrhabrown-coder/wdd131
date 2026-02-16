    
  let submit = document.querySelector("#submit");

  submit.addEventListener("click", () => {
      let name = document.querySelector('#username').value;
      let password = document.querySelector('#password').value;

      /*check if user has visited page / is registered*/ 


    if (localStorage.getItem(name)=== password){
        window.open('BML.html');
    }

    else if (name === ""|| password === "")
        {
        alert('Please Register! How? by typing in your username and password below 😎THANK YOU');
        return name, password;
      }
    
    else{

        
        name = document.getElementById('username').value;
        password = document.getElementById('password').value;

        localStorage.setItem(name, password);
        alert('Registered Successful✔️');

        alert('Hi.. ' + name + ' Kindly type again to LogIn..');
        
 }

    name = document.getElementById('username').value;
    password = document.getElementById('password').value;
        localStorage.setItem(name, password);
        visitor = localStorage.getItem(name);
        name = visitor;
    

  })