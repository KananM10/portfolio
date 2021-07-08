import React from "react";

import "./SkillCard.scss";

const SkillCard = ({ item }) => {
	return <div className="skill-card">{item.name}</div>;
};

export default SkillCard;
