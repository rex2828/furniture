import React from 'react'
import classes from './Login.module.css'
import Google from "../img/google.png";
import Github from "../img/github.png";
const Login = () => {


    const google = () => {
        window.open('http://localhost:8000/auth/google', '_self')
    }

    const github = () => {
        window.open('http://localhost:8000/auth/github', '_self')
    }

    return (
        <div className={classes.login}>
            <h1 className={classes.loginTitle}>Choose a Login Method</h1>
            <div className={classes.wrapper}>
                <div className={classes.left}>
                    <div className={classes.loginButton + ' ' + classes.google} onClick={google}>
                        <img src={Google} alt="" className={classes.icon} />
                        Google
                    </div>
                    <div className={classes.loginButton + ' ' + classes.github} onClick={github}>
                        <img src={Github} alt="" className={classes.icon} />
                        Github
                    </div>
                </div>
                <div className={classes.center}>
                    <div className={classes.line} />
                    <div className={classes.or}>OR</div>
                </div>
                <div className={classes.right}>
                    <input type="text" placeholder="Username" className={classes.inputField} />
                    <input type="text" placeholder="Password" className={classes.inputField} />
                    <button className={classes.submit}>Login</button>
                </div>
            </div>
        </div >
    )
}

export default Login