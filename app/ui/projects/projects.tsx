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
    <section id="project-section">
        {/* Container for the content */}
        <div id="project-section-inner">
            <div id="section-header">
                <SectionHeader heading={projectsHeading} header={projectsHeader} text={projectsText} />
            </div>

            {/* Project Cards container */}
            <div id="project-cards-container" className="flex flex-wrap flex-row justify-center gap-[26px]">
                 {/* Project Cards  */}
            {
                projectCardsData.map((project) => (
                        <ProjectCard 
                            key={project.id} 
                            imgUrl={project.img} 
                            title={project.title} 
                            text={project.text} 
                            tags={project.tags}
                            url={project.url} 
                            />
                ))
            }
                
            </div>
        </div>
    </section>
    </>
);

}