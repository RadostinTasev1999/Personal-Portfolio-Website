import SectionHeader from "../section-header/SectionHeader";
import { sectionHeadings } from "@/app/lib/placeholder-data";
import { projectCardsData } from "@/app/lib/placeholder-data";
import ProjectCard from "./ProjectCard";


export default function Projects() {

    const { heading, header, text } = sectionHeadings.projects;

return (
    <>
    <section id="project-section">
        {/* Container for the content */}
        <div id="project-section-inner">
            <div id="section-header">
                <SectionHeader heading={heading} header={header} text={text} />
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