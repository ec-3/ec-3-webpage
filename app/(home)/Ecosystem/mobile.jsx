import Image from 'next/image';
import { Swiper, Button, Modal } from 'antd-mobile'
import uhomeImg from '~/images/ecosystem/uhome.png';
import uhomeTextImg from '~/images/ecosystem/uhome-text.png';
import quoteImg from '~/images/carousel/quote.svg';

const EcosystemMobile = ({className = 'ecosystem-wrapper'}) => {
    return (
        <div className={className}>
            <div className="ecosystem">
                <div className="inner">
                    <h2 className="main-title">ECOSYSTEM</h2>
                    <h3 className="sub-title">Engage, earn, connect – shaping our shared energy future together.</h3>
                    <div className="btn-wrapper">
                        <Button color='success' fill='solid'
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
                                }}>Get Whitelisted</Button>
                    </div>
                    <Swiper autoplay loop>
                        <Swiper.Item className="carousel-item">
                            <div className="carousel-logo">
                                <Image className="uhome-img" src={uhomeImg} alt="UHome" />
                                <Image className="uhome-text" src={uhomeTextImg} alt="UHome" />
                            </div>
                            <div className="carousel-content">
                                <Image className="quote-img" src={quoteImg}alt="quote" />
                                <p className="carousel-text">Uhome focuses on manufacturing lithium-ion batteries for residential and small-scale energy storage systems, offering adaptable solutions for independent micro-grids by integrating energy storage and management systems.</p>
                                <Image className="quote-img reverse" src={quoteImg} alt="quote" />
                            </div>
                        </Swiper.Item>
                        <Swiper.Item className="carousel-item">
                            <div className="carousel-logo">
                                <Image className="uhome-img" src={uhomeImg} alt="UHome" />
                                <Image className="uhome-text" src={uhomeTextImg} alt="UHome" />
                            </div>
                            <div className="carousel-content">
                                <Image className="quote-img" src={quoteImg} alt="quote" />
                                <p className="carousel-text">Uhome focuses on manufacturing lithium-ion batteries for residential and small-scale energy storage systems, offering adaptable solutions for independent micro-grids by integrating energy storage and management systems.</p>
                                <Image className="quote-img reverse" src={quoteImg} alt="quote" />
                            </div>
                        </Swiper.Item>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default EcosystemMobile;
