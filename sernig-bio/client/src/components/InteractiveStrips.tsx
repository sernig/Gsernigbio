
import { useState } from 'react';

const InteractiveStrips = () => {
  const [hoveredStrip, setHoveredStrip] = useState<number | null>(null);

  const strips = [
    {
      id: 1,
      title: 'about',
      image: '/lovable-uploads/44ded00f-f6f2-4046-bbad-b42a251c4242.png',
      content: 'Creative professional with a passion for minimalistic design and powerful storytelling through digital experiences.'
    },
    {
      id: 2,
      title: 'web designer',
      image: '/lovable-uploads/a7f1551b-5a2e-411c-a3e3-63b53ffb5f89.png',
      content: 'Crafting beautiful, user-centered designs that combine aesthetics with functionality to create memorable digital experiences.'
    },
    {
      id: 3,
      title: 'web developer',
      image: '/lovable-uploads/d10fecbc-0f69-4291-bd5e-759e5f1172d0.png',
      content: 'Building robust, scalable web applications using modern technologies and best practices for optimal performance.'
    },
    {
      id: 4,
      title: 'copywriter',
      image: '/lovable-uploads/875a3cfe-91f6-42f6-92da-1213c8178549.png',
      content: 'Writing compelling content that engages audiences and drives action through strategic messaging and storytelling.'
    },
    {
      id: 5,
      title: 'powerlifting coach',
      image: '/lovable-uploads/b0d82462-d0be-4635-813c-4daa343724d4.png',
      content: 'Helping athletes reach their peak performance through personalized training programs and mental strength coaching.'
    }
  ];

  return (
    <section className="pt-8 pb-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl text-center mb-8 text-white font-extrabold">SERNIG'S DOMAIN</h2>
        
        <div className="flex h-[70vh] gap-2">
          {strips.map((strip, index) => (
            <div
              key={strip.id}
              className={`relative overflow-hidden cursor-pointer transition-all duration-500 ease-out ${
                hoveredStrip === index 
                  ? 'flex-[2] brightness-75' 
                  : hoveredStrip !== null 
                    ? 'flex-[0.5] brightness-50' 
                    : 'flex-1'
              }`}
              onMouseEnter={() => setHoveredStrip(index)}
              onMouseLeave={() => setHoveredStrip(null)}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-500 flex items-center justify-center"
                style={{ backgroundImage: `url(${strip.image})` }}
              >
                <div className="absolute inset-0 bg-black/40"></div>
                
                {/* Centered title text */}
                <div className="relative z-10 text-center">
                  <h3 className="text-white font-bold text-xl uppercase tracking-wider transform transition-all duration-300">
                    {strip.title}
                  </h3>
                </div>
              </div>
              
              {/* Hover Content with Smooth Animation */}
              <div className={`absolute inset-0 bg-black/85 backdrop-blur-sm z-20 flex items-center justify-center transition-all duration-300 transform ${
                hoveredStrip === index 
                  ? 'opacity-100 scale-100 translate-y-0' 
                  : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
              }`}>
                <div className="text-center px-8 transform transition-all duration-300 delay-75">
                  <h3 className="text-white font-bold text-2xl uppercase tracking-wider mb-4">
                    {strip.title}
                  </h3>
                  <p className="text-gray-200 text-lg leading-relaxed">
                    {strip.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveStrips;
