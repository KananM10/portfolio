import React from "react";

import "./SkillCard.scss";

const SkillCard = ({ item }) => {
	return (
		<div className="skill-card mb-4 mr-4">
			<span className="skill-card-name">{item.name}</span>
			<div className="skill-card-progress" style={{ height: `${item.skill}%` }}></div>
		</div>
	);
};

export default SkillCard;
