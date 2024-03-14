import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const CarouselPC = ({className = 'carousel'}) => {
    return (
        <section className={className}>
            <div className="fixed-center">
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
                            <div className="inner">
                                <div className="carousel-logo"></div>
                                <div className="carousel-content">
                                    <i className="icon icon-quotation"></i>
                                    <p className="carousel-text">Ec³ is a gateway for everyone to participate in carbon reduction, offering an opportunity for individuals to gain profits through carbon neutrality, undoubtedly expanding the development space of distributed energy storage.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="carousel-item">
                            <div className="inner">
                                <div className="carousel-logo"></div>
                                <div className="carousel-content">
                                    <i className="icon icon-quotation"></i>
                                    <p className="carousel-text">Ec³ is a gateway for everyone to participate in carbon reduction, offering an opportunity for individuals to gain profits through carbon neutrality, undoubtedly expanding the development space of distributed energy storage.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};


export default CarouselPC;
