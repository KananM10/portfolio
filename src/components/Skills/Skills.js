import React from "react";

import SkillCard from "./SkillCard/SkillCard";

import { skills } from "../../helpers/data";

import "./Skills.scss";

const Skills = () => {
	return (
		<div id="skills">
			<div className="skills_header">Skills</div>
			<div className="skills_main d-flex flex-row flex-wrap justify-content-center align-items-center">
				{skills.map((item) => (
					<SkillCard item={item} />
				))}
			</div>
		</div>
	);
};

export default Skills;
