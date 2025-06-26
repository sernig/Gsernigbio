// Custom minimalistic muted icons for banner
const TelegramIconBanner = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M2 12L22 2L18 22L12 18L8 14L2 12Z" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      fill="none"
    />
    <path 
      d="M22 2L12 18" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round"
    />
  </svg>
);

const BoostyIconBanner = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle 
      cx="12" 
      cy="12" 
      r="9" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      fill="none"
    />
    <path 
      d="M8 12L12 8L16 12L12 16L8 12Z" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const InstagramIconBanner = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect 
      x="2" 
      y="2" 
      width="20" 
      height="20" 
      rx="5" 
      ry="5" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      fill="none"
    />
    <circle 
      cx="12" 
      cy="12" 
      r="4" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      fill="none"
    />
    <circle 
      cx="18" 
      cy="6" 
      r="1" 
      fill="currentColor"
    />
  </svg>
);

const SocialMediaBanner = () => {
  const socialLinks = [
    {
      name: 'Telegram',
      icon: <TelegramIconBanner />,
      url: 'https://t.me/budnisernig',
    },
    {
      name: 'Boosty',
      icon: <BoostyIconBanner />,
      url: 'https://boosty.to/men_legacy',
    },
    {
      name: 'Instagram',
      icon: <InstagramIconBanner />,
      url: 'https://www.instagram.com/ser_nig/',
    }
  ];

  return (
    <div className="w-full bg-black border-t border-white/10">
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-center items-center space-x-12">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-16 h-16 text-white/50 hover:text-white/90 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
            >
              <div className="transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                {link.icon}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialMediaBanner;