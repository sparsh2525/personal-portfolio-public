"use client";

import { Project, projects } from "@/lib/data";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectsSection() {
  return (
    <>
      <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
      <div>
        <div className="space-y-5 mt-5">
          {projects.map((project: Project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </>)
}


function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      onClick={() => {
        window.open(project.link);
      }}
      className="rounded-xl border bg-card text-card-foreground shadow cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground"
    >
      <div className="space-y-2 p-6 pb-4">
        <div className="flex space-x-1 pb-2 justify-between">
          <h3 className="font-semibold leading-none tracking-tight">
            {project.title}
          </h3>
          <ExternalLink height={15} width={15} />
        </div>
        {typeof project.description === 'string' ?
          <p className="text-sm text-muted-foreground">{project.description}</p>
          :
          <ul className="list-disc">
            {project.description.map((point,index) =>
              <li className="text-sm text-muted-foreground pb-2" key={index}>{point}</li>
            )}
          </ul>
        }
      </div>
    </div>
  );
}
