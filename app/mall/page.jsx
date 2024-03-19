'use client'
import React, {useEffect} from 'react';
import {SpinLoading, Result } from 'antd-mobile';
import Banner from './Banner';
import Product from './Product';
import InstallGuide from './InstallGuide';
import DownloadApp from './DownloadApp';
import useCientCheck from '@/_hooks/useCientCheck';
import './page.scss';

export default function mall() {
    const isMobile = useCientCheck();

    if (isMobile == null) {
        return (
            <main style={{
                'display': 'flex',
                'alignItems': 'center',
                'justifyContent': 'center',
                'height': '100%',
                'backgroundColor': '#060606'
            }}>
                <SpinLoading style={{'--color': '#5aeb46', '--size': '48px'}}/>
            </main>
        );
    } else if (isMobile) {
        return (
            <main style={{
                'display': 'flex',
                'alignItems': 'center',
                'justifyContent': 'center',
                'height': '100%',
            }}>
                <Result
                    status='warning'
                    title='Warning'
                    description='Please open it on your computer.'
                />
            </main>
        );
    } else {
        return (
            <main className="main">
                <Banner className="banner"/>
                <Product className="product"/>
                <InstallGuide className="install-guide" />
                <DownloadApp className="download-app" />
            </main>
        );
    }

}
