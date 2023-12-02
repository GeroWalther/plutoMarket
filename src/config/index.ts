export const PRODUCT_CATEGORIES = [
  {
    label: 'UI Kits',
    value: 'ui_kits' as const,
    featured: [
      {
        name: 'Editor picks',
        href: '#',
        ImageSrc: '/nav/ui-kits/mixed.jpg',
      },
      {
        name: 'New Arrivals',
        href: '#',
        ImageSrc: '/nav/ui-kits/blue.jpg',
      },
      {
        name: 'Best Sellers',
        href: '#',
        ImageSrc: '/nav/ui-kits/purple.jpg',
      },
    ],
  },
  {
    label: 'Icons',
    value: 'icons' as const,
    featured: [
      {
        name: 'Favorite Icon Picks',
        href: '#',
        ImageSrc: '/nav/icons/picks.jpg',
      },
      {
        name: 'New Arrivals',
        href: '#',
        ImageSrc: '/nav/icons/new.jpg',
      },
      {
        name: 'Best selling Icons',
        href: '#',
        ImageSrc: '/nav/icons/bestsellers.jpg',
      },
    ],
  },
];
