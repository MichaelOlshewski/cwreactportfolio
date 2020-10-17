import React from 'react';
import ProjectCard from '../ProjectCards'
import database from '../../db.json'

function ProjectContainer() {
    return (
        <section className="contain">
            <div className="card">
                <div className="card-header">
                    <h2>My<span className="spanDC"> Work</span></h2>
                </div>
                <div className="card-body">
                    <div className="row">
                        {database.map((project) => {
                            return (
                                <ProjectCard key={project.id} project_name={project.name} imageSrc={project.image} imageAlt={project.alt_text} desc={project.description} deployedLink={project.deployed_link} repoLink={project.repo_link}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectContainer;