import { useEffect, useRef } from "react";
import { Github, Linkedin, Mail, BookOpen, Sparkles, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.fillStyle = `rgba(139, 92, 246, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    >
      {/* Animated Background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
              <Sparkles className="text-primary" size={16} />
              <span className="text-sm font-medium text-primary">Available for new opportunities</span>
            </div>
            
            <p className="text-accent text-lg font-medium mb-3 tracking-wide uppercase">Hello, I'm</p>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gradient leading-tight">
              Pragyan Singh
            </h1>
            <div className="relative inline-block">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8 relative">
                Machine Learning Engineer
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-primary rounded-full" />
              </h2>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Transforming complex problems into intelligent solutions with{" "}
            <span className="text-primary font-semibold">NLP</span>,{" "}
            <span className="text-primary font-semibold">GenAI</span>, and{" "}
            <span className="text-primary font-semibold">scalable ML systems</span>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Button 
              onClick={() => scrollToSection("contact")} 
              size="lg" 
              className="shadow-glow hover:shadow-glow-accent transition-all duration-300 text-lg px-8 py-6 group"
            >
              Get in Touch
              <Mail className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button 
              onClick={() => scrollToSection("projects")} 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-6 group backdrop-blur-sm"
            >
              View My Work
              <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" size={20} />
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 animate-scale-in" style={{ animationDelay: "0.6s" }}>
            {[
              { icon: Github, href: "https://github.com/singhpragyan21", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/pragyan-singh", label: "LinkedIn" },
              { icon: BookOpen, href: "https://medium.com/@singhpragyan21", label: "Medium" },
              { icon: Mail, href: "mailto:singhpragyan21@gmail.com", label: "Email" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group relative p-4 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
                aria-label={social.label}
              >
                <social.icon className="text-foreground group-hover:text-primary transition-colors" size={24} />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-full transition-opacity" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </button>
    </section>
  );
};

export default Hero;
