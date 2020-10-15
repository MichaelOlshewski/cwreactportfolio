import React from 'react';
import { FaGithub, FaLinkedin, FaBars } from "react-icons/fa";
import resume from '../../assets/files/resume.pdf';

function NavBar() {

    function openSlideMenu() {
        document.querySelector('#side-menu').style.width = "150px"
    }

    function closeSideMenu() {
        document.querySelector('#side-menu').style.width = "0px"
    }

    return (
        <header id="header">
        <div className="headContain">
            <h1 className="logo">Michael<span className="spanDC"> Olshewski</span></h1>
            <nav>
                <ul>
                    <li><a href="https://www.linkedin.com/in/michael-olshewski-7b57b714a/" rel="noopener noreferrer" target="_blank"><FaLinkedin/></a></li>
                    <li><a href="https://www.github.com/MichaelOlshewski/" target="_blank" rel="noopener noreferrer"><FaGithub/></a></li>
                    <li><a href={resume} rel="noopener noreferrer" target="_blank">Resume</a></li>
                </ul>
            </nav>
            <div className="menu-toggle"><FaBars onClick={openSlideMenu} aria-hidden="true"/></div>
            <div id="side-menu" className="side-nav">
                <a href="#nowhere" onClick={closeSideMenu} className="btn-close">&times;</a>
                <a href="https://www.linkedin.com/in/michael-olshewski-7b57b714a/" rel="noopener noreferrer" target="_blank"><FaLinkedin/></a>
                <a href="https://www.github.com/MichaelOlshewski/" rel="noopener noreferrer" target="_blank"><FaGithub/></a>
                <a href={resume} rel="noopener noreferrer" target="_blank">Resume</a>
            </div>
        </div>
    </header>
    )
}

export default NavBar