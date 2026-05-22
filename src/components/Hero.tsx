import { Button } from "./ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import ProfileCard from "./ProfileCard";
import Avatar from "../assets/Avatar.jpg";

const Hero = () => {
  const handleContactClick = () => {
    window.location.href = "#contact";
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Left side - Text content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-muted-foreground font-mono">Available for projects</span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <span className="text-foreground">Hi, I'm </span><br></br>
              <span className="text-gradient">Muhammed Naseef</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-mono opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Freelance Web Developer
            </p>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              I craft modern, performant web experiences that help businesses grow. 
              Specializing in React, TypeScript, and full-stack development.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <Button variant="hero" size="xl" asChild>
                <a href="#contact">Let's Work Together</a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#projects">View My Work</a>
              </Button>
            </div>

            {/* Social links */}
            <div className="flex justify-center lg:justify-start gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <a 
                href="https://github.com/mnazfs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-border bg-card/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/v-s-muhammed-naseef-03b90221b" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-border bg-card/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:mnaseef2k02@gmail.com"
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-border bg-card/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right side - Profile Card */}
          <div className="flex-shrink-0 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <ProfileCard
              name="Muhammed Naseef"
              title="Web Developer"
              handle="mnazfs"
              status="Available for work"
              contactText="Hire Me"
              avatarUrl={Avatar}
              showUserInfo={true}
              enableTilt={true}
              onContactClick={handleContactClick}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <a href="#skills" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs font-mono">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
