import React from 'react';
import { Media } from 'reactstrap';
import '../styles/experiences.scss';
import 'bootstrap';
import "react-bootstrap"

class Experience extends React.Component {
	constructor(props){
		super(props);
		this.state = {};
	}

	render(){
		const experience = this.props.experiences.map((experience) => {
			let width = window.innerWidth;
			if (width > 576) {
				return(
					<div key={experience.id} id="unit">
						<Media>
							<Media left className="img-container">
								<div>
									<Media object src={experience.img_src} className="experience-img" />
								</div>
							</Media>
							<Media body className="body-container">
								<Media heading>
									<div class="company">{experience.company}</div>
									<strong class="title">{experience.title}</strong>
									<em class="date">{experience.start_date}</em>
								</Media>
								<strong>{experience.location}</strong>
								<div className="display-linebreak">{experience.description}</div>
							</Media>
						</Media>
					</div>
				);
			} else {
				return(
					<div key={experience.id} id="unit">
						<Media>
							<Media body className="body-container">
								<div className="img-container">
									<Media object src={experience.img_src} className="experience-img" />
								</div>
								<Media heading className="heading-container">
									<h1 class="company">{experience.company}</h1>
									<strong class="title">{experience.title}</strong>
									<em class="date">{experience.start_date}</em>
								</Media>
								<strong>{experience.location}</strong>
								<div className="display-linebreak">{experience.description}</div>
							</Media>
						</Media>
					</div>
				);
			}
		});
		console.log('I was triggered during render')
		return(
			<div className="container experience-section">
				<Media list>
					{experience}
				</Media>
			</div>
		);
	}
}

// 'Keys' - It helps identify which items have changed, are added or removed.


export default Experience;

/*
	<div key={experience.id} id="unit" className="col-12 mt-5>	
*/