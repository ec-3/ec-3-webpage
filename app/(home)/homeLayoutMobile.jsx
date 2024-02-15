'use client'
import React from 'react';
import RootLayoutMoble from '@/rootLayoutMobile.jsx';
import TopHeader from '@/_component/TopHeader/mobile';
import BottomFooter from '@/_component/BottomFooter/mobile.jsx';
import 'animate.css';
import 'antd-mobile/es/global';

export default function HomeLayoutMobile({children}) {
    return (
        <RootLayoutMoble>
            <TopHeader className="mobile" />
            {children}
            <BottomFooter className="mobile" />
        </RootLayoutMoble>
    );
};
