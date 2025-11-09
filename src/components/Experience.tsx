import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin } from "lucide-react";

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
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Experience</h2>
        <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12" />

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 hover:shadow-glow transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-1">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <Briefcase size={16} />
                    <span className="font-semibold">{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
                <span className="text-sm text-muted-foreground mt-2 md:mt-0">{exp.period}</span>
              </div>

              <ul className="space-y-2 mb-4">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-muted-foreground flex items-start gap-2">
                    <span className="text-accent mt-1.5">▸</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, idx) => (
                  <Badge key={idx} variant="secondary">
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

export default Experience;
