
import { useState } from 'react';

const EmbraceSimplicityBanner = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-32 bg-black">
      <div 
        className="relative h-40 flex items-center justify-center cursor-pointer transition-all duration-500"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Main Text */}
        <h2 className={`text-6xl font-black transition-all duration-500 ${
          isHovered ? 'text-white blur-none' : 'text-gray-800 blur-sm'
        }`}>
          EMBRACE SIMPLICITY
        </h2>
      </div>
    </section>
  );
};

export default EmbraceSimplicityBanner;
