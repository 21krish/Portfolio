import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { assetUrl } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  video?: string;
  github?: string;
  demo?: string;
  index: number;
}

const ProjectCard = ({ title, description, tags, image, video, github, demo, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group relative bg-card border border-border rounded-xl overflow-hidden transition-shadow duration-300 hover:shadow-[var(--card-hover-shadow)]"
    >
      {/* Project image/preview */}
      {image && (
        <div className="aspect-video overflow-hidden border-b border-border">
          <img 
            src={assetUrl(image)} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      {video && !image && (
        <div className="aspect-video overflow-hidden border-b border-border relative">
          <video 
            src={assetUrl(video)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            muted
            playsInline
            preload="metadata"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
              <svg className="w-8 h-8 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </div>
      )}
      
      {/* Content */}
      <div className="p-6">
        <h3 className="font-mono text-lg font-semibold text-foreground mb-2 group-hover:text-gradient transition-all">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span 
              key={tag}
              className="px-2 py-1 text-xs font-mono bg-secondary text-secondary-foreground rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Links */}
        <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
          {github && github !== "#" && (
            <a 
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={16} />
              <span className="font-mono">Code</span>
            </a>
          )}
          {demo && demo !== "#" && (
            <a 
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink size={16} />
              <span className="font-mono">Demo</span>
            </a>
          )}
        </div>
      </div>
      
      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
