import Image from 'next/image';
import useScrollAnimate from '@/_hooks/useScrollAnimate.js'
import avatar1 from '~/images/mine/avatar-1.svg';
import avatar2 from '~/images/mine/avatar-2.svg';
import energyStorageImg from '~/images/mine/energy-storage.svg';

const MinePC = ({className = 'mine'}) => {
    const scrollRef = useScrollAnimate({imgHalfHeight: 200});

    return (
        <div className={className}>
            <div className="inner">
                <h2 className="main-title"><strong>mine</strong> with distributed energy storage</h2>
                <p className="sub-title">
                    Get our Ec³ 'Magic Cube' for an easy plug-and-play connection between your energy storage and solar panels.
                    Use green energy and earn ECT rewards too!
                </p>
                <div className="image-text" ref={scrollRef}>
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
                    <div className="image-wrapper animate__animated" data-animate="animate__fadeInRight">
                        <Image src={energyStorageImg} alt="Energy storage" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MinePC;
