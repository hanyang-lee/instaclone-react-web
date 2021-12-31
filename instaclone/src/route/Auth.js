import React, {useState} from "react";
import {getAuth,
    signInWithEmailAndPassword,
    GoogleAuthProvider ,
    signInWithPopup
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import styles from "./Auth.module.css";


const Auth = () =>{
    let navigate = useNavigate();
    const auth = getAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onChange = (event) =>{
        const {
            target: {name, value}
        } = event;
        if (name === "email"){
            setEmail(value);
        } else if (name === "password"){
            setPassword(value);
        }
    };

    function onCreateSubmit() {
        navigate("/Create");
    }
    const onSignSubmit = (event) => {
        event.preventDefault()
        signInWithEmailAndPassword(
            auth,
            email,
            password
        )
    } 
    const onGoogleClick =  (event) =>{
        const provider = new GoogleAuthProvider ();
        signInWithPopup(auth, provider)
    }
    
    return(
        <div className={styles.Logbox}>
            <div className={styles.Exitcreat}>
                <form onSubmit={onSignSubmit}>
                    <div>
                        <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={onChange}
                        />
                    </div>
                    <div>
                        <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={onChange}
                        />
                    </div>
                    <input type="submit" value="Log in"/>
                </form>
                <div>
                <button onClick={onGoogleClick}>Continue with Google</button>
                </div>
            </div>
            <div>
            <button onClick={onCreateSubmit}>Create Account</button>
            </div>
        </div>
    )
}

export default Auth;