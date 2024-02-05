import {useState} from 'react';
import {Button} from 'antd';
import Image from 'next/image';
import useScrollAnimate from '@/_hooks/useScrollAnimate.js'

const EctEc3 = ({className = 'ect'}) => {
    const [checked, setChecked] = useState(3);
    const scrollRef = useScrollAnimate({top: 320});

    return (
        <div className="ect" ref={scrollRef}>
            <div className="animate__animated animate__slow" data-animate="animate__bounce">
                <h2 className="main-title"><strong>ECT</strong> Energy self-consumption Economy</h2>
                <p className="sub-title">The Ec³ Token (ECT) is the native cryptocurrency of the Ec³ Network and is the
                    only token that can be burned to create carbon credits and send device data.</p>
                <div className="tab-group">
                    <Button className={checked == 1 ? 'checked' : ''} onClick={() => setChecked(1)}>PoS</Button>
                    <Button className={checked == 2 ? 'checked' : ''} onClick={() => setChecked(2)}>Stakeholder</Button>
                    <Button className={checked == 3 ? 'checked' : ''} onClick={() => setChecked(3)}>Burning & Scarcity</Button>
                </div>
                <div className={`tab-content tab-content__one ${checked===1?'show':'hide'}`}>
                    <div className="image-text">
                        <div>
                            <h1 className="title">Proof-of-stake</h1>
                            <p className="text">Experience a greener and more sustainable approach with reduced computing power and electricity consumption.</p>
                            <p className="text">Unlock stability in distributed home energy storage mining by embracing the rewarding practice of holding and locking, seamlessly integrated without disruptions to the power grid.</p>
                            <p className="text stake-title">Mine and earn profits by staking your held tokens</p>
                            <Button type="primary" href="http://www.baidu.com" target="_blank">STAKE</Button>
                        </div>
                        <div className="image"></div>
                    </div>
                </div>
                <div className={`tab-content tab-content__two ${checked===2?'show':'hide'}`}>
                    <div className="image-text">
                        <div className="image-wrapper">
                            <Image width={357} height={223} src="/images/ect/stakeholder.jpg" alt="Stakeholder" />
                            <div className="text">Global decarbonization requires awakening the stakeholders hidden beneath the iceberg.</div>
                        </div>
                        <div className="description">
                            <h1 className="title">Global Decarbonization: Empowering People for Energy Transformation Rewards!</h1>
                            <p className="text">Tokenomics design seamlessly integrates distributed features, the energy-efficient POS consensus mechanism, and an incentivizing staking model, aiming to catalyze greater participation from stakeholders.
                                Innovative incentive models ensure rewards for each device owner, irrespective of geography or policies, by connecting every citizen through a community network.</p>
                        </div>
                    </div>
                </div>
                <div className={`tab-content tab-content__three ${checked===3?'show':'hide'}`}>
                    <div className="card">
                        <h2 className="card-title">Seamless Token Acquisition</h2>
                        <p className="card-desc">Through the straightforward process of charging and discharging in distributed energy storage devices, users effortlessly acquire Token markers, intricately linked with emission reduction credits.</p>
                    </div>
                    <div className="film-text">
                        <iframe width="536" height="301" src="https://www.youtube.com/embed/nImzDJeBz5c?rel=0&controls=1&autoplay=0&mute=0;atart=0"
                                title="Ec³ token machine" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                        <p className="desc">Committed to fostering a vibrant community, supporting sustainability, and continually prioritizing technical security, we aspire to shape a greener, more sustainable future.</p>
                        <Button type="primary" href="http://www.baidu.com" target="_blank">Read More</Button>
                    </div>
                    <div className="card">
                        <h2 className="card-title">ECT Burning for Scarcity</h2>
                        <p className="card-desc">As users earn profits by engaging in carbon trading, green energy loans, and other initiatives, the corresponding Tokens are systematically burned, ensuring the scarcity of ECT.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EctEc3;
