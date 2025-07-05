import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Github, Linkedin, ArrowRight, Send } from "lucide-react";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_4kahhrh',
        'template_d9zphuj',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'liqLmhGDR-zgKU4am'
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      label: "Email",
      value: "modsohrabali@gmail.com",
      href: "mailto:modsohrabali@gmail.com",
      icon: "📧"
    },
    {
      label: "Phone",
      value: "+91 9918570519",
      href: "tel:+919918570519",
      icon: "📱"
    },
    {
      label: "Location",
      value: "Chennai, India",
      href: "#",
      icon: "📍"
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-primary/30 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Let's <span className="text-gradient-primary">Connect</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to collaborate on innovative AI and robotics projects? Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <Card className="p-8 bg-white/10 backdrop-blur-lg border-white/20 hover:border-white/30 transition-all">
              <h3 className="text-2xl font-semibold mb-6 text-white">Get In Touch</h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <a 
                    key={index}
                    href={info.href}
                    className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all hover-lift group"
                  >
                    <span className="text-2xl">{info.icon}</span>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-medium group-hover:text-accent transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="flex gap-4">
                <a 
                  href="https://github.com/Sohrab789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button variant="tech" className="w-full bg-white/10 hover:bg-white/20 text-white border-white/20">
                    <Github className="mr-2 h-5 w-5" />
                    GitHub
                  </Button>
                </a>
                <a 
                  href="https://linkedin.com/in/sohrab-ali-241ba072"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button variant="tech" className="w-full bg-white/10 hover:bg-white/20 text-white border-white/20">
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </Button>
                </a>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <Card className="p-8 bg-white/10 backdrop-blur-lg border-white/20 hover:border-white/30 transition-all">
              <h3 className="text-2xl font-semibold mb-6 text-white">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-gray-300">Name</Label>
                  <Input 
                    id="name" 
                    name="name"
                    type="text" 
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className="mt-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-300">Email</Label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="mt-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</Label>
                  <Input 
                    id="subject" 
                    name="subject"
                    type="text" 
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    className="mt-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-gray-300">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or inquiry..."
                    rows={5}
                    className="mt-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full group"
                  disabled={isSubmitting}
                >
                  <Send className="mr-2 h-4 w-4" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 animate-fade-in">
          <Card className="p-8 bg-white/10 backdrop-blur-lg border-white/20">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-gradient-primary mb-2">3+</div>
                <div className="text-gray-300 text-sm">Years Research</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient-primary mb-2">15+</div>
                <div className="text-gray-300 text-sm">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient-primary mb-2">2</div>
                <div className="text-gray-300 text-sm">Competition Wins</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient-primary mb-2">9.27</div>
                <div className="text-gray-300 text-sm">Current CGPA</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;