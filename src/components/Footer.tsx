import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gradient-primary mb-2">
              Mohd Sohrab Ali
            </h3>
            <p className="text-muted-foreground text-sm">
              Marine Robotics Researcher & AI Enthusiast
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <div className="flex justify-center gap-6 text-sm">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold mb-4 text-foreground">Connect</h4>
            <div className="flex justify-center md:justify-end gap-4">
              <a 
                href="https://github.com/Sohrab789"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/sohrab-ali-241ba072"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Mohd Sohrab Ali. All rights reserved. | 
            <span className="text-primary"> Pursuing Excellence in Marine Robotics & AI</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;