import { Github, Linkedin, Mail, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 animate-fade-in">
            <p className="text-accent text-lg font-medium mb-2">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Pragyan Singh
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
              Machine Learning Engineer
            </h2>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Specializing in NLP, GenAI, and building enterprise-grade ML solutions. 
            Passionate about transforming complex problems into scalable AI systems.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Button onClick={() => scrollToSection("contact")} size="lg" className="shadow-glow">
              Get in Touch
            </Button>
            <Button onClick={() => scrollToSection("projects")} size="lg" variant="secondary">
              View Projects
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/singhpragyan21"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/pragyan-singh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://medium.com/@singhpragyan21"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <BookOpen size={24} />
            </a>
            <a
              href="mailto:singhpragyan21@gmail.com"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
