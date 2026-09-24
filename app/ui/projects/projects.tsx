import SectionHeader from "../section-header/SectionHeader";
import ProjectCard from "./ProjectCard";
import { ProjectsData } from "@/app/lib/definitions";


export default function Projects({
    projectsHeading,
    projectsHeader,
    projectsText,
    projectCardsData
}: ProjectsData) {


return (
    <>
    <section id="project-section" className="mx-auto max-w-6xl border-t border-slate-200 px-6 py-24">
        {/* Container for the content */}
        <div id="project-section-inner">
            <div id="section-header">
                <SectionHeader heading={projectsHeading} header={projectsHeader} text={projectsText} />
            </div>

            {/* Project Cards container */}
            <div id="project-cards-container" className="flex flex-col">
                    {/* flex flex-col */}
                 {/* Project Cards  */}
            {
                projectCardsData.map((project,index) => (
                        <ProjectCard 
                            key={project.id} 
                            imgUrl={project.img} 
                            title={project.title} 
                            text={project.text} 
                            tags={project.tags}
                            url={project.url} 
                            reversed={index % 2 === 1}
                            />
                ))
            }
                
            </div>
        </div>
    </section>
    </>
);

}