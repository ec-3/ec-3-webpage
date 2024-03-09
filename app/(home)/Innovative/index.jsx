import Image from 'next/image';

const Innovative = ({className = 'innovative-wrapper'}) => {
    return (
        <div className={className}>
            <div className="innovative">
                <div className="inner">
                    <div className="row">
                        <div className="item">
                            <div className="avatar"><i className="icon icon-tree"></i></div>
                            <h4 className="title">Self-consumption</h4>
                            <p className="text">Shift from subsidy-driven growth to consumer focus on maximizing self-consumption.</p>
                        </div>
                        <div className="item">
                            <div className="avatar"><i className="icon icon-earth"></i></div>
                            <h4 className="title">No longer flows one way</h4>
                            <p className="text">Distributed energy storage now includes not just home systems but also microgrids with electric vehicles.</p>
                        </div>
                    </div>
                </div>
                <h2 className="innovative-main__title">
                    <strong>Innovative</strong> distributed energy storage
                </h2>
                <h3 className="innovative-sub__title">Imagine energy tokenization and low-carbon mining solutions coming together with enhanced incentives like a perfectly brewed coffee blend, energizing the crypto world with a sustainable buzz!</h3>
                <div className="inner">
                    <div className="row">
                        <div className="item">
                            <div className="avatar"><i className="icon icon-person"></i></div>
                            <h4 className="title">Tokenized energy</h4>
                            <p className="text">Blockchain-based distributed storage tokenizes energy, improving flexibility and programmability in energy trading and distribution.</p>
                        </div>
                        <div className="item">
                            <div className="avatar"><i className="icon icon-calculate"></i></div>
                            <h4 className="title">DePIN welcomes all</h4>
                            <p className="text">Leveraging the peaq network, we provide a pathway for small-scale energy producers and consumers to enter the energy market.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};


export default Innovative;
