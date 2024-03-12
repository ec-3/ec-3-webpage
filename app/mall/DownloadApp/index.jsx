import Image from 'next/image';
import Link from 'next/link';
import {Popconfirm} from 'antd';

const DownloadApp = function ({className = 'download-app'}) {
    return (
        <section className={className}>
            <div className="fixed-center">
                <div className="img-column">
                    <div className="img-row img-row__right-top img-row__offset">
                        <Image src="/images/mall/download-app/product-4.png" width={368} height={186} alt="product-4"/>
                    </div>
                    <div className="img-row img-row__left">
                        <Image src="/images/mall/download-app/product-5.png" width={278} height={382} alt="product-5"/>
                    </div>
                </div>
                <div className="image-text">
                    <h3 className="main-title">Get ECT</h3>
                    <h3 className="sub-title">Download Ec³ APP</h3>
                    <div className="img-wrapper">
                        <Image src="/images/mall/download-app/phone-ec3.png" width={320} height={230} alt="phone ec3"/>
                    </div>
                    <div className="link-group">
                        <Popconfirm
                            rootClassName="coming-soon pc"
                            title="Coming Soon"
                            description="This feature is currently under development and will be launched soon."
                            okText="Cancel"
                            okType="default"
                        >
                            <a className="link"><i className="icon icon-ios"></i>ios</a>
                        </Popconfirm>
                        <Popconfirm
                            rootClassName="coming-soon pc"
                            title="Coming Soon"
                            description="This feature is currently under development and will be launched soon."
                            okText="Cancel"
                            okType="default"
                        >
                            <a className="link"><i className="icon icon-android"></i>Android</a>
                        </Popconfirm>
                    </div>
                </div>
                <div className="img-column">
                    <div className="img-row img-row__right">
                        <Image src="/images/mall/download-app/product-6.png" width={228} height={212} alt="product-6"/>
                    </div>
                    <div className="img-row img-row__right">
                        <Image src="/images/mall/download-app/product-7.png" width={295} height={231} alt="product-7"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DownloadApp;
