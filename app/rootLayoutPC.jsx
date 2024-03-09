import React from 'react';
import { ConfigProvider } from 'antd';
import theme from '@/_theme/blueTheme.js';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import "./_scss/index.scss";
import HeadEc3 from '@/_component/HeadEc3';
import { Analytics } from '@vercel/analytics/react';

export default function RootLayoutPC({children}) {
    return (
        <html lang="en">
        <HeadEc3 isMobile={false} />
        <ConfigProvider theme={theme}>
            <body><AntdRegistry>{children}<Analytics /></AntdRegistry></body>
        </ConfigProvider>
        </html>
    );
}
