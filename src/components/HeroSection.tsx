import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Mail } from 'lucide-react';
import profileImage from '@/assets/profile-photo.jpg';
const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          

          {/* Main Title */}
          <div className="mb-6 animate-fade-in [animation-delay:0.2s]">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Hi, I'm <span className="text-gradient">Gunvant Patil</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-4">
              Senior Data Scientist | ML, CV, NLP & Generative AI
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in [animation-delay:0.4s]">
            Passionate about building AI solutions that push the boundaries of innovation. 
            Specializing in machine learning, computer vision, and cutting-edge generative AI technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in [animation-delay:0.6s]">
            <Button size="lg" className="glow-accent hover:animate-glow-pulse" onClick={() => scrollToSection('about')}>
              <ArrowDown className="mr-2 h-4 w-4" />
              Explore My Work
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.open('#', '_blank')}>
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>

          {/* Contact CTA */}
          <div className="animate-fade-in [animation-delay:0.8s]">
            <Button variant="ghost" onClick={() => scrollToSection('contact')} className="text-primary hover:text-primary-foreground hover:bg-primary">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>;
};
export default HeroSection;