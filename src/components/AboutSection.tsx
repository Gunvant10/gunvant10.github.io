import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, User, Target } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              About Me
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          {/* Main Bio */}
          <Card className="card-gradient border-border/50 mb-12 animate-fade-in [animation-delay:0.2s]">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Data Scientist with <span className="text-primary font-semibold">5 years of experience</span> in 
                    Machine Learning, Computer Vision, Natural Language Processing & Reinforcement Learning. 
                    Currently working on large language models, generative AI, and agentic frameworks to push 
                    the boundaries of AI capabilities.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="card-gradient border-border/50 mb-12 animate-fade-in [animation-delay:0.4s]">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Education</h3>
                  <div className="space-y-2">
                    <h4 className="font-medium text-primary">Bachelor of Technology (B.Tech)</h4>
                    <p className="text-muted-foreground">JSPM's Rajarshi Shahu College of Engineering, Pune</p>
                    <p className="text-sm text-muted-foreground">2016 – 2020</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Current Focus */}
          <Card className="card-gradient border-border/50 animate-fade-in [animation-delay:0.6s]">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Current Focus</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium text-primary">Research Areas</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Large Language Models (LLMs)</li>
                        <li>• Generative AI Applications</li>
                        <li>• Agentic AI Frameworks</li>
                        <li>• Retrieval-Augmented Generation</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-primary">Technical Expertise</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Computer Vision Systems</li>
                        <li>• Natural Language Processing</li>
                        <li>• Reinforcement Learning</li>
                        <li>• Predictive Analytics</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;