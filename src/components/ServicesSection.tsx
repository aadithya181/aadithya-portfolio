import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      title: "UX Design",
      description: "Complete user experience design from research to final prototypes",
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "Usability Testing",
        "Design System Creation",
        "User Journey Mapping"
      ],
      highlight: "Creating intuitive experiences"
    },
    {
      title: "Web Design & Development",
      description: "Full-stack web solutions with modern frameworks and technologies",
      features: [
        "Responsive Web Design",
        "Frontend Development (React, Vue)",
        "Backend Development (Node.js, Python)",
        "Database Design & Management",
        "API Development & Integration"
      ],
      highlight: "From concept to deployment"
    },
    {
      title: "Zoho Creator Solutions",
      description: "Custom business applications and automation using Zoho Creator",
      features: [
        "Custom App Development",
        "Workflow Automation",
        "Database Architecture",
        "Third-party Integrations",
        "Training & Support"
      ],
      highlight: "Streamlining business processes"
    }
  ];

  return (
    <section id="services" className="py-20 px-6 bg-gradient-subtle">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for your digital needs
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover-lift animate-scale-in relative overflow-hidden group" 
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <CardContent className="p-8 relative">
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-primary font-medium text-sm mb-3">{service.highlight}</p>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;