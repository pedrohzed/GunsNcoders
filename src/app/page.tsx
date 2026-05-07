import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import DonationSection from '@/components/DonationSection';
import DestinoSection from '@/components/DestinoSection';
import TeamSection from '@/components/TeamSection';
import SocialMedia, { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <DestinoSection />
      <DonationSection />
      <TeamSection />
      <SocialMedia />
      <Footer />
    </main>
  );
}
