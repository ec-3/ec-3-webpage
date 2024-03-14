import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Product = function ({className = 'product'}) {
    return (
        <section className={className}>
            <div className="fixed-center">
                <hgroup className="title-group">
                    <p className="remark">THE BLEND OF SIMPLICITY AND INNOVATION</p>
                    <h2 className="main-title">Welcome to EC cube <strong>– your reliable and friendly low-carbon
                        mining, connecting the most flexible distributed energy storage units – batteries, aimed at
                        empowering you to be a catalyst for energy transformation.</strong></h2>
                </hgroup>
                <div className="btn-group">
                    <a className="btn btn-white">PRE ORDER</a>
                </div>
                <div className="img-group">
                    <div className="img-wrapper">
                        <div className="img-box fixed-height">
                            <Image src="/images/mall/product/product-1.png" width={100} height={100} alt="product-1"/>
                        </div>
                    </div>
                    <div className="img-wrapper">
                        <div className="img-box">
                            <Image src="/images/mall/product/product-2.png" width={300} height={200} alt="product-2"/>
                        </div>
                    </div>
                    <div className="img-wrapper">
                        <div className="img-box fixed-height">
                            <Image src="/images/mall/product/product-3.png" width={100} height={100} alt="product-3"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;
