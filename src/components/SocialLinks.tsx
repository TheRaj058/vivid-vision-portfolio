import { Facebook, Instagram } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-50">
      <a
        href="https://www.facebook.com/sharadraj.aryal.5/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-white rounded-full shadow-lg hover:bg-primary hover:scale-110 active:scale-95 transition-all duration-200 group"
      >
        <Facebook size={24} className="text-gray-700 group-hover:text-white transition-colors" />
      </a>
      <a
        href="https://www.instagram.com/aryalsharadraj/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-white rounded-full shadow-lg hover:bg-primary hover:scale-110 active:scale-95 transition-all duration-200 group"
      >
        <Instagram size={24} className="text-gray-700 group-hover:text-white transition-colors" />
      </a>
    </div>
  );
};

export default SocialLinks;