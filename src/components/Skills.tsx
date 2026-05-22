import React from 'react';
import LogoLoop from './LogoLoop';
import LogoHoverCard from './LogoHoverCard';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiNodedotjs,
  SiTailwindcss, 
  // SiPostgresql,
  // SiGraphql,
  SiDocker,
  // SiAmazon,
  SiGit,
  SiFigma,
  SiMongodb,
  SiVercel,
  SiExpress
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

// const skills = [
//   { name: "React", category: "Frontend" },
//   { name: "TypeScript", category: "Language" },
//   { name: "Next.js", category: "Framework" },
//   { name: "Node.js", category: "Backend" },
//   { name: "Tailwind CSS", category: "Styling" },
//   { name: "PostgreSQL", category: "Database" },
//   { name: "GraphQL", category: "API" },
//   { name: "Docker", category: "DevOps" },
//   { name: "AWS", category: "Cloud" },
//   { name: "Git", category: "Tools" },
//   { name: "Figma", category: "Design" },
//   { name: "REST APIs", category: "API" },
// ];

const techLogos = [
  { node: <SiReact size={48} />, title: "React", description: "UI library by Meta", href: "https://react.dev" },
  { node: <SiTypescript size={48} />, title: "TypeScript", description: "Typed JavaScript at scale", href: "https://www.typescriptlang.org" },
  { node: <SiNextdotjs size={48} />, title: "Next.js", description: "React framework for production", href: "https://nextjs.org" },
  { node: <SiNodedotjs size={48} />, title: "Node.js", description: "JavaScript runtime", href: "https://nodejs.org" },
  { node: <SiExpress size={48} />, title: "Express.js", description: "Web framework for Node.js", href: "https://expressjs.com" },
  { node: <SiTailwindcss size={48} />, title: "Tailwind CSS", description: "Utility-first CSS framework", href: "https://tailwindcss.com" },
  // { node: <SiPostgresql size={48} />, title: "PostgreSQL", description: "Open source database", href: "https://www.postgresql.org" },
  // { node: <SiGraphql size={48} />, title: "GraphQL", description: "Query language for APIs", href: "https://graphql.org" },
  { node: <SiDocker size={48} />, title: "Docker", description: "Container platform", href: "https://www.docker.com" },
  // { node: <SiAmazon size={48} />, title: "AWS", description: "Cloud computing platform", href: "https://aws.amazon.com" },
  { node: <SiGit size={48} />, title: "Git", description: "Version control system", href: "https://git-scm.com" },
  { node: <SiFigma size={48} />, title: "Figma", description: "Design collaboration tool", href: "https://www.figma.com" },
  { node: <SiMongodb size={48} />, title: "MongoDB", description: "NoSQL database", href: "https://www.mongodb.com" },
  { node: <SiVercel size={48} />, title: "Vercel", description: "Deployment platform", href: "https://vercel.com" },
  { node: <TbApi size={48} />, title: "REST APIs", description: "RESTful web services" },
];

const Skills = () => {
  const [hoveredLogo, setHoveredLogo] = React.useState<string | null>(null);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="skills" className="pt-24 md:pt-32 pb-12 md:pb-16">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-sm font-mono mb-4">
              &lt;skills /&gt;
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Technologies I Work With
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm constantly learning and adapting to new technologies to deliver the best solutions for my clients.
            </p>
          </div>

          {/* Animated Logo Loop */}
          <div className="overflow-visible relative">
            <div className="py-10">
              {/* Left blur overlay */}
              <div 
                className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[clamp(80px,15%,200px)]"
                style={{ 
                  backdropFilter: 'blur(12px)', 
                  WebkitBackdropFilter: 'blur(12px)',
                  maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
                  WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)'
                }}
              />
              {/* Left opacity gradient */}
              <div 
                className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[clamp(80px,15%,200px)] bg-gradient-to-r from-background to-transparent"
              />
              {/* Right blur overlay */}
              <div 
                className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[clamp(80px,15%,200px)]"
                style={{ 
                  backdropFilter: 'blur(12px)', 
                  WebkitBackdropFilter: 'blur(12px)',
                  maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
                  WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)'
                }}
              />
              {/* Right opacity gradient */}
              <div 
                className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[clamp(80px,15%,200px)] bg-gradient-to-l from-background to-transparent"
              />
              <LogoLoop
                logos={techLogos}
                speed={isMobile ? 80 : 50}
                direction="left"
                logoHeight={48}
                gap={isMobile ? 40 : 80}
                pauseOnHover={true}
                fadeOut={false}
                ariaLabel="Technologies I work with"
                className="text-foreground overflow-visible"
                renderItem={(item, key) => {
                  if (!('node' in item)) return null;

                  return (
                    <LogoHoverCard
                      key={key}
                      logo={item.node}
                      title={item.title ?? ""}
                      description={(item as any).description}
                      href={item.href}
                      isOpen={hoveredLogo === item.title}
                      onOpenChange={(open) => setHoveredLogo(open ? item.title ?? null : null)}
                    />
                  );
                }}
              />
            </div>
          </div>

          {/* Skills grid */}
          {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group relative p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:bg-card transition-all duration-300"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <span className="text-xs text-primary font-mono mb-2 block">
                    {skill.category}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
