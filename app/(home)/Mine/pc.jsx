import React, { useState, useRef} from 'react';
import Image from 'next/image';
import {Button, Modal, Carousel, Image as ImageAntD} from 'antd';
import useCountdown from '@/_hooks/useCountdown.js';

const MinePC = ({className = 'mine'}) => {
    const wrapperRef = useRef(null);
    // 预售对话框
    const [preSaleDialogVisible, setPreSaleDialogVisible] = useState(false);
    const [time, formatTime] = useCountdown();

    return (
        <>
        <section className={className} ref={wrapperRef}>
            <div className="inner">
                <h2 className="main-title"><strong>mine</strong> with distributed energy storage</h2>
                <p className="sub-title">
                    Ec³ (Energy Cube) is dedicated to creating a DePIN network based on distributed energy interaction, designed to collect data from all discharging devices.
                </p>
                <div className="image-text">
                    <div className="card-wrapper">
                        <div className="card">
                            <div className="avatar"><i className="icon icon-security"></i></div>
                            <div className="content">
                                <h3 className="title">Blockchain Security Navigator</h3>
                                <p className="text">Enabling discharging to be recorded on the blockchain without human intervention, ensuring unparalleled protection of safety and privacy.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="avatar"><i className="icon icon-verificat"></i></div>
                            <div className="content">
                                <h3 className="title">Identity Verification Evolution</h3>
                                <p className="text">SSMI module ensures authentic and reliable transactions in clean energy, marking a true evolution in identity authentication.</p>
                            </div>
                        </div>
                    </div>
                    <div className={`image-wrapper ${time > 0 ? 'pre-sale' : ''}`}>
                        <Carousel className="carousel" autoplay dots={true}>
                            <div className="carousel-item">
                                <ImageAntD src="/images/home/mine/cube-ec3.png"/>
                            </div>
                            <div className="carousel-item">
                                <ImageAntD src="/images/home/mine/cube-detail.png"/>
                            </div>
                        </Carousel>
                        <Button onClick={() => setPreSaleDialogVisible(true)}>Pre-Sale : <label>{formatTime}</label></Button>
                    </div>
                </div>
            </div>
        </section>
        <Modal
            className="pre-sale__dialog"
            centered={true}
            closable={true}
            destroyOnClose={true}
            footer={false}
            maskClosable={true}
            maskStyle={{'backgroundColor': 'rgba(0, 0, 0, 0)'}}
            getContainer={() => wrapperRef.current}
            open={preSaleDialogVisible}
            onOk={() => {}}
            onCancel={() => setPreSaleDialogVisible(false)}
        >
            <div className="dialog-content">
                <Image className="bg bg-1" src="/images/home/mine/pre-sale/bg-1.svg" width={163} height={184} alt="bg-1" />
                <Image className="bg bg-2" src="/images/home/mine/pre-sale/bg-2.svg" width={86} height={120} alt="bg-2" />
                <div className="dialog-inner">
                    <h2 className="main-title">Ec³ Cube Pre-sale</h2>
                    <h3 className="sub-title">
                        Catch rays and crypto, all from the comfort of your home.
                        The Ec³ Cube: Because your energy bill owes you one!
                    </h3>
                    <Image className="cube-img" src="/images/home/mine/cube-ec3.png" width={260} height={265} alt="cube-ec3" />
                    <div className="icon-wrapper">
                        <div className="column column-color__green">
                            <i className="icon icon-app"></i>
                            <span className="text">Ec³ APP</span>
                        </div>
                        <div className="column column-color__cyan">
                            <i className="icon icon-energy"></i>
                            <span className="text">storage battery</span>
                        </div>
                        <div className="column column-color__purple">
                            <i className="icon icon-network"></i>
                            <span className="text">peaq network</span>
                        </div>
                    </div>
                    <div className="btn-group">
                        <Button className="order-btn" type="primary" href="/mall">
                            Order Now
                            <i className="icon icon-ur-arrow"></i>
                        </Button>
                    </div>
                </div>
            </div>
        </Modal>
        </>
    );
};


export default MinePC;
