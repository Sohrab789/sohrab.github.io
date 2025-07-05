import { Card } from "@/components/ui/card";
const About = () => {
  const stats = [{
    label: "Years of Research",
    value: "3+"
  }, {
    label: "CGPA (M.S.)",
    value: "9.27"
  }, {
    label: "Publications",
    value: "1+"
  }, {
    label: "Projects Completed",
    value: "15+"
  }];
  const interests = ["Marine Robotics", "Reinforcement Learning", "Path Planning", "Control Systems", "Computer Vision", "Deep Learning"];
  return <section className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient-primary">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Passionate researcher bridging the gap between AI and  Engineering</p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* About Me Section */}
            <div className="space-y-8 animate-slide-in-left">
              {/* Achievement Stats */}
              <Card className="p-6 bg-gradient-card border-primary/20">
                <h3 className="text-xl font-semibold mb-6 text-primary">Achievements</h3>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => <div key={index} className="text-center p-4 rounded-lg bg-background/50">
                      <div className="text-2xl font-bold text-gradient-primary">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>)}
                </div>
              </Card>

              {/* Research Interests */}
              <Card className="p-6 bg-gradient-card border-primary/20">
                <h3 className="text-xl font-semibold mb-6 text-primary">Research Interests</h3>
                <div className="flex flex-wrap gap-3">
                  {interests.map((interest, index) => <span key={index} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors">
                      {interest}
                    </span>)}
                </div>
              </Card>

              {/* Education Highlights */}
              <Card className="p-6 bg-gradient-card border-primary/20">
                <h3 className="text-xl font-semibold mb-6 text-primary">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground">M.S. Ocean Engineering</h4>
                    <p className="text-sm text-muted-foreground">IIT Madras • 2025 • CGPA: 9.27</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">B.Tech Civil Engineering</h4>
                    <p className="text-sm text-muted-foreground">Jamia Millia Islamia • 2021 • CGPA: 9.22</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Professional Experience Section */}
            <div className="animate-slide-in-right">
              <Card className="p-8 bg-gradient-card border-primary/20 hover:border-primary/40 transition-all hover-lift h-full">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Professional Experience</h3>
                <div className="space-y-6">
                  <div className="border-l-2 border-primary/30 pl-4">
                    <h4 className="font-semibold text-foreground text-lg">AI Engineer</h4>
                    <p className="text-primary font-medium">Centific</p>
                    <p className="text-sm text-muted-foreground mb-2">July 2025 - Present</p>
                    <p className="text-foreground/80">
                      Working on cutting-edge AI solutions and machine learning implementations for enterprise clients.
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-primary/30 pl-4">
                    <h4 className="font-semibold text-foreground text-lg">Research Scholar</h4>
                    <p className="text-primary font-medium">MAV LAB, IIT Madras</p>
                    <p className="text-sm text-muted-foreground mb-2">Jan 2023 - June 2025</p>
                    <p className="text-foreground/80">
                      Conducting advanced research in Marine Autonomous Vehicles, focusing on AI-driven control systems and reinforcement learning applications.
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-primary/30 pl-4">
                    <h4 className="font-semibold text-foreground text-lg">Digital Learning Solutions Developer</h4>
                    <p className="text-primary font-medium">Magic EdTech</p>
                    <p className="text-sm text-muted-foreground mb-2">Jan 2022 - June 2022</p>
                    <p className="text-foreground/80">
                      Developed innovative digital learning solutions for educational platforms, enhancing user engagement and learning outcomes.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;