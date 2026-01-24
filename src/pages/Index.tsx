import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Atom, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";

const featuredProjects = [
  {
    title: "Modular Analog Synthesizer",
    description: "Leading design and prototyping of analog synth modules including VCO, VCA, diode ladder filter, and kick drum circuit. PCB layout in Altium with high signal fidelity.",
    tags: ["Altium", "Analog Design", "PCB"],
    github: "#",
  },
  {
    title: "Micropatch Antenna (3GHz)",
    description: "Designed and optimized inset feed microstrip patch antenna achieving 4.26 dB gain. Fabricated, tested with VNA, and measured in anechoic chamber.",
    tags: ["HFSS", "ADS", "RF/Microwave", "VNA"],
    github: "#",
  },
  {
    title: "Voice Scrambler with Digital Filtering",
    description: "Engineered voice scrambler/descrambler with modulator-demodulator system and digital low-pass filtering. Achieved 12.83 dB SNR using MATLAB frequency domain analysis.",
    tags: ["MATLAB", "Signal Processing", "DSP"],
    github: "#",
  },
];

const Index = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center hero-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-mono text-primary mb-4 text-sm tracking-wide">
                // ELECTRICAL ENGINEERING & PHYSICS
              </p>
              <h1 className="text-5xl md:text-7xl font-mono font-bold mb-6 leading-tight">
                Krishanga S.
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
                Honors student at Michigan State University studying Electrical Engineering and Physics. 
                Interested in RF/microwave engineering and quantum computing.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/projects">
                  <Button size="lg" className="gap-2 glow">
                    View Projects
                    <ArrowRight size={18} />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="gap-2">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Floating icons */}
          <div className="absolute right-10 top-1/3 hidden lg:block">
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="text-primary/30"
            >
              <Cpu size={80} />
            </motion.div>
          </div>
          <div className="absolute right-40 top-1/2 hidden lg:block">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="text-primary/20"
            >
              <Atom size={60} />
            </motion.div>
          </div>
          <div className="absolute right-24 bottom-1/3 hidden lg:block">
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="text-primary/25"
            >
              <Zap size={50} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4">
              <span className="text-muted-foreground">//</span> Featured Work
            </h2>
            <p className="text-muted-foreground max-w-xl">
              A selection of projects showcasing hardware design, RF engineering, 
              signal processing, and embedded systems.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link to="/projects">
              <Button variant="ghost" className="gap-2 font-mono">
                View all projects
                <ArrowRight size={16} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4">
              <span className="text-muted-foreground">//</span> Areas of Interest
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Atom size={40} />,
                title: "RF/Microwave Engineering",
                description: "Antenna design, VNA testing, and electromagnetic simulations.",
              },
              {
                icon: <Cpu size={40} />,
                title: "Hardware Design",
                description: "PCB design, FPGA development, and analog circuit design.",
              },
              {
                icon: <Zap size={40} />,
                title: "Quantum Computing",
                description: "Exploring quantum computing principles and applications.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors"
              >
                <div className="inline-flex p-4 rounded-xl bg-primary/10 text-primary mb-6">
                  {item.icon}
                </div>
                <h3 className="font-mono text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4">
              Contact
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Feel free to reach out if you'd like to connect.
            </p>
            <Link to="/about">
              <Button size="lg" className="gap-2 glow">
                Get in Touch
                <ArrowRight size={18} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;
