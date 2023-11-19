import React from 'react';
import logo from '../../../asssets/images/logo.svg';
import styles from '../Header.module.scss';

const Logo = () => {
    return (
        <>
            <img src={logo} className={styles.logo}/>
        </>
    );
};

export default Logo;