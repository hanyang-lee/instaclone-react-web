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
        <div className={styles.Logbox}>
            <div className={styles.Exitcreat}>
                <h1 className={classNames({[styles.NXVPg]: true, [styles.Szr5J]: true, [styles.coreSpriteLoggedOutWordmark]: true})}>Instagram</h1>
                <div className={styles.Exithead}>
                    <form className={styles.HmktE} onSubmit={onSignSubmit}>
                        <div className={classNames({[styles.qF0y9]: true, [styles.Igw0E]: true, [styles.IwRsH]: true, [styles.eGOV_]: true, [styles._4EzTm]: true, [styles.kEKum]: true})}>
                            <div className={styles.Blankbox}>
                                <div className={styles.InputBox}>
                                    <label className={classNames({[styles.f0n8F]:true, [styles.FATdn]: true})}>
                                        <span className={styles._9nyy2}>전화번호, 사용자 이름 또는 이메일</span>
                                        <input
                                        aria-label="전화번호, 사용자 이름 또는 이메일"
                                        aria-required="true"
                                        className={classNames({[styles._2hvTZ]: true, [styles.pexuQ]: true,[styles.zyHYP]: true})}
                                        autoCapitalize="off"
                                        autoCorrect="off"
                                        name="email"
                                        type="email"
                                        required
                                        value={email}
                                        onChange={onChange}
                                        />
                                    </label>
                                    <div className={styles.i24fI}></div>
                                </div>
                            </div>
                            <div className={styles.Blankbox}>
                                <div className={styles.InputBox}>
                                    <label className={classNames({[styles.f0n8F]:true, [styles.FATdn]: true})}>
                                        <span className={styles._9nyy2}>비밀번호</span>
                                        <input
                                        className={classNames({[styles._2hvTZ]: true, [styles.pexuQ]: true,[styles.zyHYP]: true})}
                                        name="password"
                                        type="password"
                                        required
                                        value={password}
                                        onChange={onChange}
                                        />
                                    </label>
                                    <div className={styles.i24fI}></div>
                                </div>
                            </div>
                            <div className={classNames({[styles.qF0y9]: true, [styles.Igw0E]: true, [styles.IwRsH]: true, [styles.eGOV_]: true, [styles._4EzTm]:true, [styles.bKEs3]: true, [styles.CovQj]: true, [styles.jKUp7]: true, [styles.DhRcB]: true})}>
                                <input className={classNames({[styles.sqdOP]: true, [styles.L3Nky]: true, [styles.y3zKF]: true})} type="submit" value="Log in"/>
                            </div>
                            <div className={classNames({[styles.K_1uj]:true, [styles.Z7p_S]: true})}>
                                <div className={styles.s311c}></div>
                                <div className={styles._0tv_g}>또는</div>
                                <div className={styles.s311c}></div>
                            </div>
                            <div className={classNames({[styles.qF0y9]: true, [styles.Igw0E]: true, [styles.IwRsH]: true, [styles.eGOV_]: true, [styles._4EzTm]:true, [styles.bKEs3]: true, [styles.CovQj]: true, [styles.jKUp7]: true, [styles.DhRcB]: true})}>
                                <button className={classNames({[styles.sqdOP]: true, [styles.yWX7d]: true, [styles.y3zKF]: true})} onClick={onGoogleClick}>
                                    <span className={classNames({[styles.coreSpriteFacebookIcon]: true, [styles.AeB99]: true})}></span>
                                    <span className={styles.KPnG0}>Facebook으로 로그인</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className={styles.gr27e}>
                <div className={classNames({[styles._7UhW9]: true, [styles.xLCgt]: true, [styles.MMzan]: true, [styles._0PwGv]: true, [styles.uL8Hv]: true})}>
                    <p className={styles.izU2O}>계정이 없으신가요? 
                        <button className={classNames({[styles._7UhW9]: true, [styles.xLCgt]: true, [styles.qyrsm]: true, [styles.gtFbE]: true, [styles.se6yk]: true, [styles.Bline]: true})} onClick={onCreateSubmit}>가입하기</button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Auth;