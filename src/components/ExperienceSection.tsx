import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Calendar, ChevronRight } from 'lucide-react';

const ExperienceSection = () => {
  const projects = [
    {
      title: "Survey Insights Summarizer & RAG Framework",
      description: "Developed an LLM-powered system to summarize user survey feedback and extract key insights. Built a retrieval-augmented generation (RAG) pipeline and a knowledge graph-based RAG POC to improve retrieval efficiency.",
      technologies: ["LLMs", "RAG", "Knowledge Graphs", "NLP"]
    },
    {
      title: "App Placement using Recommender Systems",
      description: "Built a multi-armed bandit recommender system to personalize content ordering and solve cold start issues.",
      technologies: ["Recommender Systems", "Multi-Armed Bandits", "Python", "ML"]
    },
    {
      title: "Growers and Reducers Model",
      description: "Created a modeling ensemble to identify asset behavior (growth/reduction) using behavioral and interaction data.",
      technologies: ["Ensemble Learning", "Behavioral Analytics", "Feature Engineering"]
    },
    {
      title: "Explainable AI Library",
      description: "Built an internal library to auto-generate HTML model explanation reports (classification/regression) with support for PyTorch, TensorFlow, and Scikit-learn.",
      technologies: ["XAI", "PyTorch", "TensorFlow", "Scikit-learn", "HTML Reports"]
    },
    {
      title: "Lead Generation Framework",
      description: "Designed a generic deep learning lead scoring framework with embedding-based sequential input and customizable metrics.",
      technologies: ["Deep Learning", "Lead Scoring", "Embeddings", "Sequential Models"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Experience
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          {/* Current Position */}
          <Card className="card-gradient border-border/50 mb-12 animate-fade-in [animation-delay:0.2s]">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-2xl font-bold text-primary">Senior Data Scientist</h3>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      July 2025 – Present
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-4">Bizzfy</h4>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Working on large language models (LLMs), generative AI, and agentic frameworks to push 
                    the boundaries of AI capabilities. Focus on developing cutting-edge AI solutions and 
                    implementing state-of-the-art machine learning models.
                  </p>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold mb-3 text-primary">Key Technologies:</h5>
                    <div className="flex flex-wrap gap-2">
                      {["LLMs", "Generative AI", "Agentic Frameworks", "PyTorch", "Python", "RAG", "NLP"].map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Projects */}
          <div className="mb-8 animate-fade-in [animation-delay:0.4s]">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <ChevronRight className="h-6 w-6 text-primary mr-2" />
              Key Projects
            </h3>
          </div>

          <div className="grid gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="card-gradient border-border/50 hover:border-primary/30 transition-smooth animate-fade-in"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-primary mb-3">{project.title}</h4>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-primary/30 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;