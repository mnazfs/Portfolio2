const stats = [
  { value: "1", label: "Year Experience" },
  { value: "7", label: "Projects Completed" },
  { value: "3", label: "Happy Clients" },
  { value: "100%", label: "Client Satisfaction" },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-sm font-mono">
                &lt;about /&gt;
              </span>
              <h2 className="text-3xl md:text-5xl font-bold">
                Building Digital Experiences That Matter
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate web developer with a deep love for creating elegant, 
                  user-centric digital solutions. With a 1 year of experience in web development,
                  I've had the privilege of working with startups and established 
                  businesses alike.
                </p>
                <p>
                  My approach combines technical expertise with creative problem-solving. 
                  I believe that great code is not just functional—it's maintainable, 
                  scalable, and a joy to work with.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open-source projects, or sharing knowledge with the 
                  developer community.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="relative p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm text-center group hover:border-primary/50 transition-all duration-300"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground font-mono">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
