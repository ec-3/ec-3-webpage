import Image from 'next/image';
import {Popconfirm} from 'antd';
import useScrollAnimate from '@/_hooks/useScrollAnimate.js'

const AppStorePC = ({className = 'app-store'}) => {
    const scrollRef = useScrollAnimate({imgHalfHeight: 230});

    return (
        <div className="app-store">
            <div className="inner">
                <div className="image-text" ref={scrollRef}>
                    <div className="image-wrapper animate__animated" data-animate="animate__fadeInLeft">
                        <Image className="phone" width="400" height="461" src="/images/app-store/phone.png" alt="App Store" />
                        <Popconfirm
                            rootClassName="coming-soon pc"
                            title="Coming Soon"
                            description="This feature is currently under development and will be launched soon."
                            okText="Cancel"
                            okType="default"
                        >
                            <Image className="phone-text" width="180" height="54" src="/images/app-store/phone-text.png" alt="App Store" />
                        </Popconfirm>
                    </div>
                    <div className="card-wrapper">
                        <div className="card">
                            <div className="avatar">
                                <Image width="34" height="34" src="/images/app-store/avatar-1.svg" alt="Icon" />
                            </div>
                            <div className="content">
                                <h3 className="title">AI Agent in the Ec³ APP</h3>
                                <p className="text">Offering personalized energy management advice based on daily habits and energy consumption patterns.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="avatar">
                                <Image width="34" height="34" src="/images/app-store/avatar-2.svg" alt="Icon" />
                            </div>
                            <div className="content">
                                <h3 className="title">Plug-and-play</h3>
                                <p className="text">Connect the Ec³ Energy Cube to your device, launch the Ec³ APP, sync your wallet, and instantly, Bluetooth ensures smooth blockchain data integration.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="avatar">
                                <Image width="34" height="34" src="/images/app-store/avatar-3.svg" alt="Icon" />
                            </div>
                            <div className="content">
                                <h3 className="title">Thrilling Real-time Token Rewards</h3>
                                <p className="text">The app tracks token rewards for energy usage in real-time, connecting to your wallet for effortless control over your earnings.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppStorePC;
