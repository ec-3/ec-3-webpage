import {Popconfirm} from 'antd';


const InstallGuide = function ({className = 'install-guide'}) {
    return (
        <section className={className}>
            <div className="fixed-center">
                <h2 className="main-title">Your property doubles <strong>as an energy node, earning
                    crypto</strong> while appreciating in value.</h2>
                <div className="card-group">
                    <div className="card">
                        <div className="card-title">
                            <i className="icon icon-link"></i>
                            <h4 className="text">Energy Tokenization</h4>
                        </div>
                        <div className="card-desc">You're no longer just an energy consumer but a vital participant in
                            the energy network, receiving rewards and earning through staking.
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-title">
                            <i className="icon icon-api"></i>
                            <h4 className="text">Electricity Safety</h4>
                        </div>
                        <div className="card-desc">The EC plug can monitor whether electrical equipment has overvoltage, overload, etc., and improve household electricity safety.
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-title">
                            <i className="icon icon-bluetoothon"></i>
                            <h4 className="text">Smart Connectivity</h4>
                        </div>
                        <div className="card-desc">Download the app, log into your wallet, and connect to the installed Ec plug via Bluetooth to receive real-time token rewards.</div>
                    </div>
                </div>
                <div className="btn-group">
                    <Popconfirm
                        rootClassName="coming-soon pc"
                        title="Coming Soon"
                        description="This feature is currently under development and will be launched soon."
                        okText="Cancel"
                        okType="default"
                    >
                        <a className="btn btn-white">Installation Guide<i className="icon icon-ur-arrow"></i></a>
                    </Popconfirm>
                </div>
            </div>
        </section>
    );
};

export default InstallGuide;
