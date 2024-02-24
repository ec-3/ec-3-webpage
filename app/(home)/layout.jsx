'use client'
import React from 'react';
import HomeLayoutPC from './homeLayoutPC.jsx';
import HomeLayoutMobile from './homeLayoutMobile.jsx';
import useCientCheck from '@/_hooks/useCientCheck';
import HeadEc3 from '@/_component/HeadEc3';

export default function HomeLayout({children}) {
    const isMobile = useCientCheck();
    if (isMobile == null) {
        return (
            <html lang="en">
            <HeadEc3 isMobile={true} />
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


