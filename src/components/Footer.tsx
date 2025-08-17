const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Aadithya</h3>
            <p className="text-sm opacity-80 leading-relaxed">
              Full Stack Developer & UX Designer specializing in creating 
              beautiful, functional web applications with exceptional user experiences.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Services</h4>
            <div className="space-y-2 text-sm opacity-80">
              <p>UX Design & Research</p>
              <p>Full Stack Development</p>
              <p>Zoho Creator Solutions</p>
              <p>Web Design & Development</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <div className="space-y-2 text-sm opacity-80">
              <p>XYZ@gmail.com</p>
              <p>+91 9090909090</p>
              <p>Available for freelance projects</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-sm opacity-60">
            © {currentYear} Aadithya. All rights reserved. Built with passion and precision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;