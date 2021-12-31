import React, {useState} from "react";
import {getAuth,
    signInWithEmailAndPassword,
    GoogleAuthProvider ,
    signInWithPopup
} from "firebase/auth";
import { useNavigate } from "react-router-dom";


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
        <div>
            <form onSubmit={onSignSubmit}>
                <input
                name="email"
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={onChange}
                />
                <input
                name="password"
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={onChange}
                />
                <input type="submit" value="Log in"/>
            </form>
            <button onClick={onCreateSubmit}>Create Account</button>
            <button onClick={onGoogleClick}>Continue with Google</button>
        </div>
    )
}

export default Auth;