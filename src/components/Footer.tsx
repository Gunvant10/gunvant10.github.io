import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side - Copyright */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-muted-foreground">
              © {currentYear} Gunvant Patil. Made with{' '}
              <Heart className="inline h-4 w-4 text-red-500 mx-1" />
              and passion for AI.
            </p>
          </div>

          <div className="hidden">
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;