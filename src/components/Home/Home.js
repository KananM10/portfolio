import React from "react";
import { Link } from "react-scroll";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "../../assets/icons/logo.svg";

import "./Home.scss";

const Home = () => {
	return (
		<div className="home d-flex flex-column justify-content-between align-items-center" id="home">
			<div className="logo">
				<img src={Logo} alt="logo" className="logo_img" />
			</div>
			<div className="salutation">Hi, I'm Kanan. I'm a Web Developer.</div>
			<div className="click">
				<div>Learn more about what I do</div>
				<Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>
					<FontAwesomeIcon icon={faCaretDown} />
				</Link>
			</div>
		</div>
	);
};

export default Home;
