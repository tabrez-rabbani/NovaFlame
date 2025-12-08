import Link from 'next/link';
import { Flame, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-secondary pt-20 pb-10 border-t border-white/10">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="bg-primary/20 p-2 rounded-full">
                                <Flame className="w-5 h-5 text-primary" />
                            </div>
                            <span className="text-xl font-bold tracking-tighter text-white">
                                NOVA<span className="text-primary">FLAME</span>
                            </span>
                        </Link>
                        <p className="text-white/60 mb-6 text-sm leading-relaxed">
                            Experience the convergence of culinary art and futuristic design.
                            A dining journey that transcends the ordinary.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-white/60 hover:text-primary transition-colors">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-white/60 hover:text-primary transition-colors">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-white/60 hover:text-primary transition-colors">
                                <Twitter className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-span-1">
                        <h4 className="text-white font-bold uppercase tracking-widest mb-6">Explore</h4>
                        <ul className="space-y-4 text-sm text-white/60">
                            <li><Link href="/menu" className="hover:text-primary transition-colors">Our Menu</Link></li>
                            <li><Link href="/about" className="hover:text-primary transition-colors">The Story</Link></li>
                            <li><Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
                            <li><Link href="/reservations" className="hover:text-primary transition-colors">Reservations</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="col-span-1">
                        <h4 className="text-white font-bold uppercase tracking-widest mb-6">Visit Us</h4>
                        <ul className="space-y-4 text-sm text-white/60">
                            <li>
                                <span className="block text-white mb-1">Address</span>
                                123 Culinary Avenue, Metro City
                            </li>
                            <li>
                                <span className="block text-white mb-1">Email</span>
                                reservations@novaflame.com
                            </li>
                            <li>
                                <span className="block text-white mb-1">Phone</span>
                                +91 98765 43210
                            </li>
                        </ul>
                    </div>

                    {/* Opening Hours */}
                    <div className="col-span-1">
                        <h4 className="text-white font-bold uppercase tracking-widest mb-6">Hours</h4>
                        <ul className="space-y-4 text-sm text-white/60">
                            <li className="flex justify-between">
                                <span>Mon - Thu</span>
                                <span className="text-white">5:00 PM - 11:00 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Fri - Sat</span>
                                <span className="text-white">5:00 PM - 1:00 AM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Sunday</span>
                                <span className="text-white">11:00 AM - 11:00 PM</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
                    <p>&copy; {new Date().getFullYear()} NovaFlame Dining. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
