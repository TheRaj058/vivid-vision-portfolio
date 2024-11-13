import { Github, Linkedin, Facebook, Instagram } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-50">
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
      >
        <Github size={24} className="text-gray-700" />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
      >
        <Linkedin size={24} className="text-gray-700" />
      </a>
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
      >
        <Facebook size={24} className="text-gray-700" />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
      >
        <Instagram size={24} className="text-gray-700" />
      </a>
    </div>
  );
};

export default SocialLinks;