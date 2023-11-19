import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import styles from './SocialLinks.module.scss'

const SocialLinks = () => {
    return (
        <div className={styles.links}>
            <span> <i className="fa fa-facebook"></i></span>
            <span><i className="fa fa-instagram"></i></span>
            <span><i className="fa fa-linkedin"></i></span>
            <span><i className="fa fa-twitter"></i></span>
            <span><i className="fa fa-youtube-play"></i></span>
        </div>
    );
};

export default SocialLinks;