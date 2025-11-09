import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Enterprise Document Search & Q&A System",
    description:
      "Built a comprehensive RAG-based system supporting multiple document formats with hybrid retrieval (dense + sparse), LLM re-ranking, and multilingual support for 23 languages. Achieved 55% improvement in context relevance.",
    tags: ["RAG", "NLP", "LangChain", "Vector DBs", "Multilingual"],
    link: null,
  },
  {
    title: "No-Code Multi-Modal ML Training Studio",
    description:
      "Developed a production-ready training platform supporting text, image, and audio modalities with DDP/FSDP/DeepSpeed integration. Features live dashboards, alerts, and comprehensive monitoring for throughput and loss metrics.",
    tags: ["PyTorch", "DDP", "DeepSpeed", "MLOps", "Monitoring"],
    link: null,
  },
  {
    title: "Intelligent Document Classification System",
    description:
      "Implemented a 4-level classifier combining taxonomy, semantic matching, and LLM capabilities to pre-filter document candidates, significantly reducing tokens and latency in RAG search operations.",
    tags: ["Classification", "LLM", "Optimization", "NLP"],
    link: null,
  },
  {
    title: "Model Quantization Pipeline",
    description:
      "Applied AWQ/GPTQ post-training quantization techniques along with QAT and runtime quantization, achieving ~77% memory reduction with minimal quality impact for large language models.",
    tags: ["Quantization", "AWQ", "GPTQ", "Optimization"],
    link: null,
  },
  {
    title: "Kubernetes ML Deployment Platform",
    description:
      "Built one-click deployment system to Kubernetes with MLflow-tracked versions, KPIs tracking (TTFT, throughput, perplexity), and zero-downtime rollouts using Docker and Kubernetes orchestration.",
    tags: ["Kubernetes", "MLflow", "Docker", "DevOps"],
    link: null,
  },
  {
    title: "SQL Lineage Extraction with LLMs",
    description:
      "Designed an LLM-based SQL lineage extractor using chain-of-thought and few-shot prompting, generating interpretable networkx graphs with 93% accuracy for data lineage tracking.",
    tags: ["LLM", "SQL", "Graph Analytics", "Chain-of-Thought"],
    link: null,
  },
  {
    title: "FDA Safety Analytics Dashboard",
    description:
      "Built a comprehensive analytics platform clustering post-drug adverse-event symptoms using k-means, with continuous training on AWS SageMaker and elastic compute via AWS Lambda.",
    tags: ["AWS", "SageMaker", "Clustering", "Analytics"],
    link: null,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Projects</h2>
        <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12" />

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-glow transition-shadow flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
              <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <Badge key={idx} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
