import { useState } from 'react';

// 1. Definisikan interface data FAQ agar Type-Safe
interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export const Faq = () => {
  // State untuk menyimpan ID item yang sedang terbuka (null artinya semua tertutup)
  const [activeId, setActiveId] = useState<number | null>(null);

  // Data Mockup sesuai kebutuhan Company Profile
  const faqData: FaqItem[] = [
    {
      id: 1,
      question: "What services do you provide?",
      answer: "We offer full-stack web development, UI/UX design, mobile application development, and cloud infra solutions tailored to boost your business growth."
    },
    {
      id: 2,
      question: "How long does a typical project take?",
      answer: "A standard landing page or company profile takes around 1-2 weeks, while complex web applications can take 4-8 weeks depending on the features."
    },
    {
      id: 3,
      question: "Do you offer post-project support?",
      answer: "Yes, we provide 3 months of free maintenance and technical support after deployment to ensure everything runs perfectly."
    }
  ];

  const toggleFaq = (id: number) => {
    // Jika item yang diklik sudah terbuka, maka tutup (set null). Jika belum, buka item tersebut.
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section id="faq" className="bg-[#0F0F12] py-24 border-t border-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Frequently Asked <span className="text-[#FF6B35]">Questions</span>
          </h2>
          <p className="text-gray-400 mt-4 text-sm sm:text-base">
            Everything you need to know about our process and workflow.
          </p>
        </div>

        {/* Accordion Wrapper */}
        <div className="space-y-4">
          {faqData.map((item) => {
            const isOpen = activeId === item.id;
            
            return (
              <div 
                key={item.id} 
                className="bg-[#18181C] border border-gray-800 rounded-2xl overflow-hidden transition-all duration-300"
              >
                {/* Tombol Pertanyaan */}
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full flex justify-between items-center p-6 text-left font-semibold text-base sm:text-lg hover:text-[#FF6B35] transition-colors focus:outline-none cursor-pointer"
                >
                  <span>{item.question}</span>
                  {/* Ikon + / - dengan animasi rotasi transisi */}
                  <span className={`text-xl font-mono text-[#FF6B35] transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {/* Konten Jawaban (Hanya muncul jika isOpen bernilai true) */}
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-40 border-t border-gray-800/50 p-6 pt-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};