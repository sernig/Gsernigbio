
import { useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface VideoSectionProps {
  visible: boolean;
}

const VideoSection = ({ visible }: VideoSectionProps) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Convert YouTube URL to embed format
  const youtubeEmbedUrl = "https://www.youtube.com/embed/MZwj4Am2uvE?autoplay=1&loop=1&mute=1&controls=0&playlist=MZwj4Am2uvE&start=1";

  return (
    <section className={`relative h-screen bg-black transition-all duration-1000 ease-in-out transform ${
      visible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-8'
    }`}>
      <div className="absolute inset-0">
        <iframe
          className="w-full h-full object-cover"
          src={youtubeEmbedUrl}
          title="Background Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ pointerEvents: 'none' }}
        />
        
        {/* Sound Toggle - Note: YouTube iframe doesn't allow external mute control */}
        <button
          onClick={toggleMute}
          className="absolute bottom-8 left-8 p-3 bg-black/50 rounded-full hover:bg-black/70 transition-all duration-300 group"
        >
          <VolumeX className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default VideoSection;
