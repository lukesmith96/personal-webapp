import React from "react";
import { EXPERIENCES } from '../structures/experience';
import Experience from './Experience';
import { CONTACTS } from "../structures/contact";
import Contact from './Contact'
import { Image } from "react-bootstrap";
import "react-bootstrap";
import "../styles/home.scss";


class Home extends React.Component {
  
	constructor(props){
		super(props);
		this.state = {};
	}
	
    render(){
        return (
            <div class="container-sm">
                {/* Personal Intro Section */}
                <section class="container section">
                    <div class="personal">
                        <div class="personal-intro">
                            <div class="personal-title">
                                <h4 style={{fontSize: '200%', paddingRight: '10px'}}><em>Hey, I'm </em></h4>
                                <h1 style={{fontSize: '270%'}}><strong>LUKE SMITH</strong></h1>
                            </div>
                            <h3 class="personal-title">Software Engineer</h3>
                        </div>
                        <Image src="/assets/lkesmith.png" fluid />
                    </div>
                </section>
                
                {/* About Section */}

                <section class="container section">
                    <div  class="block">
                        <div class="title-group">
                        <h2 class="title-section">
                            <p><strong>About Me</strong></p>
                        </h2>
                        </div>
                        <div>
                        <p class="content">
                            My fascination for technology started early, self teaching Java in 8th Grade and coding in Minecraft, which led to internships at Microsoft and Workday. In this fast moving environment I am always seeking to learn, whether its operating system design, distributed systems, or advanced data structures. My motivation comes from making technology work for people and solving problems through the power of software.
                        </p>
                        </div>
                    </div>
                </section>

                {/* Experience Section */}
                <section class="container section">
                    <div class="title-group">
                        <h2 class="title-section">
                            <p><strong>My Experience</strong></p>
                        </h2>
                    </div>
                    <Experience experiences={EXPERIENCES} />
                </section>

                {/* Personal Projects Section */}
                <section class="projects-container">
                
                </section>

                {/* Contact Me Section */}
                <section class="container">
                    <div class="block">
                        <div class="title-group">
                            <h2 class="title-section">
                                <p><strong>Contact/Resources</strong></p>
                            </h2>
                        </div>
                        <div class="contact-details">
                            <Contact contacts={CONTACTS}/>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;