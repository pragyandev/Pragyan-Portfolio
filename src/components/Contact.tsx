import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, BookOpen, Send, MapPin } from "lucide-react";

const Contact = () => {
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

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "singhpragyan21@gmail.com",
      link: "mailto:singhpragyan21@gmail.com",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7311123943",
      link: "tel:+917311123943",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@singhpragyan21",
      link: "https://github.com/singhpragyan21",
      gradient: "from-gray-600 to-gray-800",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/pragyan-singh",
      link: "https://linkedin.com/in/pragyan-singh",
      gradient: "from-blue-600 to-blue-800",
    },
    {
      icon: BookOpen,
      label: "Medium",
      value: "@singhpragyan21",
      link: "https://medium.com/@singhpragyan21",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, India",
      link: null,
      gradient: "from-red-500 to-orange-500",
    },
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gradient">Let's Connect</h2>
          <div className="w-24 h-1.5 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            Open to discussing new projects, creative ideas, and opportunities
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className={`p-8 md:p-12 backdrop-blur-sm bg-card/50 border-border/50 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Intro text */}
            <div className="text-center mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                I'm always excited to collaborate on innovative ML projects or discuss how AI can solve complex challenges. 
                Whether you have a question, a project idea, or just want to connect, feel free to reach out!
              </p>
            </div>

            {/* Contact grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                const content = (
                  <div className={`group relative overflow-hidden p-6 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-glow cursor-pointer ${
                    contact.link ? 'hover:-translate-y-1' : ''
                  }`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <div className={`p-4 bg-gradient-to-br ${contact.gradient} rounded-xl shadow-lg mb-4 w-fit group-hover:shadow-glow-accent transition-shadow`}>
                        <Icon className="text-white" size={28} />
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-1 uppercase tracking-wide">
                        {contact.label}
                      </p>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors break-all">
                        {contact.value}
                      </p>
                    </div>

                    {contact.link && (
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Send size={16} className="text-primary" />
                      </div>
                    )}
                  </div>
                );

                return contact.link ? (
                  <a
                    key={index}
                    href={contact.link}
                    target={contact.link.startsWith("http") ? "_blank" : undefined}
                    rel={contact.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="text-center pt-8 border-t border-border/50">
              <Button
                size="lg"
                className="shadow-glow hover:shadow-glow-accent transition-all duration-300 text-lg px-10 py-6 group"
                onClick={() => window.location.href = "mailto:singhpragyan21@gmail.com"}
              >
                <Mail className="mr-3 group-hover:scale-110 transition-transform" size={24} />
                Send me an email
                <Send className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              
              <p className="text-sm text-muted-foreground mt-6">
                Typically responds within 24 hours
              </p>
            </div>
          </Card>

          {/* Social proof */}
          <div className={`mt-12 text-center transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-muted-foreground mb-6">Also available on</p>
            <div className="flex items-center justify-center gap-6">
              {[
                { icon: Github, href: "https://github.com/singhpragyan21", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/pragyan-singh", label: "LinkedIn" },
                { icon: BookOpen, href: "https://medium.com/@singhpragyan21", label: "Medium" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <social.icon className="text-foreground group-hover:text-primary transition-colors" size={28} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
