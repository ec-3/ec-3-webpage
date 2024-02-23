import React, { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import {Button} from 'antd';
import useScrollAnimate from '@/_hooks/useScrollAnimate.js'
import avatar1 from '~/images/mine/avatar-1.svg';
import avatar2 from '~/images/mine/avatar-2.svg';
import energyStorageImg from '~/images/mine/energy-storage.svg';

const START_TIME = new Date('2024-03-01 00:00:00').getTime();
const duration = parseInt((START_TIME - Date.now()) / 1000);
const MinePC = ({className = 'mine'}) => {
    // 倒计时：秒
    const [time, setTime] = useState(duration);
    const scrollRef = useScrollAnimate({imgHalfHeight: 200});

    // 根据倒计时的秒，显示可视化的日期
    const formatTime = useMemo(() => {
        const days = (Math.floor(time / (60 * 60 * 24)) + '').padStart(2, '0');
        const hours = (Math.floor((time % (60 * 60 * 24)) / (60 * 60)) + '').padStart(2, '0');
        const minutes = (Math.floor((time % (60 * 60)) / 60) + '').padStart(2, '0');
        const seconds = (time % 60 + '').padStart(2, '0');
        return `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
    }, [time]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(curTime => curTime - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={className}>
            <div className="inner">
                <h2 className="main-title"><strong>mine</strong> with distributed energy storage</h2>
                <p className="sub-title">
                    Get our Ec³ 'Magic Cube' for an easy plug-and-play connection between your energy storage and solar panels.
                    Use green energy and earn ECT rewards too!
                </p>
                <div className="image-text" ref={scrollRef}>
                    <div className="card-wrapper">
                        <div className="card">
                            <div className="avatar">
                                <Image src={avatar1} alt="Icon" />
                            </div>
                            <div className="content">
                                <h3 className="title">Blockchain Security Navigator</h3>
                                <p className="text">Enabling charging and discharging to be recorded on the blockchain without human intervention, ensuring unparalleled protection of safety and privacy.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="avatar">
                                <Image src={avatar2} alt="Icon" />
                            </div>
                            <div className="content">
                                <h3 className="title">Identity Verification Evolution</h3>
                                <p className="text">SSMI module ensures authentic and reliable transactions in clean energy, marking a true evolution in identity authentication.</p>
                            </div>
                        </div>
                    </div>
                    <div className={`image-wrapper ${time > 0 ? 'pre-sale' : ''}`}>
                        <Image className="animate__animated" data-animate="animate__fadeInRight"
                               src={energyStorageImg} alt="Energy storage" />
                        <Button type="primary"
                            // href="http://www.baidu.com"
                                target="_blank">Pre-Sale : <label>{formatTime}</label></Button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default MinePC;
