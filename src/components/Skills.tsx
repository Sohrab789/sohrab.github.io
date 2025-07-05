import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: "Expert", color: "bg-blue-500" },
        { name: "C++", level: "Advanced", color: "bg-green-500" },
        { name: "MATLAB", level: "Advanced", color: "bg-orange-500" },
        { name: "SQL", level: "Intermediate", color: "bg-purple-500" },
        { name: "HTML/CSS", level: "Intermediate", color: "bg-red-500" }
      ]
    },
    {
      title: "AI/ML Frameworks",
      skills: [
        { name: "PyTorch", level: "Expert", color: "bg-orange-600" },
        { name: "Keras", level: "Advanced", color: "bg-red-600" },
        { name: "OpenCV", level: "Advanced", color: "bg-blue-600" },
        { name: "YOLO", level: "Advanced", color: "bg-yellow-600" },
        { name: "HuggingFace", level: "Intermediate", color: "bg-purple-600" },
        { name: "Scikit-learn", level: "Advanced", color: "bg-green-600" }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "RayLib", level: "Expert", color: "bg-teal-500" },
        { name: "TensorBoard", level: "Advanced", color: "bg-indigo-500" },
        { name: "Gazebo", level: "Advanced", color: "bg-gray-500" },
        { name: "GitHub", level: "Advanced", color: "bg-gray-700" },
        { name: "Tableau", level: "Intermediate", color: "bg-blue-400" }
      ]
    },
    {
      title: "Specializations",
      skills: [
        { name: "Reinforcement Learning", level: "Expert", color: "bg-primary" },
        { name: "Marine Robotics", level: "Expert", color: "bg-accent" },
        { name: "Path Planning", level: "Advanced", color: "bg-cyan-500" },
        { name: "Control Systems", level: "Advanced", color: "bg-emerald-500" },
        { name: "Computer Vision", level: "Advanced", color: "bg-violet-500" }
      ]
    }
  ];

  const getLevelWidth = (level: string) => {
    switch (level) {
      case "Expert": return "w-full";
      case "Advanced": return "w-4/5";
      case "Intermediate": return "w-3/5";
      default: return "w-2/5";
    }
  };

  return (
    <section className="py-20 bg-muted/30 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Expertise across multiple domains of AI, robotics, and software development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex} 
              className="p-6 bg-gradient-card border-primary/20 hover:border-primary/40 transition-all hover-lift animate-scale-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-6 text-primary">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}</span>
                    </div>
                    <div className="h-2 bg-background rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${skill.color} ${getLevelWidth(skill.level)} transition-all duration-1000 ease-out rounded-full`}
                        style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Soft Skills */}
        <Card className="mt-12 p-8 bg-gradient-card border-primary/20 animate-fade-in">
          <h3 className="text-2xl font-semibold mb-6 text-center text-primary">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Leadership", "Team Collaboration", "Problem Solving", "Communication", "Adaptability", "Project Management"].map((skill, index) => (
              <span 
                key={index}
                className="px-6 py-3 bg-primary/10 text-primary rounded-full font-medium hover:bg-primary/20 transition-colors hover:scale-105 transform"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;