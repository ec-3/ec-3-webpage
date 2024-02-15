import Image from 'next/image';
import {Button, Carousel} from 'antd';

const EcosystemPC = ({className = 'ecosystem-wrapper'}) => {
    return (
        <div className={className}>
            <div className="ecosystem">
                <div className="inner">
                    <h2 className="main-title">ECOSYSTEM</h2>
                    <h3 className="sub-title">Engage, earn, connect – shaping our shared energy future together.</h3>
                    <div className="btn-wrapper">
                        <Button type="primary" href="http://www.baidu.com" target="_blank">Get Whitelisted</Button>
                    </div>
                    <Carousel autoplay dots={false}>
                        <div className="carousel-item">
                            <div className="carousel-logo">
                                <Image className="uhome-img" width={160} height={186} src="/images/ecosystem/uhome.png" alt="UHome" />
                                <Image className="uhome-text" width={160} height={40} src="/images/ecosystem/uhome-text.png" alt="UHome" />
                            </div>
                            <div className="carousel-content">
                                <Image className="quote-img" width={40} height={36} src="/images/carousel/quote.svg" alt="quote" />
                                <p className="carousel-text">Uhome focuses on manufacturing lithium-ion batteries for residential and small-scale energy storage systems, offering adaptable solutions for independent micro-grids by integrating energy storage and management systems.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="carousel-logo">
                                <Image className="uhome-img" width={160} height={186} src="/images/ecosystem/uhome.png" alt="UHome" />
                                <Image className="uhome-text" width={160} height={40} src="/images/ecosystem/uhome-text.png" alt="UHome" />
                            </div>
                            <div className="carousel-content">
                                <Image className="quote-img" width={40} height={36} src="/images/carousel/quote.svg" alt="quote" />
                                <p className="carousel-text">Uhome focuses on manufacturing lithium-ion batteries for residential and small-scale energy storage systems, offering adaptable solutions for independent micro-grids by integrating energy storage and management systems.</p>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default EcosystemPC;
