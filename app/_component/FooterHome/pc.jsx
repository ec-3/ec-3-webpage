'use client'
import React from 'react';
import {Button, Input, Popconfirm} from 'antd';
import useScrollAnimate from '@/_hooks/useScrollAnimate.js'
import allLinksFunc from "./allLinks.js";
import {linkLocation} from '@/config.js'

import './pc.scss';

const FooterHomePC = ({className = '', isHomePage = true, isMallPage = false}) => {
    const scrollRef = useScrollAnimate({offset: 200});

    const allLinks = allLinksFunc(isHomePage);

    return (
        <footer className={`footer-home ${className} ${isMallPage && 'light-bg'}`}>
            <div className="inner">
                <div className="contact-us" ref={scrollRef}>
                    <div className="title animate__animated animate__slower" data-animate="animate__fadeInUp">
                        Get in touch with us
                        <span>support@Ec-3.io</span>
                    </div>
                    <Button type="primary" href={linkLocation['support@Ec-3.io']}>Send Email</Button>
                </div>
                <div className="grid-row">
                    {allLinks.map(({title, links}, key) => (
                        <div className="grid-col" key={key}>
                            <div className="grid-col__title">{title}</div>
                            <div className="grid-col-content">
                                {links.map((link, index) => (
                                    (['Download Ec³ App'].includes(link.name)) ?
                                        <Popconfirm
                                            rootClassName="coming-soon pc"
                                            title="Coming Soon"
                                            description="This feature is currently under development and will be launched soon."
                                            okText="Cancel"
                                            okType="default"
                                            key={index}
                                        >
                                            <a className="grid-col-link">{link.name}</a>
                                        </Popconfirm>
                                        :
                                        <a
                                            href={link.href}
                                            target={link.target}
                                            className="grid-col-link"
                                            key={index}
                                        >{link.name}</a>

                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <p className="copyright">Copyright © Ec³- Images used for demonstration purpose only (
                    <a className="link">Licenses</a>
                    )
                </p>
            </div>
        </footer>
    );
};

export default FooterHomePC;
