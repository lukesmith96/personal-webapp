import React from 'react';
import { Media } from 'reactstrap';
import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import '../styles/experiences.scss';
import 'bootstrap';
import "react-bootstrap"

const Img = styled('img')({
	margin: 'auto',
	display: 'block',
	maxWidth: '85%',
	maxHeight: '85%',
});
  

class Experience extends React.Component {
	constructor(props){
		super(props);
		this.state = {};
	}

	render(){
		return (
			<Stack direction="column" spacing={2}>
			{Array.from(this.props.experiences.map((experience, index) => (
				<Grid container 
					direction={{xs: 'column', sm: 'row'}} 
					justifyContent='center' spacing={2} 
					alignItems={{xs: 'center', sm: "flex-start"}}
				>
					<Grid item xs={4} md={4}>
						<Img src={experience.img_src} xs={1} className="experience-img"/>
					</Grid>
					<Grid item xs={6} md={6} container>
						<Grid item xs container direction="column" spacing={2} align="left">
							<Grid item xs>
								<Typography gutterBottom variant="h4" class="company">
									{experience.company}
								</Typography>
								<Typography variant="h6" gutterBottom class="title">
									<strong>{experience.title}</strong> {experience.start_date}
								</Typography>
								<Typography variant="h6" color="rgb(178, 171, 161)">
									{experience.location}
								</Typography>
								<Typography variant="body2" fontSize="15px" color="rgb(178, 171, 161)" className="display-linebreak">
									{experience.description}
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			)))}
			</Stack>
		);
	}
}

export default Experience;