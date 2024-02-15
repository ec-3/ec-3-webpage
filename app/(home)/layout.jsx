'use client'
import React from 'react';
import HomeLayoutPC from './homeLayoutPC.jsx';
import HomeLayoutMobile from './homeLayoutMobile.jsx';
import {isMobileFunc} from '@/_utils/cientCheck.js'

export default function HomeLayout({children}) {
    const isMobile = isMobileFunc();
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


