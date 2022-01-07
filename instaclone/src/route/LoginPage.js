import React from "react";
import Auth from "./Auth";
import styles from "./Create.module.css";

function LoginPage() {
    return (
        <main className={styles.main}>
            <div>
                <Auth />
            </div>
        </main>
    )
}

export default LoginPage;