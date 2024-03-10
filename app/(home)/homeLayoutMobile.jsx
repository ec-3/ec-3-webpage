'use client'
import React from 'react';
import RootLayoutMoble from '@/rootLayoutMobile.jsx';
import HeaderHome from '@/_component/HeaderHome/mobile';
import FooterHome from '@/_component/FooterHome/mobile.jsx';
import 'animate.css';
import 'antd-mobile/es/global';
import '@/_theme/theme-mobile-blue.scss';

export default function HomeLayoutMobile({children}) {
    return (
        <RootLayoutMoble>
            <HeaderHome className="mobile" />
            {children}
            <FooterHome className="mobile" isHomePage={true} />
        </RootLayoutMoble>
    );
};
