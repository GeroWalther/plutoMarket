"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEE = exports.PRODUCT_CATEGORIES = void 0;
exports.PRODUCT_CATEGORIES = [
    {
        label: 'UI Kits',
        value: 'ui_kits',
        featured: [
            {
                name: 'Editor picks',
                href: '#',
                ImageSrc: process.env.NEXT_PUBLIC_SERVER_URL + '/nav/ui-kits/mixed.jpg',
            },
            {
                name: 'New Arrivals',
                href: '#',
                ImageSrc: process.env.NEXT_PUBLIC_SERVER_URL + '/nav/ui-kits/blue.jpg',
            },
            {
                name: 'Best Sellers',
                href: '#',
                ImageSrc: process.env.NEXT_PUBLIC_SERVER_URL + '/nav/ui-kits/purple.jpg',
            },
        ],
    },
    {
        label: 'Icons',
        value: 'icons',
        featured: [
            {
                name: 'Favorite Icon Picks',
                href: '#',
                ImageSrc: process.env.NEXT_PUBLIC_SERVER_URL + '/nav/icons/picks.jpg',
            },
            {
                name: 'New Arrivals',
                href: '#',
                ImageSrc: process.env.NEXT_PUBLIC_SERVER_URL + '/nav/icons/new.jpg',
            },
            {
                name: 'Best selling Icons',
                href: '#',
                ImageSrc: process.env.NEXT_PUBLIC_SERVER_URL + '/nav/icons/bestsellers.jpg',
            },
        ],
    },
];
exports.FEE = 1;
