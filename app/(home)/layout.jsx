'use client'
import React from 'react';
import HomeLayoutPC from './homeLayoutPC.jsx';
import HomeLayoutMobile from './homeLayoutMobile.jsx';
import useCientCheck from '@/_hooks/useCientCheck';

export default function HomeLayout({children}) {
    const isMobile = useCientCheck();
    if (isMobile == null) {
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
            <body style={{height: '100%', backgroundColor: '#060606'}}>
            {children}
            </body>
            </html>
        );
    } else if (isMobile) {
        return (
            <HomeLayoutMobile>
                {children}
            </HomeLayoutMobile>
        );
    } else {
        return (
            <HomeLayoutPC>
                {children}
            </HomeLayoutPC>
        );
    }
}


