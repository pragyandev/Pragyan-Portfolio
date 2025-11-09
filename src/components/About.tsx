import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12" />

          <Card className="p-8">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a Machine Learning Engineer with a passion for building intelligent systems that solve real-world problems. 
              Currently at <span className="text-primary font-semibold">Attentions.ai</span>, I specialize in developing 
              enterprise-grade document search and question-answering systems using cutting-edge NLP and GenAI technologies.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              My expertise spans the entire ML lifecycle - from architecting scalable RAG systems and implementing hybrid 
              retrieval pipelines to deploying production-ready models with zero-downtime on Kubernetes. I've improved 
              context relevance by 55% and built multilingual Q&A systems supporting 23 languages.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I graduated from the <span className="text-primary font-semibold">Indian Institute of Information Technology</span> 
              with a degree in Electronics and Communication Engineering. When I'm not training models or optimizing 
              inference pipelines, I enjoy writing about ML on Medium and contributing to open-source projects.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
