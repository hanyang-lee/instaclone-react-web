import React, {useState} from "react";
import {getAuth,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth"
import { useNavigate } from "react-router-dom";
import styles from "./Create.module.css";
import classNames from 'classnames';


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
    const onGoogleClick =  (event) =>{
        const provider = new GoogleAuthProvider ();
        signInWithPopup(auth, provider)
        navigate("/")
    }
    const onClick =(event) => {
        event.preventDefault()
        navigate("/")
    }

    return (
        <main className={styles.main}>
            <div className={styles.mainbox}>
                <h1 className={classNames({[styles.headMg]: true, [styles.headCss]: true, [styles.coreSpriteLoggedOutWordmark]: true})}>instgram</h1>
                <form className={styles.inputbox} onSubmit={onNewSubmit}>
                    <h2 className={styles.subtitle}>친구들의 사진과 동영상을 보려면 가입하세요.</h2>
                    <div>
                        <button className={styles.facebutton} onClick={onGoogleClick}>
                            <span className={classNames({[styles.coreSpriteFacebookIcon]: true, [styles.picture]: true})}></span>
                            <span className={styles.facetitle}>Facebook으로 로그인</span>
                        </button>
                    </div>
                    
                    <div className={classNames({[styles.linePosi]: true, [styles.itemsAlign]: true})}>
                        <div className={styles.dotLine}></div>
                        <div className={styles.letterCss1}>또는</div>
                        <div className={styles.dotLine}></div>
                    </div>
                    <div>
                        <label className={classNames({[styles.labelCss]:true, [styles.moveUp]: true})}>
                            <span className={styles.spanCss}>전화번호, 사용자 이름 또는 이메일</span>
                            <input 
                            name="email"
                            type="email"
                            required
                            value={email}
                            onChange={onChange}
                            />
                        </label>
                        <label className={classNames({[styles.labelCss]:true, [styles.moveUp]: true})}>
                            <span className={styles.spanCss}>비밀번호</span>
                            <input
                            name="password"
                            type="password"
                            required
                            value={password}
                            onChange={onChange}
                            />
                        </label>
                        <input className={styles.signbutton} type="submit" value="가입"/>
                    </div>
                    
                </form>
            </div>
            <div className={styles.footerbox}>
                <div className={styles.loginbox}>
                    <span>계정이 있으신가요?</span>
                    <button onClick={onClick}>로그인</button>
                </div>
             </div>
    </main>
    )
}

export default Create;