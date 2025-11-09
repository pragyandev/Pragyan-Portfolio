import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const Education = () => {
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
    <section ref={sectionRef} id="education" className="py-32 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gradient">Education</h2>
          <div className="w-24 h-1.5 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <Card 
            className={`relative overflow-hidden backdrop-blur-sm bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-glow group ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="p-8 md:p-12 relative z-10">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Icon section */}
                <div className="flex-shrink-0">
                  <div className="p-6 bg-gradient-primary rounded-2xl shadow-glow group-hover:shadow-glow-accent transition-shadow w-fit">
                    <GraduationCap className="text-primary-foreground" size={48} />
                  </div>
                </div>

                {/* Content section */}
                <div className="flex-1">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-primary mb-2 group-hover:text-gradient transition-all">
                      Indian Institute of Information Technology
                    </h3>
                    <p className="text-xl font-semibold text-foreground mb-4">
                      Bachelor of Technology
                    </p>
                    <p className="text-lg text-muted-foreground">
                      Electronics and Communication Engineering
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-6 mb-6">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Calendar size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground/70">Duration</p>
                        <p className="font-medium">August 2019 – May 2023</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-muted-foreground">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <MapPin size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground/70">Location</p>
                        <p className="font-medium">Himachal Pradesh, India</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-muted-foreground">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Award size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground/70">Degree</p>
                        <p className="font-medium">B.Tech</p>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="pt-6 border-t border-border/50">
                    <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                      Key Highlights
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        "Strong foundation in Electronics & Communication",
                        "Specialized in Machine Learning & AI",
                        "Hands-on experience with signal processing",
                        "Graduate-level ML coursework",
                      ].map((highlight, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-sm text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom gradient line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
