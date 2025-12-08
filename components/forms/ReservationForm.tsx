"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Calendar, Clock, Users, User, Mail, Phone, MessageSquare, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function ReservationForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsLoading(false);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-md mx-auto"
            >
                <Card className="p-8 text-center bg-secondary/80 border-primary/20">
                    <div className="flex justify-center mb-6">
                        <CheckCircle className="w-16 h-16 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Reservation Confirmed!</h3>
                    <p className="text-white/70 mb-8">
                        Thank you for choosing NovaFlame. We have sent a confirmation email with the details.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} variant="outline">
                        Make Another Reservation
                    </Button>
                </Card>
            </motion.div>
        );
    }

    return (
        <Card className="p-8 bg-secondary/50 backdrop-blur-md border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                            <User className="w-4 h-4 text-primary" /> Name
                        </label>
                        <input
                            required
                            type="text"
                            className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                            placeholder="John Doe"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                            <Phone className="w-4 h-4 text-primary" /> Phone
                        </label>
                        <input
                            required
                            type="tel"
                            className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                            placeholder="+91 98765 43210"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                            <Mail className="w-4 h-4 text-primary" /> Email
                        </label>
                        <input
                            required
                            type="email"
                            className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                            placeholder="john@example.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                            <Users className="w-4 h-4 text-primary" /> Guests
                        </label>
                        <select
                            className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors [&>option]:bg-gray-900"
                        >
                            {[2, 3, 4, 5, 6, 7, 8, '8+'].map(n => (
                                <option key={n} value={n}>{n} People</option>
                            ))}
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-primary" /> Date
                        </label>
                        <input
                            required
                            type="date"
                            className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors [color-scheme:dark]"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                            <Clock className="w-4 h-4 text-primary" /> Time
                        </label>
                        <select
                            className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors [&>option]:bg-gray-900"
                        >
                            <option>18:00</option>
                            <option>19:00</option>
                            <option>20:00</option>
                            <option>21:00</option>
                            <option>22:00</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80 flex items-center gap-2">
                        <MessageSquare className="w-4 h-4 text-primary" /> Special Requests
                    </label>
                    <textarea
                        rows={3}
                        className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                        placeholder="Allergies, special occasion, seat preference..."
                    />
                </div>

                <div className="pt-4">
                    <Button type="submit" className="w-full" size="lg" isLoading={isLoading}>
                        Confirm Reservation
                    </Button>
                    <p className="text-xs text-center text-white/40 mt-4">
                        By booking, you agree to our Terms of Service. Cancellation allowed up to 2 hours before booking.
                    </p>
                </div>
            </form>
        </Card>
    );
}
