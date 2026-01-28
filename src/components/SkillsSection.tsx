import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface Technology {
  name: string;
  description: string;
}

const skills: Skill[] = [
  { name: "React & React Native", level: 90, color: "from-cyan-400 to-blue-500" },
  { name: "TypeScript", level: 93, color: "from-blue-400 to-indigo-500" },
  { name: "JavaScript", level: 90, color: "from-yellow-400 to-orange-500" },
  { name: "Firebase", level: 100, color: "from-amber-400 to-orange-500" },
  { name: "PostgreSQL", level: 85, color: "from-indigo-400 to-purple-500" },
  { name: "MySQL", level: 80, color: "from-blue-400 to-cyan-500" },
  { name: "Node & Express.js", level: 85, color: "from-green-400 to-emerald-500" },
];

const technologies: Technology[] = [
  { name: "React", description: "A JavaScript library for building user interfaces with reusable components and efficient state management." },
  { name: "React Native", description: "Framework for building native mobile applications for iOS and Android using React and JavaScript." },
  { name: "TypeScript", description: "A typed superset of JavaScript that adds static types, improving code quality and developer experience." },
  { name: "JavaScript", description: "A versatile programming language that powers interactive web applications and modern development." },
  { name: "C++", description: "A powerful, high-performance programming language used for system-level programming and performance-critical applications." },
  { name: "Node.js", description: "A JavaScript runtime that enables server-side development, allowing JavaScript to run outside the browser." },
  { name: "Express.js", description: "A minimal and flexible Node.js web application framework for building RESTful APIs and web servers." },
  { name: "Firebase", description: "A comprehensive platform offering real-time databases, authentication, hosting, and cloud functions." },
  { name: "PostgreSQL", description: "A powerful, open-source relational database management system with advanced features and reliability." },
  { name: "MySQL", description: "A popular open-source relational database system known for speed, reliability, and ease of use." },
  { name: "Docker", description: "A containerization platform that packages applications with dependencies for consistent deployment across environments." },
  { name: "Huawei Cloud", description: "Huawei's cloud computing platform offering services like computing, storage, and networking solutions." },
  { name: "Hugging Face AI", description: "A platform providing state-of-the-art pre-trained AI models for natural language processing and machine learning tasks." },
  { name: "Gemini AI", description: "Google's advanced AI model capable of understanding and generating text, code, and multimodal content." },
  { name: "Tailwind CSS", description: "A utility-first CSS framework for rapidly building custom user interfaces with minimal CSS writing." },
  { name: "Git", description: "A distributed version control system essential for tracking code changes and collaborating with developers." },
];

const SkillBar = ({ skill, index }: { skill: Skill; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="font-medium text-foreground">{skill.name}</span>
        <span className="text-sm text-muted-foreground font-mono">{skill.level}%</span>
      </div>
      <div className="h-3 bg-secondary rounded-full overflow-hidden border border-border">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </motion.div>
      </div>
    </motion.div>
  );
};

const TechModal = ({ tech, isOpen, onClose }: { tech: Technology | null; isOpen: boolean; onClose: () => void }) => {
  if (!isOpen || !tech) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-card border border-border rounded-lg p-6 max-w-md w-full"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-semibold text-foreground">{tech.name}</h3>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <p className="text-muted-foreground leading-relaxed">{tech.description}</p>
      </motion.div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const [selectedTech, setSelectedTech] = useState<Technology | null>(null);

  return (
    <section id="skills" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built over years of hands-on experience
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-xl font-semibold mb-6 text-foreground">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <motion.button
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.03 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  onClick={() => setSelectedTech(tech)}
                  className="px-4 py-2 bg-secondary border border-border rounded-lg text-sm text-muted-foreground hover:text-primary hover:border-primary transition-colors cursor-pointer"
                >
                  {tech.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <TechModal tech={selectedTech} isOpen={!!selectedTech} onClose={() => setSelectedTech(null)} />
    </section>
  );
};

export default SkillsSection;
