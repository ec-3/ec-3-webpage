'use client'
import React from 'react';
import { ConfigProvider } from 'antd';
import theme from '@/_theme/greenTheme.js';
import RootLayoutPC from '@/rootLayoutPC.jsx';
import TopHeader from '@/_component/TopHeader/pc';
import BottomFooter from '@/_component/BottomFooter/pc.jsx';
import 'animate.css';

export default function HomeLayoutPC({children}) {
    return (
        <RootLayoutPC>
            <ConfigProvider theme={theme}>
                <TopHeader className="pc" />
                {children}
                <BottomFooter className="pc" />
            </ConfigProvider>
        </RootLayoutPC>
    );
};
