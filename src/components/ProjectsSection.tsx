import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Lightbulb, Zap } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Adaptive Traffic Signal Control",
      description: "Reduced training time across road topologies using shared policy structures and multi-headed attention. Implemented deep Q networks for intelligent traffic light action prediction and optimization.",
      technologies: ["Deep Q Networks", "Reinforcement Learning", "Multi-Head Attention", "Python", "TensorFlow"],
      icon: <Zap className="h-6 w-6" />,
      category: "Reinforcement Learning"
    },
    {
      title: "Real-Time Object Detection & Price Estimation",
      description: "Built a comprehensive webcam-based real-time object detection system that predicts price ranges and shows purchase links using vendor APIs. Features live image processing and commercial integration.",
      technologies: ["Computer Vision", "Object Detection", "OpenCV", "API Integration", "Real-time Processing"],
      icon: <Lightbulb className="h-6 w-6" />,
      category: "Computer Vision"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Projects
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              Innovative projects showcasing expertise in AI, machine learning, and cutting-edge technology solutions.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="card-gradient border-border/50 hover:border-primary/30 transition-smooth hover:glow-accent animate-fade-in"
                style={{ animationDelay: `${0.2 + index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    {/* Project Icon */}
                    <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-primary">
                        {project.icon}
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="flex-1">
                      {/* Category Badge */}
                      <Badge variant="outline" className="border-primary/30 text-primary mb-3">
                        {project.category}
                      </Badge>

                      {/* Project Title */}
                      <h3 className="text-xl font-bold mb-3 text-primary">
                        {project.title}
                      </h3>

                      {/* Project Description */}
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 text-sm text-foreground">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Project Actions */}
                      <div className="flex flex-wrap gap-3">
                        <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground">
                          <Github className="h-4 w-4 mr-2" />
                          View Code
                        </Button>
                        <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More Projects CTA */}
          <div className="text-center mt-12 animate-fade-in [animation-delay:0.8s]">
            <Button variant="outline" size="lg" className="glow-accent hover:animate-glow-pulse">
              <Github className="h-4 w-4 mr-2" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;