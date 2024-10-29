'use client'
import {useState, useEffect, useRef } from "react";
import styles from "./header.module.scss";
import Image from 'next/image';
import NavbarLink from "./navbar-link";
import Person from "../../icons/person.svg";
import Burger from "../../icons/burger_menu.svg";
import Close from "../../icons/close.svg";


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const isMounted = useRef(false);
    const toggleMenu = ():void => {
        if (!loaded) setLoaded(true);
        setIsMenuOpen((prev) => !prev);
    };
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setLoaded(true);
        }
    }, []);


    useEffect(() => {
        if (isMounted.current) {
            if (isMenuOpen) {
                document.body.style.height = '100vh';
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.height = 'auto';
                document.body.style.overflow = '';
            }
        } else {
            isMounted.current = true;
        }
    }, [isMenuOpen]);


    return (
        <header className={styles.header}>
            <div className={styles.mibile_header} >
                <div className={styles.menuIcon} onClick={toggleMenu}>
                    {isMenuOpen ?
                        <Image src={Close} alt="Menu" width={24} height={24}/>
                        :
                        <Image src={Burger} alt="Menu" width={24} height={24}/>
                    }
                </div>
                <div className={styles.mobile_logo}>
                    EDUATHENA
                </div>
            </div>
            <nav className={`${styles.nav} ${loaded ? (isMenuOpen ? styles.show : '') : ''}`}>
                <div className={styles.left_side}>
                    <NavbarLink text="Demo" href="/"/>
                    <NavbarLink text="Info" href="/info"/>
                    <NavbarLink text="Blog" href="/blog"/>
                </div>
                <div className={styles.desktop_logo}>
                    EDUATHENA
                </div>
                <div className={styles.right_side}>
                    <NavbarLink text="Contact" href="/contact"/>
                    <button className={styles.signup_button}>
                        Sign Up
                    </button>
                    <div className={styles.user_icon}>
                        <Image src={Person} alt="User icon"/>
                    </div>
                </div>
            </nav>
        </header>
    );
}