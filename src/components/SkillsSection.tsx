import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Brain, Wrench } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["Python", "Ruby", "Ruby on Rails", "C++", "SQL"],
      color: "text-blue-400"
    },
    {
      title: "Machine Learning & AI",
      icon: <Brain className="h-6 w-6" />,
      skills: ["PyTorch", "TensorFlow", "Scikit-learn", "OpenCV", "LLMs", "Generative AI", "Computer Vision", "NLP", "Reinforcement Learning"],
      color: "text-purple-400"
    },
    {
      title: "Data Science & Analytics",
      icon: <Database className="h-6 w-6" />,
      skills: ["NumPy", "Pandas", "SciPy", "Matplotlib", "Data Visualization", "Statistical Analysis", "Feature Engineering"],
      color: "text-green-400"
    },
    {
      title: "Tools & Frameworks",
      icon: <Wrench className="h-6 w-6" />,
      skills: ["Git", "Docker", "Jupyter", "RAG Frameworks", "API Development", "MLOps", "Cloud Platforms"],
      color: "text-orange-400"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Skills
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              A comprehensive toolkit of technologies, frameworks, and methodologies for building intelligent systems.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="card-gradient border-border/50 hover:border-primary/30 transition-smooth animate-fade-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center ${category.color}`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-smooth cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Specializations */}
          <div className="mt-16 animate-fade-in [animation-delay:0.6s]">
            <Card className="card-gradient border-border/50">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-6 text-primary">Core Specializations</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-lg">Machine Learning</h4>
                    <p className="text-muted-foreground text-sm">
                      Deep expertise in supervised, unsupervised, and reinforcement learning algorithms
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-lg">Generative AI</h4>
                    <p className="text-muted-foreground text-sm">
                      Advanced work with LLMs, RAG systems, and agentic frameworks
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-lg">Computer Vision</h4>
                    <p className="text-muted-foreground text-sm">
                      Real-time object detection, image processing, and visual recognition systems
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;