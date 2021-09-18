// signup
const signupForm = document.querySelector('.signup-form');
signupForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // get user info
  const email = signupForm['signup-email'].value;
  const username = signupForm['signup-username'].value;
  const password = signupForm['signup-password'].value;

  // test if the input works
  // console.log(username, email, password);
})