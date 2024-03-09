'use client'
import React from 'react';
import { ConfigProvider } from 'antd';
import RootLayoutPC from '@/rootLayoutPC.jsx';
import HeadEc3 from '@/_component/HeadEc3';
import theme from "@/_theme/greenTheme";
import TopHeader from "@/_component/TopHeader/pc";
import BottomFooter from "@/_component/BottomFooter/pc";

export default function HomeLayout({children}) {
    return (
        <RootLayoutPC>
            <ConfigProvider theme={theme}>
                <TopHeader className="pc" />
                {children}
                <BottomFooter className="pc" />
            </ConfigProvider>
        </RootLayoutPC>
    );
}


