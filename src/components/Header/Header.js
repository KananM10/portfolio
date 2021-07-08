import React, { useState, useEffect } from "react";
import "./Header.scss";
import Logo from "../../assets/icons/logo.svg";
import { Link } from "react-scroll";

const Header = (props) => {
	// state = {
	// 	isSticky: false,
	// };

	// handleScroll = () => {
	// 	window.scrollY > 0 ? this.setState({ isSticky: true }) : this.setState({ isSticky: false });
	// };

	// componentDidMount() {
	// 	window.addEventListener("scroll", this.handleScroll);
	// }

	// componentWillUnmount() {
	// 	window.removeEventListener("scroll", this.handleScroll);
	// }

	const [isSticky, setIsSticky] = useState(0);

	useEffect(() => {
		window.onscroll = () => {
			setIsSticky(window.pageYOffset > 0);
		};
	}, []);

	// render() {

	return (
		<div id="header" className={isSticky > 0 ? "sticky" : null}>
			<img src={Logo} alt="logo" className="logo_header" />
			<ul className="nav_items">
				<li className="nav_item">
					<Link activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={900}>
						Home
					</Link>
				</li>
				<li className="nav_item">
					<Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={900}>
						About
					</Link>
				</li>

				<li className="nav_item">
					<Link activeClass="active" to="skills" spy={true} smooth={true} offset={0} duration={900}>
						Skills
					</Link>
				</li>

				<li className="nav_item">
					<Link activeClass="active" to="projects" spy={true} smooth={true} offset={0} duration={900}>
						Projects
					</Link>
				</li>
			</ul>
		</div>
	);
	// }
};

export default Header;
