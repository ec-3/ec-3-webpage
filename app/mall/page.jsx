'use client'
import React from 'react';
import Banner from './Banner';
import Product from './Product';
import InstallGuide from './InstallGuide';
import DownloadApp from './DownloadApp';
import './page.scss';

export default function mall() {
    return (
        <main className="main">
            <Banner className="banner"/>
            <Product className="product"/>
            <InstallGuide className="install-guide" />
            <DownloadApp className="download-app" />
        </main>
    );
}
