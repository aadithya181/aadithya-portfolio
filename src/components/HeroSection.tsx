import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-primary font-medium">Hey, I'm Aadithya 👋</p>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text">Full Stack</span>
                <br />
                Developer &
                <br />
                <span className="gradient-text">UX Designer</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                I'm a passionate developer who combines logical thinking, clean code, 
                and beautiful design to build websites your users will love.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToPortfolio}
                size="lg"
                className="hover-lift"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="hover-lift"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-medium hover-glow">
                <img
                  src="/profile-new.jpg"
                  alt="Aadithya - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;