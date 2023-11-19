import React from 'react';
import Logo from "../Header/Logo/Logo";
import styles from './Subscribe.module.scss'

const Subscribe = () => {
    return (
        <div className={styles.container}>
            <Logo/>
            <h3 className={styles.title}>Stay with us</h3>
            <div className={styles.box}>
                <input placeholder={'Enter your email'} className={styles.input}/>
                <button className={styles.button}>Subscribe</button>
            </div>
        </div>
    );
};

export default Subscribe;