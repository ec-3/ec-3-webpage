import React, { useRef} from 'react';
import Image from 'next/image';
import { Button, Modal, Swiper, Image as ImageAntD, ImageViewer  } from 'antd-mobile'
import useCountdown from '@/_hooks/useCountdown.js';

const PreSaleDialog = () => {
    return (
        <div className="dialog-content">
            <Image className="bg bg-1" src="/images/home/mine/pre-sale/bg-1.svg" width={0} height={0} alt="bg-1" />
            <Image className="bg bg-2" src="/images/home/mine/pre-sale/bg-2.svg" width={0} height={0} alt="bg-2" />
            <div className="dialog-inner">
                <h2 className="main-title">Ec³ Cube Pre-sale</h2>
                <h3 className="sub-title">
                    Catch rays and crypto, all from the comfort of your home.
                    The Ec³ Cube: Because your energy bill owes you one!
                </h3>
                <Image className="cube-img" src="/images/home/mine/cube-ec3.png" width={120} height={122} alt="cube-ec3" />
                <div className="icon-wrapper">
                    <div className="column column-color__green">
                        <i className="icon icon-app"></i>
                        <span className="text text-1">Ec³ APP</span>
                    </div>
                    <div className="column column-color__cyan">
                        <i className="icon icon-energy"></i>
                        <span className="text text-2">storage battery</span>
                    </div>
                    <div className="column column-color__purple">
                        <i className="icon icon-network"></i>
                        <span className="text text-3">peaq network</span>
                    </div>
                </div>
                <div className="btn-group">
                    <Button className="order-btn" color='success' fill='solid'
                            onClick={() => {
                                Modal.show({
                                    title: 'Tip',
                                    content: 'Please open it on your computer.',
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
                    >
                        Order Now
                        <i className="icon icon-ur-arrow"></i>
                    </Button>
                </div>
            </div>
        </div>
    );
};

const CarouselImage = ({src}) => {
    return (
        <ImageAntD src="/images/home/mine/cube-ec3.png" alt="Cube Ec3" />
    );
};

const MineMobile = ({className = 'mine'}) => {
    const wrapperRef = useRef(null);
    const [time, formatTime] = useCountdown();

    return (
        <>
        <div className={className} ref={wrapperRef}>
            <h2 className="main-title"><strong>mine</strong> with distributed energy storage</h2>
            <p className="sub-title">
                Ec³ (Energy Cube) is dedicated to creating a DePIN network based on distributed energy interaction, designed to collect data from all discharging devices.
            </p>
            <div className="image-text">
                <div className={`image-wrapper ${time > 0 ? 'pre-sale' : ''}`}>
                    <Swiper className="carousel" autoplay loop>
                        <Swiper.Item className="carousel-item" onClick={() => {
                            ImageViewer.show({
                                classNames: {
                                    mask: 'image-view__mask',
                                },
                                image: '/images/home/mine/cube-ec3.png',
                                getContainer: () => wrapperRef.current
                            })
                        }}>
                            <ImageAntD src="/images/home/mine/cube-ec3.png" alt="Cube Ec3" />
                        </Swiper.Item>
                        <Swiper.Item className="carousel-item" onClick={() => {
                            ImageViewer.show({
                                classNames: {
                                    mask: 'image-view__mask'
                                },
                                image: '/images/home/mine/cube-detail.png',
                                getContainer: () => wrapperRef.current
                            })
                        }}>
                            <ImageAntD src="/images/home/mine/cube-detail.png" alt="Cube Detail" />
                        </Swiper.Item>
                    </Swiper>
                    <Button onClick={() => {
                        Modal.show({
                            className: 'pre-sale__dialog',
                            content: <PreSaleDialog />,
                            closeOnMaskClick: true,
                            showCloseButton: true,
                            getContainer: () => wrapperRef.current,
                        })
                    }}>Pre-Sale : <label>{formatTime}</label></Button>
                </div>
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
            </div>
        </div>
        </>
    );
};

export default MineMobile;
