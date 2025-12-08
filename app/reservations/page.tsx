import { ReservationForm } from '@/components/forms/ReservationForm';
import { SectionTitle } from '@/components/ui/SectionTitle';

export default function ReservationsPage() {
    return (
        <div className="min-h-screen pt-24 pb-12 relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 md:mb-6">Reservations</h1>
                    <p className="text-base md:text-xl text-white/60 max-w-2xl mx-auto">
                        Book your table for an unforgettable dining experience.
                        For parties larger than 10, please contact us directly.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <ReservationForm />
                </div>
            </div>
        </div>
    );
}
