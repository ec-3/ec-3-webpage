import {linkLocation} from '@/config.js'

const allLinksFunc = function (isHomePage) {
    return [
        {
            title: 'Explore',
            links: [
                {name: 'Download Ec³ App', href: linkLocation['Download Ec³ App'], target: '_blank'},
                isHomePage ? {name: 'Shopping Car', href: '/mall', target: '_self'}
                           : {name: 'Homepage', href: '/', target: '_self'},
            ]
        },
        {
            title: 'Documents',
            links: [
                {name: 'Developers', href: linkLocation['Developers'], target: '_blank'},
                {name: 'Mine', href: linkLocation['Mine'], target: '_blank'},
                {name: 'Tokenomic', href: linkLocation['Tokenomic'], target: '_blank'}
            ]
        },
        {
            title: 'Useful links',
            links: [
                {name: 'FAQs', href: linkLocation['FAQs'], target: '_blank'},
                {name: 'Product User Guide', href: linkLocation['Product User Guide'], target: '_blank'},
            ]
        },
        {
            title: 'Keep following',
            links: [
                {name: 'X', href: linkLocation['X']},
                {name: 'Discord', href: linkLocation['Discord'], target: '_blank'},
                {name: 'Medium', href: linkLocation['Medium'], target: '_blank'},
                {name: 'Telegram', href: linkLocation['Telegram'], target: '_blank'},
            ]
        }
    ];
};

export default allLinksFunc;
