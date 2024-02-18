'use client'
import React, {useState, useRef, useEffect} from 'react';
import Link from 'next/link';
import {Button, Input, Popconfirm} from 'antd';
import './pc.scss';
import useScrollAnimate from '@/_hooks/useScrollAnimate.js'
import allLinks from "./allLinks.js";
import {linkLocation} from '@/config.js'


const BottomFooter = ({className = ''}) => {
    const [email, setEmail] = useState('');
    const emailInputRef = useRef(null);
    const scrollRef = useScrollAnimate({offset: 200});

    useEffect(() => {
        if (emailInputRef.current) {
            if (email.trim() === '') {
                emailInputRef.current.input.setCustomValidity('Enter your email address .');
            } else if (!(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email))) {
                emailInputRef.current.input.setCustomValidity('The email address is illegal .');
            } else {
                emailInputRef.current.input.setCustomValidity('');
            }
        }
    }, [email]);

    return (
        <footer className={`bottom-footer ${className}`}>
            <div className="inner">
                <div className="contact-us" ref={scrollRef}>
                    <div className="title animate__animated animate__slower" data-animate="animate__fadeInUp">
                        Get in touch with us
                        <span>support@Ec-3.io</span>
                    </div>
                    <Button type="primary" href={linkLocation['support@Ec-3.io']}>Send Email</Button>
                    {/*<form className="mail-form" action={`mailto:${email}`} method="post" encType="text/plain">*/}
                    {/*    <label className="text animate__animated animate__slower" data-animate="animate__fadeInUp">Get in touch with us</label>*/}
                    {/*    <div className="animate__animated" data-animate="animate__fadeInRight">*/}
                    {/*        <div className="email-field">*/}
                    {/*            <Input type="email" id="from" name="from" required*/}
                    {/*                   ref={emailInputRef}*/}
                    {/*                   value={email}*/}
                    {/*                   onChange={e => setEmail(e.target.value)}*/}
                    {/*                   placeholder="Enter your email address" autoComplete="off"/>*/}
                    {/*        </div>*/}
                    {/*        <input type="hidden" id="subject" name="subject" value="Customer letters from Ec3 website"/>*/}
                    {/*        <input type="hidden" id="body" name="body" value="" />*/}
                    {/*        <Button htmlType="submit" type="primary">Send Email</Button>*/}
                    {/*    </div>*/}
                    {/*</form>*/}
                </div>
                <div className="grid-row">
                    {allLinks.map(({title, links}, key) => (
                        <div className="grid-col" key={key}>
                            <div className="grid-col__title">{title}</div>
                            <div className="grid-col-content">
                                {links.map((link, index) => (
                                    (['Download Ec³ App', 'Shopping Car'].includes(link.name)) ?
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
                                        <Link
                                            href={link.href}
                                            target="_blank"
                                            className="grid-col-link"
                                            key={index}
                                        >{link.name}</Link>

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

export default BottomFooter;
