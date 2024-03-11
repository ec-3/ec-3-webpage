import Image from 'next/image';
import { Modal } from 'antd-mobile'
import useScrollAnimate from '@/_hooks/useScrollAnimate.js'

const AppStoreMobile = ({className = 'app-store'}) => {
    const scrollRef = useScrollAnimate({imgHalfHeight: 27});

    return (
        <section className="app-store">
            <div className="main-title" ref={scrollRef}>
                <Image className="phone-text animate__animated" src="/images/home/app-store/phone-text.png" width="180" height="54"
                       data-animate="animate__flipInX"
                       alt="App Store"
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
                />
            </div>
            <div className="image-text">
                <div className="card-wrapper">
                    <div className="card">
                        <div className="avatar"><i className="icon icon-energy"></i></div>
                        <div className="content">
                            <h3 className="title">AI Agent in the Ec³ APP</h3>
                            <p className="text">Offering personalized energy management advice based on daily habits and energy consumption patterns.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="avatar"><i className="icon icon-api"></i></div>
                        <div className="content">
                            <h3 className="title">Plug-and-play</h3>
                            <p className="text">Connect the Ec³ Energy Cube to your device, launch the Ec³ APP, sync your wallet, and instantly, Bluetooth ensures smooth blockchain data integration.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="avatar"><i className="icon icon-token"></i></div>
                        <div className="content">
                            <h3 className="title">Thrilling Real-time Token Rewards</h3>
                            <p className="text">The app tracks token rewards for energy usage in real-time, connecting
                                to your wallet for effortless control over your earnings.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppStoreMobile;
