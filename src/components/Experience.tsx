import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Machine Learning Engineer",
    company: "Attentions.ai",
    location: "Pune, India",
    period: "April 2024 – Present",
    highlights: [
      "Built document ingestion supporting .doc, .ppt, .pdf, images, and multi-sheet spreadsheets",
      "Improved context relevance by +55% using semantic chunking and query expansion",
      "Implemented hybrid retrieval (dense + sparse) with LLM re-ranking",
      "Developed 4-level intelligent document classifier reducing tokens and latency",
      "Enabled multilingual Q&A supporting 23 languages",
      "Shipped no-code multi-modal studio with DDP/FSDP/DeepSpeed",
      "Applied AWQ/GPTQ quantization cutting memory by ~77%",
      "Deployed to Kubernetes with MLflow tracking and zero-downtime rollouts",
    ],
    tags: ["NLP", "GenAI", "RAG", "PyTorch", "Kubernetes", "MLflow", "LangChain"],
  },
  {
    title: "Business Technology Solutions Associate",
    company: "ZS Associates",
    location: "Pune, Maharashtra",
    period: "Jun 2023 – Apr 2024",
    highlights: [
      "Built production retrieval & generation stack with LangChain and vector databases",
      "Automated data warehousing with LLMs on Apache Spark/Databricks",
      "Developed LLM-based SQL lineage extractor achieving 93% accuracy",
      "Created hybrid query-matching engine for 1M+ data points",
      "Processed 10,000+ documents using Apache Airflow and Amazon Neptune",
      "Built FDA safety analytics dashboard with k-means clustering on AWS SageMaker",
    ],
    tags: ["Python", "Spark", "Databricks", "AWS", "LangChain", "Vector DBs"],
  },
];

const Experience = () => {
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

  return (
    <section ref={sectionRef} id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gradient">Experience</h2>
          <div className="w-24 h-1.5 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-primary hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex gap-8 items-start relative">
                  {/* Timeline dot */}
                  <div className="hidden md:flex flex-shrink-0 w-16 h-16 rounded-full bg-gradient-primary items-center justify-center relative z-10 shadow-glow">
                    <Briefcase className="text-primary-foreground" size={24} />
                  </div>

                  <Card className="flex-1 p-8 backdrop-blur-sm bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-glow group">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2 group-hover:text-gradient transition-all">
                          {exp.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-2">
                          <div className="flex items-center gap-2">
                            <Briefcase size={18} />
                            <span className="font-semibold">{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={18} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2 lg:mt-0">
                        <Calendar size={18} />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-muted-foreground group-hover:text-foreground transition-colors">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, idx) => (
                        <Badge 
                          key={idx} 
                          variant="secondary"
                          className="hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
