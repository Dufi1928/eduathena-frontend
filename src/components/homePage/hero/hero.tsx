'use client'
import styles from "./hero.module.scss";
import Image from 'next/image';
import LeftSvg from "../../../assets/images/herosection/left_svg.svg" ;
import RightSvg from "../../../assets/images/herosection/right_svg.svg" ;
import LeftHend from "../../../assets/images/herosection/left_hend.png" ;
import RightHend from "../../../assets/images/herosection/right_hend.png" ;
import Lamp from "../../../assets/images/herosection/lamp.png" ;
import Link from 'next/link';


export default function Hero() {
    return (
        <section className={styles.hero_comtainer}>
            <div className={styles.left_line}>
                <Image src={LeftSvg} alt="Decoration line"/>
            </div>
            <div className={styles.right_line}>
                <Image src={RightSvg} alt="Decoration line"/>
            </div>

            <div className={styles.left_hend}>
                <Image src={LeftHend} alt="Hand"/>
            </div>
            <div className={styles.right_hend}>
                <Image src={RightHend} alt="Hand"/>
            </div>
            <div className={styles.lamp}>
                <Image src={Lamp} alt="lamp" />
            </div>
            <div className={styles.lamp1}>
                <Image src={Lamp} alt="lamp"/>
            </div>

            <div className={styles.content_wrapper}>
                <div className={styles.title_wrapper}>
                    <h1>Awaken continuous learning, anywhere and <br/><span
                        className={styles.highlighted_part_of_title}>anytime.</span></h1>
                </div>
                <div className={styles.description_wrapper}>
                    <p className={styles.description}>Awaken continuous learning, everywhere and always. Discover new
                        perspectives and knowledge at every moment that feed your thirst for learning and evolving.</p>
                </div>
                <div className={styles.cta_link_wrapper}>
                    <Link href="/" className={styles.cta_link} passHref>Try for free</Link>
                </div>
            </div>
        </section>
    );
}