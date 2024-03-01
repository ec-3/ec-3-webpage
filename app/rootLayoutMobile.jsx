import React, {useEffect} from 'react';
import { SafeArea } from 'antd-mobile'
import 'antd-mobile/es/global';
import "./_scss/index.scss";
import HeadEc3 from '@/_component/HeadEc3';
import { Analytics } from "@vercel/analytics/react"

export default function RootLayoutMoble({children}) {
    useEffect(() => {
        import('amfe-flexible');
    }, []);
    return (
        <html lang="en">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
            <meta name="Keywords" content="Ec³,ec³,ec3,Ec3,Distributed energy network,Distributed Energy Storage,Web3,Carbon neutralization,Low-Carbon Lifestyle,Stable Grid,DID Technology,Blockchain" />
            <meta name="Description" content="Ec³ is a gateway for everyone to participate in carbon reduction, offering an opportunity for individuals to gain profits through carbon neutrality, undoubtedly expanding the development space of distributed energy storage." />
            <meta name="robots" content="index, follow" />
            <meta name="googlebot" content="index, follow" />
            <link rel="shortcut icon" href="/favicon.ico" />
            <title>Ec³</title>
        </head>
        <body>
            <div style={{ background: '#060606' }}>
                <SafeArea position='top' />
            </div>
            {children}
            <div style={{ background: '#181a1d' }}>
                <SafeArea position='bottom' />
            </div>
            <Analytics />
        </body>
        </html>
    );
}
