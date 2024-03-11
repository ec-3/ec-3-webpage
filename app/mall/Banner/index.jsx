const Banner = function ({className = 'banner'}) {
    return (
        <section className="banner">
            <div className="fixed-center">
                <div className="inner">
                    <hgroup className="title-group">
                        <h3 className="sub-title">Ec cube mines ECT by linking diverse energy storage units.</h3>
                        <a className="btn btn-white">PRE ORDER</a>
                        <h2 className="main-title">Ec cube</h2>
                    </hgroup>
                    <p className="remark">EC³'s first-gen launched in 2024</p>
                </div>
            </div>
        </section>
    );
};

export default Banner;