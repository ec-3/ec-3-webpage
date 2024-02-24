import React, {useEffect} from 'react';
import { SafeArea } from 'antd-mobile'
import 'antd-mobile/es/global';
import "./_scss/index.scss";
import HeadEc3 from '@/_component/HeadEc3';

export default function RootLayoutMoble({children}) {
    useEffect(() => {
        import('amfe-flexible');
    }, []);
    return (
        <html lang="en">
        <HeadEc3 isMobile={true} />
        <body>
            <div style={{ background: '#060606' }}>
                <SafeArea position='top' />
            </div>
            {children}
            <div style={{ background: '#181a1d' }}>
                <SafeArea position='bottom' />
            </div>
        </body>
        </html>
    );
}
