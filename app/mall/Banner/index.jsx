import Link from 'next/link';
import {Popconfirm} from 'antd';

const Banner = function ({className = 'banner'}) {
    return (
        <section className="banner">
            <div className="fixed-center">
                <div className="inner">
                    <hgroup className="title-group">
                        <h3 className="sub-title">Ec cube mines ECT by linking diverse energy storage units.</h3>
                        <Popconfirm
                            rootClassName="coming-soon pc"
                            title="Coming Soon"
                            description="The sales function has not yet started, please stay tuned."
                            okText="Cancel"
                            okType="default"
                        >
                            <a className="btn btn-white">PRE ORDER</a>
                        </Popconfirm>
                        {/*<Link className="btn btn-white" href="/order" prefetch={true} shallow={true}>PRE ORDER</Link>*/}
                        <h2 className="main-title">Ec cube</h2>
                    </hgroup>
                    <p className="remark">EC³'s first-gen launched in 2024</p>
                </div>
            </div>
        </section>
    );
};

export default Banner;
