'use client'
import "./globals.scss";
import styles from "./page.module.scss";
import Header from "../components/header/header";
import LeftSvg from "../assets/images/herosection/left_svg.svg" ;
import Image from "next/image";
import Hero from "../components/homePage/hero/hero";
import React from "react";


export default function Home() {

    return (
        <>
            <Header></Header>
            <Hero></Hero>
        </>
    );
}
