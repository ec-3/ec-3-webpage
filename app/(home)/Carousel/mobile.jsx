import Image from 'next/image';
import { Swiper } from 'antd-mobile'
import carouselOneImg from '~/images/home/carousel/carousel-one.png';

const CarouselMobile = ({className = 'carousel'}) => {
    return (
        <section className={className}>
            <Swiper autoplay loop>
                <Swiper.Item className="carousel-item">
                    <div className="carousel-logo">
                        <Image className="logo-img" src="/images/home/carousel/carousel-one.png" width={300} height={83}
                               alt="" priority></Image>
                    </div>
                    <div className="carousel-content">
                        <i className="icon icon-quotation"></i>
                        <p className="carousel-text">Ec³ is a gateway for everyone to participate in carbon reduction, offering an opportunity for individuals to gain profits through carbon neutrality, undoubtedly expanding the development space of distributed energy storage.</p>
                        <i className="icon icon-quotation reverse"></i>
                    </div>
                </Swiper.Item>
                <Swiper.Item className="carousel-item">
                    <div className="carousel-logo">
                        <Image className="logo-img" src="/images/home/carousel/carousel-one.png" width={300} height={83}
                               alt="" priority></Image>
                    </div>
                    <div className="carousel-content">
                        <i className="icon icon-quotation"></i>
                        <p className="carousel-text">Ec³ is a gateway for everyone to participate in carbon reduction, offering an opportunity for individuals to gain profits through carbon neutrality, undoubtedly expanding the development space of distributed energy storage.</p>
                        <i className="icon icon-quotation reverse"></i>
                    </div>
                </Swiper.Item>
            </Swiper>
        </section>
    );
};


export default CarouselMobile;
