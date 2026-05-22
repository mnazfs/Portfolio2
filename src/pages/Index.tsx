import StaggeredMenu from "../components/StaggeredMenu";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";

const menuItems = [
  { label: "Home", ariaLabel: "Go to home", link: "#" },
  { label: "Skills", ariaLabel: "View skills", link: "#skills" },
  { label: "Projects", ariaLabel: "View projects", link: "#projects" },
  { label: "About", ariaLabel: "Learn about me", link: "#about" },
  { label: "Contact", ariaLabel: "Get in touch", link: "#contact" },
];

const socialItems = [
  { label: "GitHub", link: "https://github.com/mnazfs" },
  { label: "LinkedIn", link: "https://www.linkedin.com/in/v-s-muhammed-naseef-03b90221b" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="hsl(185, 100%, 50%)"
        openMenuButtonColor="hsl(220, 20%, 4%)"
        changeMenuColorOnOpen={true}
        colors={["hsl(185, 100%, 50%)", "hsl(200, 100%, 60%)"]}
        accentColor="hsl(185, 100%, 50%)"
        isFixed={true}
      />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
