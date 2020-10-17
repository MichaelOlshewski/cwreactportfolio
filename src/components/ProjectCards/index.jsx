import React from 'react';
import { Col } from 'react-bootstrap'
import '../../bootstrap-grid.min.css'

function ProjectCard(props) {
    return (
        <Col key={props.id} col={12} md={6} xl={4}>
            <div className="card">
                <div className="card-header">
                    <h2>{props.project_name}</h2>
                </div>
                <div className="card-body has-text-center">
                    <img className="projImage" src={`${props.imageSrc}`} alt={props.imageAlt} />
                    <p>{props.desc}</p>
                    <br />
                    <div>
                        <a className="btn" href={props.deployedLink} rel="noopener noreferrer" target="_blank">Deployed</a>
                        <a style={{marginLeft: '10px'}} className="btn" href={props.repoLink} rel="noopener noreferrer" target="_blank">GitHub</a>
                    </div>
                </div>
            </div>
        </Col>
    )
}

export default ProjectCard;