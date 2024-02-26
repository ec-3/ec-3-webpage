import Image from 'next/image';
import { Button, Modal } from 'antd-mobile'
import useScrollAnimate from '@/_hooks/useScrollAnimate.js';
import useCountdown from '@/_hooks/useCountdown.js';
import avatar1 from '~/images/mine/avatar-1.svg';
import avatar2 from '~/images/mine/avatar-2.svg';
import energyStorageImg from '~/images/mine/energy-storage.svg';

const PreSaleDialog = () => {
    return (
        <div className="dialog-content">
            <Image className="bg bg-1" src="/images/mine/pre-sale/bg-1.svg" width={0} height={0} alt="bg-1" />
            <Image className="bg bg-2" src="/images/mine/pre-sale/bg-2.svg" width={0} height={0} alt="bg-2" />
            <div className="dialog-inner">
                <h2 className="main-title">Ec³ Cube Pre-sale</h2>
                <h3 className="sub-title">
                    Catch rays and crypto, all from the comfort of your home.
                    The Ec³ Cube: Because your energy bill owes you one!
                </h3>
                <Image className="cube-img" src="/images/mine/pre-sale/cube-ec3.png" width={120} height={122} alt="cube-ec3" />
                <div className="icon-wrapper">
                    <div className="column">
                        <Image className="icon" src="/images/mine/pre-sale/icon-1.svg" width={30} height={30} alt="Ec³ APP" />
                        <span className="text text-1">Ec³ APP</span>
                    </div>
                    <div className="column">
                        <Image className="icon" src="/images/mine/pre-sale/icon-2.svg" width={30} height={30} alt="storage battery" />
                        <span className="text text-2">storage battery</span>
                    </div>
                    <div className="column">
                        <Image className="icon" src="/images/mine/pre-sale/icon-3.svg" width={30} height={30} alt="peaq network" />
                        <span className="text text-3">peaq network</span>
                    </div>
                </div>
                <div className="btn-group">
                    <Button className="order-btn" color='success' fill='solid'
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
                            }}
                    >
                        Order Now
                        <Image className="arrow-icon" src="/images/mine/pre-sale/arrow.svg" width={0} height={0} alt="arrow" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

const MineMobile = ({className = 'mine'}) => {
    const scrollRef = useScrollAnimate({imgHalfHeight: 200});
    const [time, formatTime] = useCountdown();

    return (
        <>
        <div className={className} ref={scrollRef}>
            <h2 className="main-title"><strong>mine</strong> with distributed energy storage</h2>
            <p className="sub-title">
                Get our Ec³ 'Magic Cube' for an easy plug-and-play connection between your energy storage and solar panels.
                Use green energy and earn ECT rewards too!
            </p>
            <div className="image-text">
                <div className={`image-wrapper ${time > 0 ? 'pre-sale' : ''}`}>
                    <Image className="animate__animated" data-animate="animate__rubberBand" src={energyStorageImg} alt="Energy storage" />
                    <Button onClick={() => {
                        Modal.show({
                            className: 'pre-sale__dialog',
                            content: <PreSaleDialog />,
                            closeOnMaskClick: true,
                            showCloseButton: true,
                            getContainer: () => scrollRef.current,
                        })
                    }}>Pre-Sale : <label>{formatTime}</label></Button>
                </div>
                <div className="card-wrapper">
                    <div className="card">
                        <div className="avatar">
                            <Image src={avatar1} alt="Icon" />
                        </div>
                        <div className="content">
                            <h3 className="title">Blockchain Security Navigator</h3>
                            <p className="text">Enabling charging and discharging to be recorded on the blockchain without human intervention, ensuring unparalleled protection of safety and privacy.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="avatar">
                            <Image src={avatar2} alt="Icon" />
                        </div>
                        <div className="content">
                            <h3 className="title">Identity Verification Evolution</h3>
                            <p className="text">SSMI module ensures authentic and reliable transactions in clean energy, marking a true evolution in identity authentication.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default MineMobile;
