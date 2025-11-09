import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, BookOpen } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "singhpragyan21@gmail.com",
      link: "mailto:singhpragyan21@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7311123943",
      link: "tel:+917311123943",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/singhpragyan21",
      link: "https://github.com/singhpragyan21",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/pragyan-singh",
      link: "https://linkedin.com/in/pragyan-singh",
    },
    {
      icon: BookOpen,
      label: "Medium",
      value: "medium.com/@singhpragyan21",
      link: "https://medium.com/@singhpragyan21",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Get In Touch</h2>
        <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12" />

        <div className="max-w-4xl mx-auto">
          <Card className="p-8">
            <p className="text-center text-lg text-muted-foreground mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. 
              Feel free to reach out through any of the channels below!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={index}
                    href={contact.link}
                    target={contact.link.startsWith("http") ? "_blank" : undefined}
                    rel={contact.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary hover:bg-secondary/50 transition-all"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{contact.label}</p>
                      <p className="font-medium">{contact.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="shadow-glow"
                onClick={() => window.location.href = "mailto:singhpragyan21@gmail.com"}
              >
                <Mail className="mr-2" size={20} />
                Send me an email
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
