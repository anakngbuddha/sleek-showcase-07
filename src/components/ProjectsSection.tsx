import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    title: "QuizHub",
    description: "A modern quiz website with integrated classroom features and innovative game quiz format. Powered by HuggingFace AI for intelligent quiz creation and personalized learning experiences.",
    tags: ["React", "TypeScript", "Firebase", "Node.js", "HuggingFace AI"],
    live: "https://firebase-huaweicloud.vercel.app/",
    featured: true,
  },
  {
    title: "InventoryPro",
    description: "A comprehensive POS and inventory management system with advanced analytics. Features real-time profit and loss tracking, inventory monitoring, and detailed business insights.",
    tags: ["React", "TypeScript", "Node.js", "Firebase", "Analytics"],
    live: "https://reserved-inventory-pre-final.vercel.app/",
    featured: true,
  },
  {
    title: "RydEase",
    description: "A ride-hailing mobile application specifically designed for senior citizens. Features simplified UI/UX, accessibility features, and reliable transportation solutions tailored to elderly users.",
    tags: ["React Native", "Firebase", "TypeScript", "Mobile"],
    featured: true,
  },
  {
    title: "Vilina Mobile App",
    description: "An innovative e-commerce mobile application integrated with video reels. Supports a three-way marketplace ecosystem connecting suppliers, sellers, and customers in one unified platform.",
    tags: ["React Native", "Firebase", "Gemini AI", "E-commerce"],
    featured: true,
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={`group relative rounded-xl bg-gradient-card border border-border overflow-hidden ${
        project.featured ? "md:col-span-2 lg:col-span-1" : ""
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative p-6 space-y-4">
        <div className="flex items-start justify-between">
          <Folder className="h-10 w-10 text-primary" />
          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="View on GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="View live site"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono text-primary/80 bg-primary/10 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects I've worked on, showcasing my skills and experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Github className="mr-2 h-4 w-4" />
            View All on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
