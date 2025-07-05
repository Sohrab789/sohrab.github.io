import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import profilePicture from "@/assets/profile-picture.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-primary/40 rounded-full blur-2xl animate-pulse-glow"></div>
      </div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-block mb-4">
              <span className="text-accent text-sm font-medium tracking-wider uppercase">
                AI Researcher
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Mohd Sohrab </span>
              <span className="text-gradient-primary">Ali</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
              Marine Robotics researcher at IIT Madras, building intelligent marine systems 
              using AI and Reinforcement Learning for real-world applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="hero" size="xl" className="group">
                View My Work
                <ArrowDown className="ml-2 h-5 w-5 group-hover:animate-bounce" />
              </Button>
              <Button variant="tech" size="xl">
                Download Resume
              </Button>
            </div>
            
            <div className="flex justify-center lg:justify-start gap-6">
              <a 
                href="https://github.com/Sohrab789" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all hover:scale-110 hover:glow-accent"
              >
                <Github className="h-6 w-6 text-white" />
              </a>
              <a 
                href="https://linkedin.com/in/sohrab-ali-241ba072" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all hover:scale-110 hover:glow-accent"
              >
                <Linkedin className="h-6 w-6 text-white" />
              </a>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative w-80 h-80 mx-auto">
              {/* Glowing ring effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-75 blur-xl animate-pulse-glow"></div>
              <div className="absolute inset-4 rounded-full bg-gradient-primary opacity-50 blur-lg"></div>
              
              {/* Profile image */}
              <div className="relative z-10 w-full h-full rounded-full bg-gradient-card border-4 border-primary/50 overflow-hidden shadow-2xl">
                <img 
                  src={profilePicture} 
                  alt="Mohd Sohrab Ali" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating tech elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/80 rounded-lg flex items-center justify-center shadow-lg animate-float">
                <span className="text-white font-bold text-xs">AI</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/80 rounded-lg flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
                <span className="text-white font-bold text-xs">ML</span>
              </div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary/80 rounded-lg flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-white font-bold text-xs">RL</span>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-16 bg-muted/80 rounded-lg flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '1.5s' }}>
                <span className="text-white font-bold text-xs">Robotics</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-white/70" />
      </div>
    </section>
  );
};

export default Hero;