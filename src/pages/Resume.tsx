import { motion } from "framer-motion";
import { Github, Linkedin, FileText, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { assetUrl } from "@/lib/utils";

const skills = {
  "Technical": ["PCB Design (Altium)", "Verilog (Vivado)", "SPICE/LTSpice", "Python (NumPy, Matplotlib)", "C", "MATLAB", "HFSS", "ADS"],
  "Hardware/Tools": ["Oscilloscopes", "Function Generators", "Soldering", "Breadboarding", "Multimeters", "Power Supplies", "VNA"],
  "Languages": ["English", "Mandarin", "Spanish", "Kannada"],
};

const experience = [
  {
    title: "Project Lead & Treasurer",
    company: "Audio Engineering & Enthusiasts (AEE)",
    period: "Aug 2024 – Present",
    location: "East Lansing, MI",
    description: "Breadboarded, modified, and soldered circuitry for 180V plasma speaker using flyback transformer in 4-stage setup generating 35mm voltage arcs. Utilized oscilloscopes, function generators, DMMs, and SPICE simulation tools to build active/passive band pass filters for 600W class D amp setups. Consolidated BOM submissions, identified cost-effective alternatives, and reduced club spending by 20% in one semester.",
  },
  {
    title: "Undergraduate Teaching Assistant",
    company: "Michigan State University – ECE 302 Electronic Circuits",
    period: "Aug 2024 – Present",
    location: "East Lansing, MI",
    description: "Responsible for grading homework for 132 students every week. Verified SPICE simulations and solutions alongside analytical methods for solving nonlinear devices. Provided feedback and corrections to various approaches to circuit solving regarding nonlinear circuits and small signal analysis of diodes, transistors, FETs, etc. to reinforce conceptual understanding.",
  },
  {
    title: "Undergraduate Teaching Assistant",
    company: "Michigan State University – ECE 230 Digital Logic",
    period: "Jan 2024 – May 2024",
    location: "East Lansing, MI",
    description: "Guided students in RTL-design and Verilog-based projects (finite state machines, register design) using Vivado. Debugged code and lab circuits to reinforce digital design concepts. Provided constructive feedback on exams and projects, helping increase median GPA by 0.5 for the class.",
  },
  {
    title: "Undergraduate Teaching Assistant",
    company: "Michigan State University – CSE 220 Programming in C",
    period: "Jan 2024 – May 2024",
    location: "East Lansing, MI",
    description: "Instructed lab sessions focusing on applying C programming concepts to real-world problems and algorithmic thinking. Graded homework, quizzes, and exams while providing detailed feedback. Debugged student code and offered one-on-one mentoring to enhance engagement and comprehension.",
  },
  {
    title: "Quality Intern",
    company: "Valeo",
    period: "May 2024 – June 2024",
    location: "Chennai, TN",
    description: "Observed headlamp and wiper manufacturing processes including injection molding and metalizing. Learned headlamp testing techniques: photometry, goniometer, corrosion, and vibration tests. Visited R&D labs including electronic testing, power electronics (high/low voltage), and mechanical testing facilities. Participated in audits and created departmental reports.",
  },
  {
    title: "Member",
    company: "MSU Solar Racing Team, Solar Array Division",
    period: "Aug 2023 – May 2024",
    location: "East Lansing, MI",
    description: "Trained in soldering and PCB design using Altium. Assisted in soldering and laminating solar panels for testing and installation. Helped develop 3.87 m² solar panel with 243 cells, achieving >1kW output, surpassing project goals.",
  },
];

const education = [
  {
    degree: "Honors B.S. in Electrical Engineering",
    school: "Michigan State University",
    period: "May 2027",
    gpa: "3.96",
    coursework: "Electromagnetics I & II, Signal Processing, Circuit Analysis I, II & III, Microcontrollers, Semiconductors, Digital Logic",
  },
  {
    degree: "Honors B.S. in Physics",
    school: "Michigan State University",
    period: "May 2027",
    gpa: "3.96",
    coursework: "",
  },
];

const Resume = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-mono font-bold mb-4">
          <span className="text-muted-foreground">//</span> Resume
        </h1>
        <p className="text-muted-foreground text-lg mb-6">
          My academic background, skills, and professional experience.
        </p>
        
        {/* Quick links */}
        <div className="flex flex-wrap gap-4">
          <a href={assetUrl("Resume.pdf")} download>
            <Button variant="default" className="gap-2 glow">
              <Download size={18} />
              Download CV
            </Button>
          </a>
          <a 
            href="https://linkedin.com/in/KrishangaS/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="gap-2">
              <Linkedin size={18} />
              LinkedIn
            </Button>
          </a>
          <a 
            href="mailto:krishanga21@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="gap-2">
              <Mail size={18} />
              Email
            </Button>
          </a>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-10">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-2xl font-mono font-semibold mb-6 flex items-center gap-3">
              <FileText className="text-primary" size={24} />
              Experience
            </h2>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div 
                  key={index}
                  className="relative pl-6 border-l-2 border-border hover:border-primary transition-colors"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                  <h3 className="font-mono font-semibold text-foreground">{exp.title}</h3>
                  <p className="text-primary text-sm font-mono">{exp.company}</p>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                    <span>{exp.period}</span>
                    {exp.location && (
                      <>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </>
                    )}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-mono font-semibold mb-6 flex items-center gap-3">
              <FileText className="text-primary" size={24} />
              Education
            </h2>
            {education.map((edu, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-6"
              >
                <h3 className="font-mono font-semibold text-foreground">{edu.degree}</h3>
                <p className="text-primary text-sm font-mono">{edu.school}</p>
                <div className="flex justify-between text-muted-foreground text-sm mt-2">
                  <span>{edu.period}</span>
                  <span>GPA: {edu.gpa}</span>
                </div>
                {edu.coursework && (
                  <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                    <span className="font-semibold">Relevant Coursework:</span> {edu.coursework}
                  </p>
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Sidebar - Skills */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-mono font-semibold mb-6">Skills</h2>
          <div className="space-y-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="font-mono text-sm text-primary mb-3">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm font-mono bg-secondary text-secondary-foreground rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
