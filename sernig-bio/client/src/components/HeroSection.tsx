
const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Hero Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/226b42de-b0b2-4dae-b2b4-8565db724707.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Large SERNIG Caption */}
      <div className="relative z-10 text-center">
        <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-black text-white tracking-tight leading-none animate-fade-in-up">
          SERNIG
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
