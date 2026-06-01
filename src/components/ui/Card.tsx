interface CardProps {
  title: string;
  description: string;
  icon?: string; // Bisa diisi emoji atau path gambar ikon oranye di Figma
}

export const Card = ({ title, description, icon = "🌐" }: CardProps) => {
  return (
    <div className="bg-[#18181C] border border-gray-800/60 p-6 rounded-2xl hover:border-[#FF6B35]/40 transition-all duration-300 group">
      <div className="w-12 h-12 rounded-xl bg-[#25252D] flex items-center justify-center text-xl mb-4 group-hover:bg-[#FF6B35]/10 group-hover:text-[#FF6B35] transition-colors">
        {icon}
      </div>
      <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
};