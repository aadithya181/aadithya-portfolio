import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-subtle">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get to know the person behind the code and designs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-2xl font-semibold">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm a dedicated full-stack developer and UX designer with a strong foundation 
              in both technical and creative aspects of web development. My journey began with 
              a Bachelor's in Computer Applications (BCA), followed by a Master's (MCA), 
              where I developed a deep appreciation for logical thinking and problem-solving.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently working as a Junior Developer at Team Everest for the past year, 
              I've honed my skills in creating user-centered solutions that not only function 
              flawlessly but also provide exceptional user experiences. My passion lies in 
              bridging the gap between complex technical requirements and intuitive design.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              What drives me is the perfect intersection of logical thinking, clean code, 
              and beautiful design. I believe that great software should be both powerful 
              and delightful to use.
            </p>
          </div>

          <div className="grid gap-6 animate-scale-in">
            <Card className="hover-lift">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2 text-primary">Education</h4>
                <div className="space-y-2">
                  <div>
                    <p className="font-medium">Master of Computer Applications (MCA)</p>
                    <p className="text-sm text-muted-foreground">Advanced studies in software development</p>
                  </div>
                  <div>
                    <p className="font-medium">Bachelor of Computer Applications (BCA)</p>
                    <p className="text-sm text-muted-foreground">Foundation in computer science principles</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2 text-primary">Experience</h4>
                <div>
                  <p className="font-medium">Junior Developer</p>
                  <p className="text-sm text-muted-foreground mb-1">Team Everest • 1 Year</p>
                  <p className="text-sm text-muted-foreground">
                    Developing full-stack applications and creating user-friendly interfaces
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2 text-primary">Core Values</h4>
                <div className="space-y-1">
                  <p className="text-sm">• Logical thinking & problem solving</p>
                  <p className="text-sm">• Clean, maintainable code</p>
                  <p className="text-sm">• User-centered design</p>
                  <p className="text-sm">• Continuous learning</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;