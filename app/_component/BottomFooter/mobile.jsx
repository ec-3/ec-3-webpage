'use client'
import React, {useState, useRef, useEffect} from 'react';
import Link from 'next/link';
import {Button, Collapse, Modal} from 'antd-mobile';
import './mobile.scss';
import useScrollAnimate from '@/_hooks/useScrollAnimate.js'
import allLinks from "./allLinks.js";

const BottomFooter = ({className = ''}) => {
    const [email, setEmail] = useState('');
    const emailInputRef = useRef(null);
    const scrollRef = useScrollAnimate({offset: 200});

    useEffect(() => {
        const _current = emailInputRef.current;
        if (_current) {
            if (email.trim() === '') {
                _current.setCustomValidity('Enter your email address .');
            } else if (!(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email))) {
                _current.setCustomValidity('The email address is illegal .');
            } else {
                _current.setCustomValidity('');
            }
        }
    }, [email]);

    return (
        <footer className={`bottom-footer ${className}`}>
            <div className="inner">
                <div className="contact-us" ref={scrollRef}>
                    <form className="mail-form" action={`mailto:${email}`} method="post" encType="text/plain">
                        <label className="text animate__animated animate__slower" data-animate="animate__flipInY">Get in touch with us</label>
                        <div className="content animate__animated" data-animate="animate__fadeInLeft">
                            <div className="email-field">
                                <input type="email" id="from" name="from" required
                                       ref={emailInputRef}
                                       value={email}
                                       onChange={e => setEmail(e.target.value)}
                                       placeholder="Enter your email address" autoComplete="off"/>
                            </div>
                            {/*<input type="hidden" id="subject" name="subject" value="Customer letters from Ec3 website"/>*/}
                            {/*<input type="hidden" id="body" name="body" value="" />*/}
                            <Button type="submit" color="success" fill="solid">Send Email</Button>
                        </div>
                    </form>
                </div>
                <Collapse accordion>
                    {allLinks.map(({title, links}, key) => (
                        <Collapse.Panel key={key} title={title}>
                            {links.map((link, index) => (
                                (['Download Ec³ App', 'Shopping Car', 'Developers', 'Mine', 'Tokenomic', 'FAQs', 'Product User Guide'].includes(link.name)) ?
                                    <a
                                        className="link"
                                        key={index}
                                        onClick={() => {
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
                                        }}
                                    >{link.name}</a>
                                    :
                                    <Link
                                        href={link.href}
                                        target="_blank"
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
