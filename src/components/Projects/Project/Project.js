import React from "react"
import { Button } from "react-bootstrap"
import "./Project.scss"

const Project = ({ project }) => {
	const { name, overview, img, url } = project

	return (
		<div className="project">
			<div className="project-inner">
				<div className="project-front">
					<img src={`assets/images/${img}.png`} alt="img" className="project-image" />
				</div>
				<div className="project-back">
					<div className="project-name">{name}</div>
					<div className="project-overview">{overview}</div>
					<a href={url}>
						<Button className="project-url">Go to link</Button>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Project
