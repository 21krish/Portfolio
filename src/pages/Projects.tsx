import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  briefOutline?: string;
  detailedDescription: string;
  tags: string[];
  image?: string;
  images?: string[];
  video?: string;
  videos?: string[];
  document?: string;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "Modular Analog Synthesizer",
    description: "Leading student audio engineering group in designing and prototyping analog synthesizer modules. Developed VCO, VCA, diode ladder filter, and analog kick drum circuit. Directed schematic design, PCB layout using Altium, and hardware debugging for high signal fidelity.",
    briefOutline: "Leading design and prototyping of analog synthesizer modules for student audio engineering group.",
    detailedDescription: `As Project Lead for Audio Engineering & Enthusiasts, I directed the design and prototyping of multiple analog synthesizer modules. The project involved developing several key components including a Voltage-Controlled Oscillator (VCO), Voltage-Controlled Amplifier (VCA), diode ladder filter, and an analog kick drum circuit.

I was responsible for the complete design workflow from initial schematic design through PCB layout using Altium Designer. The design process required careful attention to signal fidelity, ensuring minimal noise and distortion throughout the audio signal path.

The project involved hands-on hardware debugging, testing each module individually and as part of the complete system. This required understanding of analog circuit principles, audio signal processing, and PCB design best practices for high-frequency analog signals.`,
    tags: ["Altium", "Analog Design", "PCB", "Audio Engineering"],
    image: "/projects/modular-synth/Modular Synth breadboard.jpg",
    video: "/projects/modular-synth/Modular synth 2.MOV",
    videos: ["/projects/modular-synth/Modular Synth.MOV"],
    images: [
      "/projects/modular-synth/Modular Synth breadboard.jpg"
    ],
    github: "#",
  },
  {
    title: "Voice Scrambler with Modulation & Digital Filtering",
    description: "Engineered voice scrambler/descrambler with digital low-pass filtering integrated with complete modulator-demodulator system for secure audio transmission. Conducted frequency domain analysis using Fourier Transform, generated spectral plots, and achieved 12.83 dB SNR.",
    briefOutline: "Voice scrambler/descrambler system with digital filtering for secure audio transmission.",
    detailedDescription: `This project involved engineering a complete voice scrambling and descrambling system with integrated digital signal processing. The system included a full modulator-demodulator architecture designed for secure audio transmission.

I implemented digital low-pass filtering to remove unwanted frequency components and improve signal quality. The project required extensive frequency domain analysis using the Fourier Transform to understand the signal characteristics and optimize the filtering parameters.

Using MATLAB, I generated spectral plots to visualize the signal processing results and verify system performance. The final implementation achieved a signal-to-noise ratio (SNR) of 12.83 dB, demonstrating effective signal processing and noise reduction capabilities.

The project included comprehensive MATLAB implementation with custom functions for frequency domain analysis, filtering, and signal reconstruction. Audio samples were processed to demonstrate the scrambling and descrambling functionality.`,
    tags: ["MATLAB", "Signal Processing", "DSP", "Fourier Transform"],
    document: "/projects/voice-scrambler/ECE366 Mini Project 2-Krishanga.pdf",
    github: "#",
  },
  {
    title: "Micropatch Antenna (3GHz)",
    description: "Designed, simulated, and optimized compact inset feed microstrip patch antenna operating at 3GHz with 4.28 dB gain in HFSS. Fabricated antenna, soldered SMA connector, analyzed S-parameters with VNA, and measured radiation patterns in anechoic chamber achieving 4.26 dB gain and 100° HPBW.",
    briefOutline: "Compact microstrip patch antenna design at 3GHz with full fabrication and testing workflow.",
    detailedDescription: `This project covered the complete design cycle of a microstrip patch antenna operating at 3GHz. I used HFSS (High Frequency Structure Simulator) for initial design and optimization, achieving a simulated gain of 4.28 dB with an inset feed configuration.

After simulation, I fabricated the antenna and soldered an SMA connector for testing. The antenna was then characterized using a Vector Network Analyzer (VNA) to measure S-parameters, verifying impedance matching and return loss performance.

The final validation involved measuring the radiation patterns in an anechoic chamber. The measured results showed a gain of 4.26 dB and a half-power beamwidth (HPBW) of 100°, closely matching the simulation results. This project demonstrated proficiency in RF design, simulation, fabrication, and measurement techniques.

The design process included careful optimization of patch dimensions, feed location, and substrate selection to achieve the desired operating frequency and radiation characteristics.`,
    tags: ["HFSS", "ADS", "RF/Microwave", "VNA", "Antenna Design"],
    image: "/projects/patch-antenna/Patch antenna.jpg",
    document: "/projects/patch-antenna/Project 2 Report.pdf",
    github: "#",
  },
  {
    title: "180V Plasma Speaker",
    description: "Breadboarded, modified, and soldered circuitry for 180V plasma speaker using flyback transformer in 4-stage setup to generate 35mm voltage arcs capable of playing music. Implemented Zero Cross detector and oscillator for timing control.",
    briefOutline: "High-voltage plasma speaker system generating audio-modulated electrical arcs.",
    detailedDescription: `I designed and built a plasma speaker system capable of generating 35mm voltage arcs that can play music. The system uses a flyback transformer in a 4-stage configuration to step up the voltage to 180V.

The project involved breadboarding the initial circuit design, then modifying and optimizing the design before final soldering. A critical component was the Zero Cross detector, which converts analog audio signals to digital pulses synchronized with the AC line frequency.

I also implemented an oscillator circuit to precisely time the voltage arcs, ensuring they fire at the correct intervals to reproduce the audio signal. The system successfully generates visible electrical arcs that respond to audio input, demonstrating understanding of high-voltage circuit design, transformer operation, and audio signal processing.

The flyback transformer was carefully selected and configured to provide the necessary voltage step-up while maintaining safety. The 4-stage setup allows for precise control of the arc generation, enabling the system to accurately reproduce audio frequencies through the modulated electrical discharge.`,
    tags: ["Circuit Design", "Soldering", "Audio", "High Voltage"],
    video: "/projects/plasma-speaker/Flyback transformer.MP4",
    images: ["/projects/plasma-speaker/Flyback transformer.MP4"],
    github: "#",
  },
  {
    title: "8-bit ALU Implementation in FPGA",
    description: "Implemented hierarchical structure using Vivado to design ALU bit slice with logical and arithmetic operations creating functional 8-bit ALU. Verified by implementing bitstream into Blackboard FPGA and testing various cases through switches and LED outputs.",
    briefOutline: "Hierarchical 8-bit ALU design in Verilog with FPGA implementation and testing.",
    detailedDescription: `I designed and implemented a complete 8-bit Arithmetic Logic Unit (ALU) using a hierarchical design approach in Verilog. The design started with a single bit slice that included both logical operations (AND, OR, XOR, NOT) and arithmetic operations (addition, subtraction).

Using Xilinx Vivado, I synthesized the design and created a hierarchical structure that combined multiple bit slices to form the complete 8-bit ALU. The design process involved careful consideration of signal routing, timing constraints, and resource utilization.

The final verification involved generating a bitstream and programming it into a Blackboard FPGA board. I tested the ALU with various input combinations using the board's switches and verified the outputs through LED displays. This project demonstrated proficiency in digital design, RTL coding, FPGA synthesis, and hardware verification.`,
    tags: ["Verilog", "Vivado", "FPGA", "Digital Logic"],
    github: "#",
  },
  {
    title: "Braking System Plausibility Device (FSAE)",
    description: "Designed and validated 30mm×60mm 4-signal layer PCB to protect driver by comparing brake pressure and throttle position signals, triggering shutdown circuit when implausible conditions detected.",
    briefOutline: "Safety-critical PCB design for FSAE vehicle braking system validation.",
    detailedDescription: `As part of the MSU FSAE team, I designed a Braking System Plausibility Device to enhance driver safety. The device is a compact 30mm×60mm PCB with 4 signal layers that monitors brake pressure and throttle position signals in real-time.

The system compares these signals to detect implausible conditions (such as simultaneous braking and full throttle), which could indicate a system failure or dangerous situation. When such conditions are detected, the device triggers a shutdown circuit to protect the driver.

The design required careful PCB layout to minimize signal interference and ensure reliable operation in the harsh automotive environment. I used Altium Designer for the complete design process, including schematic capture, PCB layout, and design rule checking. The device was validated through extensive testing to ensure it meets FSAE safety requirements.`,
    tags: ["Altium", "PCB", "Embedded Systems", "FSAE"],
    github: "#",
  },
  {
    title: "Resistive Load Bank Calculator",
    description: "Utilized Matplotlib to create real-time interactive calculator for testing accumulator charging/discharging with 100% accuracy for series and parallel combinations of up to 50 resistors.",
    briefOutline: "Interactive Python tool for calculating resistor network configurations.",
    detailedDescription: `I developed a real-time interactive calculator using Python and Matplotlib for testing accumulator charging and discharging scenarios. The tool calculates equivalent resistance for complex resistor networks with up to 50 resistors in various series and parallel combinations.

The calculator provides 100% accuracy in its calculations, making it a reliable tool for electrical engineering applications. The interactive interface allows users to input resistor values and network configurations, with real-time updates of the calculated results.

This project was particularly useful for FSAE applications where testing accumulator systems requires precise knowledge of load characteristics. The tool helps engineers quickly determine the appropriate resistor combinations for testing scenarios without manual calculations.`,
    tags: ["Python", "Matplotlib", "Electrical Engineering"],
    github: "#",
  },
  {
    title: "Responsive Temperature Detector",
    description: "Designed and breadboarded temperature-dependent cooling system implementing NTC resistor in bridge configuration with instrumentation amplifier circuit. Comparator triggers LEDs for temperature range indication and cooling system activation, accurate to ±1°C.",
    briefOutline: "Temperature monitoring system with automatic cooling activation.",
    detailedDescription: `I designed and built a temperature-dependent cooling system that uses an NTC (Negative Temperature Coefficient) thermistor in a Wheatstone bridge configuration. The bridge output is amplified using an instrumentation amplifier circuit to provide a clean, measurable signal.

The system uses a comparator circuit to trigger different responses based on temperature ranges. LEDs provide visual indication of the current temperature range, and when the temperature exceeds a threshold, the system automatically activates a cooling mechanism.

The system achieves an accuracy of ±1°C, demonstrating careful design of the bridge circuit, proper amplifier gain selection, and precise comparator threshold setting. The project involved breadboarding the complete circuit, testing each stage individually, and integrating the full system.`,
    tags: ["Analog Design", "Breadboarding", "Temperature Sensing"],
    github: "#",
  },
  {
    title: "SPICE Circuit Simulator",
    description: "Developed a SPICE circuit simulator using Python and C++ with Pybind11, capable of DC analysis for circuit simulation and analysis.",
    briefOutline: "SPICE circuit simulator implementation with Python/C++ interface using Pybind11.",
    detailedDescription: `I developed a SPICE (Simulation Program with Integrated Circuit Emphasis) circuit simulator that combines the performance of C++ with the flexibility of Python. The simulator uses Pybind11 to create a seamless interface between Python and C++ code, allowing for efficient circuit analysis.

The simulator is capable of performing DC (Direct Current) analysis, which solves for the steady-state operating point of circuits. This involves setting up and solving systems of equations based on Kirchhoff's current and voltage laws, as well as component equations.

The C++ backend handles the computationally intensive matrix operations and circuit solving algorithms, while the Python frontend provides an intuitive interface for circuit definition, simulation execution, and result visualization. This hybrid approach combines the best of both languages - C++ for performance and Python for ease of use.

The project demonstrates proficiency in circuit theory, numerical methods, software architecture, and cross-language integration using modern tools like Pybind11.`,
    tags: ["Python", "C++", "Pybind11", "SPICE", "Circuit Simulation", "DC Analysis"],
    image: "/projects/spice-simulator/spice-simulator.jpg",
    images: [
      "/projects/spice-simulator/spice-simulator.jpg",
      "/projects/spice-simulator/spice-simulator-2.jpg",
      "/projects/spice-simulator/spice-simulator-3.jpg"
    ],
    github: "#",
  },
  {
    title: "Series RLC Circuit Simulation",
    description: "Modeled steady and transient states of series RLC circuit using SciPy and Pyplot, achieving highly accurate results for circuit analysis and validation.",
    briefOutline: "Python-based simulation of RLC circuit behavior in steady and transient states.",
    detailedDescription: `I developed a Python simulation tool using SciPy and Matplotlib to model the behavior of series RLC (Resistor-Inductor-Capacitor) circuits. The simulation accurately models both steady-state and transient responses of the circuit.

The tool solves the differential equations governing RLC circuit behavior, accounting for different damping conditions (underdamped, critically damped, and overdamped). Using Pyplot, I created visualizations showing voltage and current waveforms over time.

The simulation results achieved high accuracy when compared to theoretical calculations, making it a useful tool for circuit analysis and validation. This project demonstrated understanding of circuit theory, numerical methods, and scientific computing.`,
    tags: ["Python", "SciPy", "Circuit Analysis"],
    github: "#",
  },
  {
    title: "ATM Machine (Finite State Machine)",
    description: "Developed ATM system with basic functionality, synthesized using self-designed finite-state machine in Vivado for digital logic implementation.",
    briefOutline: "Digital ATM system implementation using finite state machine design.",
    detailedDescription: `I designed and implemented an ATM (Automated Teller Machine) system with basic functionality using a finite state machine (FSM) approach. The system was implemented in Verilog and synthesized using Xilinx Vivado.

The FSM design included states for card insertion, PIN entry, transaction selection, and cash dispensing. The design process involved creating a state diagram, determining state transitions, and implementing the logic in Verilog.

The system was synthesized and verified through simulation, ensuring correct state transitions and output behavior. This project demonstrated proficiency in digital design methodology, state machine design, and hardware description language programming.`,
    tags: ["Verilog", "Vivado", "FSM", "Digital Design"],
    github: "#",
  },
  {
    title: "Branchline Coupler Design",
    description: "Designed and tested branchline couplers for RF/microwave applications, demonstrating expertise in passive component design and measurement techniques.",
    briefOutline: "RF/microwave branchline coupler design and characterization.",
    detailedDescription: `I designed and tested branchline couplers for RF and microwave applications. Branchline couplers are passive components used for power splitting and combining in RF systems, commonly operating at 90-degree phase differences.

The design process involved using both HFSS and ADS (Advanced Design System) for simulation and optimization. I analyzed the coupler's performance parameters including insertion loss, return loss, isolation, and phase balance.

After simulation, I fabricated the coupler and performed measurements using a Vector Network Analyzer (VNA) to characterize its performance. The measured results were compared with simulations to validate the design process. This project demonstrated expertise in RF passive component design, simulation tools, and measurement techniques.`,
    tags: ["RF/Microwave", "HFSS", "ADS", "Coupler Design"],
    image: "/projects/branchline-coupler/branchline-coupler.jpg",
    images: ["/projects/branchline-coupler/branchline-coupler.jpg"],
    github: "#",
  },
  {
    title: "3 Port Iris Waveguide",
    description: "Designed and simulated a 3-port iris waveguide structure on HFSS, then fabricated the design as a printed circuit board for RF/microwave applications.",
    briefOutline: "3-port iris waveguide PCB design and fabrication using HFSS simulation.",
    detailedDescription: `I designed and simulated a 3-port iris waveguide structure using HFSS (High Frequency Structure Simulator) for RF/microwave applications. The iris configuration allows for controlled power division and impedance matching in waveguide systems.

After completing the electromagnetic simulation and optimization in HFSS, I fabricated the design as a printed circuit board. The PCB implementation required careful attention to material properties, trace dimensions, and ground plane configuration to maintain the waveguide's performance characteristics.

This project demonstrated proficiency in RF/microwave design, electromagnetic simulation, and PCB fabrication for high-frequency applications. The 3-port iris design is commonly used in power dividers, couplers, and other passive RF components.`,
    tags: ["RF/Microwave", "HFSS", "PCB", "Waveguide", "Electromagnetics"],
    image: "/projects/three-port-iris/3 Port Iris.jpg",
    images: [
      "/projects/waveguide/Waveguide.jpg",
      "/projects/three-port-iris/3 Port Iris.jpg"
    ],
    github: "#",
  },
  {
    title: "Semiconductor Analysis Report",
    description: "Comprehensive technical report analyzing FinFET semiconductor device technology, including history, operating principles, applications in digital logic and memory, market analysis, and exploration of Gate-All-Around FETs (GAAFETs) as successors for sub-5nm technologies.",
    briefOutline: "Comprehensive analysis of FinFET semiconductor technology and future device architectures.",
    detailedDescription: `I authored a comprehensive technical report analyzing FinFET (Fin Field-Effect Transistor) semiconductor device technology. The report provides an in-depth overview of this critical semiconductor architecture that has enabled continued scaling of integrated circuits.

The analysis covers the historical development of FinFET technology, explaining how it addressed the limitations of planar MOSFETs as device dimensions shrank below 32nm. I detailed the operating principles of FinFETs, including how the three-dimensional fin structure provides better gate control and reduces short-channel effects.

The report explores applications of FinFET technology in digital logic circuits and memory systems, demonstrating its importance in modern processors and memory devices. I also conducted market analysis to understand the adoption and impact of FinFET technology in the semiconductor industry.

Additionally, the report investigates Gate-All-Around FETs (GAAFETs) as the next-generation device architecture for sub-5nm technology nodes. This forward-looking analysis examines how GAAFETs address the limitations of FinFETs and enable further device scaling. The report demonstrates proficiency in semiconductor device physics, technology analysis, and technical writing.`,
    tags: ["Semiconductors", "FinFET", "Technical Writing", "Device Physics", "GAAFET"],
    document: "/projects/semiconductor-analysis/semiconductor-report.pdf",
    github: "#",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section className="container mx-auto px-6 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-mono font-bold mb-4">
          <span className="text-muted-foreground">//</span> Projects
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          A collection of my work spanning hardware design, RF/microwave engineering, 
          signal processing, and embedded systems. Each project demonstrates practical 
          application of engineering principles from concept to implementation.
        </p>
      </motion.div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={project.title}
            onClick={() => handleProjectClick(project)}
            className="cursor-pointer"
          >
            <ProjectCard {...project} index={index} />
          </div>
        ))}
      </div>

      {/* Project Modal */}
      <ProjectModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        project={selectedProject}
      />
    </section>
  );
};

export default Projects;
