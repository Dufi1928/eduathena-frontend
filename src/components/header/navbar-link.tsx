'use client'
import Link from "next/link";
import navbarLinkStyles from "./navbar-link.module.scss";
import React from "react";

interface NavbarLinkProps {
    text: string;
    href: string;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ text, href }) => {
    return (
        <Link className={navbarLinkStyles.link} href={href}>
            {text}
        </Link>
    );
};

export default NavbarLink;