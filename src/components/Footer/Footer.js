import {Link} from 'react-router-dom';
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.links}>
            <div className={styles.linksBloks}>
                <div>
                    <div className={styles.title}>Contact with us</div>
                    <div className={styles.linksPart}>
                        <Link className={styles.link} to='/f'>+994 50 500 50 50</Link>
                        <Link className={styles.link} to='/f'>+994 12 111 11 11</Link>
                        <Link className={styles.link} to='/f'>infoamchamcsr@gmail.com</Link>
                        <Link className={styles.link} to='/f'>VAT: 319656475 Company no.11843590 Registered in England &
                            Wales</Link>
                    </div>
                </div>
            </div>
            <div className={styles.linksBloks}>
                <div>
                    <div className={styles.title}>About us</div>
                    <div className={styles.linksPart}>
                        <Link className={styles.link} to='/f'>About AmCham CSR Platform</Link>
                        <Link className={styles.link} to='/f'>Our team</Link>
                    </div>
                </div>
            </div>
            <div className={styles.linksBloks}>
                <div>
                    <div className={styles.title}>Discover</div>
                    <div className={styles.linksPart}>
                        <Link className={styles.link} to='/f'>Projects</Link>
                        <Link className={styles.link} to='/f'>Contributors</Link>
                    </div>
                </div>
            </div>
            <div className={styles.linksBloks}>
                <div>
                    <div className={styles.title}>Other links</div>
                    <div className={styles.linksPart}>
                        <Link className={styles.link} to='/f'>News</Link>
                        <Link className={styles.link} to='/f'>Partners</Link>
                        <Link className={styles.link} to='/f'>Video tutorial</Link>
                        <Link className={styles.link} to='/f'>AmCham website</Link>
                    </div>
                </div>
            </div>
            <div className={styles.linksBloks}>
                <div>
                    <div className={styles.title}>Policies</div>
                    <div className={styles.linksPart}>
                        <Link className={styles.link} to='/f'>Community guidlines</Link>
                        <Link className={styles.link} to='/f'>Terms of use</Link>
                        <Link className={styles.link} to='/f'>Privacy Policy</Link>
                        <Link className={styles.link} to='/f'>Legal</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;