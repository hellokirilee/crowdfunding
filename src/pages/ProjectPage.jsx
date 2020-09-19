import React from "react";
import { allProjects } from "../data";

function ProjectPage() {
    
    return (
    <div>
    {allProjects.map((projectData, key) => {
        return <div key={key}>{projectData.title}</div>;
        })}
        </div>
);
}

export default ProjectPage;