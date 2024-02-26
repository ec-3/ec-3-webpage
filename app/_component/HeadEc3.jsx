export default function HeadEc3({isMobile = false}) {
    return (
        <head>
            {
                isMobile ? <meta name="viewport" key="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
                         : <meta name="viewport" key="viewport" content="width=device-width, initial-scale=1" />
            }
            <meta name="Keywords" content="Ec³,ec³,ec3,Ec3,Distributed energy network,Distributed Energy Storage,Web3,Carbon neutralization,Low-Carbon Lifestyle,Stable Grid,DID Technology,Blockchain" />
            <meta name="Description" content="Ec³ is a gateway for everyone to participate in carbon reduction, offering an opportunity for individuals to gain profits through carbon neutrality, undoubtedly expanding the development space of distributed energy storage." />
            <meta name="robots" content="index, follow" />
            <meta name="googlebot" content="index, follow" />
            <link rel="dns-prefetch" href="//docs.ec-cube.io/" />
            <link rel="dns-prefetch" href="//stake.ec-cube.io/" />
            <link rel="dns-prefetch" href="//discord.gg/" />
            <link rel="dns-prefetch" href="//twitter.com/" />
            <link rel="dns-prefetch" href="//medium.com/" />
            <link rel="dns-prefetch" href="//t.me/" />
            <link rel="shortcut icon" href="/favicon.ico" />
            <title>Ec³</title>
        </head>
    );
}
