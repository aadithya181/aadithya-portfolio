import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Logical Thinking & Problem Solving",
      description: "Strong analytical mindset for breaking down complex problems",
      skills: ["Algorithm Design", "System Architecture", "Problem Analysis", "Critical Thinking"]
    },
    {
      title: "UX Design Excellence",
      description: "Creating intuitive and engaging user experiences",
      skills: ["User Research", "Wireframing", "Prototyping", "Usability Testing", "Design Systems", "Figma", "Adobe Creative Suite"]
    },
    {
      title: "Full Stack Development",
      description: "End-to-end web application development",
      skills: ["React", "Node.js", "JavaScript", "TypeScript", "Python", "SQL", "REST APIs", "Git"]
    },
    {
      title: "Zoho Creator Expertise",
      description: "Deep knowledge of low-code application development",
      skills: ["Custom Applications", "Workflow Automation", "Database Design", "Integration Solutions"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set that spans from logical thinking to beautiful design
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover-lift animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {category.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;