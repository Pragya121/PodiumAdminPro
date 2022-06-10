import React, {useState, useEffect} from "react";
import Cards from "../Cards/Cards";
import firebase from "firebase/app";
import "firebase/auth";

import "./MainDash.css";
import { Button } from "@mui/material";
const MainDash = () => {
  const REACT_APP_GOOGLE_CLIENT_ID =  "752240947198-j1bnjf5f8i742s6pnnr4piru9r9m0ior.apps.googleusercontent.com";

    const [loginData, setLoginData] = useState(
      localStorage.getItem("loginData")
        ? JSON.parse(localStorage.getItem("loginData"))
        : null
    );
    const [token, setToken] = useState(
      localStorage.getItem("token")
        ? JSON.parse(localStorage.getItem("token"))
        : null
    );
    var firebaseConfig = {
      apiKey: "AIzaSyD8yYba6Z_DpycbSF95Po9PqoDBSnYKrWE",
      authDomain: "podiumpro-9cc8e.firebaseapp.com",
      databaseURL: "https://podiumpro-9cc8e-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "podiumpro-9cc8e",
      storageBucket: "podiumpro-9cc8e.appspot.com",
      messagingSenderId: "752240947198",
      appId: "1:752240947198:web:1e1adfcd532c11d8f25aaf",
      measurementId: "G-DL8PCTE9JY",
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
   
    useEffect(() => {
      localStorage.removeItem("token");
      localStorage.removeItem("loginData");
    }, [])
    
    console.log(firebase.apps);
    function showIDToken() {
      firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
          console.log(idToken);
          setToken(idToken)
          localStorage.setItem("token",JSON.stringify(idToken));
      }).catch(function(error) {
        // Handle error
        alert("connection failed!");
        console.log(error);
      });
    }
    
 
  function googleSignInPopup() {
    var provider = new firebase.auth.GoogleAuthProvider();
    // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    provider.addScope('https://www.googleapis.com/auth/cloud-platform.read-only');
    provider.setCustomParameters({
      'login_hint': 'user@example.com'
    });
    // [START auth_google_signin_popup]
    
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;
        console.log(result);
        setLoginData(result);
        localStorage.setItem("loginData",JSON.stringify(result));
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        console.log(token);
        // The signed-in user info.
        var user = result.user;

        showIDToken();
        // ...
      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        alert("connection failed!");
       console.log(error);
      });
  
}

  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <img src=""  />
      
       {/* <Cards /> */}
       {!token?  <div className="MainDash">
    <button  onClick={googleSignInPopup}> click to sign in</button>
  </div>: <div className="mainDash"> Welcome aboard
  {
    loginData? <div>  {loginData.additionalUserInfo.profile.given_name}</div>: <div></div>
  }
  </div>
    

       }
     
    </div>
  );
};

export default MainDash;