import React, {useState} from 'react';
import Logo from "./Logo/Logo";
import styles from './Header.module.scss'
import Search from "./Search/Search";
import Registration from "./Registration/Registration";
import {MenuOutlined} from "@ant-design/icons";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prevIsOpen => !prevIsOpen);
    };

    return (
        <div className={styles.header}>
            <Logo/>
            <div onClick={toggleMenu}>
                <MenuOutlined className={styles.icon}/>
            </div>
            {
                !isOpen && <div className={styles.container}>
                    <Search/>
                    <Registration/>
                </div>
            }
        </div>

    );
};

export default Header;