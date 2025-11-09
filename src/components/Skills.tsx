import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Code2, Database, Cloud, Wrench, Cpu, GitBranch } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    color: "from-purple-500 to-pink-500",
    skills: ["Python", "C/C++", "SQL"],
  },
  {
    title: "ML & AI",
    icon: Cpu,
    color: "from-blue-500 to-cyan-500",
    skills: [
      "NLP", "GenAI", "Deep Learning", "LLMs", "RAG", 
      "PyTorch", "TensorFlow", "scikit-learn", 
      "HuggingFace", "LangChain", "OpenAI"
    ],
  },
  {
    title: "Frameworks",
    icon: Wrench,
    color: "from-green-500 to-emerald-500",
    skills: [
      "FastAPI", "Flask", "pandas", "NumPy", 
      "spaCy", "NLTK", "asyncio"
    ],
  },
  {
    title: "Data & Search",
    icon: Database,
    color: "from-orange-500 to-red-500",
    skills: [
      "MySQL", "Redis", "ElasticSearch", 
      "FAISS", "Milvus", "ChromaDB"
    ],
  },
  {
    title: "MLOps & Cloud",
    icon: Cloud,
    color: "from-indigo-500 to-purple-500",
    skills: [
      "Docker", "Kubernetes", "MLflow", "CI/CD",
      "Prometheus", "Grafana", "AWS", "Databricks"
    ],
  },
  {
    title: "DevOps",
    icon: GitBranch,
    color: "from-pink-500 to-rose-500",
    skills: [
      "Git", "Redis Streams", "OpenTelemetry",
      "PySpark", "S3", "EC2", "Lambda"
    ],
  },
];

const Skills = () => {
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
    <section ref={sectionRef} id="skills" className="py-32 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gradient">Skills & Technologies</h2>
          <div className="w-24 h-1.5 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit for building scalable ML solutions
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className={`p-6 backdrop-blur-sm bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-glow group cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 bg-gradient-to-br ${category.color} rounded-2xl group-hover:shadow-glow-accent transition-shadow`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                        hoveredIndex === index
                          ? 'bg-primary/20 text-primary border border-primary/30'
                          : 'bg-secondary text-secondary-foreground border border-transparent'
                      }`}
                    >
                      {skill}
                    </div>
                  ))}
                </div>

                {/* Skill count badge */}
                <div className="mt-4 pt-4 border-t border-border/50">
                  <span className="text-sm text-muted-foreground">
                    <span className="text-primary font-bold text-lg">{category.skills.length}</span> technologies
                  </span>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Stats */}
        <div className={`max-w-4xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { label: "Languages", value: "3+" },
            { label: "ML Tools", value: "20+" },
            { label: "Cloud Services", value: "10+" },
            { label: "Years Experience", value: "2+" },
          ].map((stat, index) => (
            <Card key={index} className="p-6 text-center backdrop-blur-sm bg-card/50 border-border/50 hover:border-primary/30 transition-all hover:shadow-glow">
              <div className="text-4xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
