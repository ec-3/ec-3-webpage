import Image from 'next/image';
import {Button, Popconfirm} from 'antd';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const EcosystemPC = ({className = 'ecosystem-wrapper'}) => {
    return (
        <section className={className}>
            <div className="ecosystem">
                <div className="inner">
                    <h2 className="main-title">ECOSYSTEM</h2>
                    <h3 className="sub-title">Engage, earn, connect – shaping our shared energy future together.</h3>
                    <div className="btn-wrapper">
                        <Popconfirm
                            rootClassName="coming-soon pc"
                            title="Coming Soon"
                            description="This feature is currently under development and will be launched soon."
                            okText="Cancel"
                            okType="default"
                        >
                            <Button type="primary"
                                    // href="http://www.baidu.com"
                                    target="_blank">Get Whitelisted</Button>
                        </Popconfirm>
                    </div>
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        loop={true}
                        speed={1000}
                    >
                        <SwiperSlide>
                            <div className="carousel-item">
                                <div className="carousel-logo">
                                    <Image className="uhome-img" width={160} height={186} src="/images/home/ecosystem/uhome.png" alt="UHome" />
                                    <Image className="uhome-text" width={160} height={40} src="/images/home/ecosystem/uhome-text.png" alt="UHome" />
                                </div>
                                <div className="carousel-content">
                                    <i className="icon icon-quotation"></i>
                                    <p className="carousel-text">Uhome focuses on manufacturing lithium-ion batteries for residential and small-scale energy storage systems, offering adaptable solutions for independent micro-grids by integrating energy storage and management systems.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="carousel-item">
                                <div className="carousel-logo">
                                    <Image className="uhome-img" width={160} height={186} src="/images/home/ecosystem/uhome.png" alt="UHome" />
                                    <Image className="uhome-text" width={160} height={40} src="/images/home/ecosystem/uhome-text.png" alt="UHome" />
                                </div>
                                <div className="carousel-content">
                                    <i className="icon icon-quotation"></i>
                                    <p className="carousel-text">Uhome focuses on manufacturing lithium-ion batteries for residential and small-scale energy storage systems, offering adaptable solutions for independent micro-grids by integrating energy storage and management systems.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default EcosystemPC;
