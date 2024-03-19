'use client'
import React from 'react';
import { ConfigProvider } from 'antd';
import RootLayoutPC from '@/rootLayoutPC.jsx';
import RootLayoutMoble from '@/rootLayoutMobile.jsx';
import HeadEc3 from '@/_component/HeadEc3.jsx';
import theme from '@/_theme/greenTheme.js';
import HeaderMall from "@/_component/HeaderMall";
import FooterHome from "@/_component/FooterHome/pc";
import useCientCheck from '@/_hooks/useCientCheck';

export default function MallLayout({children}) {
    const isMobile = useCientCheck();
    if (isMobile == null) {
        return (
            <html lang="en">
            <HeadEc3 isMobile={true} />
            <body style={{height: '100%', backgroundColor: '#060606'}}>
            {children}
            </body>
            </html>
        );
    } else if (isMobile) {
        return (
            <RootLayoutMoble>
                {children}
            </RootLayoutMoble>
        );
    } else {
        return (
            <RootLayoutPC>
                <ConfigProvider theme={theme}>
                    <HeaderMall className="pc" />
                    {children}
                    <FooterHome className="pc" isHomePage={false} isMallPage={true} />
                </ConfigProvider>
            </RootLayoutPC>
        );
    }
}


