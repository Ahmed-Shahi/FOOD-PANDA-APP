import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getDatabase,ref, set,child, push} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyA-6jKJat2MZMEPzkQfNOxW4hsf3dQ5ESY",
  authDomain: "authentication-app-56e22.firebaseapp.com",
  projectId: "authentication-app-56e22",
  storageBucket: "authentication-app-56e22.appspot.com",
  messagingSenderId: "215289143898",
  appId: "1:215289143898:web:8d3b976c023951bd2e2e63"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

let name = document.querySelector('#name')
let price = document.querySelector('#price')
let description = document.querySelector('#description')
let file = document.querySelector('#file')
let addproduct = document.querySelector('#addproduct')
let delall = document.querySelector('#delall')
let getul = document.querySelector('#getul')
// const userUid = localStorage.getItem("bilawalazeem75@gmail.com");

  addproduct.addEventListener('click',()=>{
let lielement = document.createElement('li')
let litext = document.createTextNode(name.value)
let li = lielement.appendChild(litext)
getul.appendChild(li)
console.log('Product Name:', name.value);

const usersRef = ref(db, 'User/Email Password/Data');
const userId = push(usersRef).key;
set(child(usersRef, userId), {
    name: name.value,
});


// const userProductsRef = ref(db, `User/authentication/${userUid}/products`);

// const newProductRef = push(userProductsRef);

// set(newProductRef, {
//       name: name.value,
//   });
  
})
    