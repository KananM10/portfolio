import React from "react";

import SkillCard from "./SkillCard/SkillCard";

import { skills } from "../../helpers/data";

import "./Skills.scss";

const Skills = () => {
	return (
		<div id="skills">
			<div className="skills_header">Skills</div>
			<div className="skills_main d-flex flex-row flex-wrap justify-content-center align-items-center p-5">
				{skills.map((item) => (
					<SkillCard key={item.name} item={item} />
				))}
			</div>
		</div>
	);
};

export default Skills;
