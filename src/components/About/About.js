import React from "react"
import Data from "../Data/Data"

import "./About.scss"

const About = () => {
	return (
		<div id="about">
			<div className="story">
				<figure className="story__shape">
					<img className="story__img" sizes="(max-width:900px) 28vw,(max-width:600px) 38vw, 300px" alt="Mika" src={`assets/images/profile.jpg`} />
				</figure>
				<div className="story__text">
					<h4 className="">Kanan Mikayilov</h4>
					<p>
						Highly motivated 4<sup>th</sup> year Computer Science student at Azerbaijani-French University. Freelance junior front-end developer. Main programming language is React.js.
					</p>
				</div>
			</div>
			<div className="skills">
				<div className="skills_header">Skills</div>
				<Data />
			</div>
		</div>
	)
}

export default About
