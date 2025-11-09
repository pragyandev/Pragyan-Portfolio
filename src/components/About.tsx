import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Code2, Brain, Rocket } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: Brain,
      title: "AI Innovation",
      description: "Building cutting-edge NLP and GenAI solutions with 55% improvement in context relevance",
    },
    {
      icon: Code2,
      title: "Full-Stack ML",
      description: "End-to-end ML lifecycle expertise from training to production deployment",
    },
    {
      icon: Rocket,
      title: "Scale & Performance",
      description: "Optimizing models with 77% memory reduction while maintaining quality",
    },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-32 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gradient">About Me</h2>
            <div className="w-24 h-1.5 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card 
                  key={index} 
                  className="p-6 backdrop-blur-sm bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow group perspective-card"
                >
                  <div className="p-4 bg-gradient-primary rounded-2xl w-fit mb-4 group-hover:shadow-glow-accent transition-shadow">
                    <Icon className="text-primary-foreground" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </Card>
              );
            })}
          </div>

          <Card className={`p-8 md:p-12 backdrop-blur-sm bg-card/50 border-border/50 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a Machine Learning Engineer with a passion for building intelligent systems that solve real-world problems. 
                Currently at <span className="text-primary font-semibold">Attentions.ai</span>, I specialize in developing 
                enterprise-grade document search and question-answering systems using cutting-edge NLP and GenAI technologies.
              </p>
              <p>
                My expertise spans the entire ML lifecycle - from architecting scalable RAG systems and implementing hybrid 
                retrieval pipelines to deploying production-ready models with zero-downtime on Kubernetes. I've improved 
                context relevance by 55% and built multilingual Q&A systems supporting 23 languages.
              </p>
              <p>
                I graduated from the <span className="text-primary font-semibold">Indian Institute of Information Technology</span> 
                with a degree in Electronics and Communication Engineering. When I'm not training models or optimizing 
                inference pipelines, I enjoy writing about ML on Medium and contributing to open-source projects.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
