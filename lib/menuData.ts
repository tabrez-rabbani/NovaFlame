import { MenuItem } from '@/types';

export const menuData: MenuItem[] = [
    // Starters
    {
        id: 's1',
        name: 'Truffle Arancini',
        description: 'Crispy risotto balls infused with black truffle oil, served with garlic aioli.',
        price: '₹550',
        category: 'Starters',
        isVeg: true,
    },
    {
        id: 's2',
        name: 'Smoked Salmon Carpaccio',
        description: 'Thinly sliced cured salmon with capers, dill, and lemon zest.',
        price: '₹850',
        category: 'Starters',
        isVeg: false,
    },
    {
        id: 's3',
        name: 'Spicy Edamame',
        description: 'Steamed edamame tossed in chili garlic sauce and sea salt.',
        price: '₹450',
        category: 'Starters',
        isVeg: true,
    },
    // Mains
    {
        id: 'm1',
        name: 'Pan-Seared Scallops',
        description: 'Jumbo scallops served with cauliflower purée and crispy pancetta.',
        price: '₹1450',
        category: 'Mains',
        isVeg: false,
    },
    {
        id: 'm2',
        name: 'Wild Mushroom Risotto',
        description: 'Arborio rice cooked with porcini mushrooms, parmesan, and white wine.',
        price: '₹950',
        category: 'Mains',
        isVeg: true,
    },
    {
        id: 'm3',
        name: 'Herb-Crusted Lamb Rack',
        description: 'Served with roasted root vegetables and red wine jus.',
        price: '₹1850',
        category: 'Mains',
        isVeg: false,
    },
    // Desserts
    {
        id: 'd1',
        name: 'Dark Chocolate Fondant',
        description: 'Molten center chocolate cake with vanilla bean ice cream.',
        price: '₹550',
        category: 'Desserts',
        isVeg: true,
    },
    {
        id: 'd2',
        name: 'Lemon Basil Tart',
        description: 'Zesty lemon curd in a butter pastry shell, topped with italian meringue.',
        price: '₹450',
        category: 'Desserts',
        isVeg: true,
    },
    // Beverages
    {
        id: 'b1',
        name: 'Signature Gold Cocktail',
        description: 'Prosecco, elderflower liqueur, and edible gold flakes.',
        price: '₹950',
        category: 'Beverages',
        isVeg: true,
    },
    {
        id: 'b2',
        name: 'Artisan Kombucha',
        description: 'House-fermented berry and hibiscus blend.',
        price: '₹350',
        category: 'Beverages',
        isVeg: true,
    },
];
