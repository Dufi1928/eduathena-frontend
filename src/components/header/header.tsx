// 'use client'
import { useState, useEffect, useRef } from "react";
import styles from "./header.module.scss";
import Image from 'next/image';
import NavbarLink from "./navbar-link";
import Person from "../../icons/person.svg";
import Burger from "../../icons/burger_menu.svg";
import Close from "../../icons/close.svg";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const headerRef = useRef(null);
    const lastScrollTop = useRef(0);

    const toggleMenu = () => {
        if (!loaded) setLoaded(true);
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.height = '100vh';
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.height = 'auto';
            document.body.style.overflow = '';
        }
    }, [isMenuOpen]);

    useEffect(() => {
        const delta = 5;

        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (Math.abs(scrollTop - lastScrollTop.current) <= delta) return;

            if (scrollTop > lastScrollTop.current && scrollTop > (headerRef.current?.offsetHeight || 0)) {
                // Défilement vers le bas
                setIsHeaderVisible(false);
            } else if (scrollTop + window.innerHeight < document.body.scrollHeight) {
                // Défilement vers le haut
                setIsHeaderVisible(true);
            }

            lastScrollTop.current = scrollTop;
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header ref={headerRef} className={`${styles.header} ${isHeaderVisible ? styles.visible : styles.hidden}`}>
            <div className={styles.mibile_header}>
                <div className={styles.menuIcon} onClick={toggleMenu}>
                    {isMenuOpen ?
                        <Image src={Close} alt="Menu" width={24} height={24} />
                        :
                        <Image src={Burger} alt="Menu" width={24} height={24} />
                    }
                </div>
                <div className={`${styles.logo} ${styles.mobile_logo}`}>
                    EDUATHENA
                </div>
            </div>
            <nav className={`${styles.nav} ${isMenuOpen ? styles.show : ''} ${loaded ? styles.hide : ''}`}>
                <div className={styles.left_side}>
                    <NavbarLink text="Demo" href="/" />
                    <NavbarLink text="Info" href="/info" />
                    <NavbarLink text="Blog" href="/blog" />
                </div>
                <div className={`${styles.logo} ${styles.desktop_logo}`}>
                    EDUATHENA
                </div>
                <div className={styles.right_side}>
                    <NavbarLink text="Contact" href="/contact"/>
                    <button className={styles.signup_button}>
                        Sign Up
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <div className={styles.user_icon}>
                        <Image src={Person} alt="User icon"/>
                    </div>
                </div>
            </nav>
        </header>
    );
}
