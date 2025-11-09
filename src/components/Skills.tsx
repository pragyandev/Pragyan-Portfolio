import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Cloud, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Python", "C/C++", "SQL (MySQL)"],
  },
  {
    title: "ML & AI",
    icon: Wrench,
    skills: [
      "NLP",
      "GenAI",
      "Deep Learning",
      "Large Language Models",
      "RAG",
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "HuggingFace Transformers",
      "LangChain",
      "LlamaIndex",
      "OpenAI",
      "vLLM",
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: Code2,
    skills: [
      "FastAPI",
      "Flask",
      "pandas",
      "NumPy",
      "spaCy",
      "NLTK",
      "asyncio",
    ],
  },
  {
    title: "Data & Search",
    icon: Database,
    skills: [
      "MySQL",
      "Redis",
      "ElasticSearch",
      "Solr",
      "FAISS",
      "Milvus",
      "ChromaDB",
    ],
  },
  {
    title: "MLOps & Cloud",
    icon: Cloud,
    skills: [
      "Docker",
      "Kubernetes",
      "CI/CD",
      "MLflow",
      "Git",
      "Redis Streams",
      "OpenTelemetry",
      "Prometheus",
      "Grafana",
      "PySpark",
      "Databricks",
      "AWS (S3, EC2, ECS, Lambda, SageMaker)",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Skills & Technologies</h2>
        <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12" />

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-glow transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
