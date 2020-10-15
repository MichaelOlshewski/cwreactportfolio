import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

function NavBar() {
    return (
        <header id="header">
        <div class="headContain">
            <h1 class="logo">Michael<span class="spanDC"> Olshewski</span></h1>
            <nav>
                <ul>
                    <li><a href="https://www.linkedin.com/in/michael-olshewski-7b57b714a/" target="_blank"><FaLinkedin/></a></li>
                    <li><a href="https://www.github.com/MichaelOlshewski/" target="_blank"><FaGithub/></a></li>
                    <li><a href="assets/files/resume.pdf" target="_blank">Resume</a></li>
                </ul>
            </nav>
            <div class="menu-toggle"><i class="fas fa-bars" onclick="openSlideMenu()" aria-hidden="true"></i></div>
            <div id="side-menu" class="side-nav">
                <a href="#" onclick="closeSideMenu()" class="btn-close">&times;</a>
                <a href="https://www.linkedin.com/in/michael-olshewski-7b57b714a/" target="_blank"><FaLinkedin/></a>
                <a href="https://www.github.com/MichaelOlshewski/" target="_blank"><FaGithub/></a>
                <a href="assets/files/resume.pdf" target="_blank">Resume</a>
            </div>
        </div>
    </header>
    )
}

export default NavBar