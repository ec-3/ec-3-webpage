'use client'
import React from 'react';

import Banner from './Banner';
import CarouselPC from './Carousel/pc.jsx';
import CarouselMobile from './Carousel/mobile.jsx';
import Innovative from './Innovative';
import MinePC from './Mine/pc.jsx';
import MineMobile from './Mine/mobile.jsx';
import AppStorePC from './AppStore/pc.jsx';
import AppStoreMobile from './AppStore/mobile.jsx';
import EctPC from './Ect/pc.jsx';
import EctMobile from './Ect/mobile.jsx';
import EcosystemPC from './Ecosystem/pc.jsx';
import EcosystemMobile from './Ecosystem/mobile.jsx';
import useCientCheck from '@/_hooks/useCientCheck';

import './pagePC.scss';
import './pageMobile.scss';
import '@/_theme/theme-mobile-blue.scss';

export default function Home() {
    const isMobile = useCientCheck();
    if (isMobile) {
        return (
            <main className={`main-mobile`}>
                <Banner className="banner"/>
                <CarouselMobile className="carousel"/>
                <Innovative className="innovative-wrapper"/>
                <MineMobile className="mine"/>
                <AppStoreMobile className="app-store"/>
                <EctMobile className="ect" />
                <EcosystemMobile className="ecosystem-wrapper" />
            </main>
        );
    } else {
        return (
            <main className={`main-pc`}>
                <Banner className="banner"/>
                <CarouselPC className="carousel"/>
                <Innovative className="innovative-wrapper"/>
                <MinePC className="mine"/>
                <AppStorePC className="app-store"/>
                <EctPC className="ect" />
                <EcosystemPC className="ecosystem-wrapper" />
            </main>
        );
    }
}
