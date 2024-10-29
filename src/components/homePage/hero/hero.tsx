'use client'
import styles from "./hero.module.scss";


export default function Hero() {
    return (
        <div className={styles.heroComtainer}>
            <div className={styles.contentWrapper}>
                <div className={styles.titleWrapper}>
                    <h1>Awaken continuous learning, anywhere and <span className={styles.highlightedPartOfTitle}>anytime.</span></h1>
                </div>
            </div>
        </div>
    );
}