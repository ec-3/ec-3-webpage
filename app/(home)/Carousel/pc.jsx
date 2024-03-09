import Image from 'next/image';
import {Carousel} from 'antd';

const CarouselPC = ({className = 'carousel'}) => {
    return (
        <div className={className}>
            <Carousel autoplay dots={false}>
                <div className="carousel-item">
                    <div className="inner-wrapper">
                        <div className="inner">
                            <div className="carousel-logo"></div>
                            <div className="carousel-content">
                                <i className="icon icon-quotation"></i>
                                <p className="carousel-text">Ec³ is a gateway for everyone to participate in carbon reduction, offering an opportunity for individuals to gain profits through carbon neutrality, undoubtedly expanding the development space of distributed energy storage.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="inner-wrapper">
                        <div className="inner">
                            <div className="carousel-logo"></div>
                            <div className="carousel-content">
                                <i className="icon icon-quotation"></i>
                                <p className="carousel-text">Ec³ is a gateway for everyone to participate in carbon reduction, offering an opportunity for individuals to gain profits through carbon neutrality, undoubtedly expanding the development space of distributed energy storage.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};


export default CarouselPC;
