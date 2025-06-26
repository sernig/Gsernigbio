
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MovieQuotes = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const quotes = [
    {
      text: "The path of the righteous man is beset on all sides by the inequities of the selfish and the tyranny of evil men.",
      movie: "Pulp Fiction",
      character: "Jules Winnfield"
    },
    {
      text: "Ernest Hemingway once wrote, 'The world is a fine place and worth fighting for.' I agree with the second part.",
      movie: "Seven",
      character: "Detective Somerset"
    },
    {
      text: "You're not your job, you're not how much money you have in the bank. You're not the car you drive.",
      movie: "Fight Club",
      character: "Tyler Durden"
    },
    {
      text: "Life is like a box of chocolates. You never know what you're gonna get.",
      movie: "Forrest Gump",
      character: "Forrest Gump"
    },
    {
      text: "The greatest enemy will hide in the last place you would ever look.",
      movie: "Revolver",
      character: "Jake Green"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      changeQuote((currentQuote + 1) % quotes.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [currentQuote, quotes.length]);

  const changeQuote = (newIndex: number) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentQuote(newIndex);
      setTimeout(() => setIsAnimating(false), 150);
    }, 150);
  };

  const nextQuote = () => {
    changeQuote((currentQuote + 1) % quotes.length);
  };

  const prevQuote = () => {
    changeQuote((currentQuote - 1 + quotes.length) % quotes.length);
  };

  return (
    <section className="py-24 bg-black relative flex items-center justify-center">
      <div className="w-full h-full flex items-center justify-center px-6">
        <div className="max-w-4xl w-full">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-2xl font-light uppercase tracking-[0.3em] text-white/80">
              Quotes from Cult Films
            </h2>
          </div>
          
          <div className="relative px-16">
            
            {/* Navigation Arrows */}
            <button
              onClick={prevQuote}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center text-gray-500 hover:text-white hover:bg-gray-800/30 rounded-full transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextQuote}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center text-gray-500 hover:text-white hover:bg-gray-800/30 rounded-full transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Quote Content */}
            <div className="text-center">
              <div className={`transition-all duration-300 transform ${
                isAnimating ? 'opacity-0 translate-y-2 scale-95' : 'opacity-100 translate-y-0 scale-100'
              }`}>
                <blockquote className="text-2xl md:text-4xl font-light text-gray-100 mb-8 leading-relaxed">
                  "{quotes[currentQuote].text}"
                </blockquote>
                <div className="text-gray-400 text-lg">
                  <span className="font-medium">{quotes[currentQuote].character}</span>
                  <span className="mx-2">—</span>
                  <span className="italic">{quotes[currentQuote].movie}</span>
                </div>
              </div>
            </div>
            
            {/* Dots Indicator */}
            <div className="flex justify-center items-center space-x-3 mt-12">
              {quotes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => changeQuote(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentQuote ? 'bg-white' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieQuotes;
