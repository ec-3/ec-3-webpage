'use client'
import React, {useState, useRef, useEffect} from 'react';
import BannerEc3 from './BannerEc3';
import CarouselEc3 from './CarouselEc3';
import InnovativeEc3 from './InnovativeEc3';
import MineEc3 from './MineEc3';
import AppStoreEc3 from './AppStoreEc3';
import EctEc3 from './EctEc3';
import EcosystemEc3 from './EcosystemEc3';

import './page.scss';

export default function Home() {

    return (
        <main className={`main`}>
            <BannerEc3 className="banner"/>
            <CarouselEc3 className="carousel"/>
            <InnovativeEc3 className="innovative-wrapper"/>
            <MineEc3 className="mine"/>
            <AppStoreEc3 className="app-store"/>
            <EctEc3 className="ect" />
            <EcosystemEc3 className="ecosystem-wrapper" />
        </main>
    );
}
