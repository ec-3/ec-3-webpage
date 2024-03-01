import React from 'react';
import { ConfigProvider } from 'antd';
import theme from '@/_theme/blueTheme.js';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import "./_scss/index.scss";
import HeadEc3 from '@/_component/HeadEc3';
import { Analytics } from "@vercel/analytics/react"

export default function RootLayoutPC({children}) {
    return (
        <html lang="en">
        <head>
            <meta name="Keywords" content="Ec³,ec³,ec3,Ec3,Distributed energy network,Distributed Energy Storage,Web3,Carbon neutralization,Low-Carbon Lifestyle,Stable Grid,DID Technology,Blockchain" />
            <meta name="Description" content="Ec³ is a gateway for everyone to participate in carbon reduction, offering an opportunity for individuals to gain profits through carbon neutrality, undoubtedly expanding the development space of distributed energy storage." />
            <meta name="robots" content="index, follow" />
            <meta name="googlebot" content="index, follow" />
            <link rel="shortcut icon" href="/favicon.ico" />
            <title>Ec³</title>
        </head>
        <ConfigProvider theme={theme}>
            <body><AntdRegistry>{children}<Analytics /></AntdRegistry></body>
        </ConfigProvider>
        </html>
    );
}
