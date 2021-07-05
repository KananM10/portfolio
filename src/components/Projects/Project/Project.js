import React from "react";
import { Button } from "react-bootstrap";

import "./Project.scss";

const Project = ({ project }) => {
	const { name, overview, img, url } = project;
	const imgSrc = require(`assets/images/${img}.png`);

	return (
		<div className="project">
			<div className="project-inner">
				<div className="project-front">
					<img src={imgSrc} alt="img" className="project-image" />
				</div>
				<div className="project-back">
					<div className="project-name">{name}</div>
					<div className="project-overview">{overview}</div>
					<Button className="project-url">
						<a href={url}>Go to link</a>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Project;
