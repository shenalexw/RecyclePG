import users from "../localStorage.js";

const login = document.querySelector('.login-form');
login.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = login['login-email'].value;
  const password = login['login-password'].value;

  let 
  for(let i = 0; i < users.length; i++) {
    if (email === users[i].name && password === users[i].password) {
      console.log('ya boi is in');
    }
  }
})