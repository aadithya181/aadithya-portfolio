import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Bus Reservation Management System",
      description: "A comprehensive web application for managing bus reservations with real-time seat availability, booking management, and payment processing.",
      problem: "Inefficient manual bus booking processes leading to customer frustration and operational inefficiencies.",
      solution: "Developed a full-stack solution with real-time updates, automated booking workflows, and intuitive user interface.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
      features: [
        "Real-time seat availability",
        "Automated booking confirmation",
        "Payment gateway integration",
        "Admin dashboard for operators",
        "Mobile-responsive design"
      ]
    },
    {
      title: "K-Means Clustering Analysis",
      description: "Data science project implementing K-Means clustering algorithm for customer segmentation and market analysis.",
      problem: "Need to identify distinct customer segments for targeted marketing strategies.",
      solution: "Implemented advanced clustering algorithms with data visualization to provide actionable business insights.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Jupyter"],
      features: [
        "Customer segmentation analysis",
        "Interactive data visualizations",
        "Automated cluster optimization",
        "Comprehensive reporting system",
        "Scalable data processing"
      ]
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing real-world projects that solve complex problems
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card key={index} className="hover-lift animate-slide-up overflow-hidden" style={{ animationDelay: `${index * 0.3}s` }}>
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2">
                  {/* Project Content */}
                  <div className="p-8 lg:p-12">
                    <h3 className="text-2xl font-bold mb-4 gradient-text">{project.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Problem Solved</h4>
                        <p className="text-sm text-muted-foreground">{project.problem}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-primary mb-2">Solution Approach</h4>
                        <p className="text-sm text-muted-foreground">{project.solution}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Features */}
                  <div className="bg-gradient-subtle p-8 lg:p-12">
                    <h4 className="font-semibold mb-6">Key Features</h4>
                    <div className="space-y-4">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 space-y-3">
                      <Button 
                        variant="default"
                        className="w-full"
                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                      >
                        View Project Details
                      </Button>
                      <Button 
                        variant="outline"
                        className="w-full"
                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                      >
                        Discuss Similar Project
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more projects or discussing a custom solution?
          </p>
          <Button 
            size="lg"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="hover-lift"
          >
            Let's Talk About Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;