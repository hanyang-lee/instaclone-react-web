import React, {useState} from "react";
import {getAuth,
    signInWithEmailAndPassword,
    GoogleAuthProvider ,
    signInWithPopup
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import styles from "./Auth.module.css";
import classNames from 'classnames';

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
    
    //52번째줄 classNames안에 조건문을 이용해서 글이 작성이 되어야 FATdn을 true로 하게끔 바꿔줘야함
    return(
        <div className={styles.LogBox}>
            <div className={styles.exitCreat}>
                <h1 className={classNames({[styles.headMg]: true, [styles.headCss]: true, [styles.coreSpriteLoggedOutWordmark]: true})}>Instagram</h1>
                <div className={styles.exitHead}>
                    <form className={styles.formCss} onSubmit={onSignSubmit}>
                        <div className={classNames({[styles.itemsAlign]: true, [styles.topM24]: true})}>
                            <div className={styles.Blankbox}>
                                <div className={styles.InputBox}>
                                    <label className={classNames({[styles.labelCss]: true, [styles.moveUp]: true})}>
                                        <span className={styles.spanCss}>전화번호, 사용자 이름 또는 이메일</span>
                                        <input
                                        className={styles.inputCss}
                                        autoCapitalize="off"
                                        autoCorrect="off"
                                        name="email"
                                        type="email"
                                        required
                                        value={email}
                                        onChange={onChange}
                                        />
                                    </label>
                                </div>
                            </div>
                            <div className={styles.Blankbox}>
                                <div className={styles.InputBox}>
                                    <label className={classNames({[styles.labelCss]:true, [styles.moveUp]: true})}>
                                        <span className={styles.spanCss}>비밀번호</span>
                                        <input
                                        className={styles.inputCss}
                                        name="password"
                                        type="password"
                                        required
                                        value={password}
                                        onChange={onChange}
                                        />
                                    </label>
                                </div>
                            </div>
                            <div className={styles.positioning}>
                                <input className={classNames({[styles.buttonCss]: true, [styles.btnColor]: true})} type="submit" value="Log in"/>
                            </div>
                            <div className={styles.linePosi}>
                                <div className={styles.dotLine}></div>
                                <div className={styles.letterCss1}>또는</div>
                                <div className={styles.dotLine}></div>
                            </div>
                            <div className={styles.positioning}>
                                <button className={classNames({[styles.buttonCss]: true, [styles.btnCondition]: true, [styles.btnColor]: true})} onClick={onGoogleClick}>
                                    <span className={classNames({[styles.coreSpriteFacebookIcon]: true, [styles.picture]: true})}></span>
                                    <span className={styles.facebookColor}>Facebook으로 로그인</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className={styles.signBox}>
                <div className={styles.signCss1}>
                    <p className={styles.letterCss2}>계정이 없으신가요?
                        <button className={styles.signCss2} onClick={onCreateSubmit}>가입하기</button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Auth;