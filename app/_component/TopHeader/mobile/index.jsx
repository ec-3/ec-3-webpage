import React, {useState, useEffect, useRef} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {Dropdown, DropdownRef} from 'antd-mobile'
import Button from 'antd-mobile/es/components/button'
import BScroll from '@better-scroll/core'
import logo from '~/images/logo.png';
import more from '~/images/more.svg';
import './index.scss';
import {linkLocation} from '@/config.js';

const TopHeaderMobile = ({className = ''}) => {
    const scrollWrapperRef = useRef(null);
    const headerRef = useRef(null);
    const menuRef = useRef(null);
    useEffect(() => {
        setTimeout(() => {
            new BScroll(scrollWrapperRef.current, {
                bounce: false,
                startX: 0,
                click: true,
                scrollX: true,
                // 忽略竖直方向的滚动
                scrollY: false,
                // eventPassthrough: "vertical",
                probeType: 3
            });
        }, 300)
    }, []);

    return (
        <header className={`top-header ${className}`} ref={headerRef}>
            <h1 className="hide">Ec³</h1>
            <Link href="/" className="logo-link">
                <Image className="logo" alt="logo" src={logo} priority/>
            </Link>
            <div className="scroll-wrapper" ref={scrollWrapperRef}>
                <div className="content">
                    <Dropdown ref={menuRef} closeOnClickAway={true} getContainer={() => headerRef.current}>
                        <Dropdown.Item key='developers' title='DEVELOPERS'>
                            <div className="drop-down_menu">
                                <a className="drop-down_menu-item" href={linkLocation['Documents']} target="_blank">Documents</a>
                            </div>
                        </Dropdown.Item>
                    </Dropdown>
                    <Dropdown ref={menuRef} closeOnClickAway={true} getContainer={() => headerRef.current}>
                        <Dropdown.Item key='product' title='PRODUCT'>
                            <div className="drop-down_menu">
                                <a className="drop-down_menu-item" href={linkLocation['Ec³ cube']} target="_blank">Ec³ cube</a>
                                <a className="drop-down_menu-item" href={linkLocation['Staking']} target="_blank">Staking</a>
                                <a className="drop-down_menu-item" href={linkLocation['Staking']} target="_blank">Staking</a>
                            </div>
                        </Dropdown.Item>
                    </Dropdown>
                    <Dropdown ref={menuRef} closeOnClickAway={true} getContainer={() => headerRef.current}>
                        <Dropdown.Item key='community' title='COMMUNITY'>
                            <div className="drop-down_menu">
                                <a className="drop-down_menu-item" href={linkLocation['Discord']} target="_blank">Discord</a>
                                <a className="drop-down_menu-item" href={linkLocation['X']} target="_blank">X</a>
                                <a className="drop-down_menu-item" href={linkLocation['Telegram']} target="_blank">Telegram</a>
                            </div>
                        </Dropdown.Item>
                    </Dropdown>
                    <Dropdown ref={menuRef} closeOnClickAway={true} getContainer={() => headerRef.current}>
                        <Dropdown.Item key='contact' title='CONTACT'>
                            <div className="drop-down_menu">
                                <a className="drop-down_menu-item" href={linkLocation['support@Ec-3.io']} target="_blank">support@Ec-3.io</a>
                            </div>
                        </Dropdown.Item>
                    </Dropdown>
                </div>
            </div>

        </header>
    );
};

export default TopHeaderMobile;
