'use client'
import React from 'react';
import { ConfigProvider } from 'antd';
import RootLayoutPC from '@/rootLayoutPC.jsx';
import HeadEc3 from '@/_component/HeadEc3.jsx';
import theme from '@/_theme/greenTheme.js';
import HeaderMall from "@/_component/HeaderMall";
import FooterHome from "@/_component/FooterHome/pc";

export default function HomeLayout({children}) {
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


