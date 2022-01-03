import React, {useState} from "react";
import {getAuth,
    createUserWithEmailAndPassword
} from "firebase/auth"
import { useNavigate } from "react-router-dom";

const Create = () =>{
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
    const onNewSubmit = (event) =>{
        event.preventDefault()
        createUserWithEmailAndPassword(
            auth,
            email,
            password
        )
        navigate("/")
    }
    return (
        <div>
            <form onSubmit={onNewSubmit}>
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
                <input type="submit" value="Sign in"/>
            </form>
        </div>
    )
}

export default Create;