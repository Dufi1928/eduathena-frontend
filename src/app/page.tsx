'use client'
import "./globals.scss";
import styles from "./page.module.scss";
import Header from "../components/header/header";
import LeftSvg from "../assets/images/herosection/left_svg.svg" ;
import Image from "next/image";


export default function Home() {

    return (
        <>
            <Header />
            <main className={styles.main}>
                <section className={styles.hero_section}>
                    <div className={styles.inner_left}>
                        <Image src={LeftSvg} alt="Decoration line"/>
                    </div>
                    <div className={styles.hero_section_inner}>
                        <h1 className={styles.title}>
                            Awaken continuous <br/>learning, anywhere and <br/><span
                            className={styles.surrounded}>anytime.</span>
                        </h1>
                        <p className={styles.content}>
                            Awaken continuous learning, everywhere and always. Discover new <br/> perspectives and
                            knowledge at every moment that feed your thirst for <br/> learning and evolving.
                        </p>
                        <button className={styles.cta}>
                            Try for free
                        </button>
                    </div>
                    <div className={styles.inner_right}></div>
                </section>
            </main>
        </>
    );
}
