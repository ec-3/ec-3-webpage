import React from 'react';
import { ConfigProvider } from 'antd';
import theme from '@/_theme/blueTheme.js';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import "./_scss/index.scss";
import HeaderEc3 from '@/_component/HeaderEc3';

export default function RootLayoutPC({children}) {
    return (
        <html lang="en">
        <HeaderEc3 isMobile={false} />
        <ConfigProvider theme={theme}>
            <body><AntdRegistry>{children}</AntdRegistry></body>
        </ConfigProvider>
        </html>
    );
}
