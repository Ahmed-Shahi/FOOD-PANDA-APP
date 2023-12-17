
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { getDatabase, ref, set ,push,child} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js"

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
  const db = getDatabase(app);
  
  let signup = document.querySelector('#signup')

  signup.addEventListener('click',()=>{
    let email = document.querySelector('#email')
    let password = document.querySelector('#password')

// realtime database ..................
const usersRef = ref(db, 'User/authentication/');
const userId = push(usersRef).key;
set(child(usersRef, userId), {
    email: email.value,
    password: password.value
});

    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.email)
        alert('ADMIN CREATED')
        location.href='./adminIn.html'
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });
    
  })















































