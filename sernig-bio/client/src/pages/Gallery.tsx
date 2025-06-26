import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import Navigation from '../components/Navigation';
import { motion } from 'framer-motion';

interface GalleryItem {
  id: number;
  name: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
}

const Gallery = () => {
  const [activeTab] = useState('gallery');
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [, setLocation] = useLocation();

  // Portfolio items showcasing SERNIG's creative work
  const portfolioItems: GalleryItem[] = [
    {
      id: 1,
      name: "Minimalist Brand Systems",
      description: "Clean visual identity design with focus on simplicity and modern aesthetics.",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
      tags: ["Branding", "Minimalism", "Identity"],
      category: "Design"
    },
    {
      id: 2,
      name: "Digital Interface Design",
      description: "User-centered interface design with emphasis on usability and visual hierarchy.",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=600&fit=crop",
      tags: ["UI/UX", "Digital", "Interface"],
      category: "Design"
    },
    {
      id: 3,
      name: "Creative Typography",
      description: "Experimental typography projects exploring form, function, and expression.",
      image: "https://images.unsplash.com/photo-1586953208488-d3e157b8d4d4?w=800&h=600&fit=crop",
      tags: ["Typography", "Creative", "Experimental"],
      category: "Art"
    },
    {
      id: 4,
      name: "Visual Storytelling",
      description: "Narrative-driven visual content combining imagery and design principles.",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop",
      tags: ["Storytelling", "Visual", "Narrative"],
      category: "Art"
    },
    {
      id: 5,
      name: "Motion Design Studies",
      description: "Dynamic motion graphics exploring movement, timing, and visual rhythm.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
      tags: ["Motion", "Animation", "Dynamics"],
      category: "Animation"
    },
    {
      id: 6,
      name: "Abstract Compositions",
      description: "Geometric abstract work focusing on balance, color, and spatial relationships.",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
      tags: ["Abstract", "Geometric", "Composition"],
      category: "Art"
    },
    {
      id: 7,
      name: "Web Experience Design",
      description: "Interactive web experiences with focus on user engagement and modern aesthetics.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      tags: ["Web", "Interactive", "Experience"],
      category: "Development"
    },
    {
      id: 8,
      name: "Editorial Design",
      description: "Layout design for digital and print publications with strong typographic focus.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
      tags: ["Editorial", "Layout", "Publishing"],
      category: "Design"
    },
    {
      id: 9,
      name: "Creative Campaigns",
      description: "Integrated creative campaigns spanning multiple touchpoints and media.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      tags: ["Campaign", "Creative", "Integrated"],
      category: "Branding"
    }
  ];

  // Handle scroll-based animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemId = parseInt(entry.target.getAttribute('data-item-id') || '0');
            setVisibleItems(prev => 
              prev.includes(itemId) ? prev : [...prev, itemId]
            );
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const handleTabClick = (tab: string) => {
    if (tab === 'about') {
      // Add smooth transition before navigation
      document.body.style.transition = 'opacity 0.5s ease-out';
      document.body.style.opacity = '0';
      setTimeout(() => {
        setLocation('/');
      }, 300);
    } else if (tab === 'products') {
      // Add smooth transition before navigation
      document.body.style.transition = 'opacity 0.5s ease-out';
      document.body.style.opacity = '0';
      setTimeout(() => {
        setLocation('/products');
      }, 300);
    } else if (tab === 'contact') {
      // Handle contact tab if needed
      console.log('Contact tab clicked');
    }
  };

  // Reset body opacity on component mount
  useEffect(() => {
    document.body.style.opacity = '1';
    document.body.style.transition = 'none';
  }, []);

  return (
    <motion.div 
      className="min-h-screen bg-black text-white font-inter overflow-x-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Navigation 
        activeTab={activeTab} 
        onTabClick={handleTabClick}
      />
      
      {/* Gallery Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto text-center">
          <motion.h1 
            className="text-6xl md:text-8xl font-light uppercase tracking-wider mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Gallery
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore a curated collection of creative works and projects by SERNIG
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-6 pb-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                data-item-id={item.id}
                className="gallery-item group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={visibleItems.includes(item.id) ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
              >
                <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-lg overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-gray-800/40 hover:scale-105">
                  {/* Image Container */}
                  <div className="aspect-video bg-gray-800 relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        View Project
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-medium mb-3 group-hover:text-white transition-colors duration-300">
                      {item.name}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-3 py-1 text-xs bg-white/10 text-gray-300 rounded-full border border-white/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Gallery;