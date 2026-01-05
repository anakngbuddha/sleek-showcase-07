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
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce solution with real-time inventory management, payment processing via Stripe, and an admin dashboard. Built for scalability with microservices architecture.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Redis"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "AI Task Manager",
    description: "Smart task management app using AI to prioritize and categorize tasks automatically. Features natural language processing for task creation and intelligent scheduling.",
    tags: ["React", "Python", "OpenAI", "FastAPI", "MongoDB"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Real-Time Collaboration Tool",
    description: "A collaborative workspace for teams with real-time document editing, video conferencing integration, and project management features.",
    tags: ["React", "Socket.io", "WebRTC", "Node.js", "PostgreSQL"],
    github: "#",
    featured: true,
  },
  {
    title: "Crypto Portfolio Tracker",
    description: "Track cryptocurrency investments with real-time price updates, portfolio analytics, and personalized alerts.",
    tags: ["React", "TypeScript", "CoinGecko API", "Chart.js"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "Developer Blog Platform",
    description: "A modern blog platform with MDX support, syntax highlighting, and SEO optimization. Features comment system and newsletter integration.",
    tags: ["Next.js", "MDX", "Tailwind", "Prisma"],
    github: "#",
    featured: false,
  },
  {
    title: "Weather Dashboard",
    description: "Beautiful weather dashboard with 7-day forecasts, interactive maps, and location-based notifications.",
    tags: ["React", "OpenWeather API", "Mapbox", "PWA"],
    github: "#",
    live: "#",
    featured: false,
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
