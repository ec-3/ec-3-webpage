import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import DevelopersMenu from "./DevelopersMenu.jsx";
import ProductMenu from './ProductMenu.jsx';
import CommunityMenu from './CommunityMenu.jsx';
import ContactMenu from './ContactMenu.jsx'
import logo from '~/images/logo.png';
import './index.scss';

const HeaderHomePC = ({className = ''}) => {
    return (
        <header className={`header-home ${className}`}>
            <h1 className="hide">Ec³</h1>
            <div className="inner">
                <Link href="/" className="logo-link">
                    <Image alt="logo" height={40} src={logo} priority  />
                </Link>
                <nav className="nav">
                    <DevelopersMenu />
                    <ProductMenu />
                    <CommunityMenu />
                    <ContactMenu />
                </nav>
            </div>
        </header>
    );
};

export default HeaderHomePC;
