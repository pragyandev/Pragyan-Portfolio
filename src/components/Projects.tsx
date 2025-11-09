import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingUp } from "lucide-react";

const projects = [
  {
    title: "Enterprise Document Search & Q&A System",
    description:
      "Built a comprehensive RAG-based system supporting multiple document formats with hybrid retrieval (dense + sparse), LLM re-ranking, and multilingual support for 23 languages. Achieved 55% improvement in context relevance.",
    tags: ["RAG", "NLP", "LangChain", "Vector DBs", "Multilingual"],
    metrics: { improvement: "+55%", languages: "23" },
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "No-Code Multi-Modal ML Training Studio",
    description:
      "Developed a production-ready training platform supporting text, image, and audio modalities with DDP/FSDP/DeepSpeed integration. Features live dashboards, alerts, and comprehensive monitoring for throughput and loss metrics.",
    tags: ["PyTorch", "DDP", "DeepSpeed", "MLOps", "Monitoring"],
    metrics: { modalities: "3", deployment: "1-Click" },
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Intelligent Document Classification System",
    description:
      "Implemented a 4-level classifier combining taxonomy, semantic matching, and LLM capabilities to pre-filter document candidates, significantly reducing tokens and latency in RAG search operations.",
    tags: ["Classification", "LLM", "Optimization", "NLP"],
    metrics: { levels: "4", reduction: "High" },
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Model Quantization Pipeline",
    description:
      "Applied AWQ/GPTQ post-training quantization techniques along with QAT and runtime quantization, achieving ~77% memory reduction with minimal quality impact for large language models.",
    tags: ["Quantization", "AWQ", "GPTQ", "Optimization"],
    metrics: { memory: "-77%", quality: "Maintained" },
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Kubernetes ML Deployment Platform",
    description:
      "Built one-click deployment system to Kubernetes with MLflow-tracked versions, KPIs tracking (TTFT, throughput, perplexity), and zero-downtime rollouts using Docker and Kubernetes orchestration.",
    tags: ["Kubernetes", "MLflow", "Docker", "DevOps"],
    metrics: { downtime: "0", tracking: "Real-time" },
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    title: "SQL Lineage Extraction with LLMs",
    description:
      "Designed an LLM-based SQL lineage extractor using chain-of-thought and few-shot prompting, generating interpretable networkx graphs with 93% accuracy for data lineage tracking.",
    tags: ["LLM", "SQL", "Graph Analytics", "Chain-of-Thought"],
    metrics: { accuracy: "93%", approach: "CoT" },
    gradient: "from-pink-500 to-rose-500",
  },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
    <section ref={sectionRef} id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gradient">Featured Projects</h2>
          <div className="w-24 h-1.5 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            Real-world ML solutions driving measurable impact
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden backdrop-blur-sm bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-glow cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="p-8 relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 bg-gradient-to-br ${project.gradient} rounded-xl shadow-lg`}>
                    <TrendingUp className="text-white" size={24} />
                  </div>
                  <ExternalLink 
                    className={`text-muted-foreground transition-all duration-300 ${
                      hoveredIndex === index ? 'text-primary translate-x-1 -translate-y-1' : ''
                    }`} 
                    size={20} 
                  />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-3 mb-6 pb-6 border-b border-border/50">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary/50 backdrop-blur-sm">
                      <span className="text-xs text-muted-foreground capitalize">{key}:</span>
                      <span className="text-sm font-bold text-primary">{value}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge 
                      key={idx} 
                      variant="secondary"
                      className={`transition-all duration-300 ${
                        hoveredIndex === index 
                          ? 'bg-primary/10 text-primary border border-primary/30' 
                          : ''
                      }`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Bottom gradient line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-lg text-muted-foreground mb-4">
            Interested in collaborating on innovative ML projects?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 bg-gradient-primary text-primary-foreground rounded-xl font-semibold shadow-glow hover:shadow-glow-accent transition-all duration-300 hover:scale-105"
          >
            Let's Build Something Amazing
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
