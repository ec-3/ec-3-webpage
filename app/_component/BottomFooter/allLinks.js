import {linkLocation} from '@/config.js'

const allLinks = [
    {
        title: 'Explore',
        links: [
            {name: 'Download Ec³ App', href: linkLocation['Download Ec³ App']},
            {name: 'Shopping Car', href: linkLocation['Shopping Car']},
        ]
    },
    {
        title: 'Documents',
        links: [
            {name: 'Developers', href: linkLocation['Developers']},
            {name: 'Mine', href: linkLocation['Mine']},
            {name: 'Tokenomic', href: linkLocation['Tokenomic']}
        ]
    },
    {
        title: 'Useful links',
        links: [
            {name: 'FAQs', href: linkLocation['FAQs']},
            {name: 'Product User Guide', href: linkLocation['Product User Guide']},
        ]
    },
    {
        title: 'Keep following',
        links: [
            {name: 'X', href: linkLocation['X']},
            {name: 'Discord', href: linkLocation['Discord']},
            {name: 'Medium', href: linkLocation['Medium']},
            {name: 'Telegram', href: linkLocation['Telegram']},
        ]
    }
];

export default allLinks;
