import Image from 'next/image';
import useScrollAnimate from '@/_hooks/useScrollAnimate.js'
import phoneTextImg from '~/images/app-store/phone-text.png';
import avatar1 from '~/images/app-store/avatar-1.svg';
import avatar2 from '~/images/app-store/avatar-2.svg';
import avatar3 from '~/images/app-store/avatar-3.svg';

const AppStoreMobile = ({className = 'app-store'}) => {
    const scrollRef = useScrollAnimate({imgHalfHeight: 27});

    return (
        <div className="app-store">
            <div className="main-title" ref={scrollRef}>
                <Image className="phone-text animate__animated" src={phoneTextImg} data-animate="animate__flipInX" alt="App Store" />
            </div>
            <div className="image-text">
                <div className="card-wrapper">
                    <div className="card">
                        <div className="avatar">
                            <Image src={avatar1} alt="Icon" />
                        </div>
                        <div className="content">
                            <h3 className="title">Automated Energy Future</h3>
                            <p className="text">Leveraging the access control module, achieve peak shaving and valley filling, enhancing energy utilization efficiency and shaping the future of energy automation.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="avatar">
                            <Image src={avatar2} alt="Icon" />
                        </div>
                        <div className="content">
                            <h3 className="title">Payment Module with Distinct Advantages</h3>
                            <p className="text">Inheriting the Capabilities of the Peaq Payment Module: Trustless and automated, it ensures the seamless flow of your earnings.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="avatar">
                            <Image src={avatar3} alt="Icon" />
                        </div>
                        <div className="content">
                            <h3 className="title">Thrilling Real-time Token Rewards</h3>
                            <p className="text">The app tracks token rewards for energy usage in real-time, connecting to your wallet for effortless control over your earnings.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppStoreMobile;
