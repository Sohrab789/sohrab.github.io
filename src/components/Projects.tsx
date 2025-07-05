import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "ASV Rudder Control with LOS Guidance",
      description: "Developed advanced Line-of-Sight guidance system for Autonomous Surface Vehicle navigation with precise rudder control algorithms.",
      technologies: ["Python", "Control Systems", "Marine Robotics", "MATLAB"],
      category: "Marine Robotics",
      status: "Published",
      color: "bg-blue-500"
    },
    {
      title: "Multi-Agent USV Navigation using PPO",
      description: "Implemented Proximal Policy Optimization for coordinated navigation of multiple Unmanned Surface Vehicles in complex marine environments.",
      technologies: ["Python", "PyTorch", "PPO", "Multi-Agent RL"],
      category: "Reinforcement Learning",
      status: "Research",
      color: "bg-green-500"
    },
    {
      title: "Path Following & Collision Avoidance with DQN",
      description: "Deep Q-Network implementation for autonomous path following while ensuring collision avoidance in dynamic marine environments.",
      technologies: ["Python", "Deep RL", "DQN", "OpenCV"],
      category: "AI Navigation",
      status: "Published",
      color: "bg-purple-500"
    },
    {
      title: "Optimizing ASV Control with DDPG",
      description: "Deep Deterministic Policy Gradient approach for optimal control of Autonomous Surface Vehicles in various sea conditions.",
      technologies: ["Python", "DDPG", "TensorFlow", "Control Theory"],
      category: "Reinforcement Learning",
      status: "Research",
      color: "bg-orange-500"
    },
    {
      title: "Deep Learning Image Captioning",
      description: "CNN-LSTM based architecture for automatic generation of descriptive captions for marine and underwater imagery.",
      technologies: ["Python", "CNN", "LSTM", "Computer Vision"],
      category: "Computer Vision",
      status: "Completed",
      color: "bg-teal-500"
    },
    {
      title: "Predictive Modeling with YOLOv8 & LLM APIs",
      description: "Integration of YOLOv8 object detection with Large Language Model APIs for intelligent marine environment analysis.",
      technologies: ["Python", "YOLOv8", "LLM APIs", "REST APIs"],
      category: "AI Integration",
      status: "Completed",
      color: "bg-red-500"
    }
  ];

  const achievements = [
    {
      title: "1st Place - Virtual RobotX Robonation, USA",
      description: "Led team to victory in international autonomous marine robotics competition",
      year: "2024"
    },
    {
      title: "1st Place - AI in Disaster Management, IIT Guwahati",
      description: "Developed AI solution for disaster response and management systems",
      year: "2023"
    },
    {
      title: "IEEE Publication - Underwater Technology Symposium",
      description: "Research paper on RL-based Collision Avoidance for ASVs accepted",
      year: "2025"
    }
  ];

  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Projects & <span className="text-gradient-primary">Research</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cutting-edge research and development in AI-driven marine robotics
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden bg-gradient-card border-primary/20 hover:border-primary/40 transition-all hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Category Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className={`px-3 py-1 ${project.color} text-white text-xs font-semibold rounded-full`}>
                  {project.category}
                </span>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className={`text-sm font-medium ${
                    project.status === 'Published' ? 'text-green-600' :
                    project.status === 'Research' ? 'text-blue-600' : 'text-orange-600'
                  }`}>
                    {project.status}
                  </span>
                  <Button variant="ghost" size="sm" className="group/btn">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Achievements Section */}
        <Card className="p-8 bg-gradient-card border-primary/20 animate-fade-in">
          <h3 className="text-2xl font-semibold mb-8 text-center text-primary">
            Major Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-lg bg-background/50 hover:bg-background/70 transition-all hover-lift"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">{achievement.title}</h4>
                <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                <span className="text-xs text-primary font-medium">{achievement.year}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-lg text-muted-foreground mb-6">
            Want to see more of my work or collaborate on a project?
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="hero" size="lg" className="group">
              <Github className="mr-2 h-5 w-5" />
              View GitHub
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="contact" size="lg">
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;