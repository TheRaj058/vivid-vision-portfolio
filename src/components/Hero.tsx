import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary-light text-white">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 animate-fade-up">
            Hi, I'm Sharad Raj Aryal
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-gray-200 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Web Developer & Graphic Designer
          </p>
          <div className="animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 bg-accent text-primary font-semibold rounded-full hover:bg-accent-dark transition-colors"
            >
              View My Work
              <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;