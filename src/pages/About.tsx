import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const About = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="container mx-auto px-6 py-16">
      <div className="grid lg:grid-cols-2 gap-16">
        {/* About section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-mono font-bold mb-4">
            <span className="text-muted-foreground">//</span> About Me
          </h1>
          
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              I'm a dual-degree Honors student at Michigan State University pursuing 
              B.S. degrees in Electrical Engineering and Physics, with a GPA of 3.96.
            </p>
            
            <p>
              I'm interested in RF/microwave engineering and quantum computing. My current 
              work includes PCB design, FPGA development, signal processing, and hardware testing. 
              I'm also exploring antenna design and electromagnetic simulations.
            </p>
            
            <p>
              Currently, I serve as Project Lead & Treasurer for Audio Engineering & 
              Enthusiasts (AEE).
            </p>
          </div>

          {/* Quick info */}
          <div className="mt-8 space-y-3">
            <div className="flex items-center gap-3 text-foreground">
              <MapPin size={20} className="text-primary" />
              <span>East Lansing, MI</span>
            </div>
            <div className="flex items-center gap-3 text-foreground">
              <Mail size={20} className="text-primary" />
              <a href="mailto:krishanga21@gmail.com" className="hover:text-primary transition-colors">
                krishanga21@gmail.com
              </a>
            </div>
          </div>

          {/* Fun facts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-10 p-6 bg-card border border-border rounded-xl"
          >
            <h3 className="font-mono text-lg font-semibold mb-4">Quick Facts</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-mono">→</span>
                Graduating May 2027 with dual Honors degrees
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-mono">→</span>
                Fluent in English, Mandarin, Spanish, and Kannada
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-mono">→</span>
                Published research on FinFET semiconductor devices
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-mono">→</span>
                Passionate about audio engineering and RF/microwave design
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-3xl font-mono font-bold mb-6">Contact</h2>
          <p className="text-muted-foreground mb-8">
            Feel free to reach out if you'd like to connect.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-mono mb-2 text-foreground">
                Name
              </label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name"
                required
                className="bg-card"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-mono mb-2 text-foreground">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your.email@example.com"
                required
                className="bg-card"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-mono mb-2 text-foreground">
                Message
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Your message..."
                rows={5}
                required
                className="bg-card resize-none"
              />
            </div>

            <Button type="submit" className="w-full gap-2 glow">
              <Send size={18} />
              Send Message
            </Button>
          </form>

          {/* Decorative element */}
          <div className="mt-12 p-6 border border-dashed border-border rounded-xl text-center">
            <p className="text-muted-foreground font-mono text-sm">
              Prefer email? Reach me directly at
            </p>
            <a 
              href="mailto:krishanga21@gmail.com"
              className="text-primary font-mono hover:glow-text transition-all"
            >
              krishanga21@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
