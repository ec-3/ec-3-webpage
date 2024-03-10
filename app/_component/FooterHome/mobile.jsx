'use client'
import React, {useState, useRef, useMemo} from 'react';
import Link from 'next/link';
import {Button, Collapse, Modal} from 'antd-mobile';
import './mobile.scss';
import useScrollAnimate from '@/_hooks/useScrollAnimate.js'
import allLinksFunc from "./allLinks.js";
import {linkLocation} from "@/config";

const BottomFooter = ({className = '', isHomePage = true}) => {
    const [emailBody, setEmailBody] = useState('');
    const scrollRef = useScrollAnimate({offset: 200});

    const allLinks = allLinksFunc(isHomePage);

    const modalMsg = function (linkName) {
        if (linkName === 'Shopping Car') {
            return {
                title: 'Tip',
                content: 'Please open it on your computer.',
            };
        }
        return {
            title: 'Coming Soon',
            content: 'This feature is currently under development and will be launched soon.',
        };
    };

    const hrefLink = useMemo(() => {
        const subject = encodeURIComponent('Customer letters from Ec3 website');
        const body = encodeURIComponent(emailBody);
        return `${linkLocation['support@Ec-3.io']}?subject=${subject}&body=${body}`;
    }, [emailBody]);

    return (
        <footer className={`bottom-footer ${className}`}>
            <div className="inner">
                <div className="contact-us" ref={scrollRef}>
                    <div className="mail-form">
                        <label className="text animate__animated animate__slower" data-animate="animate__flipInY">Get in touch with us</label>
                        <div className="content animate__animated" data-animate="animate__fadeInLeft">
                            <div className="email-field">
                                <input
                                    type="text"
                                    required
                                    value={emailBody}
                                    onChange={e => setEmailBody(e.target.value)}
                                    placeholder="Enter your email body" autoComplete="off"/>
                            </div>
                            <a className="adm-button adm-button-success adm-button-shape-default"
                               href={hrefLink}>Send Email</a>
                        </div>
                    </div>
                </div>
                <Collapse accordion>
                    {allLinks.map(({title, links}, key) => (
                        <Collapse.Panel key={key} title={title}>
                            {links.map((link, index) => (
                                (['Download Ec³ App', 'Shopping Car'].includes(link.name)) ?
                                    <a
                                        className="link"
                                        key={index}
                                        onClick={() => {
                                            Modal.show({
                                                title: modalMsg(link.name).title,
                                                content: modalMsg(link.name).content,
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
                                        }}
                                    >{link.name}</a>
                                    :
                                    <Link
                                        prefetch
                                        href={link.href}
                                        target={link.target}
                                        className="link"
                                        key={index}
                                    >{link.name}</Link>
                            ))}
                        </Collapse.Panel>
                    ))}
                </Collapse>
                <p className="copyright">Copyright © Ec³- Images used for demonstration purpose only (
                    <a className="link">Licenses</a>
                    )
                </p>
            </div>
        </footer>
    );
};

export default BottomFooter;
