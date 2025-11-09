import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      
      <footer className="relative bg-secondary/50 backdrop-blur-sm py-12 border-t border-border/50">
        <div className="absolute inset-0 bg-gradient-mesh opacity-5" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <p className="text-muted-foreground mb-2">
            Designed & Built by <span className="text-primary font-semibold">Pragyan Singh</span>
          </p>
          <p className="text-sm text-muted-foreground/70">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
