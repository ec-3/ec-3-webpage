import Image from 'next/image';
import useScrollAnimate from '@/_hooks/useScrollAnimate.js'

const AppStoreEc3 = ({className = 'app-store'}) => {
    const scrollRef = useScrollAnimate({imgHalfHeight: 230});

    return (
        <div className="app-store">
            <div className="inner">
                <div className="image-text" ref={scrollRef}>
                    <div className="image-wrapper animate__animated" data-animate="animate__fadeInLeft">
                        <Image className="phone" width="400" height="461" src="/images/app-store/phone.png" alt="App Store" />
                        <Image className="phone-text" width="180" height="54" src="/images/app-store/phone-text.png" alt="App Store" />
                    </div>
                    <div className="card-wrapper">
                        <div className="card">
                            <div className="avatar">
                                <Image width="34" height="34" src="/images/app-store/avatar-1.svg" alt="Icon" />
                            </div>
                            <div className="content">
                                <h3 className="title">Automated Energy Future</h3>
                                <p className="text">Leveraging the access control module, achieve peak shaving and valley filling, enhancing energy utilization efficiency and shaping the future of energy automation.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="avatar">
                                <Image width="34" height="34" src="/images/app-store/avatar-2.svg" alt="Icon" />
                            </div>
                            <div className="content">
                                <h3 className="title">Payment Module with Distinct Advantages</h3>
                                <p className="text">Inheriting the Capabilities of the Peaq Payment Module: Trustless and automated, it ensures the seamless flow of your earnings.</p>
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

export default AppStoreEc3;
