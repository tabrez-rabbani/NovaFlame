"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export function ContactForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [sent, setSent] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        await new Promise(r => setTimeout(r, 1000));
        setIsLoading(false);
        setSent(true);
    };

    if (sent) {
        return (
            <Card className="p-8 text-center bg-secondary/80">
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent</h3>
                <p className="text-white/60 mb-6">We'll get back to you shortly.</p>
                <Button onClick={() => setSent(false)} variant="outline">Send Another</Button>
            </Card>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                    required
                    type="text"
                    placeholder="Name"
                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                />
                <input
                    required
                    type="email"
                    placeholder="Email"
                    className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                />
            </div>
            <textarea
                required
                rows={5}
                placeholder="Your Message..."
                className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
            />
            <Button type="submit" size="lg" className="w-full" isLoading={isLoading}>Send Message</Button>
        </form>
    );
}
