import { motion } from "framer-motion";
import { MapPin, Calendar, Coffee, Briefcase } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Calendar, label: "Years Experience", value: "2" },
    { icon: Briefcase, label: "Projects Completed", value: "5" },
    { icon: Coffee, label: "Cups of Coffee", value: "∞" },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl rotate-6 opacity-20" />
              <div className="absolute inset-0 bg-card rounded-2xl border border-border overflow-hidden">
                <div className="w-full h-full bg-gradient-card flex items-center justify-center">
                  <span className="text-8xl">👨‍💻</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Philippines, Cavite</span>
            </div>

            <h3 className="text-2xl font-semibold">
              Turning ideas into digital reality
            </h3>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate full-stack developer with a love for creating seamless, 
                user-centric web applications. With 2 years of hands-on experience in the 
                tech industry, I've had the privilege of working with startups and 
                collaborating on diverse projects.
              </p>
              <p>
                My journey in programming started with curiosity and has evolved into 
                a career focused on building scalable, performant applications. I believe 
                in writing clean, maintainable code that not only works but is a joy to 
                work with.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge through 
                technical writing and mentoring.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 rounded-xl bg-secondary border border-border"
                >
                  <stat.icon className="h-5 w-5 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
