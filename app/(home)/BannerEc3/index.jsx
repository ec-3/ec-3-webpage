const BannerEc3 = ({className = 'banner'}) => {
    return (
        <div className={className}>
            <div className="inner">
                <video autoPlay muted preload="auto">
                    <source src="/video/banner.mp4" type="video/mp4"/>
                    <source src="/video/banner.webm" type="video/webm"/>
                </video>
                <div className="banner-mask">
                    <div className="banner-content">
                        <h2 className="main-title">Decentralized Energy Network Coalesced by People</h2>
                        <h3 className="sub-title">Distributed Energy Storage Revolution</h3>
                        <h4 className="notes">Explore a groundbreaking paradigm in Web3 energy storage based on Peaq Network !</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default BannerEc3;
