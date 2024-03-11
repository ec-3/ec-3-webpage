import {useState} from 'react';
import { Button } from 'antd-mobile'
import Image from 'next/image';
import useScrollAnimate from '@/_hooks/useScrollAnimate.js'
import stakeholderImg from '~/images/home/ect/stakeholder.jpg';
import {linkLocation} from '@/config';

const EctMobile = ({className = 'ect'}) => {
    const [checked, setChecked] = useState(3);
    const scrollRef = useScrollAnimate({imgHalfHeight: 112});

    return (
        <section className="ect" ref={scrollRef}>
            <div>
                <h2 className="main-title animate__animated animate__slow" data-animate="animate__bounce"><strong>ECT</strong> Energy self-consumption Economy</h2>
                <p className="sub-title">The Ec³ Token (ECT) is the native cryptocurrency of the Ec³ Network and is the only token that can be burned to create credits and send device data.</p>
                <div className="tab-group">
                    <Button className={checked == 1 ? 'checked' : ''} onClick={() => setChecked(1)}>PoS</Button>
                    <Button className={checked == 2 ? 'checked' : ''} onClick={() => setChecked(2)}>Stakeholder</Button>
                    <Button className={checked == 3 ? 'checked' : ''} onClick={() => setChecked(3)}>Burning & Scarcity</Button>
                </div>
                <div className={`tab-content tab-content__one ${checked===1?'show':'hide'}`}>
                    <div className="image-text">
                        <div className="image"></div>
                        <h1 className="title">Proof-of-stake</h1>
                        <p className="text">Experience a greener and more sustainable approach with reduced computing power and electricity consumption.</p>
                        <p className="text">Unlock stability in distributed energy storage mining by embracing the rewarding practice of holding and locking, seamlessly integrated without disruptions to the power grid.</p>
                        <p className="text stake-title">Mine and earn profits by staking your held tokens</p>
                        <Button color='success' fill='solid' onClick={() => location.href=linkLocation['Staking']}>STAKE</Button>
                    </div>
                </div>
                <div className={`tab-content tab-content__two ${checked===2?'show':'hide'}`}>
                    <div className="image-text">
                        <div className="description">
                            <h1 className="title">Global Decarbonization: Empowering People for Energy Transformation Rewards!</h1>
                            <p className="text">Tokenomics design seamlessly integrates distributed features, the energy-efficient POS consensus mechanism, and an incentivizing staking model, aiming to catalyze greater participation from stakeholders.
                                Innovative incentive models ensure rewards for each device owner, irrespective of geography or policies, by connecting every citizen through a community network.</p>
                        </div>
                        <div className="image-wrapper">
                            <Image src={stakeholderImg} alt="Stakeholder" />
                            <div className="text">Global decarbonization requires awakening the stakeholders hidden beneath the iceberg.</div>
                        </div>
                    </div>
                </div>
                <div className={`tab-content tab-content__three ${checked===3?'show':'hide'}`}>
                    <div className="card">
                        <h2 className="card-title">Seamless Token Acquisition</h2>
                        <p className="card-desc">Through the straightforward process of charging and discharging in distributed energy storage devices, users effortlessly acquire Token markers, intricately linked with emission reduction credits.</p>
                    </div>
                    <div className="card">
                        <h2 className="card-title">ECT Burning for Scarcity</h2>
                        <p className="card-desc">When users engage with the real world and gain profits or save costs through participating in demand response programs, virtual power plant projects, green energy financing, and other initiatives, the increased profits and reduced costs can serve as the basis for Ec³ to buy back ECT and generate points for token destruction, thereby ensuring the scarcity of ECT.</p>
                    </div>
                    <div className="film-text">
                        <div className="film">
                            <video preload="auto" controls poster="/video/YouTuBe.png">
                                <source src="/video/YouTuBe.mp4" type="video/mp4"/>
                            </video>
                        </div>
                        <p className="desc">Committed to fostering a vibrant community, supporting sustainability, and continually prioritizing technical security, we aspire to shape a greener, more sustainable future.</p>
                        <Button color='success' fill='solid'
                                onClick={() => location.href=linkLocation['Read More']}>Read More</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EctMobile;
