import React, {useState, useEffect, useRef, useMemo} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {Dropdown, DropdownRef, Modal} from 'antd-mobile'
import BScroll from '@better-scroll/core'
import logo from '~/images/logo.png';
import './index.scss';
import {linkLocation} from '@/config.js';

let scroll = null;
const TopHeaderMobile = ({className = ''}) => {
    const scrollWrapperRef = useRef(null);
    const contentRef = useRef(null);
    const headerRef = useRef(null);
    const menuRef = useRef(null);
    const [scrollX, setScrollX] = useState(0);
    const [scrollClientWidth, setScrollClientWidth] = useState(0);
    const [contentClientWidth, setContentClientWidth] = useState(0);

    // 是否存在滑动
    const isSlide = useMemo(() => {
        return scrollClientWidth < contentClientWidth
    }, [scrollClientWidth, contentClientWidth]);

    useEffect(() => {
        setTimeout(() => {
            if (!scroll) {
                scroll = new BScroll(scrollWrapperRef.current, {
                    bounce: false,
                    startX: 0,
                    click: true,
                    scrollX: true,
                    // 忽略竖直方向的滚动
                    scrollY: false,
                    // eventPassthrough: "vertical",
                    probeType: 3
                })
                scroll.on('scroll', pos => {
                    setScrollX(-pos.x);
                })
            } else {
                scroll.refresh();
            }
            setScrollClientWidth(scrollWrapperRef.current.clientWidth);
            setContentClientWidth(contentRef.current.clientWidth);
        }, 300)
    }, []);

    const commingSoonHandle = () => {
        Modal.show({
            title: 'Coming Soon',
            content: 'This feature is currently under development and will be launched soon.',
            closeOnAction: true,
            closeOnMaskClick: true,
            maskClassName: 'coming-soon__mask mobile',
            actions: [
                {
                    key: 'confirm',
                    text: 'I Know',
                },
            ],
        })
    };

    return (
        <header className={`top-header ${className}`} ref={headerRef}>
            <h1 className="hide">Ec³</h1>
            <Link href="/" className="logo-link">
                <Image className="logo" alt="logo" src={logo} priority/>
            </Link>
            <div className="wrapper">
                {
                    isSlide && (
                        <>
                            {
                                (scrollX > 0) && <i className="icon icon-arrow-left"></i>
                            }
                            {
                                (scrollX < contentClientWidth - scrollClientWidth) && <i className="icon icon-arrow-right"></i>
                            }
                        </>
                    )
                }
                <div className="scroll-wrapper" ref={scrollWrapperRef}>
                    <div className="content" ref={contentRef}>
                        <Dropdown ref={menuRef} closeOnClickAway={true} getContainer={() => headerRef.current}>
                            <Dropdown.Item key='developers' title='DEVELOPERS'>
                                <div className="drop-down_menu">
                                    <a className="drop-down_menu-item" href={linkLocation['Documents']}>Documents</a>
                                </div>
                            </Dropdown.Item>
                        </Dropdown>
                        <Dropdown ref={menuRef} closeOnClickAway={true} getContainer={() => headerRef.current}>
                            <Dropdown.Item key='product' title='PRODUCT'>
                                <div className="drop-down_menu">
                                    <a className="drop-down_menu-item" onClick={commingSoonHandle}>Ec³ cube</a>
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
            </div>
        </header>
    );
};

export default TopHeaderMobile;
