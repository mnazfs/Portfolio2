import { Button } from "./ui/button";
import { Mail, Send, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-card/30">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section header */}
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-sm font-mono mb-4">
            &lt;contact /&gt;
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Let's Build Something Great
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            Have a project in mind? I'd love to hear about it. Let's discuss how we can 
            work together to bring your ideas to life.
          </p>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            <div className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl border border-border bg-card/50">
              <Mail className="w-5 h-5 text-primary" />
              <span className="text-foreground font-mono">mnaseef2k02@gmail.com</span>
            </div>
            <div className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl border border-border bg-card/50">
              <Phone className="w-5 h-5 text-primary" />
              <span className="text-foreground font-mono">+91 62 38 062 964</span>
            </div>
          </div>

          {/* CTA */}
          <Button variant="hero" size="xl" asChild>
            <a href="mailto:mnaseef2k02@gmail.com" target="_blank" rel="noopener noreferrer">
              <Send className="w-5 h-5" />
              Get In Touch
            </a>
          </Button>

          {/* Decorative element */}
          <div className="mt-20 pt-12 border-t border-border">
            <p className="text-sm text-muted-foreground font-mono">
              © 2026 V S Muhammed Naseef. Built with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
