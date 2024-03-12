'use client'
import React from 'react';
import { ConfigProvider } from 'antd';
import theme from '@/_theme/greenTheme.js';
import RootLayoutPC from '@/rootLayoutPC.jsx';
import HeaderHome from '@/_component/HeaderHome/pc';
import FooterHome from '@/_component/FooterHome/pc.jsx';
import 'animate.css';

export default function HomeLayoutPC({children}) {
    return (
        <RootLayoutPC>
            <ConfigProvider theme={theme}>
                <HeaderHome className="pc" />
                {children}
                <FooterHome className="pc" isHomePage={true} isMallPage={false} />
            </ConfigProvider>
        </RootLayoutPC>
    );
};
