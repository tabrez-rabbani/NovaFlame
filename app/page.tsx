import { Hero } from '@/components/home/Hero';
import { FeaturedDishes } from '@/components/home/FeaturedDishes';
import { Testimonials } from '@/components/home/Testimonials';
import { Stats } from '@/components/home/Stats';
import { ChefStory } from '@/components/home/ChefStory';
import { GalleryPreview } from '@/components/home/GalleryPreview';
import { ReservationCTA } from '@/components/home/ReservationCTA';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedDishes />
      <Testimonials />
      <Stats />
      <ChefStory />
      <GalleryPreview />
      <ReservationCTA />
    </div>
  );
}
