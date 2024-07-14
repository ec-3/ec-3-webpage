import Image from 'next/image';
import Link from 'next/link';
import {Popconfirm} from 'antd';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const Product = function ({className = 'product'}) {
    return (
        <section className={className}>
            <div className="fixed-center">
                <hgroup className="title-group">
                    <p className="remark">THE BLEND OF SIMPLICITY AND INNOVATION</p>
                    <h2 className="main-title">Welcome to EC plug <strong>– Ec plug empowers users to efficiently manage their energy consumption, monitor electricity safety, seamlessly integrating into decentralized networks and rewarding sustainable practices for a brighter, greener future.</strong></h2>
                </hgroup>
                <div className="btn-group">
                    <Popconfirm
                        rootClassName="coming-soon pc"
                        title="Coming Soon"
                        description="The sales function has not yet started, please stay tuned."
                        okText="Cancel"
                        okType="default"
                    >
                        <a className="btn btn-white">PRE ORDER</a>
                    </Popconfirm>
                    {/*<Link className="btn btn-white" href="/order" prefetch shallow>PRE ORDER</Link>*/}
                </div>
                <div className="img-group">
                    <div className="img-wrapper">
                        <div className="img-box fixed-height">
                            <Image src="/images/mall/product/product-1.jpg" width={300} height={273} quality={100} alt="product-1"/>
                        </div>
                    </div>
                    <div className="img-wrapper">
                        <div className="img-box">
                            <Image src="/images/mall/product/product-2.jpg" width={656} height={479} quality={100} alt="product-2"/>
                        </div>
                    </div>
                    <div className="img-wrapper">
                        <div className="img-box fixed-height">
                            <Image src="/images/mall/product/product-3.jpg" width={300} height={273} quality={100} alt="product-3"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;
