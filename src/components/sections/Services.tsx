import { Card } from '../ui/Card';

export const Services = () => {
  const listLayanan = [
    { title: "Web Development", description: "Build fast, scalable, and SEO-friendly websites using modern tools.", icon: "💻" },
    { title: "UI/UX Design", description: "Crafting beautiful and high-converting interfaces tailored for your users.", icon: "🎨" },
    { title: "Cloud Solutions", description: "Deploying and managing reliable systems with seamless cloud architecture.", icon: "☁️" }
  ];

  return (
    <section id="services" className="bg-[#0F0F12] py-24 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-white text-3xl sm:text-4xl font-extrabold mb-4">Our Services</h2>
          <p className="text-gray-400">We offer specialized engineering and design solutions to clear up your business roadblocks.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listLayanan.map((item, index) => (
            <Card key={index} title={item.title} description={item.description} icon={item.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};