type NavLink = {
    href: string;
    label: string
};

export const links: NavLink[] = [
    {
        href: '/', label: 'Home',
    },
    {
        href: '/admin/sales', label: 'dashboard',
    },
    {
        href: '/about', label: 'About',
    },
    {
        href: '/products', label: 'Products',
    },
    {
        href: '/favourites', label: 'Favourites',
    },
    {
        href: '/reviews', label: 'Reviews',
    },
    {
        href: '/cart', label: 'Cart',
    },
    {
        href: '/orders', label: 'Orders',
    },

]

export const adminLinks:NavLink[] = [
    {
        href: '/admin/sales',
        label: 'sales'
    },
    {
        href: '/admin/products',
        label: 'my products'
    }
];