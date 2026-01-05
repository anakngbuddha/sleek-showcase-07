import { motion } from "framer-motion";

interface Skill {
  name: string;
  level: number;
  color: string;
}

const skills: Skill[] = [
  { name: "React / Next.js", level: 95, color: "from-cyan-400 to-blue-500" },
  { name: "TypeScript", level: 90, color: "from-blue-400 to-indigo-500" },
  { name: "Node.js", level: 85, color: "from-green-400 to-emerald-500" },
  { name: "Python", level: 80, color: "from-yellow-400 to-orange-500" },
  { name: "PostgreSQL", level: 85, color: "from-indigo-400 to-purple-500" },
  { name: "Docker / DevOps", level: 75, color: "from-cyan-400 to-teal-500" },
];

const technologies = [
  "React", "Next.js", "TypeScript", "JavaScript", "Node.js", "Express",
  "Python", "Django", "PostgreSQL", "MongoDB", "Redis", "GraphQL",
  "Docker", "Kubernetes", "AWS", "Git", "Tailwind CSS", "REST APIs"
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

const SkillsSection = () => {
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
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.03 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-4 py-2 bg-secondary border border-border rounded-lg text-sm text-muted-foreground hover:text-primary hover:border-primary transition-colors cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
