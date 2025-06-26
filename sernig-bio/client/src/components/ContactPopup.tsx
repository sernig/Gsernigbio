
import { Instagram, Youtube, Twitch } from 'lucide-react';

interface ContactPopupProps {
  visible: boolean;
  onClose: () => void;
}

const ContactPopup = ({ visible, onClose }: ContactPopupProps) => {
  if (!visible) return null;

  const socialLinks = [
    {
      name: 'Telegram',
      icon: '📱',
      url: 'https://t.me/sernig',
      color: 'hover:bg-blue-500'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-8 h-8" />,
      url: 'https://instagram.com/sernig',
      color: 'hover:bg-pink-500'
    },
    {
      name: 'Boosty',
      icon: '🚀',
      url: 'https://boosty.to/sernig',
      color: 'hover:bg-orange-500'
    },
    {
      name: 'YouTube',
      icon: <Youtube className="w-8 h-8" />,
      url: 'https://youtube.com/@sernig',
      color: 'hover:bg-red-500'
    },
    {
      name: 'Twitch',
      icon: <Twitch className="w-8 h-8" />,
      url: 'https://twitch.tv/sernig',
      color: 'hover:bg-purple-500'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div className="relative z-10 animate-pop-up">
        <div className="flex flex-wrap justify-center gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center justify-center w-20 h-20 bg-gray-800 rounded-full transition-all duration-300 transform hover:scale-110 ${link.color}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {typeof link.icon === 'string' ? (
                <span className="text-2xl">{link.icon}</span>
              ) : (
                <div className="text-white">{link.icon}</div>
              )}
              <span className="text-xs text-white mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                {link.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPopup;
