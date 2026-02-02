import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ExternalLink, Github, FileText, Play } from "lucide-react";
import { assetUrl } from "@/lib/utils";

interface ProjectModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: {
    title: string;
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
  } | null;
}

const ProjectModal = ({ open, onOpenChange, project }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] p-0 overflow-hidden flex flex-col">
        <div className="overflow-y-auto flex-1 p-6 space-y-6">
            {/* Main Project Image/Video */}
            {project.image && (
              <div className="w-full aspect-video overflow-hidden rounded-lg border border-border">
                <img
                  src={assetUrl(project.image)}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            {project.video && (
              <div className="w-full aspect-video rounded-lg border border-border overflow-hidden">
                <video
                  src={assetUrl(project.video)}
                  controls
                  className="w-full h-full object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            )}

            {/* Additional Images */}
            {project.images && project.images.length > 0 && (
              <div className="grid grid-cols-2 gap-4">
                {project.images.map((img, idx) => (
                  <div key={idx} className="aspect-video overflow-hidden rounded-lg border border-border">
                    <img
                      src={assetUrl(img)}
                      alt={`${project.title} - Image ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Additional Videos */}
            {project.videos && project.videos.length > 0 && (
              <div className="grid grid-cols-1 gap-4">
                {project.videos.map((vid, idx) => (
                  <div key={idx} className="w-full aspect-video rounded-lg border border-border overflow-hidden">
                    <video
                      src={assetUrl(vid)}
                      controls
                      className="w-full h-full object-cover"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ))}
              </div>
            )}

            <DialogHeader>
              <DialogTitle className="text-2xl font-mono">{project.title}</DialogTitle>
              {project.briefOutline && (
                <DialogDescription className="text-base pt-2">
                  {project.briefOutline}
                </DialogDescription>
              )}
            </DialogHeader>

            {/* Detailed Description */}
            <div className="space-y-4">
              <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed">
                {project.detailedDescription.split('\n').map((paragraph, idx) => (
                  <p key={idx} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-sm font-mono bg-secondary text-secondary-foreground rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            {(project.github || project.demo || project.document) && (
              <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
                {project.github && project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
                  >
                    <Github size={18} />
                    <span>View Code</span>
                  </a>
                )}
                {project.demo && project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
                  >
                    <ExternalLink size={18} />
                    <span>View Demo</span>
                  </a>
                )}
                {project.document && (
                  <a
                    href={assetUrl(project.document)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
                  >
                    <FileText size={18} />
                    <span>View Report</span>
                  </a>
                )}
              </div>
            )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
