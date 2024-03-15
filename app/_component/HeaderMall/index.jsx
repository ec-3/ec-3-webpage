'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {Popconfirm} from 'antd';
import {linkLocation} from '@/config.js'

import './index.scss';
import logo from '~/images/logo.png';

const HeaderMall = ({className = ''}) => {
    return (
        <header className={`header-mall ${className}`}>
            <h1 className="hide">Ec³</h1>
            <div className="inner">
                <div className="menu">
                    <Link className="menu-item" href="/" prefetch shallow>HOME</Link>
                    <Popconfirm
                        rootClassName="coming-soon pc"
                        title="Coming Soon"
                        description="This feature is currently under development and will be launched soon."
                        okText="Cancel"
                        okType="default"
                    >
                        <a className="menu-item">PRODUCT</a>
                    </Popconfirm>
                    <a className="menu-item" href={linkLocation['Staking']} target="_blank">STAKING</a>
                </div>
                <Link href="/" className="logo-link">
                    <Image alt="logo" height={40} src={logo} priority  />
                </Link>
                <div className="menu">
                    <Popconfirm
                        rootClassName="coming-soon pc"
                        title="Coming Soon"
                        description="This feature is currently under development and will be launched soon."
                        okText="Cancel"
                        okType="default"
                    >
                        <a className="menu-item">APP</a>
                    </Popconfirm>
                    <a className="menu-item" href={linkLocation['support@Ec-3.io']} target="_blank">SUPPORT</a>
                </div>
            </div>
        </header>
    );

};
export default HeaderMall;
