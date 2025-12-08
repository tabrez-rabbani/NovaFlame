export interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: string;
    category: 'Starters' | 'Mains' | 'Desserts' | 'Beverages';
    isVeg: boolean;
    image?: string;
}

export interface Testimonial {
    id: string;
    name: string;
    role?: string;
    location?: string;
    comment: string;
    quote?: string;
    avatar?: string;
    image?: string;
    rating: number;
}

export interface GalleryItem {
    id: string;
    src: string;
    alt: string;
    width?: number;
    height?: number;
    category?: string;
}
