import React, {useState, useEffect} from "react";
import AppRouter from "./routes";
import {getAuth} from "firebase/auth"
import app from "./firebase"
import styles from "./App.module.css";

function App() {
  const auth = getAuth()
  const [init, setInit] = useState(false);
  const [LoggedIn, setLoggedIn] = useState(false);
  useEffect(() =>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        setLoggedIn(true);
      } else{
        setLoggedIn(false);
      }
      setInit(true);
    })
  }, [])
  return (
    <>
      {init ? <AppRouter LoggedIn={LoggedIn}/> : "initializing..."}
      <footer className={styles.fP0}>&copy; 2021-{new Date().getFullYear()} instaClone</footer>
    </>
  );
}

export default App;
