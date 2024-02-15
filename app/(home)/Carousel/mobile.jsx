import Image from 'next/image';
import { Swiper } from 'antd-mobile'
import carouselOneImg from '~/images/carousel/carousel-one.png';
import quoteImg from '~/images/carousel/quote.svg';

const CarouselMobile = ({className = 'carousel'}) => {
    return (
        <div className={className}>
            <Swiper autoplay loop>
                <Swiper.Item className="carousel-item">
                    <div className="carousel-logo">
                        <Image className="logo-img" src={carouselOneImg} alt="" priority></Image>
                    </div>
                    <div className="carousel-content">
                        <Image className="quote-img" src={quoteImg} alt="quote" />
                        <p className="carousel-text">Ec³ is a gateway for everyone to participate in carbon reduction, offering an opportunity for individuals to gain profits through carbon neutrality, undoubtedly expanding the development space of distributed energy storage.</p>
                        <Image className="quote-img reverse" src={quoteImg} alt="quote" />
                    </div>
                </Swiper.Item>
                <Swiper.Item className="carousel-item">
                    <div className="carousel-logo">
                        <Image className="logo-img" src={carouselOneImg} alt="" priority></Image>
                    </div>
                    <div className="carousel-content">
                        <Image className="quote-img" src={quoteImg} alt="quote" priority />
                        <p className="carousel-text">Ec³ is a gateway for everyone to participate in carbon reduction, offering an opportunity for individuals to gain profits through carbon neutrality, undoubtedly expanding the development space of distributed energy storage.</p>
                        <Image className="quote-img reverse" src={quoteImg} alt="quote" />
                    </div>
                </Swiper.Item>
            </Swiper>
        </div>
    );
};


export default CarouselMobile;
