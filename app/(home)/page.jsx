'use client'
import React from 'react';
import {SpinLoading} from 'antd-mobile';

import BannerPC from './Banner/pc.jsx';
import BannerMobile from './Banner/mobile.jsx';
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

    if (isMobile == null) {
        return (
            <main style={{
                'display': 'flex',
                'alignItems': 'center',
                'justifyContent': 'center',
                'height': '100%',
                'backgroundColor': '#060606'
            }}>
                <SpinLoading style={{ '--color': '#5aeb46', '--size': '48px' }} />
            </main>
        );
    } else if (isMobile) {
        return (
            <main className={`main-mobile`}>
                <BannerMobile className="banner"/>
                <CarouselMobile className="carousel"/>
                <Innovative className="innovative-wrapper"/>
                <MineMobile className="mine"/>
                <AppStoreMobile className="app-store"/>
                <EctMobile className="ect"/>
                <EcosystemMobile className="ecosystem-wrapper"/>
            </main>
        );
    } else {
        return (
            <main className={`main-pc`}>
                <BannerPC className="banner"/>
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
