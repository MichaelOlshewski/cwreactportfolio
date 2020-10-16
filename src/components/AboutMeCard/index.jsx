import React from 'react';

function AboutMeCard() {
    return (
        <div className="card">
            <div className="card-header">
                <h2>About<span className="spanDC"> Me</span></h2>
            </div>
            <div className="card-body">
                <p>Hello! I am Michael! I am a full-stack web developer focusing on the MERN stack with MongoDB, ExpressJS, ReactJS, and NodeJS with experience in HTML, CSS/SCSS, JavaScript, jQuery, APIs, AJAX, JEST, JWT, WebPack, JSON, Bootstrap
                    and MySQL.</p>
                <br />
                <p>Below you will be able to view my recent projects, view the deployed applications, and view the source code on GitHub.</p>
            </div>
        </div>
    )
}

export default AboutMeCard;