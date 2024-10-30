'use client'
import styles from "./hero.module.scss";


export default function Hero() {
    return (
        <section className={styles.hero_comtainer}>
            <div className={styles.content_wrapper}>
                <div className={styles.title_wrapper}>
                    <h1>Awaken continuous learning, anywhere and <br/><span className={styles.highlighted_part_of_title}>anytime.</span></h1>
                </div>
                <div className={styles.description_wrapper} >
                    <p className={styles.description}>Awaken continuous learning, everywhere and always. Discover new perspectives and knowledge at every moment that feed your thirst for learning and evolving.</p>
                </div>
                <div className={styles.cta_link_wrapper}>
                    <a className={styles.cta_link} href="#">Try for free</a>
                </div>
            </div>
        </section>
    );
}