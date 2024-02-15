'use client'
import React from 'react';
import HomeLayoutPC from './homeLayoutPC.jsx';
import HomeLayoutMobile from './homeLayoutMobile.jsx';
import useCientCheck from '@/_hooks/useCientCheck';

export default function HomeLayout({children}) {
    const isMobile = useCientCheck();
    if (isMobile) {
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


