import React from 'react';
import { FaMapPin, FaCertificate } from 'react-icons/fa'
import Col from 'react-bootstrap/Col'

function WhoAmICard() {
    return (
        <div className="card">
            <div className="card-header">
                <h2>Who<span className="spanDC"> Am I?</span></h2>
            </div>
            <div className="card-body has-text-center">
                <h4>Michael Olshewski</h4>
                <h5>Full Stack Web Developer</h5>
                <br />
                <p><FaMapPin /> Cleveland, OH</p>
                <br />
                <p><FaCertificate /> Case Western Reserve</p>
                <br />
                <hr />
                <br />
                <h3>Contact<span className="spanDC"> Me</span></h3>
                <p style={{marginTop: '5px'}}><a className="email" href="tel:3303212928">330.321.2928</a></p>
                <p style={{marginTop: '5px'}}><a className="email" href="mailto:michael.olshewski@yahoo.com">michael.olshewski@yahoo.com</a></p>
            </div>
        </div>    
    )
}

export default WhoAmICard;