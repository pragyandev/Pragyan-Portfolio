import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Education</h2>
        <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12" />

        <div className="max-w-3xl mx-auto">
          <Card className="p-8 hover:shadow-glow transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="text-primary" size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  Indian Institute of Information Technology
                </h3>
                <p className="text-lg font-semibold mb-2">
                  Bachelor of Technology - Electronics and Communication Engineering
                </p>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <Calendar size={16} />
                  <span>August 2019 – May 2023</span>
                </div>
                <p className="text-muted-foreground">Himachal Pradesh, India</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
