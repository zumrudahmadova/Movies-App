import React from 'react';
import styles from './Registration.module.scss'

const Registration = () => {
    return (
        <div className={styles.container}>
            <button className={styles.login}>Login</button>
            <button className={styles.register}>Register</button>
        </div>
    );
};

export default Registration;