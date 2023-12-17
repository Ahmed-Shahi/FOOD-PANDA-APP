
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyAJxKZOetqHiLWSzEpJe_0QigszBPzEx_Q",
    authDomain: "food-panda-app-e30c6.firebaseapp.com",
    projectId: "food-panda-app-e30c6",
    storageBucket: "food-panda-app-e30c6.appspot.com",
    messagingSenderId: "412792821616",
    appId: "1:412792821616:web:1d20a9e707d12388a761b5",
    measurementId: "G-50ET88F53J"
  };
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)


  let signin = document.querySelector('#signin')

  signin.addEventListener("click",()=>{
  
    const email = document.getElementById('email') 
    const password = document.getElementById('password')
  
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      alert('login Successfull')
      location.href = './adminCURD.html'
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('Incorrect Password/Email'+'<br>'+'Go to Sign Up Page')
      location.href='./adminUp.html'
    });
  })
  