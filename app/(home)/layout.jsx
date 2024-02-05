import React from 'react';
import { ConfigProvider } from 'antd';
import theme from '@/_theme/greenTheme.js';
import TopHeader from '@/_component/TopHeader/index.jsx';
import BottomFooter from '@/_component/BottomFooter/index.jsx';
import 'animate.css';

export default function HomeLayout({children}) {
    return (
        <ConfigProvider theme={theme}>
            <TopHeader />
            {children}
            <BottomFooter />
        </ConfigProvider>
    );
};
