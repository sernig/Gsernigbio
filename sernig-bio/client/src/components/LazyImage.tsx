import { useState, useRef, useEffect } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: React.ReactNode;
}

const LazyImage = ({ src, alt, className = '', placeholder }: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && placeholder && (
        <div className="absolute inset-0 flex items-center justify-center">
          {placeholder}
        </div>
      )}
      <img
        ref={imgRef}
        src={isInView ? src : ''}
        alt={alt}
        onLoad={handleLoad}
        className={`w-full h-full object-cover lazy-image ${
          isLoaded ? 'loaded' : 'loading'
        }`}
        loading="lazy"
      />
    </div>
  );
};

export default LazyImage;