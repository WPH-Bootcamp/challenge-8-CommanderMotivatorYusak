import { Navbar } from '../components/layout/Navbar';
import { Hero } from '../components/sections/Hero';
import { Services } from '../components/sections/Services';
import { Faq } from '../components/sections/Faq'

export const Home = () => {
  return (
    <div className="bg-[#0F0F12] min-h-screen selection:bg-[#FF6B35]/30">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Faq />
        {/* Tambahkan section Portfolio, Testimonial, dan Form Kontak di bawah ini */}
      </main>
    </div>
  );
};